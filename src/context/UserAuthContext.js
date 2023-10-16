import { createContext, useContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth'
import { auth } from '../app/firebase'

const userAuthContext = createContext()

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({})

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  async function signUpWithName(email, password, name) {
    return signUpWithExtraData(
      email,
      password,
      { displayName: name },
      updateUserDisplayName,
    ) 
  }

  async function signUpWithExtraData(email, password, data, cb) {
    const userCredentials = await signUp(email, password)

    if (userCredentials.user) {
      await cb(userCredentials.user, data)
    }

    // return userCredentials
  }

  function updateUserDisplayName(user, name) {
    return updateUserProfile(user, name)
  }

  function updateUserProfile(user, data) {
    return updateProfile(user, data)
  }

  //    function refreshUser() {
  //     let user = auth().currentUser;
  //     console.warn(user)
  //     if (user ) {
  //       user?.reload().then();
  //     }
  // }

  function logOut() {
    return signOut(auth)
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider()
    return signInWithPopup(auth, googleAuthProvider)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => { 
      setUser(currentuser)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <userAuthContext.Provider
      value={{ user, logIn, signUp, logOut, googleSignIn, signUpWithName }}
    >
      {children}
    </userAuthContext.Provider>
  )
}

export function useUserAuth() {
  return useContext(userAuthContext)
}
