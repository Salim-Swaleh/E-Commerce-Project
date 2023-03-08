import { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";

import { selectCartTotal } from "../../store/cart/cart.selector";

import './payment-form.styles.scss';

import Button, {BUTTON_TYPES_CLASSES} from "../button/button.component";
import { selectCurrentUser } from "../../store/user.selector";


const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements(); 
    const amount = useSelector(selectCartTotal);
    const currentUser = useSelector(selectCurrentUser);
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);


    const paymentHandler = async(e) =>{
      e.preventDefault(); // We do not want the typical form submission to happen

      if(!stripe || !elements){
        return;
      }

      setIsProcessingPayment(true);

      const response = await fetch('http://localhost:54555/.netlify/functions/create-payment-intent',{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({amount: amount}),
      }).then(res =>  res.json());

      const {
        paymentIntent: {client_secret},
      } = response;
      

      const paymentResult = await stripe.confirmCardPayment(client_secret,{ 
        payment_method:{
          card: elements.getElement(CardElement),
          billing_details: {
            name:currentUser? currentUser.displayName: 'Guest',
          }
        }
      });

      setIsProcessingPayment(false);

      if (paymentResult.error){
        alert('Payment Result Error');
      }else {
        if (paymentResult.paymentIntent.status ==="succeeded"){
          alert('Payment Successful');
        }
        alert('Card Error')
      }
};
    return (
        <div className="payment-form-container">
            <div className="form-container" >
              <form onSubmit={paymentHandler}>
                <h2>Credit Card Payment</h2>
              <CardElement />
              <Button disabled={isProcessingPayment}buttonType={BUTTON_TYPES_CLASSES.inverted}>Pay Now</Button>
              </form>
            </div>
        </div>
    );
};

export default PaymentForm;