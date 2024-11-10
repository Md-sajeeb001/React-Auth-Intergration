/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../components/Firebase_init";

export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    setLoading(true)
    return signOut(auth);
  };

  useEffect(() => {
    const disconnect = onAuthStateChanged(auth, (currrentUser) => {
      console.log("current user", currrentUser);
      setUser(currrentUser);
      setLoading(false)
    });

    return () => {
      disconnect();
    };
  }, []);

  const AuthInfo = {
    createUser,
    signInUser,
    user,
    loading,
    signOutUser
  };

  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
