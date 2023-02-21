import { Routes, Route } from 'react-router-dom';
import  Home from './routes/home/home.component';

import Navigation from './routes/navigation/navigation.components';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import Assist from './Components/assist/assist.component';





const App = () => {

 return(
  /*creating a specific route to render a secific component*/
  <Routes>
    <Route path="/" element={<Navigation />}>
      {/*creating a child route*/}
      <Route index element= { <Home /> } /> 
      <Route path= "assist" element = {<Assist/>}/>
      <Route path="shop/*" element= { <Shop/>} />
      <Route path= "auth" element={<Authentication/>}/>
      <Route path= "checkout" element={<Checkout/>}/>
    </Route>
     
  </Routes>
 );
};

export default App;
