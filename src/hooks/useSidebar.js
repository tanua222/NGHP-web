import React from 'react';
import {SidebarContext} from '../context/SidebarContext';

export const useSidebar = () => {
    const context = React.useContext(SidebarContext);

    if (!context) {
        throw new Error('useSidebar should be used inside of SidebarProvider');
    }

    return context;
};
