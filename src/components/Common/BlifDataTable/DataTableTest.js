import React, { useRef, useState } from 'react';
import DataTable from './BlifDataTable';
import { element } from 'prop-types';


const DataTableTest = (props) => {
    const [d1, setD1] = useState(
        {
            schema: {
                idProperty: 'corpId',
                pagination: {
                    pageCount: 100,
                    currentPage: 54,
                    pageSize: 14
                },
                headers : [
                    {
                        'name': 'PF',
                        'dataProperty': 'pref'
                    },
                    {
                        'name': 'Corp ID',
                        'dataProperty': 'corpId',
                        'link': '/ivs/corp/:corpId',
                        'displayValFn': (cid) => `display ${cid}`
                    },
                    {
                        'name': 'Corporation Name',
                        'dataProperty': 'corpName',
                        'sortable': true,
                        'link': 'ivs/corp/:corpId'
                    },
                    {
                        'name': 'LD',
                        'dataProperty': 'ld',
                        'sortable': true
                    },
                    {
                        'name': 'TF',
                        'dataProperty': 'tf'
                    },
                    {
                        'name': 'AP',
                        'dataProperty': 'ap.prov',
                        'sortable': true                
                    }
                ],
                sort : {
                    'dataProperty':'corpId',
                    'sortOrder':'asc'
                }
            },
            data: [
                {
                    'pCheck' : <input type='checkbox'></input>,
                    'pref' : 'T',
                    'corpId' : 'de534',
                    'corpName' : 'ASMS Load Test - Do not use',
                    'ld' : 0,
                    'tf' : 1,
                    'ap': { prov: 'BC'}
                },
                {
                    'pCheck' : <input type='checkbox'></input>,
                    'pref' : 'T',
                    'corpId' : '42er',
                    'corpName' : 'ASMS Load Test - Do not use',
                    'ld' : 0,
                    'tf' : 1,
                    'ap': { prov: 'BC'}
                },
                {
                    'pCheck' : <input type='checkbox'></input>,
                    'pref' : 'T',
                    'corpId' : 'wewefwr',
                    'corpName' : 'ASMS Load Test - Do not use',
                    'ld' : 0,
                    'tf' : 1,
                    'ap': { prov: 'BC'}
                },
                {
                    'pCheck' : <input type='checkbox'></input>,
                    'pref' : 'T',
                    'corpId' : '24ee',
                    'corpName' : 'ASMS Load Test - Do not use',
                    'ld' : 0,
                    'tf' : 1,
                    'ap': { prov: 'BC'}
                },
                {
                    'pCheck' : <input type='checkbox'></input>,
                    'pref' : 'T',
                    'corpId' : '123345wedw123',
                    'corpName' : 'ASMS Load Test - Do not use',
                    'ld' : 0,
                    'tf' : 1,
                    'ap': { prov: 'BC'}
                },
                {
                    'pCheck' : <input type='checkbox'></input>,
                    'pref' : 'T',
                    'corpId' : '342werd',
                    'corpName' : 'ASMS Load Test - Do not use',
                    'ld' : 0,
                    'tf' : 1,
                    'ap': { prov: 'BC'}
                },
                {
                    'pCheck' : <input type='checkbox'></input>,
                    'pref' : 'T',
                    'corpId' : '3rwfdwe',
                    'corpName' : 'ASMS Load Test - Do not use',
                    'ld' : 0,
                    'tf' : 1,
                    'ap': { prov: 'BC'}
                },
                {
                    'pCheck' : <input type='checkbox'></input>,
                    'pref' : 'T',
                    'corpId' : '123123',
                    'corpName' : 'ASMS Load Test - Do not use',
                    'ld' : 0,
                    'tf' : 1,
                    'ap': { prov: 'BC'}
                },
            ]
        });
    const r = {};
    return (
    <div>
        <button onClick={() => console.log(r.selected)} style={{
            'border-radius': '5px'
        }}> Get selected</button>
        <button style={{
            'border-radius': '5px',
            'margin': '1em 1em'
        }} onClick={() => {
            return setD1({
                ...d1,
                data: [...d1.data,
                    {
                        'pCheck' : <input type='checkbox'></input>,
                        'pref' : 'T',
                        'corpId' : '123123',
                        'corpName' : 'ASMS Load Test - Do not use - new',
                        'ld' : 0,
                        'tf' : 1,
                        'ap': { prov: 'BC'}
                    }
                ]
            });
        }}> change data</button>
        <DataTable onSelectionChange={(items) => console.log(items)} selection='multi' data={d1} onPageChange={(i) => {
            setD1({
                ...d1,
                schema: {
                    ...d1.schema,
                    pagination: {
                        ...d1.schema.pagination,
                        currentPage: i
                    }
                }
            });
        }}  onPageSizeChange={(s) => {
            setD1({
                ...d1,
                schema: {
                    ...d1.schema,
                    pagination: {
                        ...d1.schema.pagination,
                        pageSize: s
                    }
                }
            });
        }}  onSortChange={(f, s) => {
            setD1({
                ...d1,
                schema: {
                    ...d1.schema,
                    sort : {
                        sortBy: f,
                        sortOrder : s
                    }
                }
            });
        }}/>
    </div>
    );
}

export default DataTableTest;