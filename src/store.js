import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";  // Corrected import
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllProductsReducer } from "./reducers/productReducer";

// Combine reducers
const rootReducer = combineReducers({
  products: getAllProductsReducer, 
});

// Create store with middleware
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)) // Apply thunk middleware
);

export default store;
