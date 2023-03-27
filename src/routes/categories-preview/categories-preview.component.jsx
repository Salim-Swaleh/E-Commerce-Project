import {  Fragment} from "react"; 
import { useSelector } from "react-redux";
import CategoryPreview from "../../Components/category-preview/category-preview.component";
import { selectCategoriesMap } from "../../store/categories/category.selector";




const CategoriesPreview =() =>{
     // Extracts the categories map from the Redux store state
    const categoriesMap = useSelector(selectCategoriesMap);
    return(
        // Renders a list of CategoryPreview components for each category
        <Fragment>
                {Object.keys(categoriesMap).map(title=>{
                    const products = categoriesMap[title];
                    return <CategoryPreview  key={title} title={title} products={products} />
                })}
            
            
        </Fragment>
        
    );

}

export default CategoriesPreview;