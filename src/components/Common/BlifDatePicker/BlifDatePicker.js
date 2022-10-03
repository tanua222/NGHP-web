/* 
The component (@mui/x-date-pickers or @mui/x-date-pickers-pro) manages the rendering.
The date-library (moment, dayjs, ...) manages the date manipulation.
The adapter (@date-io) exposes your favorite date-library under a unified api used by component.
*/

import {React, useState, useEffect} from 'react';

import {DatePicker, LocalizationProvider, bgBG} from '@mui/x-date-pickers';
import {AdapterMoment} from '@mui/x-date-pickers/AdapterMoment';
import {TextField} from '@mui/material';

const BlifDatePicker = ({onChange, filterKey}) => {
    const [value, setValue] = useState();
    function changeHandler(val) {
        setValue(val);
        onChange(filterKey, val);
    }
    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker
                value={value}
                onChange={changeHandler}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
};

export default BlifDatePicker;
