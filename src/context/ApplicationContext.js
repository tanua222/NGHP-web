import React, {createContext, useEffect, useState} from 'react';

export const ApplicationContext = createContext();

export const ApplicationContextComponent = (props) => {
    const [dirtyFields, setDirtyFields] = useState(false);

    return (
        <ApplicationContext.Provider
            value={{
                dirtyFields,
                setDirtyFields,
            }}>
            {props.children}
        </ApplicationContext.Provider>
    );
};
