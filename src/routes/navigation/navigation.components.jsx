import {Fragment} from 'react';
import{ Outlet, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ReactComponent as Logo} from'../../assets/beard.svg';

import CartIcon from '../../Components/cart-icon/cart-icon.component';
import CartDropdown from '../../Components/cart-dropdown/cart-dropdown.component';

import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user.selector';
import { signOutUser } from '../../utils/firebase/firebase.utils';


import './navigation.styles.scss';
const Navigation =() => {

    // The useSelector hook is used to retrieve the current user and cart status from the Redux store.
   const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);

    return(
        <Fragment>
            <div className='navigation'>
                {/* The Logo component displays the company logo and is linked to the home page. */}
                <Link className='logo-container' to="/">
                    <Logo className='logo'/>
                  </Link>  
                {/* The nav-links-container div contains the navigation links for the shop and sign in/out pages, as well as the cart icon. */}
                <div className='nav-links-container'>
                    <Link className='nav-link' to="/shop">
                        SHOP
                    </Link>
                    
                    {/* If there is a current user, display the "SIGN OUT" link; otherwise, display the "SIGN IN" link. */}
                    {currentUser ? (
                            <span className='nav-link' onClick={signOutUser}> SIGN OUT </span>)
                            :(
                            <Link className='nav-link' to="/auth"> SIGN IN</Link>
                            )}
                     {/* The CartIcon component displays the cart icon, which can be clicked to open the cart dropdown. */}
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />/*If the cart is opened, the dropdown will execute*/}
            </div>
             {/* The Outlet component is used to render nested routes defined in the parent Router component. */}
            <Outlet />
        </Fragment>
    );


         
  };

  export default Navigation;