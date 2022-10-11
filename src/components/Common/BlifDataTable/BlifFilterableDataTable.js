import React, {useEffect, useState} from 'react';
import {isNullOrUndefined} from '../../../utils/helperFunctions';
import {BlifFlexGrid, BlifFlexGridRow, BlifFlexGridCol} from '../BlifFlexGrid/BlifFlexGrid';
import BlifDataTableClient from './BlifDataTableClient';

const BlifFilterableDataTable = ({
    filterDataComponent,
    retrieveData,
    resetCurrentPage,
    ...dataTableProps
}) => {
    const [filterParameters, setFilterParameters] = useState();
    const [refreshTableToggle, setRefreshTableToggle] =
        useState(resetCurrentPage);

    const fetchFilteredData = (filterParams) => {
        setFilterParameters(filterParams);
        setRefreshTableToggle((v) => !v);
    };

    useEffect(() => {
        !isNullOrUndefined(resetCurrentPage) &&
            setRefreshTableToggle((v) => !v);
        setFilterParameters(undefined);
    }, [resetCurrentPage]);

    const retrieveFilteredData = (params, setTableData) => {
        retrieveData({...params, ...filterParameters}, setTableData);
    };

    return (
        <BlifFlexGrid gutter={false} limitWidth={false}>
            <BlifFlexGridRow horizontalAlign="start">
                <BlifFlexGridCol>
                    {filterDataComponent &&
                        React.createElement(filterDataComponent, {
                            onFilter: fetchFilteredData,
                        })}
                </BlifFlexGridCol>
            </BlifFlexGridRow>
            <BlifFlexGridRow horizontalAlign="center">
                <BlifFlexGridCol md={12}>
                    <BlifDataTableClient
                        {...dataTableProps}
                        resetCurrentPage={refreshTableToggle}
                        retrieveData={retrieveFilteredData}
                    />
                </BlifFlexGridCol>
            </BlifFlexGridRow>
        </BlifFlexGrid>
    );
};
export default BlifFilterableDataTable;
