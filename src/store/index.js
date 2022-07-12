import {combineReducers, createStore} from "redux";
import CartReducer from "./reducers/CartReducer";
import ProductsReducers from "./reducers/ProductsReducers"
import WishListReducer from "./reducers/WIshListReducer";
import FilterReducers from "./reducers/FilterReducers";
import { devToolsEnhancer } from "redux-devtools-extension";
const root=combineReducers(
    {
        ProductsReducers,CartReducer,WishListReducer,FilterReducers
    }
)

const store=createStore(root,devToolsEnhancer());

export default store;
