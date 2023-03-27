import { useDispatch } from 'react-redux';

import { addItemToCart } from '../../store/cart/cart.reducer';

import Button from '../button/button.component';


import './product-card.styles.scss';


const ProductCard = ({product}) =>{
     // Destructure the product object to get its properties
    const { name, price, imageUrl} = product;
    // Get the addItemToCart function from the useDispatch hook
    const dispatch= useDispatch(addItemToCart);
   
     // Define a function to add the product to the cart when the "Add to Cart" button is clicked
    const addProductToCart= ()=> dispatch(addItemToCart(product));

    // Return a div containing the product's image, name, price, and an "Add to Cart" button
    return(

    <div className='product-card-container'>
        <img src={imageUrl} alt={`${name}`} />
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>Ksh {price}</span>
        </div>
        {/* Use a custom Button component with buttonType prop set to "inverted" and an onClick event handler that calls the addProductToCart function */}
        <Button buttonType='inverted' onClick={addProductToCart}> Add to Cart </Button>
    </div>
     );
}

export default ProductCard;