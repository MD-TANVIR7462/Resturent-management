import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,signOut,updateProfile,GoogleAuthProvider,signInWithPopup,GithubAuthProvider } from "firebase/auth"
import app from '../Firebase/firebase.init';
export const AuthContaxt = createContext(null)





const auth = getAuth(app)

const AuthProviders = ({ children }) => {

   const [user, setUser] = useState(null)
   const [loading,setLoading] =useState(true)

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


   const CreatUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password)

   }

   const signin = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password)
   }

const logOut =()=>{
   return signOut(auth)

}
const update =(name,Img)=>{
  return updateProfile(auth.currentUser,{
      displayName : name,
      photoURL: Img
    })
}


const google =()=>{
   return signInWithPopup(auth,googleProvider)
}
const Github = ()=>{
   return signInWithPopup(auth,githubProvider)
}

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, CurrentUser => {
         setUser(CurrentUser)
         setLoading(false)
      })
      return ()=>{unsubscribe()}
   }, [])




   const elements = {
      CreatUser,
      signin,
      user,
      logOut,
      update,
      google,
      Github,
      loading
   }
   return (
      <AuthContaxt.Provider value={elements}>
         {children}
      </AuthContaxt.Provider>
   );
};

export default AuthProviders;