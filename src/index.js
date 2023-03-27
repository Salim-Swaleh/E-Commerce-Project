import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Elements } from '@stripe/react-stripe-js';

import App from './App';
import { store} from './store/store';
import { stripePromise } from './utils/stripe/stripe.utils';

import './index.scss';

ReactDOM.render(
  
   // The <React.StrictMode> component is used to highlight potential problems in the application and its components during development mode
  <React.StrictMode>

    {/* The <Provider> component is used to provide the Redux store to the application */} 
    <Provider store={store}>

         {/* The <BrowserRouter> component is used to enable client-side routing and handle navigation in the application */}
        <BrowserRouter>

           {/* The <Elements> component is used to wrap the Stripe payment processing functionality */}
          <Elements stripe = {stripePromise}>

            {/* The <App> component is the root component of the application */}
             <App />
          </Elements> 
         </BrowserRouter>
    </Provider>
  </React.StrictMode>
  
  // This is the HTML element in the DOM where the application is rendered
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
