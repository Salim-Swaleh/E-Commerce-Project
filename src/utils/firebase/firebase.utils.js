// This utility is a layer between the front-end and the firebase service that will provide easy debuging incase google makes major changes in firebase

import{ initializeApp }from "firebase/app"; //initilizeApp function creates an instance. It enables us to attach our local instance to the one we have online
import { 
     getAuth, 
     signInWithPopup, 
     GoogleAuthProvider,
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword
    } // Google provider will be used to sign in with google accounts (You can use diff providers eg facebook, github etc)
      //methods 
       from "firebase/auth"; //Library for authentication services
// Your web app's Firebase configuration

import {
    getFirestore,
     doc,//Allows us to retrieve documents from firestore database
     getDoc, //Allows us to get data from documents
     setDoc
} from "firebase/firestore";//Library for the firestore database

const firebaseConfig = {
    apiKey: "AIzaSyBTCKg40ZtPk-hEhfn0rJaXmpjMhhJY6fQ",
    authDomain: "e-commerce-db-e74e4.firebaseapp.com",
    projectId: "e-commerce-db-e74e4",
    storageBucket: "e-commerce-db-e74e4.appspot.com",
    messagingSenderId: "306207325847",
    appId: "1:306207325847:web:2fc8aaa82ffab0c136b3d2",
    measurementId: "G-0ZCM29875M"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  

  const provider = new GoogleAuthProvider();
  


  provider.setCustomParameters({
    prompt:"select_account" //A user will be promted to select an account when using the provider ie google authentication provider
  });
  export const auth = getAuth();
  export const signInWithGooglePopup = () => 
    signInWithPopup (auth, provider);
  

  export const db = getFirestore(); // db points to this app's database


  export const createUserDocumentFromAuth = async (userAuth, additionalInformation ={}
    ) =>{
    if(!userAuth) return;

    const userDocRef = doc(db,'users', userAuth.uid); // The doc contains (database, The data collection, unique ID)


    const userSnapshot = await getDoc(userDocRef);


     //if user data does not exist
    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date ();

        try {
            await setDoc(userDocRef,{ 
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch (eror){
            console.log("error creating the user");
        }
    }

     // create/set the document with the data from userAuth in my collection
     return userDocRef;

    //check if user data exists

    //return this user document reference


  };

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email||!password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
  } ;

  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email||!password) return;

    return await signInWithEmailAndPassword(auth, email, password);
  } ;