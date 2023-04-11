import {GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, GET_USERS_SUCCESS} from "./actionTypes"

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    users: []
}

export const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_PRODUCT_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_PRODUCT_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                products: payload
            }
        case GET_USERS_SUCCESS:
            return {
                ...state,
                users: payload
            }
        default:
            return state
    }
}
