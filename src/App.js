import { Routes, Route } from 'react-router-dom';
import  Home from './routes/home/home.component';

import Navigation from './routes/navigation/navigation.components';
import Authentication from './routes/authentication/authentication.component';



const Beardoil =() =>{
  return<h1>Beard Oil</h1>; 
};


const App = () => {

 return(
  /*creating a specific route to render a secific component*/
  <Routes>
    <Route path="/" element={<Navigation />}>
      {/*creating a child route*/}
      <Route index element= { <Home /> } /> 
      <Route path="beardoil" element= { <Beardoil/>} />
      <Route path= "auth" element={<Authentication/>}/>
    </Route>
     
  </Routes>
 );
};

export default App;
