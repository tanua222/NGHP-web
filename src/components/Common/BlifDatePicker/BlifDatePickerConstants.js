import moment from 'moment-timezone';
import {isNullOrUndefined} from '../../Util/Util';
import {createTheme} from '@material-ui/core';
import BlifGreen from './BlifGreen';

export const BlifDateMode = {
    DATE: 'date',
    DATE_TIME: 'dateTime',
    DATE_READ_ONLY: 'dateReadOnly',
    DATE_TIME_READ_ONLY: 'dateTimeReadOnly',
};

export const tzValues = {
    // current browser timezone
    // Based on discussion with Richard agent timezone/currTZ should always be PST (Canada/Pacific)
    currTz: 'Canada/Pacific',
    // converted to timezone
    serverTimeZone: 'UTC',
    // gui date format for dateTime
    guiDateTimeFormat: 'YYYY-MM-DD HH:mm',
    // gui date format for date
    guiDateFormat: 'YYYY-MM-DD',
    // date format based on server specification
    serverDateTimeFormat: 'YYYY-MM-DDTHH:mm:ss.SSSZ',
    serverDateFormat: 'YYYY-MM-DD',
};

export const localeCancelLabelMap = {
    en: 'cancel',
    fr: 'annuler',
};

export const localeOkayLabelMap = {
    en: 'Ok',
    fr: "d'accord",
};

export const clearLabelMap = {
    en: 'clear',
    fr: 'vider',
};

export const appTzToMomentTzMap = {
    '3:30D': 'Canada/Newfoundland',
    '3:30': 'Canada/Newfoundland',
    '4D': 'Canada/Atlantic',
    4: 'Canada/Atlantic',
    '5D': 'Canada/Eastern',
    5: 'Canada/Eastern',
    '6D': 'Canada/Central',
    6: 'Canada/Central',
    '7D': 'Canada/Mountain',
    7: 'Canada/Mountain',
    '8D': 'Canada/Pacific',
    8: 'Canada/Pacific',
    '9D': 'US/Alaska',
    9: 'US/Alaska',
    '10D': 'US/Hawaii',
    10: 'US/Hawaii',
};

export const greenTheme = createTheme({
    palette: {
        primary: BlifGreen,
    },
});

export const isDateMode = (datePickerMode) => {
    return datePickerMode === 'date' || datePickerMode === 'dateReadOnly';
};

export const isReadOnlyMode = (datePickerMode) => {
    return (
        datePickerMode === 'dateReadOnly' ||
        datePickerMode === 'dateTimeReadOnly'
    );
};

export const getDateInGuiZoneAndFormat = (
    dateValue,
    datePickerMode,
    noInitialDate = false,
    selectedTimeZone = getSelectedTimeZone(),
) => {
    if (noInitialDate && !dateValue) return null;
    selectedTimeZone = appTzToMomentTzMap[selectedTimeZone]
        ? appTzToMomentTzMap[selectedTimeZone]
        : selectedTimeZone;
    // const guiFormat = isDateMode(datePickerMode) ? getGuiDateFormat() : getGuiDateTimeFormat();
    if (isDateMode(datePickerMode)) {
        // Even for converting the date value to IvsDate , we need to first convert it to selectedTimeZone
        // As otherwise a DB date - 2022-02-08 some time stamps i.e. UTC 2022-02-09 some time stamp
        // would show IvsDate as 2022-02-09 but it should show it as 2022-02-08 only
        const currentDateValue = isNullOrUndefined(dateValue)
            ? moment
                  .tz(moment(), selectedTimeZone)
                  .clone()
                  .format(getGuiDateFormat())
            : moment
                  .tz(dateValue, getGuiDateTimeFormat(), getServerTimeZone())
                  .clone()
                  .tz(selectedTimeZone)
                  .format(getGuiDateFormat());
        return currentDateValue;
    } else {
        const currentDateTimeValue = isNullOrUndefined(dateValue)
            ? moment
                  .tz(moment(), selectedTimeZone)
                  .clone()
                  .format(getGuiDateTimeFormat())
            : moment
                  .tz(dateValue, getGuiDateTimeFormat(), getServerTimeZone())
                  .clone()
                  .tz(selectedTimeZone)
                  .format(getGuiDateTimeFormat());
        return currentDateTimeValue;
    }
};

export const getDateInServerZoneAndFormat = (
    selectedDate,
    datePickerMode,
    selectedTimeZone = getSelectedTimeZone(),
) => {
    if (!selectedDate) return '';

    if (!moment(selectedDate).isValid()) return '';
    selectedTimeZone = appTzToMomentTzMap[selectedTimeZone]
        ? appTzToMomentTzMap[selectedTimeZone]
        : selectedTimeZone;
    if (isDateMode(datePickerMode)) {
        const dbDate = moment(selectedDate).format(getGuiDateFormat());
        const selectedDateInCurrTzToUtc = moment
            .tz(dbDate, getGuiDateFormat(), getServerTimeZone())
            .clone()
            .format(getServerDateFormat());
        return selectedDateInCurrTzToUtc;
    } else {
        const dbDate = moment(selectedDate).format(getGuiDateTimeFormat());
        const selectedDateInCurrTzToUtc = moment
            .tz(dbDate, getGuiDateTimeFormat(), selectedTimeZone)
            .clone()
            .utc()
            .format(getServerDateTimeFormat());
        return selectedDateInCurrTzToUtc;
    }
};

export const getDateInGuiFormatForLocal = (
    dateValue,
    noInitialDate = false,
) => {
    if (noInitialDate && !dateValue) return null;
    const currentDateValue = isNullOrUndefined(dateValue)
        ? moment().clone().format(getGuiDateFormat())
        : moment(dateValue).clone().format(getGuiDateFormat());
    return currentDateValue;
};

export const getDateInServerFormatForLocal = (selectedDate) => {
    if (!selectedDate) return '';
    if (!moment(selectedDate).isValid()) return '';
    const selectedDateInCurrTzToUtc = moment(selectedDate)
        .clone()
        .format(getServerDateFormat());
    return selectedDateInCurrTzToUtc;
};

export const getSelectedTimeZone = () => {
    return tzValues.currTz;
};

export const getServerTimeZone = () => {
    return tzValues.serverTimeZone;
};

export const getGuiDateTimeFormat = () => {
    return tzValues.guiDateTimeFormat;
};

export const getGuiDateFormat = () => {
    return tzValues.guiDateFormat;
};

export const getServerDateTimeFormat = () => {
    return tzValues.serverDateTimeFormat;
};

const getServerDateFormat = () => {
    return tzValues.serverDateFormat;
};

// const onValueChangeOfTz = (options, setTzValue, handleSelectedDateChange) => {
//   const tzValue = options.target.value;
//   console.log("onValueChangeOfTz value:" + JSON.stringify(tzValue));
//   setTzValue(tzValue);
//   tzValues.currTz = tzValue;
//   moment.tz.setDefault(tzValue);
// }
