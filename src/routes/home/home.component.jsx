import { Outlet } from "react-router-dom";
import  Directory from "../../Components/Directory/directory.components";



const Home = () => {
  return (
    
    <div> 
        <Directory/>;
        <Outlet />
    </div>   
  );
};

export default Home; 