import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  //create user with email and password
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // create sign in
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // create signout
  function logOut() {
    return signOut(auth);
  }

  // onAuthStateChanged
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={(signUp, logIn, logOut, user)}>
      {children}
    </AuthContext.Provider>
  );
}
export function UserAuth() {
  return useContext(AuthContext);
}
