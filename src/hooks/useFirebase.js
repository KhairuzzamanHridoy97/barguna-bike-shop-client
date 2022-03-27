import { useEffect, useState } from "react";
import initiaLizeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword ,onAuthStateChanged,signOut,signInWithEmailAndPassword} from "firebase/auth";


initiaLizeFirebase()

const useFirebase =()=>{
    const [user,setUser] = useState({});

    const auth = getAuth();

    const registerUser=(email,password)=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    };


    // observe user state
    useEffect(()=>{
     const unsubscribe=   onAuthStateChanged(auth, (user) => {
            if (user) {
              
              const uid = user.uid;
              setUser(user)
            } else {
              setUser({})
            }
          });
          return ()=>unsubscribe;
    },[])


    // 
    const loginUser =(email,password)=>{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }

    const logOut =()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }



    return{
        user,
        logOut,
        loginUser,
        registerUser
    }
}

export default useFirebase;