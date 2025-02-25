import {  createContext, useContext, useEffect, useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import app, { auth } from "../app/firebase";
import { UserDataInterface } from "@/interfaces/user";
import { UserData, privateUserData, publicUserData } from "./extractUserData";
import { get } from "https";
const db = getFirestore(app);

export const userAuthContext = createContext<any | null>(null);



export const UserAuthContextProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(auth.currentUser);
  const isAuthenticated = useRef<any>()
  isAuthenticated.current = true

  // const isAuthenticated = true
  // console.log("auth",auth)
  // = authenticated.current
  const [userState, setUserState] = useState({});
  function logIn(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }















  // console.log(user)
  // function addFirebaseDoc(model: string, data: any) {
  //   addDoc(collection(db, model), { ...data });
  // }
  // function addUserToFirestore(email: string, password: string, data: any) {
  //   return signUp(email, password, data, (result: any) => {
  //     const dataToSend = { ...data, ...result, email };

  //     // addFirebaseDoc("users", { ...UserData({ ...dataToSend }) });
  //     // addFirebaseDoc("publicUserData", {
  //     //   ...publicUserData({ ...dataToSend }),
  //     // });
  //     // addFirebaseDoc("privateUserData", {
  //     //   ...privateUserData({ ...dataToSend }),
  //     // });
  //     return dataToSend
  //   });
  // }
  // async function signUp(
  //   email: string,
  //   password: string,
  //   data: any,
  //   cb: Function
  // ) {
  //   console.log(data)
  //   const newUser = await createUserWithEmailAndPassword(auth, email, password);
  //   updateProfile(newUser.user, { displayName: data?.fullName });
  //   const { uid, emailVerified, isAnonymous, photoURL, phoneNumber } =
  //     newUser?.user;
  //   return cb({ uid, emailVerified, isAnonymous, photoURL, phoneNumber });
  // }



  async function signUp(
    email: string,
    password: string,
    data: any, 
  ) {
    const newUser = await createUserWithEmailAndPassword(auth, email, password);
    updateProfile(newUser.user, { displayName: data?.fullName }); 
    getIdToken()
    return newUser;
  }

  function logOut() {
    if (typeof window !== "undefined") {
  if (window.localStorage) {
    localStorage.removeItem("idToken")}}
    return signOut(auth);
  }



  async function getIdToken(){
  await  auth?.currentUser?.getIdToken(true).then(function(idToken) {
    console.log("idToken",idToken)
if (typeof window !== "undefined") {
  if (window.localStorage) {
    localStorage.setItem("idToken",idToken)}}
    }).catch(function(error) {
    console.log(error)
    });
  }

 
  useEffect(() => {
    // getIdToken()
  
    isAuthenticated.current =false
    const unsubscribe = onAuthStateChanged(auth, (currentuser: any) => {
      setUser(currentuser);
 
      isAuthenticated.current =true
       getIdToken()
    });
    
    return () => {
      unsubscribe();
    };
  }, []);
 
  return (
    <userAuthContext.Provider
      value={{ user, logIn, signUp, logOut ,isAuthenticated}}
    >
      {children}
    </userAuthContext.Provider>
  );
};

export function useUserAuth() {
  return useContext(userAuthContext);
}
