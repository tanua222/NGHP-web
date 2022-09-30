import React, {useCallback} from 'react';
import {customStyles} from './TableStyle';
import {useTranslation} from 'react-i18next';
// components
import DataTable from 'react-data-table-component';
import './BlifTable.scss';

// utils
// import {
//     rewriteActiveValue,
//     rewriteRequiredValue,
//     rewriteLinkedValue,
// } from '../../utils/rewriteValue';
// import {sortCollatorByKey} from '../../utils/arrayHelper';
// import {DeactivateDateFormat} from '../../util/mapping';

const BlifTable = ({data, selectRow, loaded, columns = []}) => {
    const {t} = useTranslation();
    const selectRowCallback = useCallback((client) => selectRow(client), []);

    return (
        <div className="BlifTable_hide_Scrollbar">
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
        </div>
    );
};

export default BlifTable;
