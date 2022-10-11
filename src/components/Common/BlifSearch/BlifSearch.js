import {Search} from '@telus-uds/ds-allium';
import {useTranslation} from 'react-i18next';
import {isEnglish} from '../../../utils/helperFunctions';

const BlifSearch = ({
    accessibilityLabel,
    copy,
    inactive,
    initialValue,
    onChange,
    onClear,
    onFocus,
    onSubmit,
    placeholder,
    tokens,
    variant,
    value,
}) => {
    const {i18n} = useTranslation();

    return (
        <Search
            accessibilityLabel={accessibilityLabel}
            copy={isEnglish(i18n.language) ? 'en' : 'fr'}
            inactive={inactive}
            initialValue={initialValue}
            onChange={onChange}
            onClear={onClear}
            onFocus={onFocus}
            onSubmit={onSubmit}
            placeholder={placeholder}
            tokens={tokens}
            variant={variant}
            value={value || ''}></Search>
    );
};

export default BlifSearch;
