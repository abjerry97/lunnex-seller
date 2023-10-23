import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import app, { auth } from "../app/firebase";
const db = getFirestore(app);

const userAuthContext = createContext();

const firebaseInitialAttribute = {
  fullName: "",
  email: "",
  gender: "",
  allowMails: false,
  allowPromotionMails: false,
  allowMessages: false,
  allowPromotionMessages: false,
  roles: [],
  backgroundPic: "",
  country: "",
  nationality: "",
  language: "",
  city: "",
  migrate: "",
};
const initialUserState = {
  authenticated: false,
  
}
export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [userState, setUserState] = useState({});
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
 
 

  function addFirebaseDoc(model, data) {
    addDoc(collection(db, model), { ...firebaseInitialAttribute, ...data });
  }
  function addUserToFirestore(email, password,data) {
    return signUp(email, password, data, (result) =>
      addFirebaseDoc("users", { ...data, ...result, email })
    );
  }
  async function signUp(email, password,data, cb) {
    const newUser = await createUserWithEmailAndPassword(auth, email, password); 
    updateProfile(newUser.user, {displayName: data?.fullName});
    const { uid, emailVerified, isAnonymous, photoURL, phoneNumber } =
      newUser?.user;
    return cb({ uid, emailVerified, isAnonymous, photoURL, phoneNumber });
  }

  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{ user, logIn, signUp, logOut, addUserToFirestore }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
