import { createSlice } from "@reduxjs/toolkit";

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



export const CART_INITIAL_STATE ={
    cartItems:[],
    isCartOpen: false,
};

export const cartSlice = createSlice({ 
    name: 'cart',
    initialState: CART_INITIAL_STATE,
    reducers: {
        setIsCartOpen(state, action){
            state.isCartOpen = action.payload;  
        },
        addItemToCart(state, action){
            state.cartItems = addCartItem(state.cartItems, action.payload);
        },
        removeItemFromCart(state, action){
            state.cartItems = removeCartItem(state.cartItems, action.payload);
        },
        clearItemFromCart(state, action){
            state.cartItems = clearCartItem(state.cartItems, action.payload);
        }
    }
})

export const {setIsCartOpen,addItemToCart, removeItemFromCart, clearItemFromCart} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;

///export const cartReducer = (state = CART_INITIAL_STATE,action = {}) =>{
//    const{type, payload} = action;

//    switch(type){
//        case CART_ACTION_TYPES.SET_CART_ITEMS:
 //           return{
 //               ...state,
 //              cartItems: payload,
   //         };
     //   case CART_ACTION_TYPES.SET_IS_CART_OPEN:
       //     return{
         //      ...state,
           //    isCartOpen: payload,
            //    };
       // default:
        //   return state;
   // }
//};