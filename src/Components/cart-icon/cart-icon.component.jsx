import { useDispatch, useSelector } from 'react-redux';

 import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector';
 import { setIsCartOpen } from '../../store/cart/cart.reducer';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';


// renders a shopping cart icon and a count of the number of items in the cart.
const CartIcon = () => {
   

   const dispatch = useDispatch(); // used to get the dispatch function to send actions to the Redux store

   //the useSelector hook is used to select specific state values from the store.
   //the cartCount and isCartOpen variables are declared using the useSelector hook, 
   //which retrieves the cartCount and isCartOpen values from the Redux store.
   const cartCount = useSelector(selectCartCount);
   const isCartOpen = useSelector(selectIsCartOpen);
    
   // the toggleIsCartOpen function is defined using the dispatch function returned by the useDispatch hook to dispatch an action
   // that toggles the isCartOpen state value in the store.
   const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

//the CartIcon component returns a div element with a click event listener that calls the toggleIsCartOpen function. 
//The div contains a ShoppingIcon component and a span element that displays the cartCount value.
    return(
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon;
