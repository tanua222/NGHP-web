import React, {useState} from 'react';
import './Home.scss';
import useAxiosGet from '../../hooks/useAxiosGet';
import BlifSelectInput from '../Common/Inputs/BlifSelectInput';
import {useTranslation} from 'react-i18next';
import {TRANSLATION_KEYS} from '../../language/TranslationKeys';
import BlifBox from '../Common/Box/BlifBox';
import BlifDataTableClient from '../Common/BlifDataTable/BlifDataTableClient';
import BlifTypography from '../Common/BlifTypography/BlifTypography';

const Home = () => {
    const {t} = useTranslation();
    const columns = [
        {
            name: TRANSLATION_KEYS.HOME.FILE,
            width: 'auto',
            dataProperty: 'homeFile',
            sortable: true,
            //selector: (row) => row.clientId,
            // sortFunction: (a, b) => sortCollatorByKey(a, b, 'clientId'),
        },
        {
            name: TRANSLATION_KEYS.HOME.DATE_DOWNLOADED,
            Width: 'auto',
            dataProperty: 'downloadDate',
            sortable: true,
            //selector: (row) => row.groupId || row.clientId,
            // sortFunction: (a, b) => sortCollatorByKey(a, b, 'groupId'),
        },
        {
            name: TRANSLATION_KEYS.HOME.NEW,
            Width: 'auto',
            dataProperty: 'new',
            sortable: true,
            //selector: (row) => row.groupName,
            // sortFunction: (a, b) => sortCollatorByKey(a, b, 'groupName'),
        },
        {
            name: TRANSLATION_KEYS.HOME.AWAITING_PRE_CHECK,
            Width: 'auto',
            dataProperty: 'awaitingPreCheck',
            sortable: true,
            //selector: (row) => row.groupName,
            // sortFunction: (a, b) => sortCollatorByKey(a, b, 'groupName'),
        },
        {
            name: TRANSLATION_KEYS.HOME.AWAITING_BLIF_TO_DIRECTION,
            Width: 'auto',
            dataProperty: 'awaitingBlifToDirection',
            sortable: true,
            //selector: (row) => row.groupName,
            // sortFunction: (a, b) => sortCollatorByKey(a, b, 'groupName'),
        },
        {
            name: TRANSLATION_KEYS.HOME.LOCKED_BY_AUTOMATION,
            Width: 'auto',
            dataProperty: 'lockedByAutomation',
            sortable: true,
            //selector: (row) => row.groupName,
            // sortFunction: (a, b) => sortCollatorByKey(a, b, 'groupName'),
        },
        {
            name: TRANSLATION_KEYS.HOME.FAILED_BLIF_TO_DIRECTION,
            Width: 'auto',
            dataProperty: 'failedBlifToDirection',
            sortable: true,
            //selector: (row) => row.groupName,
            // sortFunction: (a, b) => sortCollatorByKey(a, b, 'groupName'),
        },
        {
            name: TRANSLATION_KEYS.HOME.ACCEPTED,
            Width: 'auto',
            dataProperty: 'accepted',
            sortable: true,
            //selector: (row) => row.groupName,
            // sortFunction: (a, b) => sortCollatorByKey(a, b, 'groupName'),
        },
        {
            name: TRANSLATION_KEYS.HOME.REJECTED,
            Width: 'auto',
            dataProperty: 'rejected',
            sortable: true,
            //selector: (row) => row.groupName,
            // sortFunction: (a, b) => sortCollatorByKey(a, b, 'groupName'),
        },
        {
            name: TRANSLATION_KEYS.HOME.TOTAL_PROCESSED,
            Width: 'auto',
            dataProperty: 'totalProcessed',
            sortable: true,
            //selector: (row) => row.groupName,
            // sortFunction: (a, b) => sortCollatorByKey(a, b, 'groupName'),
        },
        {
            name: TRANSLATION_KEYS.HOME.TOTAL_RECEIVED_FROM_SERVICE_PROVIDER,
            Width: 'auto',
            dataProperty: 'serviceProvider',
            sortable: true,
            //selector: (row) => row.groupName,
            // sortFunction: (a, b) => sortCollatorByKey(a, b, 'groupName'),
        },
    ];

    let schema = {
        idProperty: 'homeFile',
        idPropertySortOrder: 'asc',
        headers: columns,
    };

    //Get home page Table Data
    const getHomePageTableData = (params, setTableData) => {
        // if (!filterQuery) {
        //     setTableData({numberOfPages: 0});
        //     return;
        // }
        setTableData({numberOfPages: 0});
    };

    return (
        <React.Fragment>
            <BlifBox space={4}>
                <BlifTypography variant={{size: 'h2'}}>
                    {t(TRANSLATION_KEYS.HOME.HOMEPAGE)}
                </BlifTypography>
                <BlifDataTableClient
                    schema={schema}
                    retrieveData={getHomePageTableData}
                    translate={t}
                />
            </BlifBox>
        </React.Fragment>
    );
};

export default Home;
