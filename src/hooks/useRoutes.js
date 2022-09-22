import React from 'react';
import {ROUTER_KEYS} from '../utils/routeKeys';
import {ARRAY_MAP_KEYS} from '../utils/commonKeys';
import {useTranslation} from 'react-i18next';
import {HEADER_LANGUAGE_KEYS} from '../utils/languageKeys/headerEnglishKeys';

const Home = React.lazy(() => import('../components/Home/Home'));
const Search = React.lazy(() => import('../components/Search/Search'));
const PreCheck = React.lazy(() => import('../components/PreCheck/PreCheck'));
const Reporting = React.lazy(() => import('../components/Reporting/Reporting'));
const Exchanges = React.lazy(() => import('../components/Exchanges/Exchanges'));
const BlifDownloads = React.lazy(() =>
    import('../components/BlifDownloads/BlifDownloads'),
);

export const ALL_ROUTES = Object.freeze({
    HOME_ROUTE: '/',
    PRE_CHECK: '/Pre-check',
    SEARCH_ROUTE: '/Search',
    BLIF_DOWNLOADS: '/Blif-downloads',
    REPORTING: '/Reporting',
    EXCHANGES: '/Exchanges',
});

export const HOME_ROUTE_INDEX = 0;

const useRoutes = () => {
    const {t} = useTranslation();

    const APP_ROUTES = [
        {
            [ROUTER_KEYS.PATH_NAME]: ALL_ROUTES.HOME_ROUTE,
            [ROUTER_KEYS.COMPONENT]: Home,
            [ROUTER_KEYS.NAVBAR_NAME]: t(HEADER_LANGUAGE_KEYS.HEADER_HOME),
            [ARRAY_MAP_KEYS.ID]: 1,
        },
        {
            [ROUTER_KEYS.PATH_NAME]: ALL_ROUTES.PRE_CHECK,
            [ROUTER_KEYS.COMPONENT]: PreCheck,
            [ROUTER_KEYS.NAVBAR_NAME]: t(HEADER_LANGUAGE_KEYS.HEADER_PRE_CHECK),
            [ARRAY_MAP_KEYS.ID]: 2,
        },
        {
            [ROUTER_KEYS.PATH_NAME]: ALL_ROUTES.SEARCH_ROUTE,
            [ROUTER_KEYS.COMPONENT]: Search,
            [ROUTER_KEYS.NAVBAR_NAME]: t(HEADER_LANGUAGE_KEYS.HEADER_SEARCH),
            [ARRAY_MAP_KEYS.ID]: 3,
        },
        {
            [ROUTER_KEYS.PATH_NAME]: ALL_ROUTES.BLIF_DOWNLOADS,
            [ROUTER_KEYS.COMPONENT]: BlifDownloads,
            [ROUTER_KEYS.NAVBAR_NAME]: t(
                HEADER_LANGUAGE_KEYS.HEADER_BLIF_DOWNLOADS,
            ),
            [ARRAY_MAP_KEYS.ID]: 4,
        },
        {
            [ROUTER_KEYS.PATH_NAME]: ALL_ROUTES.REPORTING,
            [ROUTER_KEYS.COMPONENT]: Reporting,
            [ROUTER_KEYS.NAVBAR_NAME]: t(HEADER_LANGUAGE_KEYS.HEADER_REPORTING),
            [ARRAY_MAP_KEYS.ID]: 5,
        },
        {
            [ROUTER_KEYS.PATH_NAME]: ALL_ROUTES.EXCHANGES,
            [ROUTER_KEYS.COMPONENT]: Exchanges,
            [ROUTER_KEYS.NAVBAR_NAME]: t(HEADER_LANGUAGE_KEYS.HEADER_EXCHANGES),
            [ARRAY_MAP_KEYS.ID]: 6,
        },
    ];

    return APP_ROUTES;
};

export default useRoutes;
