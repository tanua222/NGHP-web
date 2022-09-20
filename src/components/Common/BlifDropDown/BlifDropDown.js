import {useRef} from 'react';
import useOutsideClick from '../../../hooks/useOutsideClick';
import './BlifDropDown.scss';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {ARRAY_MAP_KEYS} from '../../../utils/commonKeys';

const BlifDropDown = ({
    showDropdownOptions,
    setShowDropdownOptions,
    TITLE_LABEL = '',
    DROPDOWN_OPTIONS = [],
    selectedDropDownValue,
}) => {
    const ref = useRef();

    useOutsideClick(ref, () => {
        if (showDropdownOptions) setShowDropdownOptions(false);
    });

    const toggleDropdown = () => {
        setShowDropdownOptions(!showDropdownOptions);
    };

    return (
        <div
            className="position-relative BlifDropDown-label-flex-end"
            ref={ref}>
            <Tabs
                value={TITLE_LABEL}
                className={`BlifDropDown-tabs ${
                    showDropdownOptions && 'BlifDropDown-activate-green-color'
                }`}>
                <Tab
                    label={TITLE_LABEL}
                    value={TITLE_LABEL}
                    onClick={toggleDropdown}
                />
            </Tabs>

            {showDropdownOptions && (
                <div className="z-ultra-high position-absolute BlifDropDown-root">
                    {DROPDOWN_OPTIONS.map((item, index) => (
                        <div
                            className={`BlifDropDown-child ${
                                selectedDropDownValue ===
                                    item[ARRAY_MAP_KEYS.VALUE] &&
                                'BlifDropDown-highlight-item'
                            }`}
                            key={index}
                            onClick={() =>
                                item[ARRAY_MAP_KEYS.ON_CLICK](
                                    item[ARRAY_MAP_KEYS.VALUE],
                                )
                            }>
                            {item[ARRAY_MAP_KEYS.LABEL]}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BlifDropDown;
