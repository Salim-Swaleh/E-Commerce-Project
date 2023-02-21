import { Link } from 'react-router-dom'; 
import './category-preview.styles.scss';
import ProductCard from '../product-card/product-card.component';

const CategoryPreview =({title, products}) =>{
    return(
        <div className='category-preview-container'>
            <h2>
                <Link className='title' to={title}>{title.toUpperCase()}</Link>
            </h2>
            <div className='preview'>
                {
                    products.filter((_, idx)=> idx<3)
                    .map((product)=>
                    <ProductCard key={product.id} product={product}/>)// Will filter out only the first 3 products of each category
                }
            </div>
             </div>
    )
}

export default CategoryPreview;