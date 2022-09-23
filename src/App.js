import React, {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {ROUTER_KEYS} from './utils/routeKeys';

import CSSReset from '@tds/core-css-reset';
import {AlliumProvider} from '@telus-uds/ds-allium';
import BlifGlobalStyle from './BlifGlobalStyle.js';
import useRoutes from './hooks/useRoutes';
import './App.scss';
import Header from './components/Header/Header';
import Box from './components/Common/Box/BlifBox';

const App = () => {
    const getRoutes = useRoutes();

    return (
        <AlliumProvider>
            <CSSReset />
            <BlifGlobalStyle />
            <Header />
            <Suspense fallback={<></>}>
                <Routes>
                    {getRoutes?.map((item, index) => {
                        const GET_COMPONENT = item[ROUTER_KEYS.COMPONENT] ?? (
                            <></>
                        );

                        return (
                            <Route
                                path={item[ROUTER_KEYS.PATH_NAME]}
                                element={
                                    <Box vertical={5}>
                                        <GET_COMPONENT />
                                    </Box>
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
