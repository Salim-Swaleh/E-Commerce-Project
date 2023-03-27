// This utility is a layer between the front-end and the firebase service that will provide easy debuging incase google makes major changes in firebase

import{ initializeApp }from "firebase/app"; //initilizeApp function creates an instance. 
//It enables us to attach our local instance to the one we have online
import {getAnalytics, logEvent} from 'firebase/analytics'; //Libraries for analytics purposes
import { 
     getAuth, 
     signInWithPopup, 
     GoogleAuthProvider,
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
     signOut,
     onAuthStateChanged
    } 
    // Google provider will be used to sign in with google accounts (You can use diff providers eg facebook, github etc)
      //methods 
       from "firebase/auth"; //Library for authentication services

// Your web app's Firebase configuration

import {
    getFirestore,
     doc,//Allows us to retrieve documents from firestore database
     getDoc, //Allows us to get data from documents
     setDoc,
     collection,//Allows us to upload data to firestore database
     writeBatch,
     query,
     getDocs
} from "firebase/firestore";//Library for the firestore database

const firebaseConfig = {
    apiKey: "AIzaSyBTCKg40ZtPk-hEhfn0rJaXmpjMhhJY6fQ",
    authDomain: "e-commerce-db-e74e4.firebaseapp.com",
    projectId: "e-commerce-db-e74e4",
    storageBucket: "e-commerce-db-e74e4.appspot.com",
    messagingSenderId: "306207325847",
    appId: "1:306207325847:web:2fc8aaa82ffab0c136b3d2",
    measurementId: "G-0ZCM29875M",
    
  };
  
  // Initialize Firebase using the firebase config object
  const firebaseApp = initializeApp(firebaseConfig);
  //initalize firebase analytics object
  const analytics = getAnalytics(firebaseApp);
  //log an analytics event
  logEvent(analytics);

  

  const provider = new GoogleAuthProvider();// Create a new instance of the GoogleAuthProvider class.
  
 

  // Set the custom parameter for the Google sign-in prompt.
  provider.setCustomParameters({
    prompt:"select_account" //A user will be promted to select an account when using the provider ie google authentication provider
  });
  export const auth = getAuth(); // Create an instance of the Firebase auth service.
  export const signInWithGooglePopup = () => 
    signInWithPopup (auth, provider); //Export a function that triggers a Google sign-in popup.
  

  export const db = getFirestore(); // // Create an instance "db" of the Firestore database.

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) =>{ //Create a reference to a Firestore collection.
    const collectionRef = collection(db, collectionKey);//Collection Reference
    const batch = writeBatch(db); // Create a new write batch.

    objectsToAdd.forEach((object)=>{
      const docRef= doc(collectionRef, object.title.toLowerCase()); // Create a reference to a Firestore document.
      batch.set(docRef,object);  // Add the document and its data to the write batch.
    });
    await batch.commit(); //will add the data(batch) to the database
    console.log('done!');
  };

 // extract/query data from  the firestore database
  export const getCategoriesAndDocuments = async ()=>{
    const collectionRef = collection(db,'categories'); // Create a reference to the 'categories' collection in Firestore.
    const q = query(collectionRef); // Create a Firestore query object

    const querySnapshot = await getDocs(q); // Get the query snapshot from Firestore.
    return querySnapshot.docs.map((docSnapshot) =>docSnapshot.data()); // Map the query snapshot documents to an array of their data.

    
  };
// This helper functions above isolate the actual application from any changes or updates made by firebase (google) hence it will be easy to update the chages to our code
// The world of Javascript and its frameworks is frequently evolving
  export const createUserDocumentFromAuth = async (userAuth, additionalInformation ={}
    ) =>{
    if(!userAuth) return;

    const userDocRef = doc(db,'users', userAuth.uid); // Create a reference to the Firestore document for the user.
    //The doc contains (database, The data collection, unique ID) 


    const userSnapshot = await getDoc(userDocRef); // Get the document snapshot from Firestore.


     //if user data does not exist 
    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date ();
        // try adding the data to the database with the information stipulated below
        try {
            await setDoc(userDocRef,{ 
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch (error){
            console.log("error creating the user");
        }
    }

     // create/set the document with the data from userAuth in my collection
     return userDocRef;

    //check if user data exists

    //return this user document reference


  };
//This function takes two parameters, email and password. It checks if the email and password are not empty,
// and then calls the createUserWithEmailAndPassword function from Firebase Auth, passing the email and password as parameters. 
//It returns the result of this function call, which is a promise that resolves with a UserCredential object.
  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email||!password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
  } ;

  //This function takes two parameters, email and password. It checks if the email and password are not empty, 
  //and then calls the signInWithEmailAndPassword function from Firebase Auth, passing the email and password as parameters.
  // It returns the result of this function call, which is a promise that resolves with a UserCredential object.
  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email||!password) return;

    return await signInWithEmailAndPassword(auth, email, password);
  } ;

  //This function calls the signOut function from Firebase Auth, which signs out the currently signed-in user. 
  //It returns a promise that resolves when the sign-out operation is complete.
  export const signOutUser = async () => await signOut(auth);

 // This function takes a callback function as a parameter.
 // It sets up a listener for authentication state changes using the onAuthStateChanged function from Firebase Auth, 
 //and calls the callback function whenever the authentication state changes.
 // The callback function is passed a User object if a user is signed in, or null if no user is signed in.
  export const onAuthStateChangedListener =(callback) => 
    onAuthStateChanged(auth,callback);

