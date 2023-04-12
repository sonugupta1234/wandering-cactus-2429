import {type} from "@testing-library/user-event/dist/type"
import {
    CREATE_PRODUCT_REQUEST,
    GET_PRODUCT_FAILURE,
    GET_PRODUCT_REQUEST,
    GET_PRODUCT_SUCCESS,
    GET_USERS_SUCCESS
} from "./actionTypes"
import axios from "axios"


export const createProduct = (payload) => {
    axios.post(`https://wild-blue-swallow-wig.cyclic.app/products`, payload)
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

export const get_user_success = (payload) => {
    return {type: GET_USERS_SUCCESS, payload}
}


export const GET_PRODUCT =(payload)=> (dispatch) => {
    dispatch(get_product_request())
    axios.get(`https://wild-blue-swallow-wig.cyclic.app/products?_page=${payload}&_limit=30`).then((res) => dispatch(get_product_success(res.data))).catch((res) => dispatch(get_product_failure()))
}

export const UPDATE_PRODUCT = (payload) => (dispatch) => {
    axios.patch(`https://wild-blue-swallow-wig.cyclic.app/products/${
        payload.id
    }`, payload).then(() => dispatch(GET_PRODUCT))
}

export const DELETE_PRODUCT = (payload) => (dispatch) => { // console.log(payload)
    axios.delete(`https://wild-blue-swallow-wig.cyclic.app/products/${payload}`).then(() => dispatch(GET_PRODUCT))
}

export const GET_USERS = (dispatch) => {
    axios.get(`https://wild-blue-swallow-wig.cyclic.app/userdata`).then((res) => dispatch(get_user_success(res.data)))
}
