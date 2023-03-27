import { Link } from 'react-router-dom'; 
import './category-preview.styles.scss';
import ProductCard from '../product-card/product-card.component';

// is a functional component that takes two props: title and products.
const CategoryPreview =({title, products}) =>{

    // returns a section that displays a preview of three products for a specific category.
    return(
        <div className='category-preview-container'>
            <h2>
                {/*The title is a link that takes you to the products page of that title */}
                <Link className='title' to={title}>{title.toUpperCase()}</Link> 
            </h2>
            <div className='preview'>
                {
                    products.filter((_, idx)=> idx<3)
                    .map((product)=> 
                    <ProductCard key={product.id} product={product}/>)// Will filter out only the first 3 products of each category
                    //The map method is used to iterate through the filtered array and create a ProductCard component for each product.
                }
            </div>
             </div>
    )
}

export default CategoryPreview;