import {BUTTON_TITLE} from '../utils/commonKeys';
import {MISCELLANEOUS_KEYS} from '../utils/languageKeys/miscellaneousKeys';
import {TRANSLATION_KEYS} from './TranslationKeys';

export const EnglishTranslations = {
    //Common:
    [TRANSLATION_KEYS.COMMON.MODE]: 'Mode',
    [TRANSLATION_KEYS.COMMON.LANGUAGE]: 'Language',
    [TRANSLATION_KEYS.COMMON.TELUS]: 'TELUS',
    [TRANSLATION_KEYS.COMMON.ENGLISH]: 'ENGLISH',
    [TRANSLATION_KEYS.COMMON.FRENCH]: 'FRENCH',
    [TRANSLATION_KEYS.COMMON.en]: 'en',
    [TRANSLATION_KEYS.COMMON.fn]: 'fn',
    [TRANSLATION_KEYS.COMMON.SHOW]: 'Show',
    [TRANSLATION_KEYS.COMMON.ENTRIES]: 'entries',
    [TRANSLATION_KEYS.COMMON.SEARCH]: 'Search',
    [TRANSLATION_KEYS.COMMON.REJECTS]: 'Rejects',
    [TRANSLATION_KEYS.COMMON.BRG_INDICATOR]: 'BRG Indicator',
    [TRANSLATION_KEYS.COMMON.FILE]: 'File',
    [TRANSLATION_KEYS.COMMON.PROVINCE]: 'Province',
    [TRANSLATION_KEYS.COMMON.START_DATE]: 'Start Date',
    [TRANSLATION_KEYS.COMMON.END_DATE]: 'End Date',
    [MISCELLANEOUS_KEYS.DATA_TABLE_ITEMS_PER_PAGE]: 'Items per page',
    [BUTTON_TITLE.UPDATE_BUTTON_TITLE]: 'Update',
    [BUTTON_TITLE.DELETE_BUTTON_TITLE]: 'Delete',
    //Header:
    [TRANSLATION_KEYS.HEADER.HOME]: 'Home',
    [TRANSLATION_KEYS.HEADER.PRE_CHECK]: 'Pre-Check',
    [TRANSLATION_KEYS.HEADER.SEARCH]: 'Search',
    [TRANSLATION_KEYS.HEADER.BLIF_DOWNLOADS]: 'Blif Downloads',
    [TRANSLATION_KEYS.HEADER.EXCHANGES]: 'Exchanges',
    //Home:
    [TRANSLATION_KEYS.HOME.HOMEPAGE]: 'Homepage',
    [TRANSLATION_KEYS.HOME.FILE]: 'File',
    [TRANSLATION_KEYS.HOME.DATE_DOWNLOADED]: 'Date Downloaded',
    [TRANSLATION_KEYS.HOME.NEW]: 'New',
    [TRANSLATION_KEYS.HOME.AWAITING_PRE_CHECK]: 'Awaiting Pre-Check',
    [TRANSLATION_KEYS.HOME.AWAITING_BLIF_TO_DIRECTION]:
        'Awaiting Blif to Direction',
    [TRANSLATION_KEYS.HOME.LOCKED_BY_AUTOMATION]: 'Locked by Automation',
    [TRANSLATION_KEYS.HOME.FAILED_BLIF_TO_DIRECTION]:
        'Failed Blif to Direction',
    [TRANSLATION_KEYS.HOME.ACCEPTED]: 'Accepted',
    [TRANSLATION_KEYS.HOME.REJECTED]: 'Rejected',
    [TRANSLATION_KEYS.HOME.TOTAL_PROCESSED]: 'Total Processed',
    [TRANSLATION_KEYS.HOME.TOTAL_RECEIVED_FROM_SERVICE_PROVIDER]:
        'Total Received from Service Provider',
    //PreCheck:
    [TRANSLATION_KEYS.PRECHECK.HEADING]: 'Pre-Check',
    [TRANSLATION_KEYS.PRECHECK.PRECHECK_PROVINCE]: 'Province',
    [TRANSLATION_KEYS.PRECHECK.CLEC]: 'CLEC',
    [TRANSLATION_KEYS.PRECHECK.ALL]: 'ALL',
    [TRANSLATION_KEYS.PRECHECK.QC]: 'QC',
    [TRANSLATION_KEYS.PRECHECK.FIDO]: 'FIDO',
    [TRANSLATION_KEYS.PRECHECK.BUSINESS]: 'Business',
    [TRANSLATION_KEYS.PRECHECK.RESIDENTIAL]: 'Residential',
    [TRANSLATION_KEYS.PRECHECK.ONLY_REJECTS]: 'Only Rejects',
    [TRANSLATION_KEYS.PRECHECK.NO_REJECTS]: 'No Rejects',
    [TRANSLATION_KEYS.PRECHECK.PRE_CHECK]: 'PRE-CHECK',
    [TRANSLATION_KEYS.PRECHECK.EXCH]: 'EXCH',
    [TRANSLATION_KEYS.PRECHECK.SL]: 'SL',
    [TRANSLATION_KEYS.PRECHECK.SPID]: 'SPID',
    [TRANSLATION_KEYS.PRECHECK.ACTION]: 'AI',
    [TRANSLATION_KEYS.PRECHECK.NL]: 'NL',
    [TRANSLATION_KEYS.PRECHECK.BRG]: 'BRG',
    [TRANSLATION_KEYS.PRECHECK.NAME]: 'Name',
    [TRANSLATION_KEYS.PRECHECK.LOCATION]: 'Location',
    [TRANSLATION_KEYS.PRECHECK.ADDRESS]: 'Address',
    [TRANSLATION_KEYS.PRECHECK.CFC]: 'CFC',
    [TRANSLATION_KEYS.PRECHECK.REJECT_CODE]: 'Reject Code',
    [TRANSLATION_KEYS.PRECHECK.POLICY_CODE]: 'Policy Code',
    [TRANSLATION_KEYS.PRECHECK.NUMBER]: 'Number',
    //Search:
    [TRANSLATION_KEYS.SEARCH.PHONE_NUMBER_FILTER_LANGUAGE]: 'Phone Number',
    [TRANSLATION_KEYS.SEARCH.BUS_OPERATING_NAME_FILTER_LANGUAGE]:
        'Bus Operating Name',
    [TRANSLATION_KEYS.SEARCH.ACTION_INDICATOR_FILTER_LANGUAGE]:
        'Action Indicator',
    [TRANSLATION_KEYS.SEARCH.INTERNAL_STATUS_FILTER_LANGUAGE]:
        'Internal Status',
    [TRANSLATION_KEYS.SEARCH.TABLE_CREATED_BY]: 'Created By',
    [TRANSLATION_KEYS.SEARCH.TABLE_IS]: 'IS',
    [TRANSLATION_KEYS.SEARCH.ACTION_INDICATOR_VALUE_A]: 'A',
    [TRANSLATION_KEYS.SEARCH.ACTION_INDICATOR_VALUE_OI]: 'O/I',
    [TRANSLATION_KEYS.SEARCH.ACTION_INDICATOR_VALUE_D]: 'D',
    [TRANSLATION_KEYS.SEARCH.INTERNAL_STATUS_VALUE_0000]: '0000 - New',
    [TRANSLATION_KEYS.SEARCH.INTERNAL_STATUS_VALUE_0001]:
        '0001 - Awaiting manual pre-check',
    [TRANSLATION_KEYS.SEARCH.INTERNAL_STATUS_VALUE_0002]:
        '0002 - Awaiting BLIF to Direction automation',
    [TRANSLATION_KEYS.SEARCH.INTERNAL_STATUS_VALUE_0010]:
        '0010 - Locked by automation',
    [TRANSLATION_KEYS.SEARCH.INTERNAL_STATUS_VALUE_0015]:
        '0015 - Failed BLIF to Direction automation',
    [TRANSLATION_KEYS.SEARCH.INTERNAL_STATUS_VALUE_0031]: '0031 - rejected',
    [TRANSLATION_KEYS.SEARCH.INTERNAL_STATUS_VALUE_0032]: '0032 - accepted',
    [TRANSLATION_KEYS.SEARCH.INTERNAL_STATUS_VALUE_0050]: '0050 - completed',
    [TRANSLATION_KEYS.SEARCH.TABLE_COMMENT]: 'Comments',
    //Blif Downloads:
    [TRANSLATION_KEYS.BLIF_DOWNLOADS.HEADING]: 'Telus Downloads',
    [TRANSLATION_KEYS.BLIF_DOWNLOADS.START_DATE]: 'Start Date (Download)',
    [TRANSLATION_KEYS.BLIF_DOWNLOADS.END_DATE]: 'End Date (Download)',
    [TRANSLATION_KEYS.BLIF_DOWNLOADS.FILE_NAME]: 'File Name',
    [TRANSLATION_KEYS.BLIF_DOWNLOADS.DOWNLOAD_TIME]: 'Download Time',
    [TRANSLATION_KEYS.BLIF_DOWNLOADS.STATUS]: 'Status',
    [TRANSLATION_KEYS.BLIF_DOWNLOADS.ALL_DOWNLOADED_FILES]:
        'All Downloaded Files',
    //Exchange:
    [TRANSLATION_KEYS.EXCHANGE.HEADING]: 'Exchanges',
    [TRANSLATION_KEYS.EXCHANGE.ABBREV_SEARCH_FILTER]: 'Abbrev',
    [TRANSLATION_KEYS.EXCHANGE.NAME_SEARCH_FILTER]: 'Name',
    [TRANSLATION_KEYS.EXCHANGE.ABBREVIATION2_SEARCH_FILTER]: 'Abbreviation 2',
    [TRANSLATION_KEYS.EXCHANGE.BOOK_SEARCH_FILTER]: 'Book#',
    [TRANSLATION_KEYS.EXCHANGE.SECTION_SEARCH_FILTER]: 'Section#',
    [TRANSLATION_KEYS.EXCHANGE.NPA_SEARCH_FILTER]: 'NPA',
    [TRANSLATION_KEYS.EXCHANGE.ADD_EXCHANGE_BUTTON_TITLE]: 'Add Exchange',
};
