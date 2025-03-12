import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { getAllProductsReducer, getProductByIdReducer } from "./reducers/productReducer";

// Combine reducers
const rootReducer = combineReducers({
  allProducts: getAllProductsReducer,
  getProductByIdReducer: getProductByIdReducer
});

// Create store with middleware
const store = createStore(
  rootReducer,
  applyMiddleware(thunk) // Apply thunk middleware without devtools
);

export default store;
