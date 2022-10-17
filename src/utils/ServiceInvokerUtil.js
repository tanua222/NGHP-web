import axios from 'axios';
import {v1 as uuidv1} from 'uuid';
import {
    X_ACCESS_TOKEN,
    X_REFRESH_TOKEN,
    X_CODE,
    X_UUID,
    UUID,
    X_INTERNAL_USER,
    AUTHORIZATION,
    AUTHENTICATED,
    EVENT_NAME_STORAGE,
    X_SESSION_TRACEID,
    X_REQUEST_TRACEID,
    IDLE_REFRESH_TOKEN_COUNT,
    TOTAL_REFRESH_TOKEN_COUNT,
    CHECK_AUTHENTICATION_URL,
} from './constants';

let exchangeInstance;

const confiuredTimeOut = 60000;
const authenticationErrorCode = ['401', 401];
// A lot of services are returning 500 as internal error code
const serviceNotAvailable = ['501', 501, '502', 502, '503', 503, '504', 504];

export const getAxiosInstance = (baseUrl) => {
    let instance = axios.create({
        baseURL: baseUrl,
        timeout: confiuredTimeOut,
    });

    instance.interceptors.request.use(
        (config) => {
            updateAuthenticationDetailsInReq(config);
            let lang =
                localStorage.getItem('lang') === 'fn' ? 'fr-CA' : 'en-CA';
            config.headers['Accept-Language'] = lang;
            !config.url.includes(CHECK_AUTHENTICATION_URL) &&
                sessionStorage.setItem(IDLE_REFRESH_TOKEN_COUNT, 0);
            return config;
        },
        (error) => {
            Promise.reject(error);
        },
    );

    instance.interceptors.response.use(
        (response) => {
            updateAuthenticationDetailsFromRes(response);
            return response;
        },
        (error) => {
            if (error && error.response) {
                if (authenticationErrorCode.includes(error.response.status))
                    updateDataForUnAuthenticatedError();
                else {
                    updateAuthenticationDetailsFromRes(error.response);
                    if (serviceNotAvailable.includes(error.response.status)) {
                        return Promise.reject([
                            'ivs.error.reason.service.unavailable.contact.admin',
                        ]);
                    }
                }
            }
            if (error && error.response && error.response.data) {
                if (error.response.data.errors) {
                    return Promise.reject(error.response.data.errors);
                }
                if (error.response.data.code === 'ECONNREFUSED') {
                    return Promise.reject([
                        'ivs.error.reason.service.unavailable.contact.admin',
                    ]);
                }
                return Promise.reject(error.response.data);
            }
            // Handling of timeout kind of errors
            if (error && error.message) {
                if (error.message.includes('ECONNREFUSED')) {
                    return Promise.reject([
                        'ivs.error.reason.service.unavailable.contact.admin',
                    ]);
                }
                return Promise.reject([error.message]);
            }
            return Promise.reject(error);
        },
    );

    return instance;
};

export function getExchangeAxiosUtil() {
    if (exchangeInstance) return exchangeInstance;
    exchangeInstance = getAxiosInstance('http://localhost:8080/api/exchange');
    return exchangeInstance;
}

export const updateAuthenticationDetailsInReq = (config) => {
    config.headers[AUTHORIZATION] =
        'Bearer ' + sessionStorage.getItem(X_ACCESS_TOKEN);
    config.headers[X_ACCESS_TOKEN] = sessionStorage.getItem(X_ACCESS_TOKEN);
    config.headers[X_REFRESH_TOKEN] = sessionStorage.getItem(X_REFRESH_TOKEN);
    config.headers[X_CODE] = sessionStorage.getItem(X_CODE);
    config.headers[X_UUID] = sessionStorage.getItem(X_UUID);
    // internal user / or external user to be determined based on gui url or something else
    config.headers[X_INTERNAL_USER] =
        sessionStorage.getItem(X_INTERNAL_USER) || 'true';
    updateTraceIdsInReq(config);
};

export const updateAuthenticationDetailsFromRes = (response) => {
    if (!response) return;
    response.headers[X_ACCESS_TOKEN] &&
        sessionStorage.setItem(
            X_ACCESS_TOKEN,
            response.headers[X_ACCESS_TOKEN],
        );
    response.headers[X_REFRESH_TOKEN] &&
        sessionStorage.setItem(
            X_REFRESH_TOKEN,
            response.headers[X_REFRESH_TOKEN],
        );
    sessionStorage.setItem(X_CODE, undefined);
    response.headers[X_UUID] &&
        sessionStorage.setItem(X_UUID, response.headers[X_UUID]);
    response.headers[X_UUID] &&
        sessionStorage.setItem(UUID, response.headers[X_UUID]);
    if (response.headers[X_REFRESH_TOKEN]) {
        updateAuthenticatedAndDispatchEvent(true);
    }
};

export const updateDataForUnAuthenticatedError = (response) => {
    updateUnAuthenticatedAndDispatchEvent();
};

export const updateUnAuthenticatedAndDispatchEvent = () => {
    sessionStorage.setItem(X_ACCESS_TOKEN, undefined);
    sessionStorage.setItem(X_REFRESH_TOKEN, undefined);
    sessionStorage.setItem(X_CODE, undefined);
    sessionStorage.setItem(X_UUID, undefined);
    sessionStorage.setItem(UUID, undefined);
    sessionStorage.setItem(IDLE_REFRESH_TOKEN_COUNT, 0);
    sessionStorage.setItem(TOTAL_REFRESH_TOKEN_COUNT, 0);
    updateAuthenticatedAndDispatchEvent(false);
};

export const updateAuthenticatedAndDispatchEvent = (authenticated) => {
    sessionStorage.setItem(AUTHENTICATED, authenticated);
    window.dispatchEvent(new Event(EVENT_NAME_STORAGE));
};

function updateTraceIdsInReq(config) {
    const sessionTraceId =
        sessionStorage.getItem(X_SESSION_TRACEID) || uuidv1();
    const requestTraceId = uuidv1();
    sessionStorage.setItem(X_SESSION_TRACEID, sessionTraceId);
    sessionStorage.setItem(X_REQUEST_TRACEID, requestTraceId);
    config.headers[X_SESSION_TRACEID] = sessionTraceId;
    config.headers[X_REQUEST_TRACEID] = requestTraceId;
}
