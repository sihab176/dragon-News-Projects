import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.config";
// import { useLocation } from "react-router";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // console.log(user);

  // sing up
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //LogOut\\
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  //logIn
  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //update user profile
  const updateUserProfile = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };

  //save data
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authData = {
    user,
    createUser,
    logOutUser,
    logInUser,
    loading,
    setLoading,
    setUser,
    updateUserProfile,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
