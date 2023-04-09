import {ADD_TO_CART, DELETE_TO_CART, ORDERED_PLACED} from "./actionType";
import axios from "axios"


export const postCartData = (payload) => {
    return {type: ADD_TO_CART, payload};
};

export const deleteCartData = (payload) => {
    return {type: DELETE_TO_CART, payload};
};

export const orderPlaced = () => {
    return {type: ORDERED_PLACED}
}


export const orderPlacedSuccess = (payload) => (dispatch) => {
    axios.post(`http://localhost:8000/orders`, payload).then((res) => console.log("res.data")).catch((err) => console.log(err))
}
