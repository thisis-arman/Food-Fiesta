import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [loading,setLoading] =useState(true)
    const [user,setUser] =useState(null)

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, loggedUser=>{
            console.log('logged in user inside the auth state observer', loggedUser)
            setUser(loggedUser)
            setLoading(false)
        })
        return()=>{
            unsubscribe();
        }
    },[])

    


    const authInfo ={
        user,
        createUser,
        signIn,
        logOut,
        loading

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;