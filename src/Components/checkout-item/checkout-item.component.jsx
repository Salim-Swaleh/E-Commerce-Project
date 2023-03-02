import {  useDispatch} from 'react-redux';

import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/cart/cart.reducer';



import './checkout-item.styles.scss';


const CheckoutItem = ({cartItem}) =>{
    const {name, imageUrl, price, quantity} = cartItem;
    const dispatch = useDispatch();



const ClearItemHandler= () =>dispatch(clearItemFromCart(cartItem));
const AddItemHandler=()=> dispatch(addItemToCart(cartItem));
const RemoveItemHandler =() => dispatch(removeItemFromCart(cartItem));

    return(
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow'onClick={RemoveItemHandler}>&#10094;</div> 
                <span className='value'>{quantity}</span>
                <div className='arrow'onClick={AddItemHandler}> &#10095;</div>
                </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={ClearItemHandler}>&#10005;</div>
        </div>
    );
};

export default CheckoutItem;