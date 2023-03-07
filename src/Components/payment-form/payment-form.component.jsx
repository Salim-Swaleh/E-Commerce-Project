import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import './payment-form.styles.scss';

import Button, {BUTTON_TYPES_CLASSES} from "../button/button.component";
import { async } from "@firebase/util";

 export const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements(); 


    const paymentHandler = async(e) =>{
      e.preventDefault(); // We do not want the typical form submission to happen

      if(!stripe || !elements){
        return;
      }
}
    return (
        <div className="payment-form-container">
            <div className="form-container">
                <h2>Credit Card Payment</h2>
              <CardElement />
              <Button buttonType={BUTTON_TYPES_CLASSES.inverted}>Pay Now</Button>
            </div>
        </div>
    );
};