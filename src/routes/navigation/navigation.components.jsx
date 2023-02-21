import {Fragment, useContext} from 'react';
import{ Outlet, Link } from 'react-router-dom';

import { ReactComponent as Logo} from'../../assets/beard.svg';

import CartIcon from '../../Components/cart-icon/cart-icon.component';
import CartDropdown from '../../Components/cart-dropdown/cart-dropdown.component';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';


import './navigation.styles.scss';
const Navigation =() => {

    const{ currentUser} = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    

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
                    <Link className='nav-link' to="/assist">
                        ASSIST
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