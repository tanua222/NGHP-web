import React, {useState, useEffect} from 'react';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import 'moment/locale/fr';
import moment from 'moment-timezone';
import {useTranslation} from 'react-i18next';
import {
    BlifDateMode,
    localeCancelLabelMap,
    localeOkayLabelMap,
    clearLabelMap,
    greenTheme,
    getDateInServerZoneAndFormat,
    getGuiDateFormat,
    getDateInGuiZoneAndFormat,
} from './BlifDatePickerConstants';
import {ThemeProvider} from '@material-ui/styles';
import {isEnglish} from '../../../utils/Constants';
import Text from '@tds/core-text';
import {isNullOrUndefined} from '../../Util/Util';

const IVS_DATE_MODE = BlifDateMode.DATE;

// selectedTimeZone should be one of valid moment timezones e.g. 'America/Vancouver' etc
const BlifDate = ({
    dateValue,
    onSelectionChange,
    noInitialDate = false,
    disabled = false,
    inline = false,
    bold = true,
    selectedTimeZone = undefined,
    clearSelectedDate = undefined,
}) => {
    const {i18n} = useTranslation();
    const [locale, setLocale] = useState('en');
    const [selectedDate, setSelectedDate] = useState(
        getDateInGuiZoneAndFormat(
            dateValue,
            IVS_DATE_MODE,
            noInitialDate,
            selectedTimeZone,
        ),
    );

    useEffect(() => {
        disabled &&
            setSelectedDate(
                getDateInGuiZoneAndFormat(
                    dateValue,
                    IVS_DATE_MODE,
                    noInitialDate,
                    selectedTimeZone,
                ),
            );
    }, [dateValue]);

    useEffect(() => {
        if (disabled) return;
        moment.locale(locale);
    }, []);

    useEffect(() => {
        if (disabled) return;
        const loc = isEnglish(i18n.language) ? 'en' : 'fr';
        setLocale(loc);
        moment.locale(loc);
    }, [i18n.language]);

    useEffect(() => {
        if (!isNullOrUndefined(clearSelectedDate)) {
            const selectedDateInCurrTzToUtc = getDateInGuiZoneAndFormat(
                dateValue,
                IVS_DATE_MODE,
                noInitialDate,
                selectedTimeZone,
            );
            setSelectedDate(selectedDateInCurrTzToUtc);
        }
    }, [clearSelectedDate]);

    useEffect(() => {
        if (dateValue != null && disabled) return;
        if (onSelectionChange) {
            const selectedDateInCurrTzToUtc = getDateInServerZoneAndFormat(
                selectedDate,
                IVS_DATE_MODE,
                selectedTimeZone,
            );
            onSelectionChange(selectedDateInCurrTzToUtc);
        }
    }, [selectedDate]);

    const renderDate = () => {
        if (!disabled) {
            return (
                <div>
                    <ThemeProvider theme={greenTheme}>
                        <KeyboardDatePicker
                            style={{width: 225}}
                            value={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            onError={console.log}
                            format={getGuiDateFormat()}
                            cancelLabel={localeCancelLabelMap[locale]}
                            okLabel={localeOkayLabelMap[locale]}
                            clearLabel={clearLabelMap[locale]}
                            // helperText={''}
                            // error={''}
                        />
                    </ThemeProvider>
                </div>
            );
        }

        if (disabled) {
            if (!inline) {
                return (
                    <div>
                        <Text bold={bold}>{selectedDate || ''}</Text>
                    </div>
                );
            } else {
                return <Text bold={bold}>{selectedDate || ''}</Text>;
            }
        }
    };

    return (
        <MuiPickersUtilsProvider
            libInstance={moment}
            utils={MomentUtils}
            locale={locale}>
            {renderDate()}
        </MuiPickersUtilsProvider>
    );
};

export default BlifDate;
