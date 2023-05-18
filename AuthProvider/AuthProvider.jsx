import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
;
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../Firebase/Firebase";




export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();



  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };


  const register = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };


  const SignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      console.log("Logged user observer", loggedUser);
      setUserInfo(loggedUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);


  const authInfo = {
    userInfo,
    setUserInfo,
    googleLogin,
    register,
    SignIn,
    logOut,
    loading
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;