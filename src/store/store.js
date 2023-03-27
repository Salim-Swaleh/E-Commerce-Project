import { configureStore, } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

// This code initializes a Redux store using the 'configureStore' function from the Redux Toolkit library.
// It also defines an array of middleware functions that will be applied to the store's dispatch process.


// Define an array of middleware functions. In this case,
// only one middleware function 'logger' is defined if the environment is set to 'development' using the 'process.env.NODE_ENV' variable.
// If not, the middleware array will be empty.
const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
   Boolean
 );


export const store = configureStore({
    reducer: rootReducer, // Set the root reducer function for the store.
    middleware: (getDefaultMiddleware) => 
    // Use the 'getDefaultMiddleware' function from Redux Toolkit to get the default middleware array, and concatenate the custom middleware array to it.
    getDefaultMiddleware().concat(middleWares), 
    
});


// The 'getDefaultMiddleware' function returns an array of middleware functions that includes the 'thunk' middleware for handling asynchronous actions.
// The 'concat' method is used to merge the default middleware with the custom middleware.
// This ensures that the custom middleware will be applied after the default middleware.