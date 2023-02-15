import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';


import App from './App';

import { UserProvider } from './contexts/user.context';
import { ProductsProvider } from './contexts/products.context';

import './index.scss';

ReactDOM.render(
  /*all components are nested in the BrowserRouter to leverage the ReactRouter functionalities for navigation*/
  <React.StrictMode>
    <BrowserRouter> 
    <UserProvider>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </UserProvider> 
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

