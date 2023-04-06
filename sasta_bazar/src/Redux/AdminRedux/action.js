import {type} from "@testing-library/user-event/dist/type"
import {CREATE_PRODUCT_REQUEST, GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS} from "./actionTypes"
import axios from "axios"


export const createProduct = (payload) => {
    axios.post(`http://localhost:8000/products`, payload)
}

export const get_product_request = () => {
    return {type: GET_PRODUCT_REQUEST}
}

export const get_product_failure = () => {
    return {type: GET_PRODUCT_FAILURE}
}

export const get_product_success = (payload) => {
    return {type: GET_PRODUCT_SUCCESS, payload}
}


export const GET_PRODUCT = (dispatch) =>{
dispatch(get_product_request())
axios.get(`http://localhost:8000/products`)
.then((res)=>dispatch(get_product_success(res.data)))
.catch((res)=>dispatch(get_product_failure()))
}

export const UPDATE_PRODUCT = (payload) => (dispatch) =>{
   axios.patch(`http://localhost:8000/products/${payload.id}`,payload)
   .then(()=>dispatch(GET_PRODUCT))
}

export const DELETE_PRODUCT = (payload) =>(dispatch)=>{
   // console.log(payload)
     axios.delete(`http://localhost:8000/products/${payload}`)
     .then(()=>dispatch(GET_PRODUCT))
}