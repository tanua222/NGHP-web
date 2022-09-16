import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {LABEL_VALUE_INDEX_KEYS} from '../../../utils/commonKeys';
import './BlifTabs.scss';

const BlifTabs = ({options = [], value, handleChange}) => {
    return (
        <>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                className="blifTabs-tabs">
                {options &&
                    options.map((item, index) => (
                        <Tab
                            label={item[LABEL_VALUE_INDEX_KEYS.LABEL]}
                            value={item[LABEL_VALUE_INDEX_KEYS.VALUE]}
                            key={item[LABEL_VALUE_INDEX_KEYS.ID]}
                        />
                    ))}
            </Tabs>
        </>
    );
};

export default BlifTabs;
