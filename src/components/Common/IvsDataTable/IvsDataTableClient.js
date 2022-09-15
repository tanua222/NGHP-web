import React from 'react';
import { getLocalStoragePageSize, isNullOrUndefined } from '../../Util/Util';
import IvsDataTable from './IvsDataTable';

const IvsDataTableClient = 
    ({ 
        schema
    ,retrieveData
    ,inputPageSize
    ,selection
    ,onSelectionChange
    ,dataOnSelectionChange
    ,loadData
    ,translate
    ,clearSelection
    ,resetCurrentPage
    ,paginationRequired = true,
    selectionConditionFn,
    maxSelectionCnt }) => {

    const ASC = 'asc';
    const [parameters,setParameters] = React.useState ({
        currentPage : 1,
        pageSize : getLocalStoragePageSize() || inputPageSize || 5 ,
        sortBy: schema.idProperty,
        sortOrder : schema.idPropertySortOrder || ASC
    });

    const [res, setRes] = React.useState();

    const [tableData, setTableData] = React.useState({
        schema: schema,
    });

    React.useEffect(() => {
        if (!res || (!res.result && isNullOrUndefined(res.numberOfPages))) {
            setTableData((tData) => {
                return {
                    schema: { ...tData.schema}
                }
            });
            return;
        }
        const result = res.result;
        const sort = {
            sortOrder: parameters.sortOrder,
            sortBy: parameters.sortBy
        };
        const pagination = paginationRequired ? {
            pageCount: res.numberOfPages,
            currentPage: parameters.currentPage,
            pageSize: parameters.pageSize,
        } : undefined;
        result && setTableData((tData) => {
            return {
                schema: { ...tData.schema, pagination, sort },
                data: [...result]
            }
        });
        result || setTableData((tData) => {
            return {
                schema: { ...tData.schema, pagination, sort },
                data: []
            }
        });
    }, [res]);

    React.useEffect(() => {
        !isNullOrUndefined(resetCurrentPage) && setParameters((p) => {
            return {
                ...p,
                currentPage: 1
            };
        }
        );
    }, [resetCurrentPage]);
 
    React.useEffect(() => {
        const p1 = {
            offset: (parameters.pageSize * (parameters.currentPage - 1)),
            limit: parameters.pageSize,
            sort: (parameters.sortOrder === ASC ? parameters.sortBy : '-' + parameters.sortBy)
        }
        setRes();
        retrieveData(p1, setRes);
    }, [parameters,loadData]);
        
    return (
        <IvsDataTable
            data={tableData}
            onPageChange={(i) => {
                setParameters((p) => {
                    return {
                        ...p,
                        currentPage: i,
                    };
                }
                )
            }}
            onSortChange={(f, s) => {
                setParameters((p) => {
                    return {
                        ...p,
                        sortBy: f,
                        sortOrder: s,
                        currentPage: 1
                    };
                }
                )
            }}
            onPageSizeChange={(s) => {
                setParameters((p) => {
                    return {
                        ...p,
                        pageSize: s,
                        currentPage: 1
                    };
                }
                )
            }}
            selection = {selection}
            onSelectionChange = {onSelectionChange}
            dataOnSelectionChange = {dataOnSelectionChange}
            translate={translate}
            clearSelection={clearSelection}
            selectionConditionFn={selectionConditionFn}
            maxSelectionCnt={maxSelectionCnt}
        />
    );
}
export default IvsDataTableClient;
