import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Elements } from '@stripe/react-stripe-js';

import App from './App';
import { store,persistor } from './store/store';
import { stripePromise } from './utils/stripe/stripe.utils';

import './index.scss';

ReactDOM.render(
  /*all components are nested in the BrowserRouter to leverage the ReactRouter functionalities for navigation*/
  /*There are 3 providers, User provider which detects whether a user is authenticated and signed  in, Products Provider which detects products from the firebase, Cart Provider which detects producsts added to the cart */
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <BrowserRouter>
          <Elements stripe = {stripePromise}>
             <App />
          </Elements> 
         </BrowserRouter>
       {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
  
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
