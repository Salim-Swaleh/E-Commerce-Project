import { useEffect} from "react";

import { useDispatch } from "react-redux";

import { Routes, Route } from 'react-router-dom';



import { onAuthStateChangedListener, createUserDocumentFromAuth } from "./utils/firebase/firebase.utils";

import  Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.components';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';


import { setCurrentUser } from './store/user/user.reducer';



const App = () => {
  
  // initialize the dispatch function from the Redux store which sets up an event handler
  const dispatch = useDispatch();
  
  // listen for authentication state changes using Firebase auth utility function
  useEffect(()=>{ 
    const unsubscribe = onAuthStateChangedListener((user)=>{
      // if the user is logged in, create a user document in the Firestore database
     if (user){
         createUserDocumentFromAuth(user);
     }
      // pick specific user properties to be stored in Redux store
     const pickedUser = 
     user && ( ({accessToken, email}) =>({accessToken, email}))(user);

     console.log(setCurrentUser(pickedUser));// console.log the current user
     dispatch(setCurrentUser(pickedUser)); // dispatch the currentUser action with the pickedUser object
 });
     // return an unsubscribe function to clean up Firebase listener when component unmounts
    return unsubscribe;

 },[]); // empty dependency array ensures that the effect runs only once during component mount
  
// render the component tree with React Router
 return(
  /*creating a specific route to render a secific component*/
  <Routes>
    <Route path="/" element={<Navigation />}>
      {/*creating a child route*/}
      <Route index element= { <Home /> } /> 
      <Route path="shop/*" element= { <Shop/>} />
      <Route path= "auth" element={<Authentication/>}/>
      <Route path= "checkout" element={<Checkout/>}/>
    </Route>
     
  </Routes>
 );
};

export default App;
 
// In summary, the code sets up the Firebase listener to detect any changes in the authentication state of the user,
// and then updates the Redux store with the user information. The component tree is rendered using React Router, 
//with the Navigation component serving as the root of the navigation hierarchy. 
//The child routes of Navigation are defined with specific paths that correspond to different components to be rendered when those routes are accessed.