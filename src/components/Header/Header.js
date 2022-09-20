import Image from '@tds/core-image';
import {default as React, useContext, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import telus_header from '../../assets/telus_header.png';
import './Header.scss';
import BlifTabs from '../Common/BlifTabs/BlifTabs';
import {ARRAY_MAP_KEYS, LOCAL_LANGUAGE} from '../../utils/commonKeys';
import {useNavigate, useLocation} from 'react-router-dom';
import useRoutes, {HOME_ROUTE_INDEX} from '../../hooks/useRoutes';
import {ROUTER_KEYS} from '../../utils/routeKeys';
import BlifDropDown from '../Common/BlifDropDown/BlifDropDown';
import {MISCELLANEOUS_KEYS} from '../../utils/languageKeys/miscellaneousKeys';
import COMMON_LANGUAGE_KEYS from '../../utils/languageKeys/commonKeys';
import {FlexGrid} from '@telus-uds/ds-allium';
import {Typography} from '@telus-uds/ds-allium';
import {Divider} from '@telus-uds/ds-allium';
import {CaretDown} from '@telus-uds/palette-allium/build/web/icons';
import {Icon} from '@telus-uds/ds-allium';

const Header = () => {
    const location = useLocation();
    const {t, i18n} = useTranslation();
    const getRoutes = useRoutes();
    const getLocalLanguage = localStorage.getItem(LOCAL_LANGUAGE);

    const [headerTabsValue, setHeaderTabsValue] = useState(
        getRoutes?.[HOME_ROUTE_INDEX][ROUTER_KEYS.PATH_NAME],
    );

    const [showMenuDropdownOptions, setShowMenuDropdownOptions] =
        useState(false);

    const [showLanguageDropdownOptions, setShowLanguageDropdownOptions] =
        useState(false);

    const MODE_LABEL = t(MISCELLANEOUS_KEYS.MODE);
    const LANGUAGE_LABEL = t(MISCELLANEOUS_KEYS.LANGUAGE);

    const blifTabOptions = getRoutes?.map((item) => ({
        [ARRAY_MAP_KEYS.LABEL]: item[ROUTER_KEYS.NAVBAR_NAME],
        [ARRAY_MAP_KEYS.VALUE]: item[ROUTER_KEYS.PATH_NAME],
        [ARRAY_MAP_KEYS.ID]: item[ARRAY_MAP_KEYS.ID],
    }));

    useEffect(() => {
        const getLocationPathname = location.pathname;
        const getSelectedRoute = blifTabOptions.find(
            (item) => item[ARRAY_MAP_KEYS.VALUE] === getLocationPathname,
        );

        if (getSelectedRoute) {
            setHeaderTabsValue(getSelectedRoute[ARRAY_MAP_KEYS.VALUE]);
        }
    }, [location.pathname]);

    const navigate = useNavigate();

    const changeLanguage = (language) => {
        if (!language) return;

        localStorage.setItem(LOCAL_LANGUAGE, language);
        i18n.changeLanguage(language);

        setShowLanguageDropdownOptions(false);
    };

    const changeMode = () => undefined;

    const LANGUAGE_OPTIONS = [
        {
            [ARRAY_MAP_KEYS.VALUE]: COMMON_LANGUAGE_KEYS.ENGLISH,
            [ARRAY_MAP_KEYS.LABEL]: t(MISCELLANEOUS_KEYS.ENGLISH),
            [ARRAY_MAP_KEYS.ON_CLICK]: changeLanguage,
        },

        {
            [ARRAY_MAP_KEYS.VALUE]: COMMON_LANGUAGE_KEYS.FRENCH,
            [ARRAY_MAP_KEYS.LABEL]: t(MISCELLANEOUS_KEYS.FRENCH),
            [ARRAY_MAP_KEYS.ON_CLICK]: changeLanguage,
        },
    ];

    const MODE_OPTIONS = [
        {
            [ARRAY_MAP_KEYS.VALUE]: 'TELUS',
            [ARRAY_MAP_KEYS.LABEL]: t(MISCELLANEOUS_KEYS.TELUS),
            [ARRAY_MAP_KEYS.ON_CLICK]: changeMode,
        },
    ];

    const handleTabsOnChange = (event, newValue) => {
        if (!newValue) return;

        setHeaderTabsValue(newValue);
        navigate(newValue);
    };

    return (
        <>
            <FlexGrid limitWidth={false}>
                <FlexGrid.Row
                    outsideGutter={false}
                    horizontalAlign="start"
                    distribute="between"
                    verticalAlign="top">
                    <FlexGrid.Col>
                        <FlexGrid gutter={false} limitWidth={false}>
                            <FlexGrid.Col flex="true">
                                <FlexGrid.Row verticalAlign="middle">
                                    <FlexGrid.Col flex="true" xlOffset={0}>
                                        <Image
                                            alt="Telus header logo"
                                            src={telus_header}
                                            width={160}
                                            height={46}
                                        />
                                    </FlexGrid.Col>
                                    <FlexGrid.Col verticalAlign="middle">
                                        <Typography
                                            variant={{size: 'h3'}}
                                            heading="h3">
                                            BLIF - CLEC
                                        </Typography>
                                    </FlexGrid.Col>

                                    <FlexGrid.Col>
                                        <BlifTabs
                                            options={blifTabOptions}
                                            value={headerTabsValue}
                                            handleChange={handleTabsOnChange}
                                        />
                                    </FlexGrid.Col>

                                    <FlexGrid.Col>
                                        <FlexGrid.Row>
                                            <BlifDropDown
                                                showDropdownOptions={
                                                    showMenuDropdownOptions
                                                }
                                                setShowDropdownOptions={
                                                    setShowMenuDropdownOptions
                                                }
                                                TITLE_LABEL={MODE_LABEL}
                                                DROPDOWN_OPTIONS={MODE_OPTIONS}
                                                styles={{left: 0}}
                                                Icon={
                                                    <Icon
                                                        icon={CaretDown}
                                                        variant={{
                                                            size: 'micro',
                                                            rank: 'primary',
                                                        }}
                                                    />
                                                }
                                            />

                                            <BlifDropDown
                                                showDropdownOptions={
                                                    showLanguageDropdownOptions
                                                }
                                                setShowDropdownOptions={
                                                    setShowLanguageDropdownOptions
                                                }
                                                TITLE_LABEL={LANGUAGE_LABEL}
                                                DROPDOWN_OPTIONS={
                                                    LANGUAGE_OPTIONS
                                                }
                                                selectedDropDownValue={
                                                    getLocalLanguage
                                                }
                                                Icon={
                                                    <Icon
                                                        icon={CaretDown}
                                                        variant={{
                                                            size: 'micro',
                                                            rank: 'primary',
                                                        }}
                                                    />
                                                }
                                            />
                                        </FlexGrid.Row>
                                    </FlexGrid.Col>
                                </FlexGrid.Row>
                            </FlexGrid.Col>
                        </FlexGrid>
                    </FlexGrid.Col>
                </FlexGrid.Row>
            </FlexGrid>
            <Divider />
        </>
    );
};

export default Header;
