import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import validateForm from  "../utils/validateForm";
import {auth} from "../utils/firebase"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import {BG_URL, USER_AVATAR}  from "../utils/constant"


const Login = () => {
  

const navigate = useNavigate();
const[isSignInForm,setisSignInForm]=useState(true);
const [errMsg, seterrMsg] = useState(null);

const name =useRef(null);
const email =useRef(null);
const password =useRef(null);


const handleToggle = () =>{
  seterrMsg(null);
  setisSignInForm(!isSignInForm);
}

const validate= () => {
  let msg = null;
  let validate_name = (name.current?.value !== '') ? name.current?.value : null ;
  let validate_email = (email.current?.value !== '') ? email.current?.value : null ;
  let validate_password = (password.current?.value !== '') ? password.current?.value : null;
  msg = validateForm(validate_email,validate_password,validate_name);   
  if(msg !== null) return seterrMsg(msg);
  if(!isSignInForm){
    createUserWithEmailAndPassword(auth, validate_email, validate_password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName:validate_name, photoURL: USER_AVATAR
        }).then(() => {
          
        }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          return seterrMsg(errorCode + errorMessage);
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return seterrMsg(errorCode + errorMessage);
      });
  }
  else{
    signInWithEmailAndPassword(auth, validate_email, validate_password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/browse")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return seterrMsg(errorCode + errorMessage);
      });
  }
}


  return (
   
  //authenticate user

    <div>
    <Header />
    <div className="absolute">
      <img
        src={BG_URL}
        alt="logo"
      />
    </div>
    <form onSubmit={(e)=>{e.preventDefault()}} className="w-3/12 absolute p-12 bg-black my-32 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
      <h1 className="font-bold text-3xl py-4">
        {isSignInForm ? 'Sign In' : 'Sign Up'}
      </h1>
      { !isSignInForm ?
       (
        <>
        <input
          ref={name}
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 w-full bg-gray-700"
        />
      </>
      ) : null }
      <input
        ref={email}
        type="text"
        placeholder="Email Address"
        className="p-4 my-4 w-full bg-gray-700"
      />
      <input
        ref={password}
        type="password"
        placeholder="Password"
        className="p-4 my-4 w-full bg-gray-700"
      />
      <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={()=>{validate()}}>
      {isSignInForm ? 'Sign In' : 'Sign Up'}
      </button>
      <p className="text-red-500 font-bold text-lg py-2">{errMsg}</p>
      <p className="py-4 cursor-pointer" onClick={()=>{handleToggle()}}>
      {isSignInForm ? 'New to Netflix? Sign Up Now' : 'Already Registered? Sign In Now'}
      </p>
    </form>
  </div>
  )
}

export default Login