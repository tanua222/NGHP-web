import React, {useCallback} from 'react';
import {customStyles} from './TableStyle';
import {useTranslation} from 'react-i18next';
// components
import DataTable from 'react-data-table-component';

// utils
// import {
//     rewriteActiveValue,
//     rewriteRequiredValue,
//     rewriteLinkedValue,
// } from '../../utils/rewriteValue';
// import {sortCollatorByKey} from '../../utils/arrayHelper';
// import {DeactivateDateFormat} from '../../util/mapping';

const BlifTable = ({data, selectRow, loaded}) => {
    const {t} = useTranslation();
    const selectRowCallback = useCallback((client) => selectRow(client), []);

    const columns = [
        {
            name: t('client_id'),
            width: 'auto',
            selector: (row) => row.clientId,
            // sortFunction: (a, b) => sortCollatorByKey(a, b, 'clientId'),
        },
        {
            name: t('group_id'),
            minWidth: '120px',
            selector: (row) => row.groupId || row.clientId,
            // sortFunction: (a, b) => sortCollatorByKey(a, b, 'groupId'),
        },
        {
            name: t('group_name'),
            minWidth: '200px',
            wrap: true,
            selector: (row) => row.groupName,
            // sortFunction: (a, b) => sortCollatorByKey(a, b, 'groupName'),
        },
        {
            name: t('client_type'),
            minWidth: '140px',
            selector: (row) => row.clientType,
            sortable: true,
        },
        {
            name: t('client_name'),
            minWidth: '300px',
            wrap: true,
            selector: (row) => row.clientName,
            // sortFunction: (a, b) => sortCollatorByKey(a, b, 'clientName'),
        },
        {
            name: t('report_id'),
            minWidth: '120px',
            selector: (row) => row.reportId,
            // sortFunction: (a, b) => sortCollatorByKey(a, b, 'reportId'),
        },
        {
            name: t('client_key'),
            minWidth: '200px',
            wrap: true,
            selector: (row) => row.clientKey,
            // sortFunction: (a, b) => sortCollatorByKey(a, b, 'clientKey'),
        },
        {
            name: t('required'),
            minWidth: '120px',
            sortable: true,
            // selector: (row) => rewriteRequiredValue(row?.required),
        },
        {
            name: t('active'),
            minWidth: '120px',
            sortable: true,
            // selector: (row) => rewriteActiveValue(row?.active),
        },
        {
            name: t('linked'),
            sortable: true,
            // selector: (row) => rewriteLinkedValue(row?.linked),
        },
        {
            name: t('deactivate_date'),
            minWidth: '180px',
            // selector: (row) =>
            //     !!row?.deactivateDate &&
            //     new Intl.DateTimeFormat('default', DeactivateDateFormat).format(
            //         new Date(row.deactivateDate),
            //     ),
            sortFunction: (a, b) =>
                new Date(a.deactivateDate) - new Date(b.deactivateDate),
        },
    ];
    console.log('data', data);
    return (
        <>
            <DataTable
                fixedHeader
                pointerOnHover
                persistTableHead
                keyField="clientId"
                defaultSortFieldId="1"
                highlightOnHover="true"
                progressPending={loaded}
                noDataComponent={<div />}
                {...{customStyles}}
                {...{columns}}
                {...{data}}
                onRowDoubleClicked={(row) => selectRowCallback(row)}
            />
        </>
    );
};

export default BlifTable;
