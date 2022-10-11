import React, {useState} from 'react';
import './Home.scss';
import useAxiosGet from '../../hooks/useAxiosGet';
import BlifSelectInput from '../Common/Inputs/BlifSelectInput';
import {useTranslation} from 'react-i18next';
import {TRANSLATION_KEYS} from '../../language/TranslationKeys';

let options = [
    {text: '1', value: '1'},
    {text: '2', value: '2'},
    {text: '3', value: '3'},
];
const Home = () => {
    const [showEntriesDropdown, setShowEntriesDropdown] = useState('');
    console.log('showEntriesDropdown', showEntriesDropdown);
    const {t} = useTranslation();

    return (
        <div className="">
            <div className="home-title-root">
                <h4 className="h4">{t(TRANSLATION_KEYS.HOME.HOMEPAGE)}</h4>
            </div>
            <div className="home-entries-dropdown">
                <div className="font-14px">
                    {t(TRANSLATION_KEYS.COMMON.SHOW)}
                </div>
                <BlifSelectInput
                    options={options}
                    value={showEntriesDropdown ?? ''}
                    onChange={(e) => {
                        let value = e.target.value;

                        if (value) {
                            setShowEntriesDropdown(value);
                        }
                    }}
                />
                <div className="font-14px">
                    {t(TRANSLATION_KEYS.COMMON.ENTRIES)}
                </div>
            </div>
        </div>
    );
};

export default Home;
