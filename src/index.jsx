import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {I18nextProvider} from 'react-i18next';
import i18n from './language/i18n';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <I18nextProvider i18n={i18n}>
                <App />
            </I18nextProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
);
