import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setIsCartOpen = (boolean) => 
createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);


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



export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems,productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems,cartItemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems,cartItemToClear);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
    
};