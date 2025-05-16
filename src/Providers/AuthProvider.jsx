import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';
import { auth } from '../Firebase/Firebase.init';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };

    const authData = {
        createUser,
        signInUser
    };
    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    )
};

export default AuthProvider;