import { createSlice } from "@reduxjs/toolkit";

//In Redux, reducers are functions that specify how the application's state should change in response to actions dispatched to the Redux store. 
//A reducer takes in the current state and an action object, and returns the new state. 

export const addCartItem =(cartItems,productToAdd) =>{
    // Find if cartitems contains product to add
    const existingCartItem = cartItems.find(
        (cartItem)=> cartItem.id ===productToAdd.id);

    //If found, Increment quantity
    if (existingCartItem){
        return cartItems.map((cartItem)=> cartItem.id === productToAdd.id ?
        {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem //if a match is found, return a new array of cart items with the same item but the quantity is increased to one. If it doesnt match
        // just return the cart item
        );
    }

    //if not found, return new array with the new cart items + existing cart items (modified)
    return[...cartItems,{...productToAdd, quantity: 1}];
}

const removeCartItem = (cartItems, cartItemToRemove) =>{
    //find cart item to remove
    const existingCartItem = cartItems.find(
        (cartItem)=> cartItem.id ===cartItemToRemove.id);

    //check if quantity is equal to 1, if it is, remove that item from the cart
    if (existingCartItem.quantity ===1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }

    //if it isnt, return back cart items with matching cart item with quantity reduced by 1
    return cartItems.map((cartItem)=> cartItem.id === cartItemToRemove.id ?
        {...cartItem, quantity: cartItem.quantity - 1}
        : cartItem );

};

const clearCartItem = (cartItems, cartItemToClear) => 
cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id); // To remove items from cart completely

;


// The CART_INITIAL_STATE object contains the initial state for the cart reducer.
export const CART_INITIAL_STATE ={
    cartItems:[],
    isCartOpen: false,
};
// The cartSlice object contains the cart reducer and its associated actions.
export const cartSlice = createSlice({ 
    name: 'cart',
    initialState: CART_INITIAL_STATE,
    reducers: {
        // The setIsCartOpen action is used to set the isCartOpen property in the cart state.
        setIsCartOpen(state, action){
            state.isCartOpen = action.payload;  
        },
        // The addItemToCart action is used to add an item to the cart state.
        addItemToCart(state, action){
            state.cartItems = addCartItem(state.cartItems, action.payload);
        },
        // The removeItemFromCart action is used to remove an item from the cart state.
        removeItemFromCart(state, action){
            state.cartItems = removeCartItem(state.cartItems, action.payload);
        },
        // The clearItemFromCart action is used to clear an item from the cart state.
        clearItemFromCart(state, action){
            state.cartItems = clearCartItem(state.cartItems, action.payload);
        }
    }
})
// The actions exported from the cartSlice object can be used to update the cart state.
export const {setIsCartOpen,addItemToCart, removeItemFromCart, clearItemFromCart} = cartSlice.actions;

// The cartReducer exports the cart reducer that can be used in the Redux store.
export const cartReducer = cartSlice.reducer;

