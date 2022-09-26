import React, {useState, useEffect} from 'react';
import {
    MuiPickersUtilsProvider,
    KeyboardDateTimePicker,
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
    getDateInGuiZoneAndFormat,
    getGuiDateTimeFormat,
} from './BlifDatePickerConstants';
import {ThemeProvider} from '@material-ui/styles';
import {isEnglish} from '../../../utils/Constants';
import Text from '@tds/core-text';

const IVS_DATE_TIME_MODE = BlifDateMode.DATE_TIME;

// selectedTimeZone should be one of valid moment timezones e.g. 'America/Vancouver' etc
const BlifDateTime = ({
    dateValue,
    onSelectionChange,
    noInitialDate = false,
    disabled = false,
    inline = false,
    bold = true,
    selectedTimeZone = undefined,
}) => {
    const {i18n} = useTranslation();
    const [locale, setLocale] = useState('en');
    const [selectedDate, setSelectedDate] = useState(
        getDateInGuiZoneAndFormat(
            dateValue,
            IVS_DATE_TIME_MODE,
            noInitialDate,
            selectedTimeZone,
        ),
    );

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
        setSelectedDate(
            getDateInGuiZoneAndFormat(
                dateValue,
                IVS_DATE_TIME_MODE,
                noInitialDate,
                selectedTimeZone,
            ),
        );
    }, [dateValue, selectedTimeZone]);

    useEffect(() => {
        if (dateValue !== null && disabled) return;
        if (onSelectionChange) {
            const selectedDateInCurrTzToUtc = getDateInServerZoneAndFormat(
                selectedDate,
                IVS_DATE_TIME_MODE,
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
                        <KeyboardDateTimePicker
                            style={{width: 225}}
                            value={selectedDate}
                            // onChange={date => selectedDate != date ? setSelectedDate(date) : selectedDate }
                            onChange={(date) => setSelectedDate(date)}
                            onError={console.log}
                            format={getGuiDateTimeFormat()}
                            cancelLabel={localeCancelLabelMap[locale]}
                            okLabel={localeOkayLabelMap[locale]}
                            clearLabel={clearLabelMap[locale]}
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

export default BlifDateTime;
