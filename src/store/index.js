import {combineReducers, createStore} from "redux";
import CartReducer from "./reducers/CartReducer";
import ProductsReducer from "./reducers/ProductsReducers"
import WishListReducer from "./reducers/WIshListReducer";
import { devToolsEnhancer } from "redux-devtools-extension";
const root=combineReducers(
    {
        ProductsReducer,CartReducer,WishListReducer
    }
)

const store=createStore(root,devToolsEnhancer());

export default store;
