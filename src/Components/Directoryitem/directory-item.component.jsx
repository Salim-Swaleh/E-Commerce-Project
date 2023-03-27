import { useNavigate } from 'react-router-dom';
import './directory-item.styles.scss'

// This component renders an individual category item in the directory menu
const DirectoryItem = ({ category }) => {

   // Destructure category object to get image URL, title, and route
    const {imageURL, title,route} = category;

     // useNavigate hook from React Router DOM to navigate to the route of the category
    const navigate = useNavigate();

    // Function to handle navigation when category item is clicked
    const onNavigateHandler =()=> navigate(route);

    // Render the category item
return(
    <div className="directory-item-container" onClick={onNavigateHandler}> {/*Clicking inside the container triggers the navigation event handler */}
          
          {/* Display the image of the category as background image */}
          <div className='background-image' style={{
            backgroundImage: `url(${imageURL})` /*object destructuring using ${} which allows us to use a string variable inside another string*/
          }} />
          {/* Display the title of the category and "Shop Now" message */}
          <div className="body">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
)
}

export default DirectoryItem