import {  useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProductCard from '../../Components/product-card/product-card.component';

import { selectCategoriesMap } from '../../store/categories/category.selector';

import './category.styles.scss';

const Category =() =>{
    // Extract the category parameter from the URL
    const {category} = useParams();
    // Get the categories map from the Redux store
    const categoriesMap = useSelector(selectCategoriesMap);
    // Set the initial state of the products to the products in the selected category
    const [products, setProducts] = useState(categoriesMap[category]);

    
  // When the category or categoriesMap change, update the products state
    useEffect(()=>{
       setProducts(categoriesMap[category]);
    }, [category, categoriesMap])// When the component is re-rendered, products will not update unless category has changed'

    
  // Render the component
    return(
        <Fragment>
            <h2 className='category-title'>{category.toUpperCase()}</h2>
            <div className='category-container'>
            {   products &&
                products.map((product)=> <ProductCard key={product.id} product={product}/>)
            }
        </div>

        </Fragment>
        
    )

} 
export default Category;

//In summary, The component initializes the products state to the products in the selected category.
// It then uses the useEffect hook to update the products state whenever the category or categoriesMap change.
//the component renders a title with the name of the category, and a list of products in that category using the map method 
//to loop over the products array and render a ProductCard component for each product.