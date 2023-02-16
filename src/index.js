import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';


import App from './App';

import { UserProvider } from './contexts/user.context';
import { ProductsProvider } from './contexts/products.context';
import { CartProvider } from './contexts/cart.context';

import './index.scss';

ReactDOM.render(
  /*all components are nested in the BrowserRouter to leverage the ReactRouter functionalities for navigation*/
  /*There are 3 providers, User provider which detects whether a user is authenticated and signed  in, Products Provider which detects products from the firebase, Cart Provider which detects producsts added to the cart */
  <React.StrictMode>
    <BrowserRouter> 
    <UserProvider>
      <ProductsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductsProvider>
    </UserProvider> 
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

