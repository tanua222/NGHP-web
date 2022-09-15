import React, {useContext} from 'react';
// import {UserContext} from '../../context/UserContext';
import {isNullOrUndefined} from '../../Util/Util';
// import usePrivilege from '../Util/usePrivilege';

// by deafult this will disable the children component. props.hide should be true to make it hidden.
const IvsAuthPrivilege = ({
    privilegeName,
    children,
    disable,
    inputUserPrivileges,
}) => {
    const [authorized, setAuthorized] = React.useState(true);
    // const {userPrivileges} = usePrivilege();
    // const {userPrivileges} = useContext(UserContext);
    // Temporarily commented useContext
    const userPrivileges = true;

    React.useEffect(() => {
        let effectivePrivileges = inputUserPrivileges || userPrivileges;
        if (isNullOrUndefined(privilegeName)) {
            setAuthorized(true);
        } else if (effectivePrivileges) {
            let privs = privilegeName.split(',');
            setAuthorized(
                privs.reduce((r, c) => {
                    return r && effectivePrivileges.includes(c);
                }, true),
            );
        } else {
            setAuthorized(false);
        }
    }, [privilegeName, userPrivileges, inputUserPrivileges]);

    return authorized ? (
        <React.Fragment>{children}</React.Fragment>
    ) : disable ? (
        <div
            style={{
                'pointer-events': 'none',
                opacity: '0.7',
                display: 'inline',
            }}>
            {children}
        </div>
    ) : (
        <React.Fragment />
    );
};

export default IvsAuthPrivilege;

export const userHasPrivilege = (userPrivileges, privilege) => {
    if (privilege && !Array.isArray(privilege)) {
        privilege = [privilege];
    }
    return (
        userPrivileges && privilege.every((p1) => userPrivileges.includes(p1))
    );
};
