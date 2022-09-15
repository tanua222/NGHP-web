import React from 'react';
import {ROUTER_KEYS} from '../Components/Util/routeKeys';

const Home = React.lazy(() => import('../Components/Home/Home'));
const Search = React.lazy(() => import('../Components/Search/Search'));

export const ALL_ROUTES = Object.freeze({
    HOME_ROUTE: '/',
    SEARCH_ROUTE: '/search',
});

const APP_ROUTES = [
    {
        [ROUTER_KEYS.PATH_NAME]: ALL_ROUTES.HOME_ROUTE,
        [ROUTER_KEYS.COMPONENT]: Home,
    },
    {
        [ROUTER_KEYS.PATH_NAME]: ALL_ROUTES.SEARCH_ROUTE,
        [ROUTER_KEYS.COMPONENT]: Search,
    },
];

export default APP_ROUTES;
