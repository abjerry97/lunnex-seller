import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import app, { auth } from "../app/firebase";
const db = getFirestore(app);

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function addUserToFirestore(email, password, data) {
    return signUp(email, password, (data) =>
      addDoc(collection(db, "users"), {
        email: email,
        ...data,
        gender: "",
        allowMails: false,
        allowPromotionMails: false,
        allowMessages: false,
        allowPromotionMessages: false,
        roles: [],
        store: "",
        backgroundPic: "",
        country: "",
        nationality: "",
        language: "",
        city: "",
        migrate: "",
      })
    );
  }
  async function signUp(email, password, cb) {
    const newUser = await createUserWithEmailAndPassword(auth, email, password);
    const { uid, emailVerified, isAnonymous, photoURL, phoneNumber } =
      newUser?.user;
    return cb({ uid, emailVerified, isAnonymous, photoURL, phoneNumber });
  }

  async function signUpWithExtraData(email, password, data) {
    const userCredentials = await signUp(email, password, data);
    return userCredentials;
  }

  function updateUserDisplayName(user, name) {
    return updateUserProfile(user, name);
  }

  function updateUserProfile(user, data) {
    return updateProfile(user, data);
  }

  //    function refreshUser() {
  //     let user = auth().currentUser;
  //     console.warn(user)
  //     if (user ) {
  //       user?.reload().then();
  //     }
  // }

  function logOut() {
    return signOut(auth);
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
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
      value={{ user, logIn, signUp, logOut, googleSignIn, addUserToFirestore }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
