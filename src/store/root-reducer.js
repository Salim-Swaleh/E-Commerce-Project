import { combineReducers } from "@reduxjs/toolkit"; //A method that allows us to create one final reducer that we can use inside our store by combining reducers
import { userReducer} from './user/user.reducer';
import { categoriesReducer } from "./categories/category.reducer";
import { cartReducer } from "./cart/cart.reducer";

export const rootReducer = combineReducers({
   user: userReducer, //Key is user and value is user reducer
   categories: categoriesReducer,
   cart: cartReducer,
});