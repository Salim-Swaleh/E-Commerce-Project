import { useNavigate } from 'react-router-dom';
import './directory-item.styles.scss'

const DirectoryItem = ({ category }) => {
    const {imageURL, title,route} = category;
    const navigate = useNavigate();

    const onNavigateHandler =()=> navigate(route);
return(
    <div className="directory-item-container" onClick={onNavigateHandler}>
          <div className='background-image' style={{
            backgroundImage: `url(${imageURL})` /*object destructuring which allows us to use a string variable inside another string*/
          }} />
          <div className="body">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
)
}

export default DirectoryItem