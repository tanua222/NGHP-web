import React, {useState, useEffect} from 'react';
import BlifTypography from '../Common/BlifTypography/BlifTypography';
import {ARRAY_MAP_KEYS, FILTER_TYPES, ZERO_INDEX} from '../../utils/commonKeys';
import {FiltersView} from '../Common/Filters/Filters';
import BlifBox from '../Common/Box/BlifBox';
import {checkIfArrayExists} from '../../utils/helperFunctions';
import BlifSpacer from '../Common/BlifSpacer/BlifSpacer';
import {
    ACTION_INDICATOR_FILTER_LANGUAGE_KEYS,
    INTERNAL_STATUS_FILTER_LANGUAGE_KEYS,
} from '../../utils/languageKeys/components/searchKeys';
import {
    getProvinceFilterOptions,
    getBrgIndicatorFilterOptions,
    getRejectsFilterOptions,
} from '../PreCheck/PreCheck';
import {
    BlifFlexGrid,
    BlifFlexGridRow,
    BlifFlexGridCol,
} from '../Common/BlifFlexGrid/BlifFlexGrid';
import {useTranslation} from 'react-i18next';
import {TRANSLATION_KEYS} from '../../language/TranslationKeys';
import BlifTextInput from '../Common/Inputs/BlifTextInput';
import dummyTableData from './dummyTableData.json';
import BlifFilterableDataTable from '../Common/BlifDataTable/BlifFilterableDataTable';

// Options
export const getActionIndicatorFilterOptions = [
    {
        [ARRAY_MAP_KEYS.text]: TRANSLATION_KEYS.PRECHECK.ALL,
        [ARRAY_MAP_KEYS.value]: 'ALL',
    },
    {
        [ARRAY_MAP_KEYS.text]: TRANSLATION_KEYS.SEARCH.ACTION_INDICATOR_VALUE_A,
        [ARRAY_MAP_KEYS.value]: 'A',
    },
    {
        [ARRAY_MAP_KEYS.text]:
            TRANSLATION_KEYS.SEARCH.ACTION_INDICATOR_VALUE_OI,
        [ARRAY_MAP_KEYS.value]: 'O/I',
    },
    {
        [ARRAY_MAP_KEYS.text]: TRANSLATION_KEYS.SEARCH.ACTION_INDICATOR_VALUE_D,
        [ARRAY_MAP_KEYS.value]: 'D',
    },
];

export const getInternalStatusFilterOptions = [
    {
        [ARRAY_MAP_KEYS.text]: TRANSLATION_KEYS.PRECHECK.ALL,
        [ARRAY_MAP_KEYS.value]: 'ALL',
    },
    {
        [ARRAY_MAP_KEYS.text]:
            TRANSLATION_KEYS.SEARCH.INTERNAL_STATUS_VALUE_0000,
        [ARRAY_MAP_KEYS.value]: '0000',
    },
    {
        [ARRAY_MAP_KEYS.text]:
            TRANSLATION_KEYS.SEARCH.INTERNAL_STATUS_VALUE_0000,
        [ARRAY_MAP_KEYS.value]: '0001',
    },
    {
        [ARRAY_MAP_KEYS.text]:
            TRANSLATION_KEYS.SEARCH.INTERNAL_STATUS_VALUE_0002,
        [ARRAY_MAP_KEYS.value]: '0002',
    },
    {
        [ARRAY_MAP_KEYS.text]:
            TRANSLATION_KEYS.SEARCH.INTERNAL_STATUS_VALUE_0010,
        [ARRAY_MAP_KEYS.value]: '0010',
    },
    {
        [ARRAY_MAP_KEYS.text]:
            TRANSLATION_KEYS.SEARCH.INTERNAL_STATUS_VALUE_0015,
        [ARRAY_MAP_KEYS.value]: '0015',
    },
    {
        [ARRAY_MAP_KEYS.text]:
            TRANSLATION_KEYS.SEARCH.INTERNAL_STATUS_VALUE_0031,
        [ARRAY_MAP_KEYS.value]: '0031',
    },
    {
        [ARRAY_MAP_KEYS.text]:
            TRANSLATION_KEYS.SEARCH.INTERNAL_STATUS_VALUE_0032,
        [ARRAY_MAP_KEYS.value]: '0032',
    },
    {
        [ARRAY_MAP_KEYS.text]:
            TRANSLATION_KEYS.SEARCH.INTERNAL_STATUS_VALUE_0050,
        [ARRAY_MAP_KEYS.value]: '0050',
    },
];

