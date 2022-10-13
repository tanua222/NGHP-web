import React, {useState, useCallback} from 'react';
import BlifSidebar from '../components/Common/BlifSidebar/BlifSidebar';

export const SidebarContext = React.createContext();

export const SidebarProvider = ({children}) => {
    const [sidebarContent, setSidebarContent] = useState();
    const [sidebarTitle, setSidebarTitle] = useState();

    const closeSidebar = useCallback(() => {
        setSidebarContent();
        setSidebarTitle();
    }, [setSidebarContent, setSidebarTitle]);

    const openSidebar = useCallback(
        (content, options) => {
            setSidebarContent(content);

            if (options) {
                setSidebarTitle(options.title);
            }
        },
        [setSidebarContent, setSidebarTitle],
    );

    return (
        <SidebarContext.Provider value={{openSidebar, closeSidebar}}>
            {children}
            {sidebarContent && (
                <BlifSidebar title={sidebarTitle} onClose={closeSidebar}>
                    {sidebarContent}
                </BlifSidebar>
            )}
        </SidebarContext.Provider>
    );
};
