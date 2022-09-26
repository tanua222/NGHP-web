import React, {useState} from 'react';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import 'moment/locale/fr';
import moment from 'moment-timezone';
import BlifDate from './BlifDate';
import BlifDateTime from './BlifDateTime';

// const onValueChangeOfTz = (options, setTzValue, handleSelectedDateChange) => {
//   const tzValue = options.target.value;
//   console.log("onValueChangeOfTz value:" + JSON.stringify(tzValue));
//   setTzValue(tzValue);
//   tzValues.currTz = tzValue;
//   moment.tz.setDefault(tzValue);
// }

const BlifDatePicker = ({
    localeVal,
    readOnly,
    date,
    datetime,
    dateValue,
    onSelectionChange,
}) => {
    const renderDate = () => {
        if (date) {
            return (
                <BlifDate
                    dateValue={dateValue}
                    onSelectionChange={onSelectionChange}
                    noInitialDate={true}
                />
            );
        }

        if (datetime) {
            return (
                <BlifDateTime
                    dateValue={dateValue}
                    onSelectionChange={onSelectionChange}
                />
            );
        }

        if (readOnly) {
            return (
                <BlifDateTime
                    disabled={true}
                    inline={true}
                    dateValue={dateValue}
                />
            );
        }
    };

    const [locale] = useState('fr' === localeVal ? 'fr' : 'en');

    moment.locale(locale);

    return (
        <MuiPickersUtilsProvider
            libInstance={moment}
            utils={MomentUtils}
            locale={locale}>
            {renderDate()}
        </MuiPickersUtilsProvider>
    );
};

export default BlifDatePicker;
