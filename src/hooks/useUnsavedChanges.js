import {useContext} from 'react';
import {ApplicationContext} from '../context/ApplicationContext';

const useUnsavedChanges = () => {
    const {setDirtyFields} = useContext(ApplicationContext);

    const setDirty = (isDirty) => {
        setDirtyFields(isDirty);
    };

    const resetDirty = () => {
        setDirtyFields(false);
    };

    return {setDirty, resetDirty};
};

export default useUnsavedChanges;
