import { useEffect, useState } from "react";
import initiaLizeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword ,onAuthStateChanged,signOut,signInWithEmailAndPassword,signInWithPopup,GoogleAuthProvider,updateProfile} from "firebase/auth";


initiaLizeFirebase()

const useFirebase =()=>{
    const [user,setUser] = useState({});

    const [isLoading,setIsLoading]=useState(true);
    const [authError,setAuthError] = useState('')
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser=(email,password,name,history)=>{
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            setAuthError('')
            const newUser = {email,displayName:name}
            setUser(newUser)
            // save user to the database
            saveUser(email, name, 'POST');
            // send name to firebase after creation
            updateProfile(auth.currentUser, {
              displayName: name
            }).then(() => {
             
            }).catch((error) => {
              
            });
            
            history.replace('/');
        })
        .catch((error) => {
            const errorCode = error.code;
           setAuthError(error.message)
            // ..
        })
        .finally(()=>setIsLoading(false));
    };


    // observe user state
    useEffect(()=>{
     const unsubscribe= onAuthStateChanged(auth, (user) => {
            if (user) {
              
              setUser(user)
            } else {
              setUser({})
            }
            setIsLoading(false)
          });
          return ()=>unsubscribe;
    },[])


    // 
    const loginUser=(email,password,location,history)=>{
        setIsLoading(true)
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const destination= location?.state?.from || '/';
        history.replace(destination)
        setAuthError('')
      })
      .catch((error) => {
          setAuthError(error.message);
      })
      .finally(()=>setIsLoading(false));
    };


    //googleSign 
    const signInWithGoogle=(location,history )=>{
      setIsLoading(true)
      signInWithPopup(auth, googleProvider)
      .then((result) => {       
        const user = result.user;
        saveUser(user.email, user.displayName, 'PUT');
        setAuthError('');
        const destination = location?.state?.from || '/';
        history.replace(destination);
      }).catch((error) => {
         setAuthError(error.message)
      })
      .finally(()=>setIsLoading(false));
    } ;


    useEffect(() => {
      fetch(`https://pumpkin-crisp-13332.herokuapp.com/users/${user.email}`)
          .then(res => res.json())
          .then(data => setAdmin(data.admin))
  }, [user.email])

    const logOut =()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(()=>setIsLoading(false));
    }


    const saveUser = (email, displayName,method) => {
      const user = { email, displayName };
      fetch('https://pumpkin-crisp-13332.herokuapp.com/users', {
          method: method,
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(user)
      })
          .then()
  }

    return{
        user,
        isLoading,
        logOut,
        admin,
        saveUser,
        signInWithGoogle,
        loginUser,
        authError,
        registerUser
    }
}

export default useFirebase;