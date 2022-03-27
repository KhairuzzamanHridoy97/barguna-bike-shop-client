import React, { createContext } from 'react';
import useFirebase from '../../hooks/useFirebase';

export const AuthConext= createContext(null)

const AuthProvider = ({children}) => {
    const allContext = useFirebase()
    return (
        <AuthConext.Provider value={allContext}>
            {children}
        </AuthConext.Provider>
    );
};

export default AuthProvider;