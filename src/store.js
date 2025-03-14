import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from '@redux-devtools/extension';
import { getAllProductsReducer, getProductByIdReducer } from "./reducers/productReducer";
import cartReducer from "./reducers/cartReducer";

// Log the imported reducers
console.log("Imported reducers:", { getAllProductsReducer, getProductByIdReducer, cartReducer });

// Combine reducers
const finalReducer = combineReducers({
  allProducts: getAllProductsReducer,
  getProductByIdReducer: getProductByIdReducer,
  cartReducer: cartReducer,
});

// Initialize with empty cart if localStorage is empty
const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initialState = {
  cartReducer: {
    cartItems: cartItemsFromStorage
  }
};

// Log the initial state
console.log("Initial state:", initialState);

// Create store with middleware
const store = createStore(
  finalReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

// Log the store state after creation
console.log("Store state after creation:", store.getState());

export default store;
