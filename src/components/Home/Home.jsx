import React, {useState} from 'react';
import './Home.scss';
import useAxiosGet from '../../hooks/useAxiosGet';

const DUMMY_OPTIONS = [
    {label: 'Audi', value: 'Audi'},
    {label: 'BMW', value: 'BMW'},
    {label: 'MER', value: 'MER'},
];

const Home = () => {
    const [showEntriesDropdown, setShowEntriesDropdown] = useState({});
    console.log('showEntriesDropdown', showEntriesDropdown);

    return (
        <div className="">
            <div className="home-title-root">
                <h4>Homepage</h4>
            </div>
        </div>
    );
};

export default Home;
