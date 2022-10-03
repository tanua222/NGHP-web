/* 
The component (@mui/x-date-pickers or @mui/x-date-pickers-pro) manages the rendering.
The date-library (moment, dayjs, ...) manages the date manipulation.
The adapter (@date-io) exposes your favorite date-library under a unified api used by component.
*/

import {React, useState, useEffect} from 'react';
import {DatePicker, LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterMoment} from '@mui/x-date-pickers/AdapterMoment';
import {TextField} from '@mui/material';

const BlifDatePicker = ({handleInputChange}) => {
    const [value, setValue] = useState();

    // const clickHandler = (handleInputChange, val) => {
    //     setValue(val);
    //     // handleInputChange(val);
    // };

    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker
                value={value}
                onChange={(val) => setValue(val)}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
};

export default BlifDatePicker;
