import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {ARRAY_MAP_KEYS} from '../../../utils/commonKeys';
import './BlifTabs.scss';

const BlifTabs = ({options = [], value, handleChange}) => {
    return (
        <>
            <Tabs
                value={value}
                onChange={handleChange}
                className="blifTabs-tabs">
                {options &&
                    options.map((item) => (
                        <Tab
                            label={item[ARRAY_MAP_KEYS.label]}
                            value={item[ARRAY_MAP_KEYS.value]}
                            key={item[ARRAY_MAP_KEYS.ID]}
                        />
                    ))}
            </Tabs>
        </>
    );
};

export default BlifTabs;
