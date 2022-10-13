import React, {useState, useEffect} from 'react';
import BlifTypography from '../Common/BlifTypography/BlifTypography';
import {ARRAY_MAP_KEYS, FILTER_TYPES, ZERO_INDEX} from '../../utils/commonKeys';
import {FiltersView} from '../Common/Filters/Filters';
import {useTranslation} from 'react-i18next';
import {checkIfArrayExists} from '../../utils/helperFunctions';
import BlifSpacer from '../Common/BlifSpacer/BlifSpacer';
import dummyTableData from './dummyTableData.json';
import {TRANSLATION_KEYS} from '../../language/TranslationKeys';
import BlifBox from '../Common/Box/BlifBox';
import {
    BlifFlexGrid,
    BlifFlexGridRow,
    BlifFlexGridCol,
} from '../Common/BlifFlexGrid/BlifFlexGrid';
import BlifFilterableDataTable from '../Common/BlifDataTable/BlifFilterableDataTable';
import BlifTextInput from '../Common/Inputs/BlifTextInput';

// OPTIONS
export const getProvinceFilterOptions = [
    {
        [ARRAY_MAP_KEYS.value]: 'ALL',
        [ARRAY_MAP_KEYS.text]: TRANSLATION_KEYS.PRECHECK.ALL,
    },
    {
        [ARRAY_MAP_KEYS.value]: 'QC',
        [ARRAY_MAP_KEYS.text]: TRANSLATION_KEYS.PRECHECK.QC,
    },
];

export const getBrgIndicatorFilterOptions = [
    {
        [ARRAY_MAP_KEYS.value]: 'ALL',
        [ARRAY_MAP_KEYS.text]: TRANSLATION_KEYS.PRECHECK.ALL,
    },
    {
        [ARRAY_MAP_KEYS.value]: 'Business',
        [ARRAY_MAP_KEYS.text]: TRANSLATION_KEYS.PRECHECK.BUSINESS,
    },
    {
        [ARRAY_MAP_KEYS.value]: 'Residential',
        [ARRAY_MAP_KEYS.text]: TRANSLATION_KEYS.PRECHECK.RESIDENTIAL,
    },
];

export const getRejectsFilterOptions = [
    {
        [ARRAY_MAP_KEYS.value]: 'ALL',
        [ARRAY_MAP_KEYS.text]: TRANSLATION_KEYS.PRECHECK.ALL,
    },
    {
        [ARRAY_MAP_KEYS.value]: 'Only Rejects',
        [ARRAY_MAP_KEYS.text]: TRANSLATION_KEYS.PRECHECK.ONLY_REJECTS,
    },
    {
        [ARRAY_MAP_KEYS.value]: 'No Rejects',
        [ARRAY_MAP_KEYS.text]: TRANSLATION_KEYS.PRECHECK.NO_REJECTS,
    },
];

// export const getClecFilterOptions = [
//     {
//         [ARRAY_MAP_KEYS.value]: 'ALL',
//         [ARRAY_MAP_KEYS.text]: CLEC_FILTER_LANGUAGE_KEYS.ALL,
//     },
//     {
//         [ARRAY_MAP_KEYS.value]: 'FIDO',
//         [ARRAY_MAP_KEYS.text]: CLEC_FILTER_LANGUAGE_KEYS.FIDO,
//     },
// ];

//Form Schema
const PRECHECK_FORM_SCHEMA_KEYS = {
    FILE_INPUT: 'FILE_INPUT',
    PROVINCE_INPUT: 'PROVINCE_INPUT',
    BRG_INDICATOR_INPUT: 'BRG_INDICATOR_INPUT',
    REJECTS_INPUT: 'REJECTS_INPUT',
    //CLEC_INPUT: 'CLEC_INPUT',
};

const PRECHECK_FORM_SCHEMA = {
    [PRECHECK_FORM_SCHEMA_KEYS.FILE_INPUT]: '',
    [PRECHECK_FORM_SCHEMA_KEYS.PROVINCE_INPUT]:
        getProvinceFilterOptions[ZERO_INDEX].value,
    [PRECHECK_FORM_SCHEMA_KEYS.BRG_INDICATOR_INPUT]:
        getBrgIndicatorFilterOptions[ZERO_INDEX].value,
    [PRECHECK_FORM_SCHEMA_KEYS.REJECTS_INPUT]:
        getRejectsFilterOptions[ZERO_INDEX].value,
    // [PRECHECK_FORM_SCHEMA_KEYS.CLEC_INPUT]:
    //     getClecFilterOptions[ZERO_INDEX].value,
};

