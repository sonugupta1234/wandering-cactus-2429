import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as ProductReducer } from "./ProductReducer/reducer";
import { reducer as shopReducer } from "./ShoppingReducer/reducer";
let mainReducer = combineReducers({ ProductReducer,shopReducer });
export const store = legacy_createStore(mainReducer, applyMiddleware(thunk));
