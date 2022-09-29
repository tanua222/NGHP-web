import React, {useState, useEffect} from 'react';
import BlifTypography from '../Common/BlifTypography/BlifTypography';
import {ARRAY_MAP_KEYS, FILTER_TYPES, ZERO_INDEX} from '../../utils/commonKeys';
import {FiltersView} from '../Common/Filters/Filters';
import BlifBox from '../Common/Box/BlifBox';
import {
    DOWNLOADS_LANGUAGE_KEYS,
    FILE_SEARCH_FILTER_LANGUAGE_KEYS,
    START_DATE_FILTER_LANGUAGE_KEYS,
    END_DATE_FILTER_LANGUAGE_KEYS,
} from '../../utils/languageKeys/components/downloadsKeys';
import {
    BlifFlexGrid,
    BlifFlexGridRow,
    BlifFlexGridCol,
} from '../Common/BlifFlexGrid/BlifFlexGrid';
import {useTranslation} from 'react-i18next';

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
                [ARRAY_MAP_KEYS.label]: FILE_SEARCH_FILTER_LANGUAGE_KEYS.LABEL,
                [ARRAY_MAP_KEYS.ON_CHANGE]:
                    DOWNLOADS_FORM_SCHEMA_KEYS.FILE_INPUT,
            },
            {
                [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.DATE_INPUT,
                [ARRAY_MAP_KEYS.label]: START_DATE_FILTER_LANGUAGE_KEYS.LABEL,
                [ARRAY_MAP_KEYS.ON_CHANGE]:
                    DOWNLOADS_FORM_SCHEMA_KEYS.START_DATE_INPUT,
            },
            {
                [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.DATE_INPUT,
                [ARRAY_MAP_KEYS.label]: END_DATE_FILTER_LANGUAGE_KEYS.LABEL,
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
    return (
        <BlifFlexGrid gutter={false}>
            <BlifFlexGridRow>
                <BlifFlexGridCol>
                    <BlifTypography variant={{size: 'h2'}}>
                        {t(DOWNLOADS_LANGUAGE_KEYS.DOWNLOADS_HEADING)}
                    </BlifTypography>
                </BlifFlexGridCol>
            </BlifFlexGridRow>
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
                            heading={'Search'}
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
