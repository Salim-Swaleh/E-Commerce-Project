import Categoryitem from "../Categoryitem/category-item.component"

import './directory.styles.scss';

const Directory = ({categories}) => {
    return(
        <div className="directory-container">
      {categories.map(( category ) => (
        <Categoryitem key={category.id} category={category}/>
      ))}
    </div>
    )
};

export default Directory