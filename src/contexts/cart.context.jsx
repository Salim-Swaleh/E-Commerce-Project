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

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () =>{
    },
    cartItems:[],
    addItemToCart:() =>{},
    cartCount: 0
});

export const CartProvider  = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem)=> total + cartItem.quantity, 0)
        setCartCount(newCartCount);
    }, [cartItems])


    const addItemToCart = (product) => setCartItems(addCartItem(cartItems,product));
    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
    
};