//Form Schema
const SEARCH_FORM_SCHEMA_KEYS = {
    PHONE_NUMBER_INPUT: 'PHONE_NUMBER_INPUT',
    BUS_OPERATING_NAME_INPUT: 'BUS_OPERATING_NAME_INPUT',
    ACTION_INDICATOR_INPUT: 'ACTION_INDICATOR_INPUT',
    REJECTS_INPUT: 'REJECTS_INPUT',
    BRG_INDICATOR_INPUT: 'BRG_INDICATOR_INPUT',
    INTERNAL_STATUS_INPUT: 'INTERNAL_STATUS',
    FILE_INPUT: 'FILE_INPUT',
    PROVINCE_INPUT: 'PROVINCE_INPUT',
    START_DATE_INPUT: 'START_DATE_INPUT',
    END_DATE_INPUT: 'END_DATE_INPUT',
};

const SEARCH_FORM_SCHEMA = {
    [SEARCH_FORM_SCHEMA_KEYS.PHONE_NUMBER_INPUT]: '',
    [SEARCH_FORM_SCHEMA_KEYS.BUS_OPERATING_NAME_INPUT]: '',
    [SEARCH_FORM_SCHEMA_KEYS.FILE_INPUT]: '',
    [SEARCH_FORM_SCHEMA_KEYS.ACTION_INDICATOR_INPUT]:
        getActionIndicatorFilterOptions[ZERO_INDEX].value,
    [SEARCH_FORM_SCHEMA_KEYS.REJECTS_INPUT]:
        getRejectsFilterOptions[ZERO_INDEX].value,
    [SEARCH_FORM_SCHEMA_KEYS.BRG_INDICATOR_INPUT]:
        getBrgIndicatorFilterOptions[ZERO_INDEX].value,
    [SEARCH_FORM_SCHEMA_KEYS.INTERNAL_STATUS_INPUT]:
        getInternalStatusFilterOptions[ZERO_INDEX].value,
    [SEARCH_FORM_SCHEMA_KEYS.PROVINCE_INPUT]:
        getProvinceFilterOptions[ZERO_INDEX].value,
    [SEARCH_FORM_SCHEMA_KEYS.START_DATE_INPUT]: '',
    [SEARCH_FORM_SCHEMA_KEYS.END_DATE_INPUT]: '',
};

