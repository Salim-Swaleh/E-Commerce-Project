import { createContext, useState, useEffect } from "react";

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

const clearCartItem = (cartItems, cartItemToClear) => cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id); // To remove items from cart completely


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () =>{
    },
    cartItems:[],
    addItemToCart:() =>{},
    removeItemFromCart:() =>{},
    clearItemFromCart:()=>{},
    cartCount: 0,
    cartTotal:0
});

export const CartProvider  = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem)=> total + cartItem.quantity, 0)
        setCartCount(newCartCount); //Will add no of items in the cart to the cart Icon
    }, [cartItems]);

    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem)=> total + cartItem.quantity * cartItem.price, 0)
        setCartTotal(newCartTotal); //Will calculate the total amount to be paid for  the items in the cart
    }, [cartItems]);


    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems,productToAdd));
    };

    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems,cartItemToRemove));
    };

    const clearItemFromCart = (cartItemToClear) => {
        setCartItems(clearCartItem(cartItems,cartItemToClear));
    };



    const value = {isCartOpen, 
        setIsCartOpen, 
        addItemToCart,
        removeItemFromCart,
        clearItemFromCart,
        cartTotal, 
        cartItems,
        cartCount};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
    
};