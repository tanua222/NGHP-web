import React, {useState, useEffect} from 'react';
import BlifTypography from '../Common/BlifTypography/BlifTypography';
import {ARRAY_MAP_KEYS, FILTER_TYPES} from '../../utils/commonKeys';
import {FiltersView} from '../Common/Filters/Filters';
import BlifBox from '../Common/Box/BlifBox';
import BlifSpacer from '../Common/BlifSpacer/BlifSpacer';

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
import {BUTTON_TITLE} from '../../utils/commonKeys';
import {TranslationKeys} from '../../language/TranslationKeys';

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
                [ARRAY_MAP_KEYS.label]: TranslationKeys.common.FILE,
                [ARRAY_MAP_KEYS.ON_CHANGE]:
                    DOWNLOADS_FORM_SCHEMA_KEYS.FILE_INPUT,
            },
            {
                [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.DATE_INPUT,
                [ARRAY_MAP_KEYS.label]:
                    TranslationKeys.blif_downloads.BLIF_START_DATE,
                [ARRAY_MAP_KEYS.ON_CHANGE]:
                    DOWNLOADS_FORM_SCHEMA_KEYS.START_DATE_INPUT,
            },
            {
                [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.DATE_INPUT,
                [ARRAY_MAP_KEYS.label]:
                    TranslationKeys.blif_downloads.BLIF_END_DATE,
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
                        {t(TranslationKeys.blif_downloads.DOWNLOADS_HEADING)}
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
                            heading={TranslationKeys.common.SEARCH}
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
