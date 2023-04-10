import {ADD_TO_CART, DELETE_TO_CART, ORDERED_PLACED} from "./actionType";
import axios from "axios"


export const postCartData = (payload) => {
    return {type: ADD_TO_CART, payload};
};

export const deleteCartData = (payload) => { // localStorage.setItem("cart",JSON.stringify(payload))
    return {type: DELETE_TO_CART, payload};
};

export const orderPlaced = () => {
    localStorage.removeItem('cart')
    return {type: ORDERED_PLACED}
}


export const orderPlacedSuccess = (payload) => (dispatch) => {
    // const orders = []
    // axios.get(`http://localhost:8000/orders`).then((res) =>orders.push(res.data))

    // console.log("orders",orders)
    // console.log("payload",payload);
    axios.post(`https://wild-blue-swallow-wig.cyclic.app/orders`, payload).then((res) => dispatch(orderPlaced())).catch((err) => console.log(err))
}
