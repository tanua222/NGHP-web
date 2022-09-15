import React, { useState, useEffect } from 'react';
import Box from '@tds/core-box';
import FlexGrid from '@tds/core-flex-grid';
import HairlineDivider from '@tds/core-hairline-divider'
import IvsDataTableClient from './IvsDataTableClient';
import { isNullOrUndefined } from '../../Util/Util';

const IvsFilterableDataTable = ({ filterDataComponent, retrieveData, resetCurrentPage, ...dataTableProps }) => {

    const [filterParameters, setFilterParameters] = useState();
    const [refreshTableToggle, setRefreshTableToggle] = useState(resetCurrentPage);

    const fetchFilteredData = (filterParams) => {
        setFilterParameters(filterParams);
        setRefreshTableToggle(v => !v);
    }

    useEffect(() => {
        !isNullOrUndefined(resetCurrentPage) && setRefreshTableToggle(v => !v);
        setFilterParameters(undefined);
    },[resetCurrentPage]);

    const retrieveFilteredData = (params, setTableData) => {
        retrieveData({...params, ...filterParameters}, setTableData);
    };

    return (
        <FlexGrid gutter={false} limitWidth={false}>
            <FlexGrid.Row horizontalAlign="start">
                <FlexGrid.Col>
                    {filterDataComponent && React.createElement(filterDataComponent, {onFilter: fetchFilteredData})}
                </FlexGrid.Col>
            </FlexGrid.Row>
            <FlexGrid.Row>
                <FlexGrid.Col>
                    <Box vertical={1}>
                        <HairlineDivider />
                    </Box>
                </FlexGrid.Col>
            </FlexGrid.Row>
            <FlexGrid.Row horizontalAlign='center'>
                <FlexGrid.Col md={12}>
                    <IvsDataTableClient {...dataTableProps} resetCurrentPage={refreshTableToggle} retrieveData={retrieveFilteredData} />
                </FlexGrid.Col>
            </FlexGrid.Row>
        </FlexGrid>
    );
}
export default IvsFilterableDataTable;