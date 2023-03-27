import { loadStripe } from "@stripe/stripe-js"; // Runs our stripe instance



export const stripePromise = loadStripe(
    process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
    );

//This code initializes a Stripe instance in the client-side of a React application using the loadStripe method. 
//The method takes a single parameter, which is the publishable key associated with the Stripe account.

//The publishable key is a unique identifier that enables a Stripe account to make client-side requests to the Stripe API. 
//The process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY value is used to retrieve the publishable key from the application's environment variables.

//The loadStripe method returns a promise that resolves with a Stripe instance. 
//This instance can then be used to create and handle Stripe elements, such as payment requests and subscriptions, in the client-side of the React application.