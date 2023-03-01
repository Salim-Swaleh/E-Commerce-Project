import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; //A hook that allows us to get the navigate function


import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';
import { selectCartItems } from '../../store/cart/cart.selector';

import './cart-dropdown.styles.scss';
const CartDropdown = () =>{
    const cartItems = useSelector(selectCartItems); 
    const navigate = useNavigate(); // Navigate function that allows us to navigate

    const goToCheckoutHandler =() =>{
        navigate('/checkout')
    }

    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item)=> (
                <CartItem  key= {item.id}cartItem={item}/>))}
            </div>
            <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown;