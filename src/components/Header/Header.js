import Image from '@tds/core-image';
import Text from '@tds/core-text';
import {default as React, useContext, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import telus_header from '../../assets/telus_header.png';
import './Header.scss';
import BlifTabs from '../Common/BlifTabs/BlifTabs';
import {LABEL_VALUE_INDEX_KEYS} from '../../utils/commonKeys';
import {useNavigate} from 'react-router-dom';

import APP_ROUTES, {HOME_ROUTE_INDEX} from '../../config/routes';
import {ROUTER_KEYS} from '../../utils/routeKeys';

const blifTabOptions = APP_ROUTES.map((item) => ({
    [LABEL_VALUE_INDEX_KEYS.LABEL]: item[ROUTER_KEYS.NAVBAR_NAME],
    [LABEL_VALUE_INDEX_KEYS.VALUE]: item[ROUTER_KEYS.PATH_NAME],
    [LABEL_VALUE_INDEX_KEYS.ID]: item[LABEL_VALUE_INDEX_KEYS.ID],
}));

const Header = () => {
    const {t, i18n} = useTranslation();
    const [headerTabsValue, setHeaderTabsValue] = useState(
        APP_ROUTES[HOME_ROUTE_INDEX][ROUTER_KEYS.PATH_NAME],
    );

    const navigate = useNavigate();

    const changeLanguage = (lng) => {
        localStorage.setItem('lang', lng);
        i18n.changeLanguage(lng);
    };

    const handleTabsOnChange = (event, newValue) => {
        if (!newValue) return;

        setHeaderTabsValue(newValue);
        navigate(newValue);
    };

    return (
        <div className="header-root">
            <div className="header-first-section">
                <div className="header-logo-root">
                    <Image
                        alt="Telus header logo"
                        src={telus_header}
                        width={160}
                        height={46}
                    />
                    <p className="font-19px purple-text font-weight-500 header-logo-text">
                        BLIF - CLEC
                    </p>
                </div>
                <div className="">
                    <BlifTabs
                        options={blifTabOptions}
                        value={headerTabsValue}
                        handleChange={handleTabsOnChange}
                    />
                </div>
            </div>

            <div className="">
                <p className="paragraph purple-text">Mode</p>
            </div>
        </div>
    );
};

export default Header;
