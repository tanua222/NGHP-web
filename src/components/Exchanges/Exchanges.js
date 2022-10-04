import React, {useState, useEffect} from 'react';
import BlifTypography from '../Common/BlifTypography/BlifTypography';
import {ARRAY_MAP_KEYS, FILTER_TYPES} from '../../utils/commonKeys';
import {FiltersView} from '../Common/Filters/Filters';
import BlifBox from '../Common/Box/BlifBox';
import BlifSpacer from '../Common/BlifSpacer/BlifSpacer';

import {
    EXCHANGES_LANGUAGE_KEYS,
    ABBREV_SEARCH_FILTER_LANGUAGE_KEYS,
    NAME_SEARCH_FILTER_LANGUAGE_KEYS,
    ABBREVIATION2_SEARCH_FILTER_LANGUAGE_KEYS,
    BOOK_SEARCH_FILTER_LANGUAGE_KEYS,
    SECTION_SEARCH_FILTER_LANGUAGE_KEYS,
    NPA_SEARCH_FILTER_LANGUAGE_KEYS,
} from '../../utils/languageKeys/components/exchangesKeys';
import {
    BlifFlexGrid,
    BlifFlexGridRow,
    BlifFlexGridCol,
} from '../Common/BlifFlexGrid/BlifFlexGrid';
import {useTranslation} from 'react-i18next';
import {BUTTON_TITLE} from '../../utils/commonKeys';
import {TranslationKeys} from '../../language/TranslationKeys';
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

    useEffect(() => {
        const localFilterSchema = [
            {
                [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.TEXT_INPUT,
                [ARRAY_MAP_KEYS.label]:
                    ABBREV_SEARCH_FILTER_LANGUAGE_KEYS.LABEL,
                [ARRAY_MAP_KEYS.ON_CHANGE]:
                    EXCHANGES_FORM_SCHEMA_KEYS.ABBREV_INPUT,
            },
            {
                [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.TEXT_INPUT,
                [ARRAY_MAP_KEYS.label]: NAME_SEARCH_FILTER_LANGUAGE_KEYS.LABEL,
                [ARRAY_MAP_KEYS.ON_CHANGE]:
                    EXCHANGES_FORM_SCHEMA_KEYS.NAME_INPUT,
            },
            {
                [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.TEXT_INPUT,
                [ARRAY_MAP_KEYS.label]:
                    ABBREVIATION2_SEARCH_FILTER_LANGUAGE_KEYS.LABEL,
                [ARRAY_MAP_KEYS.ON_CHANGE]:
                    EXCHANGES_FORM_SCHEMA_KEYS.ABBREVIATION2_INPUT,
            },
            {
                [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.TEXT_INPUT,
                [ARRAY_MAP_KEYS.label]: BOOK_SEARCH_FILTER_LANGUAGE_KEYS.LABEL,
                [ARRAY_MAP_KEYS.ON_CHANGE]:
                    EXCHANGES_FORM_SCHEMA_KEYS.BOOK_INPUT,
            },
            {
                [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.TEXT_INPUT,
                [ARRAY_MAP_KEYS.label]:
                    SECTION_SEARCH_FILTER_LANGUAGE_KEYS.LABEL,
                [ARRAY_MAP_KEYS.ON_CHANGE]:
                    EXCHANGES_FORM_SCHEMA_KEYS.SECTION_INPUT,
            },
            {
                [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.TEXT_INPUT,
                [ARRAY_MAP_KEYS.label]: NPA_SEARCH_FILTER_LANGUAGE_KEYS.LABEL,
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
    return (
        <BlifFlexGrid gutter={false}>
            <BlifFlexGridRow>
                <BlifFlexGridCol>
                    <BlifTypography variant={{size: 'h2'}}>
                        {t(TranslationKeys.exchange.EXCHANGES_HEADING)}
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
                            heading={BUTTON_TITLE.ADD_EXCHANGE_BUTTON_TITLE}
                            clickHandler={searchClickHandler}
                            schema={filterSchema}
                            handleInputChange={handleExchangesInputChange}
                        />
                    </BlifBox>
                </BlifFlexGridCol>
            </BlifFlexGridRow>
        </BlifFlexGrid>
    );
};

export default Search;
