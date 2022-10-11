import React, {useState, useEffect} from 'react';
import BlifTypography from '../Common/BlifTypography/BlifTypography';
import {ARRAY_MAP_KEYS, FILTER_TYPES} from '../../utils/commonKeys';
import {FiltersView} from '../Common/Filters/Filters';
import BlifBox from '../Common/Box/BlifBox';
import BlifSpacer from '../Common/BlifSpacer/BlifSpacer';
import {TranslationKeys} from '../../language/TranslationKeys';
import {useTranslation} from 'react-i18next';
import dummyTableData from './dummyTableData.json';
import BlifDataTableClient from '../Common/BlifDataTable/BlifDataTableClient';
import {
    BlifFlexGrid,
    BlifFlexGridRow,
    BlifFlexGridCol,
} from '../Common/BlifFlexGrid/BlifFlexGrid';

//Form Schema
const EXCHANGES_FORM_SCHEMA_KEYS = {
    ABBREV_INPUT: 'ABBREV_INPUT',
    NAME_INPUT: 'NAME_INPUT',
    ABBREVIATION2_INPUT: 'ABBREVIATION2_INPUT',
    BOOK_INPUT: 'BOOK_INPUT',
    SECTION_INPUT: 'SECTION_INPUT',
    NPA_INPUT: 'NPA_INPUT',
};

const EXCHANGES_FORM_SCHEMA = {
    [EXCHANGES_FORM_SCHEMA_KEYS.ABBREV_INPUT]: '',
    [EXCHANGES_FORM_SCHEMA_KEYS.NAME_INPUT]: '',
    [EXCHANGES_FORM_SCHEMA_KEYS.ABBREVIATION2_INPUT]: '',
    [EXCHANGES_FORM_SCHEMA_KEYS.BOOK_INPUT]: '',
    [EXCHANGES_FORM_SCHEMA_KEYS.SECTION_INPUT]: '',
    [EXCHANGES_FORM_SCHEMA_KEYS.NPA_INPUT]: '',
};

const Search = () => {
    const {t} = useTranslation();

    const [exchangesFilterQuery, setExchangesFilterQuery] = useState(
        EXCHANGES_FORM_SCHEMA,
    );

    const [filterSchema, setFilterSchema] = useState([]);
    const [selectedRow, setSelectedRow] = useState([]);
    // const selectionType = 'multi';
    const search = true;

    useEffect(() => {
        const localFilterSchema = [
            {
                [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.TEXT_INPUT,
                [ARRAY_MAP_KEYS.label]:
                    TranslationKeys.exchange.ABBREV_SEARCH_FILTER,
                [ARRAY_MAP_KEYS.ON_CHANGE]:
                    EXCHANGES_FORM_SCHEMA_KEYS.ABBREV_INPUT,
            },
            {
                [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.TEXT_INPUT,
                [ARRAY_MAP_KEYS.label]:
                    TranslationKeys.exchange.NAME_SEARCH_FILTER,
                [ARRAY_MAP_KEYS.ON_CHANGE]:
                    EXCHANGES_FORM_SCHEMA_KEYS.NAME_INPUT,
            },
            {
                [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.TEXT_INPUT,
                [ARRAY_MAP_KEYS.label]:
                    TranslationKeys.exchange.ABBREVIATION2_SEARCH_FILTER,
                [ARRAY_MAP_KEYS.ON_CHANGE]:
                    EXCHANGES_FORM_SCHEMA_KEYS.ABBREVIATION2_INPUT,
            },
            {
                [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.TEXT_INPUT,
                [ARRAY_MAP_KEYS.label]:
                    TranslationKeys.exchange.BOOK_SEARCH_FILTER,
                [ARRAY_MAP_KEYS.ON_CHANGE]:
                    EXCHANGES_FORM_SCHEMA_KEYS.BOOK_INPUT,
            },
            {
                [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.TEXT_INPUT,
                [ARRAY_MAP_KEYS.label]:
                    TranslationKeys.exchange.SECTION_SEARCH_FILTER,
                [ARRAY_MAP_KEYS.ON_CHANGE]:
                    EXCHANGES_FORM_SCHEMA_KEYS.SECTION_INPUT,
            },
            {
                [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.TEXT_INPUT,
                [ARRAY_MAP_KEYS.label]:
                    TranslationKeys.exchange.NPA_SEARCH_FILTER,
                [ARRAY_MAP_KEYS.ON_CHANGE]:
                    EXCHANGES_FORM_SCHEMA_KEYS.NPA_INPUT,
            },
        ];

        setFilterSchema(localFilterSchema);
    }, []);

    const handleExchangesInputChange = (exchangesFilterKey, exchangesVal) => {
        setExchangesFilterQuery((prev) => ({
            ...prev,
            [exchangesFilterKey]: exchangesVal,
        }));
    };

    useEffect(() => {
        console.log(exchangesFilterQuery);
    }, [exchangesFilterQuery]);

    // search onClick handler
    const searchClickHandler = (e) => {
        e.preventDefault();
        alert('search query');
    };

    const columns = [
        {
            name: 'Abbrev',
            width: 'auto',
            dataProperty: 'abbrev',
            sortable: true,
            //selector: (row) => row.clientId,
            // sortFunction: (a, b) => sortCollatorByKey(a, b, 'clientId'),
        },
        {
            name: 'Name',
            Width: 'auto',
            dataProperty: 'exchangeFullName',
            sortable: true,
            //selector: (row) => row.groupId || row.clientId,
            // sortFunction: (a, b) => sortCollatorByKey(a, b, 'groupId'),
        },
        {
            name: 'Abbreviation 2',
            Width: 'auto',
            dataProperty: 'secondAbbrev',
            sortable: true,
            //selector: (row) => row.groupName,
            // sortFunction: (a, b) => sortCollatorByKey(a, b, 'groupName'),
        },
        {
            name: 'Book#',
            Width: 'auto',
            dataProperty: 'bookNum',
            //selector: (row) => row.clientType,
            sortable: true,
        },
        {
            name: 'Section#',
            Width: 'auto',
            dataProperty: 'sectionNum',
            sortable: true,
            //selector: (row) => row.clientName,
            // sortFunction: (a, b) => sortCollatorByKey(a, b, 'clientName'),
        },
        {
            name: 'NPA',
            Width: 'auto',
            dataProperty: 'npa',
            sortable: true,
            // selector: (row) => row.clientName,

            // sortFunction: (a, b) => sortCollatorByKey(a, b, 'reportId'),
        },
    ];

    let schema = {
        idProperty: 'abbrev',
        idPropertySortOrder: 'asc',
        headers: columns,
    };

    //get exchanges data for table
    const getExchangesTableData = (params, setTableData) => {
        if (!exchangesFilterQuery) {
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
                            {t(TranslationKeys.exchange.EXCHANGES_HEADING)}
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
                                heading={t(
                                    TranslationKeys.exchange
                                        .ADD_EXCHANGE_BUTTON_TITLE,
                                )}
                                clickHandler={searchClickHandler}
                                schema={filterSchema}
                                handleInputChange={handleExchangesInputChange}
                            />
                        </BlifBox>
                    </BlifFlexGridCol>
                </BlifFlexGridRow>
            </BlifFlexGrid>
            <BlifSpacer space={8} />
            <BlifBox space={4}>
                <BlifDataTableClient
                    schema={schema}
                    retrieveData={getExchangesTableData}
                    search={search}
                    // selection={selectionType}
                    //dataOnSelectionChange={setSelectedRow}
                    //   resetCurrentPage={resetCurrentPage}
                    // translate
                />
            </BlifBox>
        </React.Fragment>
    );
};

export default Search;