const Search = () => {
    const {t} = useTranslation();

    const [searchFilterQuery, setSearchFilterQuery] =
        useState(SEARCH_FORM_SCHEMA);

    const [filterSchema, setFilterSchema] = useState([]);
    const [selectedRow, setSelectedRow] = useState([]);
    const selectionType = 'multi';

    useEffect(() => {
        if (
            checkIfArrayExists(getProvinceFilterOptions) &&
            checkIfArrayExists(getBrgIndicatorFilterOptions) &&
            checkIfArrayExists(getRejectsFilterOptions) &&
            checkIfArrayExists(getActionIndicatorFilterOptions) &&
            checkIfArrayExists(getInternalStatusFilterOptions)
        ) {
            const localFilterSchema = [
                {
                    [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.TEXT_INPUT,
                    [ARRAY_MAP_KEYS.label]:
                        TRANSLATION_KEYS.SEARCH.PHONE_NUMBER_FILTER_LANGUAGE,
                    [ARRAY_MAP_KEYS.ON_CHANGE]:
                        SEARCH_FORM_SCHEMA_KEYS.PHONE_NUMBER_INPUT,
                },
                {
                    [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.TEXT_INPUT,
                    [ARRAY_MAP_KEYS.label]:
                        TRANSLATION_KEYS.SEARCH
                            .BUS_OPERATING_NAME_FILTER_LANGUAGE,
                    [ARRAY_MAP_KEYS.ON_CHANGE]:
                        SEARCH_FORM_SCHEMA_KEYS.BUS_OPERATING_NAME_INPUT,
                },
                {
                    [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.SELECT_INPUT,
                    [ARRAY_MAP_KEYS.label]:
                        TRANSLATION_KEYS.SEARCH
                            .ACTION_INDICATOR_FILTER_LANGUAGE,
                    [ARRAY_MAP_KEYS.OPTIONS]: getActionIndicatorFilterOptions,
                    [ARRAY_MAP_KEYS.ON_CHANGE]:
                        SEARCH_FORM_SCHEMA_KEYS.ACTION_INDICATOR_INPUT,
                },
                {
                    [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.SELECT_INPUT,
                    [ARRAY_MAP_KEYS.label]: TRANSLATION_KEYS.COMMON.REJECTS,
                    [ARRAY_MAP_KEYS.OPTIONS]: getRejectsFilterOptions,
                    [ARRAY_MAP_KEYS.ON_CHANGE]:
                        SEARCH_FORM_SCHEMA_KEYS.REJECTS_INPUT,
                },
                {
                    [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.SELECT_INPUT,
                    [ARRAY_MAP_KEYS.label]:
                        TRANSLATION_KEYS.COMMON.BRG_INDICATOR,
                    [ARRAY_MAP_KEYS.OPTIONS]: getBrgIndicatorFilterOptions,
                    [ARRAY_MAP_KEYS.ON_CHANGE]:
                        SEARCH_FORM_SCHEMA_KEYS.BRG_INDICATOR_INPUT,
                },

                {
                    [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.SELECT_INPUT,
                    [ARRAY_MAP_KEYS.label]:
                        TRANSLATION_KEYS.SEARCH.INTERNAL_STATUS_FILTER_LANGUAGE,
                    [ARRAY_MAP_KEYS.OPTIONS]: getInternalStatusFilterOptions,
                    [ARRAY_MAP_KEYS.ON_CHANGE]:
                        SEARCH_FORM_SCHEMA_KEYS.INTERNAL_STATUS_INPUT,
                },
                {
                    [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.TEXT_INPUT,
                    [ARRAY_MAP_KEYS.label]: TRANSLATION_KEYS.COMMON.FILE,
                    [ARRAY_MAP_KEYS.ON_CHANGE]:
                        SEARCH_FORM_SCHEMA_KEYS.FILE_INPUT,
                },
                {
                    [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.SELECT_INPUT,
                    [ARRAY_MAP_KEYS.label]: TRANSLATION_KEYS.COMMON.PROVINCE,
                    [ARRAY_MAP_KEYS.OPTIONS]: getProvinceFilterOptions,
                    [ARRAY_MAP_KEYS.ON_CHANGE]:
                        SEARCH_FORM_SCHEMA_KEYS.PROVINCE_INPUT,
                },
                {
                    [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.DATE_INPUT,
                    [ARRAY_MAP_KEYS.label]: TRANSLATION_KEYS.COMMON.START_DATE,
                    [ARRAY_MAP_KEYS.ON_CHANGE]:
                        SEARCH_FORM_SCHEMA_KEYS.START_DATE_INPUT,
                },
                {
                    [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.DATE_INPUT,
                    [ARRAY_MAP_KEYS.label]: TRANSLATION_KEYS.COMMON.END_DATE,
                    [ARRAY_MAP_KEYS.ON_CHANGE]:
                        SEARCH_FORM_SCHEMA_KEYS.END_DATE_INPUT,
                },
            ];

            setFilterSchema(localFilterSchema);
        }
    }, [
        getProvinceFilterOptions,
        getBrgIndicatorFilterOptions,
        getRejectsFilterOptions,
        getActionIndicatorFilterOptions,
        getInternalStatusFilterOptions,
    ]);

    const handleSearchInputChange = (searchFilterKey, searchVal) => {
        setSearchFilterQuery((prev) => ({
            ...prev,
            [searchFilterKey]: searchVal,
        }));
    };

    useEffect(() => {
        console.log(searchFilterQuery);
    }, [searchFilterQuery]);

    // search onClick handler
    const searchClickHandler = (e) => {
        e.preventDefault();
        alert('search query');
    };

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
        {
            name: TRANSLATION_KEYS.SEARCH.TABLE_IS,
            Width: 'auto',
            sortable: true,
            dataProperty: 'internalStatus',
            //selector: (row) => row.clientName,

            // sortFunction: (a, b) =>
            //     new Date(a.deactivateDate) - new Date(b.deactivateDate),
        },
        {
            name: TRANSLATION_KEYS.SEARCH.TABLE_CREATED_BY,
            Width: 'auto',
            sortable: true,
            dataProperty: 'createdUserId',
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
    const getSearchTableData = (params, setTableData) => {
        if (!searchFilterQuery) {
            setTableData({numberOfPages: 0});
            return;
        }
        setTableData(dummyTableData);
    };

    return (
        <React.Fragment>
            <BlifFlexGrid gutter={false}>
                <BlifFlexGridRow>
                    <BlifFlexGridCol>
                        <BlifTypography variant={{size: 'h2'}}>
                            {t(TRANSLATION_KEYS.COMMON.SEARCH)}
                        </BlifTypography>
                    </BlifFlexGridCol>
                </BlifFlexGridRow>
                <BlifSpacer space={2} />
                <BlifFlexGridRow
                    verticalAlign="middle"
                    horizontalAlign="center">
                    <BlifFlexGridCol>
                        <BlifBox
                            variant={{background: 'light'}}
                            bottom={{md: 1}}
                            left={{md: 1}}
                            right={{md: 7}}
                            top={{md: 1}}
                            flex={1}>
                            <FiltersView
                                heading={t(TRANSLATION_KEYS.COMMON.SEARCH)}
                                clickHandler={searchClickHandler}
                                schema={filterSchema}
                                handleInputChange={handleSearchInputChange}
                            />
                        </BlifBox>
                    </BlifFlexGridCol>
                </BlifFlexGridRow>
            </BlifFlexGrid>
            <BlifSpacer space={8} />
            <BlifBox space={4}>
                <BlifFilterableDataTable
                    schema={schema}
                    retrieveData={getSearchTableData}
                    selection={selectionType}
                    dataOnSelectionChange={setSelectedRow}
                    //   resetCurrentPage={resetCurrentPage}
                    translate={t}
                />
            </BlifBox>
        </React.Fragment>
    );
};

export default Search;
