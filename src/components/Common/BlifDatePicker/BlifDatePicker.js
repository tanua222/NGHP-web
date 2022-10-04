/* 
The component (@mui/x-date-pickers or @mui/x-date-pickers-pro) manages the rendering.
The date-library (moment, dayjs, ...) manages the date manipulation.
The adapter (@date-io) exposes your favorite date-library under a unified api used by component.
*/

import {React, useState, useEffect} from 'react';
import {DatePicker, LocalizationProvider} from '@mui/x-date-pickers';
//import {MISCELLANEOUS_KEYS} from '../../../utils/languageKeys/miscellaneousKeys';
import {AdapterMoment} from '@mui/x-date-pickers/AdapterMoment';
import {TextField} from '@mui/material';
import 'moment/locale/fr';
import {useTranslation} from 'react-i18next';
import {isEnglish} from '../../../utils/helperFunctions';

const BlifDatePicker = ({onChange, filterKey}) => {
    const {i18n} = useTranslation();
    const [locale, setLocale] = useState('en');
    const [value, setValue] = useState();
    function changeHandler(val) {
        setValue(val);
        onChange(filterKey, val);
    }

    useEffect(() => {
        const loc = isEnglish(i18n.language) ? 'en' : 'fr';
        setLocale(loc);
    }, [i18n.language]);

    return (
        <LocalizationProvider
            dateAdapter={AdapterMoment}
            adapterLocale={locale}>
            <DatePicker
                value={value}
                onChange={changeHandler}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
};

export default BlifDatePicker;
