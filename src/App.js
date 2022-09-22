import React, {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {ROUTER_KEYS} from './utils/routeKeys';

import CSSReset from '@tds/core-css-reset';
import {AlliumProvider} from '@telus-uds/ds-allium';
// import GlobalStylesAllium from './IvsGlobalStyle.js';
import APP_ROUTES from './config/routes';
import './App.scss';
import Header from './components/Header/Header';

const App = () => {
    return (
        <AlliumProvider>
            <CSSReset />
            <Header />
            <Suspense fallback={<></>}>
                <Routes>
                    {APP_ROUTES.map((item, index) => {
                        const GET_COMPONENT = item[ROUTER_KEYS.COMPONENT] ?? (
                            <></>
                        );

                        return (
                            <Route
                                path={item[ROUTER_KEYS.PATH_NAME]}
                                element={
                                    <>
                                        <div className="header-margin-top px-15px">
                                            <GET_COMPONENT />
                                        </div>
                                    </>
                                }
                                key={index}
                            />
                        );
                    })}
                </Routes>
            </Suspense>
        </AlliumProvider>
    );
};

export default App;
