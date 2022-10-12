import React, {useState, useEffect} from 'react';
import BlifTypography from '../Common/BlifTypography/BlifTypography';
import {ARRAY_MAP_KEYS, FILTER_TYPES} from '../../utils/commonKeys';
import {FiltersView} from '../Common/Filters/Filters';
import BlifBox from '../Common/Box/BlifBox';
import BlifSpacer from '../Common/BlifSpacer/BlifSpacer';
import {
    BlifFlexGrid,
    BlifFlexGridRow,
    BlifFlexGridCol,
} from '../Common/BlifFlexGrid/BlifFlexGrid';
import {useTranslation} from 'react-i18next';
import {TRANSLATION_KEYS} from '../../language/TranslationKeys';

//Form Schema
const DOWNLOADS_FORM_SCHEMA_KEYS = {
    FILE_INPUT: 'FILE_INPUT',
    START_DATE_INPUT: 'START_DATE_INPUT',
    END_DATE_INPUT: 'END_DATE_INPUT',
};

const DOWNLOADS_FORM_SCHEMA = {
    [DOWNLOADS_FORM_SCHEMA_KEYS.FILE_INPUT]: '',
    [DOWNLOADS_FORM_SCHEMA_KEYS.START_DATE_INPUT]: '',
    [DOWNLOADS_FORM_SCHEMA_KEYS.END_DATE_INPUT]: '',
};

const Search = () => {
    const {t} = useTranslation();

    const [downloadsFilterQuery, setDownloadsFilterQuery] = useState(
        DOWNLOADS_FORM_SCHEMA,
    );

    const [filterSchema, setFilterSchema] = useState([]);

    useEffect(() => {
        const localFilterSchema = [
            {
                [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.TEXT_INPUT,
                [ARRAY_MAP_KEYS.label]: TRANSLATION_KEYS.COMMON.FILE,
                [ARRAY_MAP_KEYS.ON_CHANGE]:
                    DOWNLOADS_FORM_SCHEMA_KEYS.FILE_INPUT,
            },
            {
                [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.DATE_INPUT,
                [ARRAY_MAP_KEYS.label]:
                    TRANSLATION_KEYS.BLIF_DOWNLOADS.START_DATE,
                [ARRAY_MAP_KEYS.ON_CHANGE]:
                    DOWNLOADS_FORM_SCHEMA_KEYS.START_DATE_INPUT,
            },
            {
                [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.DATE_INPUT,
                [ARRAY_MAP_KEYS.label]:
                    TRANSLATION_KEYS.BLIF_DOWNLOADS.END_DATE,
                [ARRAY_MAP_KEYS.ON_CHANGE]:
                    DOWNLOADS_FORM_SCHEMA_KEYS.END_DATE_INPUT,
            },
        ];

        setFilterSchema(localFilterSchema);
    }, []);

    const handleDownloadsInputChange = (downloadsFilterKey, downloadsVal) => {
        setDownloadsFilterQuery((prev) => ({
            ...prev,
            [downloadsFilterKey]: downloadsVal,
        }));
    };

    useEffect(() => {
        console.log(downloadsFilterQuery);
    }, [downloadsFilterQuery]);

    // search onClick handler
    const searchClickHandler = (e) => {
        e.preventDefault();
        alert('search query');
    };

    const columns = [
        {
            name: TRANSLATION_KEYS.EXCHANGE.ABBREV_SEARCH_FILTER,
            width: 'auto',
            dataProperty: 'abbrev',
            sortable: true,
            //selector: (row) => row.clientId,
            // sortFunction: (a, b) => sortCollatorByKey(a, b, 'clientId'),
        },
        {
            name: TRANSLATION_KEYS.EXCHANGE.NAME_SEARCH_FILTER,
            Width: 'auto',
            dataProperty: 'exchangeFullName',
            sortable: true,
            //selector: (row) => row.groupId || row.clientId,
            // sortFunction: (a, b) => sortCollatorByKey(a, b, 'groupId'),
        },
        {
            name: TRANSLATION_KEYS.EXCHANGE.ABBREVIATION2_SEARCH_FILTER,
            Width: 'auto',
            dataProperty: 'secondAbbrev',
            sortable: true,
            //selector: (row) => row.groupName,
            // sortFunction: (a, b) => sortCollatorByKey(a, b, 'groupName'),
        },
        {
            name: TRANSLATION_KEYS.EXCHANGE.BOOK_SEARCH_FILTER,
            Width: 'auto',
            dataProperty: 'bookNum',
            //selector: (row) => row.clientType,
            sortable: true,
        },
        {
            name: TRANSLATION_KEYS.EXCHANGE.SECTION_SEARCH_FILTER,
            Width: 'auto',
            dataProperty: 'sectionNum',
            sortable: true,
            //selector: (row) => row.clientName,
            // sortFunction: (a, b) => sortCollatorByKey(a, b, 'clientName'),
        },
        {
            name: TRANSLATION_KEYS.EXCHANGE.NPA_SEARCH_FILTER,
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

    return (
        <BlifFlexGrid gutter={false}>
            <BlifFlexGridRow>
                <BlifFlexGridCol>
                    <BlifTypography variant={{size: 'h2'}}>
                        {t(TRANSLATION_KEYS.BLIF_DOWNLOADS.HEADING)}
                    </BlifTypography>
                </BlifFlexGridCol>
            </BlifFlexGridRow>
            <BlifSpacer space={2} />
            <BlifFlexGridRow verticalAlign="middle" horizontalAlign="center">
                <BlifFlexGridCol>
                    <BlifBox
                        variant={{background: 'light'}}
                        bottom={{md: 1}}
                        left={{md: 1}}
                        right={{md: 7}}
                        top={{md: 1}}
                        flex={1}>
                        <FiltersView
                            heading={TRANSLATION_KEYS.COMMON.SEARCH}
                            clickHandler={searchClickHandler}
                            schema={filterSchema}
                            handleInputChange={handleDownloadsInputChange}
                        />
                    </BlifBox>
                </BlifFlexGridCol>
            </BlifFlexGridRow>
        </BlifFlexGrid>
    );
};

export default Search;
