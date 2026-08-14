import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

// Initialize Auth safely if Firebase app loaded successfully
let auth = null;
if (app) {
  try {
    auth = getAuth(app);
  } catch (error) {
    console.error("Firebase Auth initialization failed:", error);
  }
}

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    if (!auth) return Promise.reject(new Error("Auth is not initialized."));
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    if (!auth) return Promise.reject(new Error("Auth is not initialized."));
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    if (!auth) return Promise.reject(new Error("Auth is not initialized."));
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    if (!auth) return Promise.reject(new Error("Auth is not initialized."));
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name) => {
    if (!auth || !auth.currentUser) return Promise.reject(new Error("Auth is not initialized or user is not logged in."));
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  useEffect(() => {
    if (!auth) {
      setLoading(false);
      return;
    }
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current user", currentUser);

      if (currentUser) {
        axios
          .post("https://sar-shop-server.vercel.app/", {
            email: currentUser.email,
          })
          .then((data) => {
            console.log(data.data.token);
            localStorage.setItem("access-token", data.data.token);
          });
      } else {
        localStorage.removeItem("access-token");
      }
      //

      setLoading(false);
    });
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    googleSignIn,
    logOut,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
