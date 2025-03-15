import { createStore, applyMiddleware, combineReducers } from "redux";
import {thunk} from "redux-thunk";
import { composeWithDevTools } from '@redux-devtools/extension';
import { getAllProductsReducer, getProductByIdReducer } from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";
import { registerNewUserReducer } from "./reducers/userReducer";

const finalReducer = combineReducers({
  allProducts: getAllProductsReducer,
  getProductByIdReducer: getProductByIdReducer,
  cartReducer: cartReducer,
  registerNewUserReducer: registerNewUserReducer
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initialState = {
  cartReducer: {
    cartItems: cartItemsFromStorage
  }
};

const store = createStore(
  finalReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
