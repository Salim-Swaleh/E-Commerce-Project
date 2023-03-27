import { Outlet } from "react-router-dom";
import  Directory from "../../Components/Directory/directory.components";


// The Home component is a simple component that renders two child components.
const Home = () => {
  return (
    
    <div> 
      {/* The Directory component displays the different categories of items available for purchase. */}
        <Directory/>;
      {/*The Outlet component is used to render nested routes defined in the parent Router component. */}
        <Outlet />
    </div>   
  );
};

export default Home; 