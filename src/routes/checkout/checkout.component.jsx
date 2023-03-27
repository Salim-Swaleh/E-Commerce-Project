import { useSelector } from 'react-redux';
import { selectCartItems,selectCartTotal } from '../../store/cart/cart.selector';

import CheckoutItem from '../../Components/checkout-item/checkout-item.component';
import  PaymentForm  from '../../Components/payment-form/payment-form.component';

import './checkout.styles.scss';

const Checkout =() => {

    // The useSelector hook is used to retrieve the cart items and cart total from the Redux store.
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal); 


    return(
        <div className='checkout-container'>
            {/* The checkout header displays the column headers for the checkout table. */}
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            
              {/* This section maps through the cart items and renders a CheckoutItem component for each item. */}
                {
                    cartItems.map((cartItem) => ( 
                        <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                        )
                    )
                }
            <span className='total'>Total: Ksh {cartTotal}</span>
             {/* The PaymentForm component allows the user to input their payment information. */}
            <PaymentForm/>
        </div>
    )
}

export default Checkout;