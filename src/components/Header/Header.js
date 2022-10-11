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
import {FlexGrid} from '@telus-uds/ds-allium';
import {Typography} from '@telus-uds/ds-allium';
import {Divider} from '@telus-uds/ds-allium';
import {Spacer} from '@telus-uds/ds-allium';
import {TextButton} from '@telus-uds/ds-allium';
import {EnglishTranslations} from '../../language/EnglishTranslations';
import {FrenchTranslations} from '../../language/FrenchTranslations';
import {TRANSLATION_KEYS} from '../../language/TranslationKeys';
import {LANGUAGES} from '../../language/Languages';

const Header = () => {
    const location = useLocation();
    const {t, i18n} = useTranslation();
    const getRoutes = useRoutes();

    const [headerTabsValue, setHeaderTabsValue] = useState(
        getRoutes?.[HOME_ROUTE_INDEX][ROUTER_KEYS.PATH_NAME],
    );

    const blifTabOptions = getRoutes?.map((item) => ({
        [ARRAY_MAP_KEYS.label]: item[ROUTER_KEYS.NAVBAR_NAME],
        [ARRAY_MAP_KEYS.value]: item[ROUTER_KEYS.PATH_NAME],
        [ARRAY_MAP_KEYS.ID]: item[ARRAY_MAP_KEYS.ID],
    }));

    useEffect(() => {
        const getLocationPathname = location.pathname;
        const getSelectedRoute = blifTabOptions.find(
            (item) => item[ARRAY_MAP_KEYS.value] === getLocationPathname,
        );

        if (getSelectedRoute) {
            setHeaderTabsValue(getSelectedRoute[ARRAY_MAP_KEYS.value]);
        }
    }, [location.pathname, blifTabOptions]);

    const navigate = useNavigate();

    const changeLanguage = (language) => {
        if (!language) return;

        localStorage.setItem(TRANSLATION_KEYS.COMMON.LANGUAGE, language);
        i18n.changeLanguage(language);
    };

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
                            <FlexGrid.Col flex={true}>
                                <FlexGrid.Row verticalAlign="middle">
                                    <FlexGrid.Col flex={true}>
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
                                            heading="h3"
                                            tokens={{fontWeight: '400'}}>
                                            TELUS - CLEC
                                        </Typography>
                                    </FlexGrid.Col>

                                    <FlexGrid.Col>
                                        <BlifTabs
                                            options={blifTabOptions}
                                            value={headerTabsValue}
                                            handleChange={handleTabsOnChange}
                                        />
                                    </FlexGrid.Col>
                                    <Spacer space={10} direction="row" />

                                    <FlexGrid.Col horizontalAlign="right">
                                        {/* {userLoginName && (
                                            <Text>{headerUser}</Text>
                                        )}
                                        {userLoginName && (
                                            <Text bold>&nbsp;|&nbsp;</Text>
                                        )} */}
                                        <TextButton
                                            onPress={() =>
                                                changeLanguage(
                                                    LANGUAGES.ENGLISH,
                                                )
                                            }>
                                            {t(TRANSLATION_KEYS.COMMON.ENGLISH)}
                                        </TextButton>
                                        <Typography bold>
                                            &nbsp;|&nbsp;
                                        </Typography>
                                        <TextButton
                                            onPress={() =>
                                                changeLanguage(LANGUAGES.FRENCH)
                                            }>
                                            {t(TRANSLATION_KEYS.COMMON.FRENCH)}
                                        </TextButton>
                                        {/* <Typography bold>
                                            &nbsp;|&nbsp;
                                        </Typography>
                                        {
                                            <Link
                                                href={urlBasedOnAuthentication}
                                                to="#"
                                                onClick={() => {
                                                    resetUserContext();
                                                }}>
                                                {t(menuBasedOnAuthenticated)}
                                            </Link>
                                        } */}
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
