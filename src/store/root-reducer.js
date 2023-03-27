import { combineReducers } from "@reduxjs/toolkit"; //A method that allows us to create one final reducer that we can use inside our store by combining reducers
import { userReducer} from './user/user.reducer';
import { categoriesReducer } from "./categories/category.reducer";
import { cartReducer } from "./cart/cart.reducer";

// This code exports a combined reducer function that merges the reducers for the user, categories, and cart state into one reducer function.



export const rootReducer = combineReducers({
   user: userReducer, //Key is user and value is user reducer // Assign the 'userReducer' function to the 'user' key.
   categories: categoriesReducer, // Assign the 'categoriesReducer' function to the 'categories' key.
   cart: cartReducer, // Assign the 'cartReducer' function to the 'cart' key.
});


// The combined reducer function takes an object as its argument, where each key-value pair represents a slice of the state.
// In this case, the state has three slices: 'user', 'categories', and 'cart'.
// Each slice is handled by its respective reducer function.