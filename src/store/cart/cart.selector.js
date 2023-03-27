import { createSelector } from "reselect";
//In Redux, selectors are functions that extract specific pieces of data from the application's state. Selectors provide a way to derive data from the state in a structured and efficient way. 
//They are typically used in conjunction with the React-Redux library to connect components to the Redux store.

// This code defines several selectors that extract specific pieces of data from the Redux store.

//returns the cart object from the state.
const selectCartReducer = state => state.cart;

//uses the createSelector function from the Reselect library to derive a new piece of data from the cart object. 
//It takes the selectCartReducer selector as its input, and returns the cartItems property of the cart object.
 export const selectCartItems = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems
 );

 //uses the createSelector function to derive another piece of data from the cart object. 
 //It takes the selectCartReducer selector as its input, and returns the isCartOpen property of the cart object.
 export const selectIsCartOpen = createSelector(
    [selectCartReducer],
    (cart) => cart.isCartOpen
 );

 //uses the createSelector function to derive a piece of data that represents the total number of items in the cart. 
 //It takes the selectCartItems selector as its input, and uses the reduce() method to sum up the quantity property of each item in the cart.
 export const selectCartCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce(
        (total, cartItem)=> total + cartItem.quantity, 0)
 );

 //uses the createSelector function to derive a piece of data that represents the total cost of the items in the cart.
 // It takes the selectCartItems selector as its input, and uses the reduce() method to sum up the product of the quantity and price properties of each item in the cart.
  export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce(
        (total, cartItem)=> total + cartItem.quantity * cartItem.price, 0)
  );

