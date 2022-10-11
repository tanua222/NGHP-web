import React, {useState, useEffect} from 'react';
import BlifTypography from '../Common/BlifTypography/BlifTypography';
import {ARRAY_MAP_KEYS, FILTER_TYPES, ZERO_INDEX} from '../../utils/commonKeys';
import {FiltersView} from '../Common/Filters/Filters';
import {useTranslation} from 'react-i18next';
import {checkIfArrayExists} from '../../utils/helperFunctions';
import BlifSpacer from '../Common/BlifSpacer/BlifSpacer';
import dummyTableData from '../Common/BlifTables/dummyTableData.json';
import {TRANSLATION_KEYS} from '../../language/TranslationKeys';
import BlifBox from '../Common/Box/BlifBox';
import {
    PROVINCE_FILTER_LANGUAGE_KEYS,
    REJECTS_FILTER_LANGUAGE_KEYS,
    BRG_FILTER_LANGUAGE_KEYS,
    CLEC_FILTER_LANGUAGE_KEYS,
    PRE_CHECK_TABLE_HEADER_KEYS,
} from '../../utils/languageKeys/components/preCheckKeys';
import {
    BlifFlexGrid,
    BlifFlexGridRow,
    BlifFlexGridCol,
} from '../Common/BlifFlexGrid/BlifFlexGrid';
import BlifFilterableDataTable from '../Common/BlifDataTable/BlifFilterableDataTable';

// OPTIONS
export const getProvinceFilterOptions = [
    {
        [ARRAY_MAP_KEYS.value]: 'ALL',
        [ARRAY_MAP_KEYS.text]: PROVINCE_FILTER_LANGUAGE_KEYS.ALL,
    },
    {
        [ARRAY_MAP_KEYS.value]: 'QC',
        [ARRAY_MAP_KEYS.text]: PROVINCE_FILTER_LANGUAGE_KEYS.QC,
    },
];

export const getBrgIndicatorFilterOptions = [
    {
        [ARRAY_MAP_KEYS.value]: 'ALL',
        [ARRAY_MAP_KEYS.text]: BRG_FILTER_LANGUAGE_KEYS.ALL,
    },
    {
        [ARRAY_MAP_KEYS.value]: 'Business',
        [ARRAY_MAP_KEYS.text]: BRG_FILTER_LANGUAGE_KEYS.BUSINESS,
    },
    {
        [ARRAY_MAP_KEYS.value]: 'Residential',
        [ARRAY_MAP_KEYS.text]: BRG_FILTER_LANGUAGE_KEYS.RESIDENTIAL,
    },
];

export const getRejectsFilterOptions = [
    {
        [ARRAY_MAP_KEYS.value]: 'ALL',
        [ARRAY_MAP_KEYS.text]: REJECTS_FILTER_LANGUAGE_KEYS.ALL,
    },
    {
        [ARRAY_MAP_KEYS.value]: 'Only Rejects',
        [ARRAY_MAP_KEYS.text]: REJECTS_FILTER_LANGUAGE_KEYS.ONLY_REJECTS,
    },
    {
        [ARRAY_MAP_KEYS.value]: 'No Rejects',
        [ARRAY_MAP_KEYS.text]: REJECTS_FILTER_LANGUAGE_KEYS.NO_REJECTS,
    },
];

export const getClecFilterOptions = [
    {
        [ARRAY_MAP_KEYS.value]: 'ALL',
        [ARRAY_MAP_KEYS.text]: CLEC_FILTER_LANGUAGE_KEYS.ALL,
    },
    {
        [ARRAY_MAP_KEYS.value]: 'FIDO',
        [ARRAY_MAP_KEYS.text]: CLEC_FILTER_LANGUAGE_KEYS.FIDO,
    },
];

//Form Schema
const PRECHECK_FORM_SCHEMA_KEYS = {
    FILE_INPUT: 'FILE_INPUT',
    PROVINCE_INPUT: 'PROVINCE_INPUT',
    BRG_INDICATOR_INPUT: 'BRG_INDICATOR_INPUT',
    REJECTS_INPUT: 'REJECTS_INPUT',
    CLEC_INPUT: 'CLEC_INPUT',
};

