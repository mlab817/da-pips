import {createContext, useEffect, useState} from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../utils/firebase.utils";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // handle user login
  const login = async ({ email, password }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)

      return userCredential.user
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  }

  // listen for auth changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user)
      if (user) {
        setCurrentUser(user)
      } else {
        setCurrentUser(null)
      }
    })

    return () => unsubscribe()
  }, [])

  const value = { currentUser, setCurrentUser, login };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}