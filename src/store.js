import { createStore, applyMiddleware, combineReducers } from "redux";
import {thunk} from "redux-thunk"; // Correct import
import { Provider } from "react-redux"; // Ensure this is used in App.js
import { getAllProductsReducer } from "./reducers/productReducer";

// Combine reducers
const rootReducer = combineReducers({
  allProducts: getAllProductsReducer, // Ensure consistency in key name
});

// Create store with middleware
const store = createStore(
  rootReducer,
  applyMiddleware(thunk) // Apply thunk middleware without devtools
);

export default store;
