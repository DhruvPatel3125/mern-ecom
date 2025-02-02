import { getAllProductsReducer } from "./reducers/productReducer";
import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";  // ✅ Corrected import

// Combine reducers
const rootReducer = combineReducers({
  products: getAllProductsReducer, 
});

// Create store with middleware
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store; 