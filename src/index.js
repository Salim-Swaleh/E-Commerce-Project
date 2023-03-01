import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

import App from './App';
import './index.scss';

ReactDOM.render(
  /*all components are nested in the BrowserRouter to leverage the ReactRouter functionalities for navigation*/
  /*There are 3 providers, User provider which detects whether a user is authenticated and signed  in, Products Provider which detects products from the firebase, Cart Provider which detects producsts added to the cart */
  <React.StrictMode>
    <Provider store={store}>
     <BrowserRouter> 
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
  
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
