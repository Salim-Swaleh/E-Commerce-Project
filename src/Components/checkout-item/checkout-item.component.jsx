import {  useDispatch} from 'react-redux';

import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/cart/cart.reducer';



import './checkout-item.styles.scss';

// The component renders a checkout item with its image, name, quantity, price, and a remove button.
const CheckoutItem = ({cartItem}) =>{
    const {name, imageUrl, price, quantity} = cartItem;
    const dispatch = useDispatch();



const ClearItemHandler= () =>dispatch(clearItemFromCart(cartItem)); // dispatches an action to remove the cartItem from the cart.
const AddItemHandler=()=> dispatch(addItemToCart(cartItem)); //  dispatches an action to add the cartItem to the cart
const RemoveItemHandler =() => dispatch(removeItemFromCart(cartItem)); //dispatches an action to remove a single quantity of the cartItem from the cart.

    return(
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`}/> {/*Displays the product image */}
            </div>
            <span className='name'>{name}</span>{/*Displays the product name */}
            <span className='quantity'>
                <div className='arrow'onClick={RemoveItemHandler}>&#10094;</div> {/*Decreases the item quantity by one and when the quantity is zero
                 the product is removed completely */}
                <span className='value'>{quantity}</span> {/*Displays the product quantity */}
                <div className='arrow'onClick={AddItemHandler}> &#10095;</div> {/*Increases product quantity by one */}
                </span>
            <span className='price'>{price}</span> {/*Displays the product price */}
            <div className='remove-button' onClick={ClearItemHandler}>&#10005;</div> {/*An icon that removes the product completely from cart */}
        </div>
    );
};

export default CheckoutItem;