const PRECHECK_FORM_SCHEMA = {
    [PRECHECK_FORM_SCHEMA_KEYS.FILE_INPUT]: '',
    [PRECHECK_FORM_SCHEMA_KEYS.PROVINCE_INPUT]:
        getProvinceFilterOptions[ZERO_INDEX].value,
    [PRECHECK_FORM_SCHEMA_KEYS.BRG_INDICATOR_INPUT]:
        getBrgIndicatorFilterOptions[ZERO_INDEX].value,
    [PRECHECK_FORM_SCHEMA_KEYS.REJECTS_INPUT]:
        getRejectsFilterOptions[ZERO_INDEX].value,
    [PRECHECK_FORM_SCHEMA_KEYS.CLEC_INPUT]:
        getClecFilterOptions[ZERO_INDEX].value,
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
            checkIfArrayExists(getRejectsFilterOptions) &&
            checkIfArrayExists(getClecFilterOptions)
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
                {
                    [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.SELECT_INPUT,
                    [ARRAY_MAP_KEYS.label]: TRANSLATION_KEYS.PRECHECK.CLEC,
                    [ARRAY_MAP_KEYS.OPTIONS]: getClecFilterOptions,
                    [ARRAY_MAP_KEYS.ON_CHANGE]:
                        PRECHECK_FORM_SCHEMA_KEYS.CLEC_INPUT,
                },
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
            name: PRE_CHECK_TABLE_HEADER_KEYS.PRE_CHECK_EXCHANGE,
            width: 'auto',
            dataProperty: 'exchange',
            sortable: true,
            //selector: (row) => row.clientId,
            // sortFunction: (a, b) => sortCollatorByKey(a, b, 'clientId'),
        },
        {
            name: PRE_CHECK_TABLE_HEADER_KEYS.PRE_CHECK_SL,
            Width: 'auto',
            dataProperty: 'singleLine',
            sortable: true,
            //selector: (row) => row.groupId || row.clientId,
            // sortFunction: (a, b) => sortCollatorByKey(a, b, 'groupId'),
        },
        {
            name: PRE_CHECK_TABLE_HEADER_KEYS.PRE_CHECK_SPID,
            Width: 'auto',
            dataProperty: 'spID',
            sortable: true,
            wrap: true,
            //selector: (row) => row.groupName,
            // sortFunction: (a, b) => sortCollatorByKey(a, b, 'groupName'),
        },
        {
            name: PRE_CHECK_TABLE_HEADER_KEYS.PRE_CHECK_ACTION,
            Width: 'auto',
            dataProperty: 'actionIndicator',
            //selector: (row) => row.clientType,
            sortable: true,
        },
        {
            name: PRE_CHECK_TABLE_HEADER_KEYS.PRE_CHECK_NL,
            Width: 'auto',
            dataProperty: 'nl',
            sortable: true,
            wrap: true,
            //selector: (row) => row.clientName,
            // sortFunction: (a, b) => sortCollatorByKey(a, b, 'clientName'),
        },
        {
            name: PRE_CHECK_TABLE_HEADER_KEYS.PRE_CHECK_NUMBER,
            Width: 'auto',
            dataProperty: 'phoneNumber',
            sortable: true,
            // selector: (row) => row.clientName,

            // sortFunction: (a, b) => sortCollatorByKey(a, b, 'reportId'),
        },
        {
            name: PRE_CHECK_TABLE_HEADER_KEYS.PRE_CHECK_BRG,
            Width: 'auto',
            dataProperty: 'brgIndicator',
            sortable: true,
            wrap: true,
            //selector: (row) => row.clientName,

            // sortFunction: (a, b) => sortCollatorByKey(a, b, 'clientKey'),
        },
        {
            name: PRE_CHECK_TABLE_HEADER_KEYS.PRE_CHECK_NAME,
            Width: 'auto',
            dataProperty: 'customerFullName',
            minWidth: '120px',
            //selector: (row) => row.clientName,
        },
        {
            name: PRE_CHECK_TABLE_HEADER_KEYS.PRE_CHECK_LOCATION,
            Width: 'auto',
            sortable: true,
            dataProperty: 'location',
            //selector: (row) => row.clientName,
        },
        {
            name: PRE_CHECK_TABLE_HEADER_KEYS.PRE_CHECK_ADDRESS,
            Width: 'auto',

            sortable: true,
            dataProperty: 'address',
            // selector: (row) => row.clientName,
        },
        {
            name: PRE_CHECK_TABLE_HEADER_KEYS.PRE_CHECK_CFC,
            Width: 'auto',
            sortable: true,
            dataProperty: 'cfc',
            //selector: (row) => row.clientName,

            // sortFunction: (a, b) =>
            //new Date(a.deactivateDate) - new Date(b.deactivateDate),
        },
        {
            name: PRE_CHECK_TABLE_HEADER_KEYS.PRE_CHECK_REJECT_CODE,
            Width: 'auto',
            sortable: true,
            dataProperty: 'rejectCode',
            // selector: (row) => row.clientName,

            // sortFunction: (a, b) =>
            //     new Date(a.deactivateDate) - new Date(b.deactivateDate),
        },
        {
            name: PRE_CHECK_TABLE_HEADER_KEYS.PRE_CHECK_POLICY_CODE,
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
