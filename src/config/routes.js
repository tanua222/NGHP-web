import React from 'react';
import {ROUTER_KEYS} from '../utils/routeKeys';
import {LABEL_VALUE_INDEX_KEYS} from '../utils/commonKeys';

const Home = React.lazy(() => import('../Components/Home/Home'));
const Search = React.lazy(() => import('../Components/Search/Search'));
const PreCheck = React.lazy(() => import('../Components/PreCheck/PreCheck'));
const Reporting = React.lazy(() => import('../Components/Reporting/Reporting'));
const Exchanges = React.lazy(() => import('../Components/Exchanges/Exchanges'));
const BlifDownloads = React.lazy(() =>
    import('../Components/BlifDownloads/BlifDownloads'),
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

const APP_ROUTES = [
    {
        [ROUTER_KEYS.PATH_NAME]: ALL_ROUTES.HOME_ROUTE,
        [ROUTER_KEYS.COMPONENT]: Home,
        [ROUTER_KEYS.NAVBAR_NAME]: 'Home',
        [LABEL_VALUE_INDEX_KEYS.ID]: 1,
    },
    {
        [ROUTER_KEYS.PATH_NAME]: ALL_ROUTES.PRE_CHECK,
        [ROUTER_KEYS.COMPONENT]: PreCheck,
        [ROUTER_KEYS.NAVBAR_NAME]: 'Pre-Check',
        [LABEL_VALUE_INDEX_KEYS.ID]: 2,
    },
    {
        [ROUTER_KEYS.PATH_NAME]: ALL_ROUTES.SEARCH_ROUTE,
        [ROUTER_KEYS.COMPONENT]: Search,
        [ROUTER_KEYS.NAVBAR_NAME]: 'Search',
        [LABEL_VALUE_INDEX_KEYS.ID]: 3,
    },
    {
        [ROUTER_KEYS.PATH_NAME]: ALL_ROUTES.BLIF_DOWNLOADS,
        [ROUTER_KEYS.COMPONENT]: BlifDownloads,
        [ROUTER_KEYS.NAVBAR_NAME]: 'Blif Downloads',
        [LABEL_VALUE_INDEX_KEYS.ID]: 4,
    },
    {
        [ROUTER_KEYS.PATH_NAME]: ALL_ROUTES.REPORTING,
        [ROUTER_KEYS.COMPONENT]: Reporting,
        [ROUTER_KEYS.NAVBAR_NAME]: 'Reporting',
        [LABEL_VALUE_INDEX_KEYS.ID]: 5,
    },
    {
        [ROUTER_KEYS.PATH_NAME]: ALL_ROUTES.EXCHANGES,
        [ROUTER_KEYS.COMPONENT]: Exchanges,
        [ROUTER_KEYS.NAVBAR_NAME]: 'Exchanges',
        [LABEL_VALUE_INDEX_KEYS.ID]: 6,
    },
];

export default APP_ROUTES;
