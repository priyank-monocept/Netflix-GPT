import React, {useEffect, useState} from 'react'
import {auth} from "../utils/firebase"
import {useDispatch,useSelector} from 'react-redux'
import { onAuthStateChanged, signOut} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { setUser, unsetUser } from '../utils/authSlice'
import { LOGO_URL } from "../utils/constant";
import {toggleGptSearchView} from "../utils/gptSlice";
const Header = () => {
const [isLoading, setIsLoading] = useState(true);

const navigate = useNavigate();
const dispatch = useDispatch();
const {user, is_authenticated} = useSelector((store)=>store.auth);
const showGptSearch = useSelector((store)=>store.gpt.showGptSearch);
console.log(showGptSearch);
const handleGptSearchClick = () =>{
   dispatch(toggleGptSearchView());
}

const handleSignOut = async () =>{
  try{  
  await signOut(auth);
  dispatch(unsetUser(user));
  navigate("/");
  }
  catch {
    navigate("/error");
  }
};

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    setIsLoading(false);  // Set loading to false once the authentication check is complete
    if (!user) {
       navigate("/") 
       
    }else{
       dispatch(setUser(user));
       navigate("/browse")
    }
  });

  return () => {
    unsubscribe();  // Cleanup the subscription when the component unmounts
  };
  
}, []);

// Render loading spinner or any other loading indicator while checking authentication
if (isLoading) {
  return <div>Loading...</div>;
}

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
    <img
      className="w-44"
      src={ LOGO_URL }
      alt="logo"
    />
    {user && (

      <div className="flex p-2">
        <button
            className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
           {showGptSearch ? "Browse" : "ShowGpt"}
          </button>
        <button onClick={()=>handleSignOut()} className="font-bold text-white ">
          (Sign Out)
        </button>
      </div>
    )}
  </div>
  );
}

export default Header