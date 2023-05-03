import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,signOut } from "firebase/auth"
import app from '../Firebase/firebase';
export const AuthContaxt = createContext(null)





const auth = getAuth(app)

const AuthProviders = ({ children }) => {

   const [user, setUser] = useState(null)


   const CreatUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password)

   }

   const signin = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password)
   }

const logOut =()=>{
   return signOut(auth)

}



   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, CurrentUser => {
         setUser(CurrentUser)
      })
      return ()=>{unsubscribe()}
   }, [])




   const elements = {
      CreatUser,
      signin,
      user,
      logOut
   }
   return (
      <AuthContaxt.Provider value={elements}>
         {children}
      </AuthContaxt.Provider>
   );
};

export default AuthProviders;