// PreCheck Component
const PreCheck = () => {
    const {t} = useTranslation();

    const [filterQuery, setFilterQuery] = useState(PRECHECK_FORM_SCHEMA);
    const [filterSchema, setFilterSchema] = useState([]);
    const [selectedRow, setSelectedRow] = useState([]);
    const selectionType = 'multi';
    console.log('selected row', selectedRow);
    // const [resetCurrentPage, setResetCurrentPage] = useState();
    // // //const {loadOrderList} = useCorpOrder();

    // // const [filterParameters, setFilterParameters] = useState();

    // useEffect(() => {
    //     !isNullOrUndefined(filterQuery) && setResetCurrentPage((r) => !r);
    // }, [filterQuery]);

    useEffect(() => {
        if (
            checkIfArrayExists(getProvinceFilterOptions) &&
            checkIfArrayExists(getBrgIndicatorFilterOptions) &&
            checkIfArrayExists(getRejectsFilterOptions)
        ) {
            const localFilterSchema = [
                {
                    [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.TEXT_INPUT,
                    [ARRAY_MAP_KEYS.label]: TRANSLATION_KEYS.COMMON.FILE,
                    [ARRAY_MAP_KEYS.ON_CHANGE]:
                        PRECHECK_FORM_SCHEMA_KEYS.FILE_INPUT,
                },
                {
                    [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.SELECT_INPUT,
                    [ARRAY_MAP_KEYS.label]: TRANSLATION_KEYS.COMMON.PROVINCE,
                    [ARRAY_MAP_KEYS.OPTIONS]: getProvinceFilterOptions,
                    [ARRAY_MAP_KEYS.ON_CHANGE]:
                        PRECHECK_FORM_SCHEMA_KEYS.PROVINCE_INPUT,
                },
                // {
                //     [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.SELECT_INPUT,
                //     [ARRAY_MAP_KEYS.label]: TRANSLATION_KEYS.PRECHECK.CLEC,
                //     [ARRAY_MAP_KEYS.OPTIONS]: getClecFilterOptions,
                //     [ARRAY_MAP_KEYS.ON_CHANGE]:
                //         PRECHECK_FORM_SCHEMA_KEYS.CLEC_INPUT,
                // },
                {
                    [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.SELECT_INPUT,
                    [ARRAY_MAP_KEYS.label]:
                        TRANSLATION_KEYS.COMMON.BRG_INDICATOR,
                    [ARRAY_MAP_KEYS.OPTIONS]: getBrgIndicatorFilterOptions,
                    [ARRAY_MAP_KEYS.ON_CHANGE]:
                        PRECHECK_FORM_SCHEMA_KEYS.BRG_INDICATOR_INPUT,
                },
                {
                    [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.SELECT_INPUT,
                    [ARRAY_MAP_KEYS.label]: TRANSLATION_KEYS.COMMON.REJECTS,
                    [ARRAY_MAP_KEYS.OPTIONS]: getRejectsFilterOptions,
                    [ARRAY_MAP_KEYS.ON_CHANGE]:
                        PRECHECK_FORM_SCHEMA_KEYS.REJECTS_INPUT,
                },
            ];

            setFilterSchema(localFilterSchema);
        }
    }, []);

    const handleInputChange = (filterKey, val) => {
        setFilterQuery((prev) => ({...prev, [filterKey]: val}));
    };

    // search onClick handler
    const clickHandler = (e) => {
        e.preventDefault();

        alert('search query');
    };

    // const selectRowCallback = (rowData) => {
    //     //empty
    // };

    const columns = [
        {
            name: TRANSLATION_KEYS.PRECHECK.EXCH,
            width: 'auto',
            dataProperty: 'exchange',
            sortable: true,
            //selector: (row) => row.clientId,
            // sortFunction: (a, b) => sortCollatorByKey(a, b, 'clientId'),
        },
        {
            name: TRANSLATION_KEYS.PRECHECK.SL,
            Width: 'auto',
            dataProperty: 'singleLine',
            sortable: true,
            //selector: (row) => row.groupId || row.clientId,
            // sortFunction: (a, b) => sortCollatorByKey(a, b, 'groupId'),
        },
        {
            name: TRANSLATION_KEYS.PRECHECK.SPID,
            Width: 'auto',
            dataProperty: 'spID',
            sortable: true,
            wrap: true,
            //selector: (row) => row.groupName,
            // sortFunction: (a, b) => sortCollatorByKey(a, b, 'groupName'),
        },
        {
            name: TRANSLATION_KEYS.PRECHECK.ACTION,
            Width: 'auto',
            dataProperty: 'actionIndicator',
            //selector: (row) => row.clientType,
            sortable: true,
        },
        {
            name: TRANSLATION_KEYS.PRECHECK.NUMBER,
            Width: 'auto',
            dataProperty: 'nl',
            sortable: true,
            wrap: true,
            //selector: (row) => row.clientName,
            // sortFunction: (a, b) => sortCollatorByKey(a, b, 'clientName'),
        },
        {
            name: TRANSLATION_KEYS.PRECHECK.BRG,
            Width: 'auto',
            dataProperty: 'phoneNumber',
            sortable: true,
            displayValFn: (val, row) =>
                row.rejectCode !== '0000' ? (
                    <BlifBox variant={{background: 'critical'}} space={2}>
                        <BlifTypography variant={{inverse: true}}>
                            {val}
                        </BlifTypography>
                    </BlifBox>
                ) : (
                    <BlifBox space={2}>
                        <BlifTypography>{val}</BlifTypography>
                    </BlifBox>
                ),
            // selector: (row) => row.clientName,

            // sortFunction: (a, b) => sortCollatorByKey(a, b, 'reportId'),
        },
        {
            name: TRANSLATION_KEYS.PRECHECK.NAME,
            Width: 'auto',
            dataProperty: 'brgIndicator',
            sortable: true,
            wrap: true,
            //selector: (row) => row.clientName,

            // sortFunction: (a, b) => sortCollatorByKey(a, b, 'clientKey'),
        },
        {
            name: TRANSLATION_KEYS.PRECHECK.LOCATION,
            Width: 'auto',
            dataProperty: 'customerFullName',
            minWidth: '120px',
            editValFn: (val, setValue) => {
                return <BlifTextInput value={val} onChange={setValue} />;
            },
            //selector: (row) => row.clientName,
        },
        {
            name: TRANSLATION_KEYS.PRECHECK.ADDRESS,
            Width: 'auto',
            sortable: true,
            dataProperty: 'location',
            //selector: (row) => row.clientName,
        },
        {
            name: TRANSLATION_KEYS.PRECHECK.ADDRESS,
            Width: 'auto',

            sortable: true,
            dataProperty: 'address',
            // selector: (row) => row.clientName,
        },
        {
            name: TRANSLATION_KEYS.PRECHECK.CFC,
            Width: 'auto',
            sortable: true,
            dataProperty: 'cfc',
            //selector: (row) => row.clientName,

            // sortFunction: (a, b) =>
            //new Date(a.deactivateDate) - new Date(b.deactivateDate),
        },
        {
            name: TRANSLATION_KEYS.PRECHECK.REJECT_CODE,
            Width: 'auto',
            sortable: true,
            dataProperty: 'rejectCode',
            // selector: (row) => row.clientName,

            // sortFunction: (a, b) =>
            //     new Date(a.deactivateDate) - new Date(b.deactivateDate),
        },
        {
            name: TRANSLATION_KEYS.PRECHECK.POLICY_CODE,
            Width: 'auto',
            sortable: true,
            dataProperty: 'policyCode',
            //selector: (row) => row.clientName,

            // sortFunction: (a, b) =>
            //     new Date(a.deactivateDate) - new Date(b.deactivateDate),
        },
    ];

    let schema = {
        idProperty: 'exchange',
        idPropertySortOrder: 'asc',
        headers: columns,
    };

    //Get Precheck Table Data
    const getPrecheckTableData = (params, setTableData) => {
        if (!filterQuery) {
            setTableData({numberOfPages: 0});
            return;
        }
        setTableData(dummyTableData);
    };

    return (
        <React.Fragment>
            <BlifFlexGrid gutter={false}>
                <BlifFlexGridRow>
                    <BlifFlexGridCol lg={12} md={10}>
                        <BlifTypography variant={{size: 'h2'}}>
                            {t(TRANSLATION_KEYS.PRECHECK.HEADING)}
                        </BlifTypography>
                    </BlifFlexGridCol>
                </BlifFlexGridRow>
                <BlifSpacer space={2} />
                <BlifFlexGridRow
                    verticalAlign="middle"
                    horizontalAlign="center">
                    <BlifFlexGridCol lg={12} md={10}>
                        <BlifBox
                            variant={{background: 'light'}}
                            bottom={{md: 1}}
                            left={{md: 1}}
                            right={{md: 7}}
                            flex={1}>
                            <FiltersView
                                heading={t(TRANSLATION_KEYS.COMMON.SEARCH)}
                                clickHandler={clickHandler}
                                schema={filterSchema}
                                handleInputChange={handleInputChange}
                            />
                        </BlifBox>
                    </BlifFlexGridCol>
                </BlifFlexGridRow>
            </BlifFlexGrid>
            <BlifSpacer space={8} />
            <BlifBox space={4}>
                <BlifFilterableDataTable
                    schema={schema}
                    retrieveData={getPrecheckTableData}
                    selection={selectionType}
                    dataOnSelectionChange={setSelectedRow}
                    //   resetCurrentPage={resetCurrentPage}
                    translate={t}
                />
            </BlifBox>
        </React.Fragment>
    );
};

export default PreCheck;
