import FlexGrid from '@tds/core-flex-grid';
import HairlineDivider from '@tds/core-hairline-divider';
import Heading from '@tds/core-heading';
import Image from '@tds/core-image';
import Link from '@tds/core-link';
import Text from '@tds/core-text';
import {default as React, useContext, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import Bulletin from '../../../components/BulletinDownloads/Bulletin';
import Downloads from '../../../components/BulletinDownloads/Downloads';
import IvsBreadCrumbs from '../../../components/Common/IvsBreadCrumb/IvsBreadCrumbs';
import useMenuRouter from '../../../components/Common/MenuRouter/MenuRouterHook';
import CorporationRouter from '../../../components/Corp/Corporation/CorporationRouter';
import RoutesEReports from '../../../components/EReports/RoutesEReports';
import HierarchyViewContainer from '../../../components/Hierarchy/HierarchyView/HierarchyViewContainer';
import RoutesLongdistance from '../../../components/Ld/Longdistance/RoutesLongdistance';
import RoutesTollfree from '../../../components/TF/Tollfree/RoutesTollfree';
import IvsLogin from '../../../components/User/IvsLogin';
import {isAuthenticated} from '../../../components/Util/Util';
import {ApplicationContext} from '../../../context/ApplicationContext';
import {UserContext} from '../../../context/UserContext';
import telus_header from './telus_header.png';

const Header = () => {
    const {t, i18n} = useTranslation();
    const {
        setContextAsHome,
        setContextAsCorporation,
        setContextAsLongDistance,
        setContextAsTollFree,
        setContextAsHierarchy,
    } = useContext(ApplicationContext);
    const {
        authenticated,
        resetUserContext,
        ssoUrl,
        endSessionUrl,
        userLoginName,
    } = useContext(UserContext);
    const [urlBasedOnAuthentication, setUrlBasedOnAuthentication] =
        useState('');
    const [menuBasedOnAuthenticated, setMenuBasedOnAuthenticated] =
        useState('');
    const [headerUser, setHeaderUser] = useState('');

    useEffect(() => {
        updateUrlMenuBasedOnAuthnetication(
            authenticated,
            setUrlBasedOnAuthentication,
            endSessionUrl,
            setMenuBasedOnAuthenticated,
            ssoUrl,
        );
    }, [authenticated, ssoUrl, endSessionUrl]);

    useEffect(() => {
        userLoginName && setHeaderUser(userLoginName);
    }, [userLoginName]);

    const changeLanguage = (lng) => {
        localStorage.setItem('lang', lng);
        i18n.changeLanguage(lng);
    };

    const {ivsMenu, ivsRouter} = useMenuRouter(
        [
            {
                path: 'home',
                name: 'menu.label.home',
                onClick: () => setContextAsHome(),
                component: IvsLogin,
                featureName: 'home',
            },
            {
                path: 'corporation',
                name: 'menu.label.corporation',
                onClick: () => setContextAsCorporation(),
                component: CorporationRouter,
                privilegeName: 'SELECT-CORPORATION',
                featureName: 'corporation',
            },
            {
                path: 'longdistance',
                name: 'menu.label.longdistance',
                onClick: () => setContextAsLongDistance(),
                component: RoutesLongdistance,
                privilegeName: 'ACCESS-LONGDISTANCE,SELECT-CORPORATION',
                featureName: 'longdistance',
            },
            {
                path: 'tollfree',
                name: 'menu.label.tollfree',
                onClick: () => setContextAsTollFree(),
                component: RoutesTollfree,
                privilegeName: 'ACCESS-TOLLFREE,SELECT-CORPORATION',
                featureName: 'tollfree',
            },
            {
                path: 'hierarchy',
                name: 'menu.label.hierarchy',
                onClick: () => setContextAsHierarchy(),
                component: HierarchyViewContainer,
                privilegeName: 'ACCESS-HIERARCHY,SELECT-CORPORATION',
                featureName: 'hierarchy',
            },
            {
                path: 'ereports',
                name: 'menu.label.ereport',
                //onClick: () => setContextAsEReports(),
                component: RoutesEReports,
                //privilegeName:
                featureName: 'ereports',
            },
            {
                path: 'bulletin',
                name: 'menu.label.bulletin',
                component: Bulletin,
                privilegeName: 'VIEW-BULLETIN',
                featureName: 'bulletin',
            },
            {
                path: 'downloads',
                name: 'menu.label.downloads',
                component: Downloads,
                privilegeName: 'VIEW-BULLETIN',
                featureName: 'downloads',
            },
        ],
        '17px',
    );

    return (
        <FlexGrid limitWidth={false} outsideGutter={false}>
            <FlexGrid.Row
                horizontalAlign="start"
                distribute="between"
                verticalAlign="top">
                <FlexGrid.Col horizontalAlign="left" lg={2} md={2}>
                    <FlexGrid gutter={false}>
                        <FlexGrid.Row>
                            <FlexGrid.Col>
                                <Image
                                    alt="Telus header logo"
                                    src={telus_header}
                                    width={150}
                                    height={150}
                                />
                            </FlexGrid.Col>
                            <FlexGrid.Col>
                                <Heading level="h1">EVS</Heading>
                            </FlexGrid.Col>
                        </FlexGrid.Row>
                    </FlexGrid>
                </FlexGrid.Col>
                <FlexGrid.Col horizontalAlign="left">{ivsMenu}</FlexGrid.Col>
                <FlexGrid.Col horizontalAlign="right" lg={4} md={4}>
                    {userLoginName && <Text>{headerUser}</Text>}
                    {userLoginName && <Text bold>&nbsp;|&nbsp;</Text>}
                    <Link href="#" to="#" onClick={() => changeLanguage('en')}>
                        {t('menu.label.en')}
                    </Link>
                    <Text bold>&nbsp;|&nbsp;</Text>
                    <Link href="#" to="#" onClick={() => changeLanguage('fn')}>
                        {t('menu.label.fr')}
                    </Link>
                    <Text bold>&nbsp;|&nbsp;</Text>
                    {
                        <Link
                            href={urlBasedOnAuthentication}
                            to="#"
                            onClick={() => {
                                resetUserContext();
                            }}>
                            {t(menuBasedOnAuthenticated)}
                        </Link>
                    }
                </FlexGrid.Col>
            </FlexGrid.Row>
            <FlexGrid.Row horizontalAlign="start">
                <FlexGrid.Col>
                    <HairlineDivider />
                    <IvsBreadCrumbs></IvsBreadCrumbs>
                    <React.Fragment>{ivsRouter}</React.Fragment>
                    <HairlineDivider />
                </FlexGrid.Col>
            </FlexGrid.Row>
        </FlexGrid>
    );
};

function updateUrlMenuBasedOnAuthnetication(
    authenticated,
    setUrlBasedOnAuthentication,
    endSessionUrl,
    setMenuBasedOnAuthenticated,
    ssoUrl,
) {
    const isAuthenticatedVal = isAuthenticated(authenticated);
    if (isAuthenticatedVal) {
        setUrlBasedOnAuthentication(endSessionUrl);
        setMenuBasedOnAuthenticated('ivs.label.shared.logout');
    } else {
        setUrlBasedOnAuthentication(ssoUrl);
        setMenuBasedOnAuthenticated('ivs.label.shared.login');
    }
}

export default Header;
