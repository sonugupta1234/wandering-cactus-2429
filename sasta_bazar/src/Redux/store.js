import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as MensReducer } from "./MensReducer/reducer";
let mainReducer = combineReducers({ MensReducer });
export const store = legacy_createStore(mainReducer, applyMiddleware(thunk));
