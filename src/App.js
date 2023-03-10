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

  const dispatch = useDispatch();

  useEffect(()=>{ 
    const unsubscribe = onAuthStateChangedListener((user)=>{
     if (user){
         createUserDocumentFromAuth(user);
     }
     const pickedUser = 
     user && ( ({accessToken, email}) =>({accessToken, email}))(user);

     console.log(setCurrentUser(pickedUser));
     dispatch(setCurrentUser(pickedUser));
 });

    return unsubscribe;

 },[]);
  

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
