import { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";

import { selectCartTotal } from "../../store/cart/cart.selector";

import './payment-form.styles.scss';

import Button, {BUTTON_TYPES_CLASSES} from "../button/button.component";
import { selectCurrentUser } from "../../store/user.selector";

// This is a functional component named PaymentForm
const PaymentForm = () => {

   // The following hooks are used to access Stripe-related functionality and Redux store data
    const stripe = useStripe(); // Stripe hook to access Stripe-related functionality
    const elements = useElements(); // Stripe hook to access the payment form elements
    const amount = useSelector(selectCartTotal); //// Redux hook to access the total cart amount
    const currentUser = useSelector(selectCurrentUser); // Redux hook to access the current user

     // This state variable is used to keep track of whether a payment is being processed or not
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);

     // This function is called when the payment form is submitted
    const paymentHandler = async(e) =>{
      e.preventDefault(); // We do not want the typical default form submission to happen


      // Check if Stripe and Elements are loaded before proceeding
      if(!stripe || !elements){
        return;
      }
      
      // Set the isProcessingPayment state variable to true to indicate that a payment is being processed
      setIsProcessingPayment(true);
      
       // Send a POST request to the create-payment-intent endpoint to create a new payment intent with the amount to be charged
      const response = await fetch('http://localhost:54555/.netlify/functions/create-payment-intent',{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({amount: amount}),
      }).then(res =>  res.json());
       
      // Extract the client_secret from the payment intent response
      const {
        paymentIntent: {client_secret},
      } = response;
      
      // Use Stripe to confirm the card payment by passing in the client_secret and the payment method details (card and billing details) 
      const paymentResult = await stripe.confirmCardPayment(client_secret,{ 
        payment_method:{
          card: elements.getElement(CardElement),
          billing_details: {
            name:currentUser? currentUser.displayName: 'Guest',
          }
        }
      });
       // Set the isProcessingPayment state variable to false to indicate that the payment has finished processing 
      setIsProcessingPayment(false);
     
      // Check the payment result for errors and display an alert message accordingly
      if (paymentResult.error){
        alert('Payment Result Error');
      }else {
        if (paymentResult.paymentIntent.status ==="succeeded"){
          alert('Payment Successful');
        }
        alert('Card Error')
      }
}; 
    // The component returns a payment form with a card element and a 'Pay Now' button
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

// The PaymentForm component is exported as the default export from this module
export default PaymentForm;