import React from 'react';
import {auth} from './firebase';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
const authenticateUser = async (isSignInForm, auth, email, password) => { 
    try{
    const auth = isSignInForm ? signInWithEmailAndPassword : createUserWithEmailAndPassword;
    const userCredential = await auth(auth, email, password);
    const userData = userCredential.user;
    console.log(userData);
    console.log(userData.uid);
    }
    catch(error)  {
        const errorCode = error.code;
        const errorMessage = error.message;
        return errorCode + error.message;
    }
        return;
}

export default authenticateUser 