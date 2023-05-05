import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase.config';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
// import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    // const navigate =useNavigate()
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

    const googleProvider = new GoogleAuthProvider()
  const handleSignInWithGoogle=()=>{
   return signInWithPopup(auth,googleProvider)
   .then(result =>{
        const loggedUser =result.user;
        console.log(loggedUser)
        // navigate('/')
    })
    .catch(error =>{
        console.log(error)
    })

  }

  const githubProvider =new GithubAuthProvider

  const handleSignInWithGithub =()=>{
    return signInWithPopup (auth,githubProvider)
    .then(result =>{
        const loggedUser =result.user;
        console.log(loggedUser)
        // navigate('/')
    })
    .catch(error =>{
        console.log(error)
    })
  }
    // const currentUser=auth.currentUser;

    const handleUpdateProfile =(user,displayName,photoUrl)=>{
        updateProfile(user ,{
          displayName: displayName,
          photoURL : photoUrl
        })
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
        loading,
        handleSignInWithGoogle,
        handleSignInWithGithub,
        handleUpdateProfile

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;