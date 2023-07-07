import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../utils/firebase";

// const UserContext = createContext();

interface AuthContextData {
  isAuthenticated: boolean;
  createUser: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
}

export const UserContext = createContext<AuthContextData>({
  isAuthenticated: false,
  signUp: () => Promise.resolve(),
  signIn: () => Promise.resolve(),
  signOut: () => {},
});

export const AuthContextProvider = ({ children }) => {
  // states
  const [user, setUser] = useState({});

    // create user
  const createUser = (email:string, password:string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

    // sign in user
    const login = (email:string, password:string) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

  // sign out user
  const signout = () => {
    return signOut(auth);
  };

  // to get user details
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ createUser, user, signout, login }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
