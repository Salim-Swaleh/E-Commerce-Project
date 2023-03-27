import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; //A hook that allows us to get the navigate function


import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';
import { selectCartItems } from '../../store/cart/cart.selector';

import './cart-dropdown.styles.scss';
const CartDropdown = () =>{
    const cartItems = useSelector(selectCartItems); //retrieves the cart items from the Redux store using the useSelector hook.
    const navigate = useNavigate(); // Navigate function that allows us to navigate to the checkout page
 
    //This is a function that sets the route to "/checkout" using the navigate function.
    const goToCheckoutHandler =() =>{
        navigate('/checkout')
    }

    //returns a div containing the cart items and a button that, when clicked, calls the goToCheckoutHandler function and navigates to the checkout page.
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {/*maps over the cartItems array and returns a <CartItem> component for each item in the cart. 
                The key prop is set to the item.id and the cartItem prop is set to item. */}
                {cartItems.map((item)=> (
                <CartItem  key= {item.id}cartItem={item}/>))}
            </div>
            {/*renders a button with "CHECKOUT" text that, when clicked, calls the goToCheckoutHandler function to navigate to the checkout page. */}
            <Button onClick={goToCheckoutHandler}>CHECKOUT</Button> 
        </div>
    )
}

export default CartDropdown;