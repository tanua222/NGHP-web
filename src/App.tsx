import React from 'react';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
// import GlobalStylesAllium from './IvsGlobalStyle.js';

// const CSSReset = require('@tds/core-css-reset');
// const AlliumProvider = require('@telus-uds/ds-allium');

import './App.scss';
import Home from './components/Home/Home';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div>HOMEEEEEE</div>
            <Routes>
                <Route path="/" element={Home} />
            </Routes>
            <Navigate to="/" />
        </BrowserRouter>
    );

    //   return (
    //     <AlliumProvider>
    //         <BrowserRouter>
    //             <CSSReset />
    //             <GlobalStylesAllium />
    //             <Route path="/" element={Home} />
    //             <Navigate to="/" />
    //         </BrowserRouter>
    //     </AlliumProvider>
    // );
};

export default App;
