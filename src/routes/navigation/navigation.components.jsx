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

   const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);

    return(
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to="/">
                    <Logo className='logo'/>
                  </Link>  
                
                <div className='nav-links-container'>
                    <Link className='nav-link' to="/shop">
                        SHOP
                    </Link>
                    
                    {currentUser ? (
                            <span className='nav-link' onClick={signOutUser}> SIGN OUT </span>)
                            :(
                            <Link className='nav-link' to="/auth"> SIGN IN</Link>
                            )}
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />/*If the cart is opened, the dropdown will execute*/}
            </div>
            <Outlet />
        </Fragment>
    );


         
  };

  export default Navigation;