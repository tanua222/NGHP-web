import React, {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {ROUTER_KEYS} from './utils/routeKeys';

// import CSSReset from '@tds/core-css-reset';
// import type {AlliumProvider} from '@telus-uds/ds-allium';
// import GlobalStylesAllium from './IvsGlobalStyle.js';
import APP_ROUTES from './config/routes';
import './App.scss';

const App: React.FC = () => {
    return (
        <Suspense fallback={<></>}>
            <Routes>
                {APP_ROUTES.map((item, index) => {
                    const GET_COMPONENT = item[ROUTER_KEYS.COMPONENT] ?? <></>;

                    return (
                        <Route
                            path={item[ROUTER_KEYS.PATH_NAME]}
                            element={<GET_COMPONENT />}
                            key={index}
                        />
                    );
                })}
            </Routes>
        </Suspense>
    );
};

export default App;
