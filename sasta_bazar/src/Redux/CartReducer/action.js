import {ADD_TO_CART, DELETE_TO_CART, ORDERED_PLACED} from "./actionType";
import axios from "axios"
import {useSelector} from "react-redux"


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
    let data = JSON.parse(localStorage.getItem("cart"))
    for (let i = 0; i < data.length; i++) {
        //console.log("data inside local", data[i]);
        payload.order.push(data[i])
    }
    //console.log("user", payload.order);
    axios({
        method: 'patch',
        url: `https://wild-blue-swallow-wig.cyclic.app/userdata/${
            payload.id
        }`,
        data: {
            order: payload.order
        }
    }).then((res) => dispatch(orderPlaced()))
    // payload.user.order.push()
    // axios.patch(`http://localhost:8000/orders`)
    // console.log("orders",orders)
    // console.log("payload",payload);
    // axios.post(`https://wild-blue-swallow-wig.cyclic.app/orders`, payload).then((res) => dispatch(orderPlaced())).catch((err) => console.log(err))
}
