import axios from 'axios';
import qs from 'qs';

export const REACT_APP_NODE_JS_BACKEND_URL = axios.create({
    baseURL: process.env.REACT_APP_NODE_JS_BACKEND_URL,
    paramsSerializer: (params) => qs.stringify(params, {arrayFormat: 'repeat'}),
});
