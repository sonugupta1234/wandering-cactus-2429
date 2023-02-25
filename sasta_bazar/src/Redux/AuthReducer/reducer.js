import { GET_DATA_ERROR, GET_DATA_REQUEST, GET_DATA_SUCCESS, POST_DATA_ERROR, POST_DATA_REQUEST, POST_DATA_SUCCESS, SET_AUTH_DATA } from "./actionType"



const initialState={
    isLoading: false,
    isAuth: false,
    userdata: [],
    isError: false
}

export const reducer=(state=initialState, {type,payload})=>{
        switch(type){
            case GET_DATA_REQUEST:
                return {...state, isLoading: true}

            case GET_DATA_SUCCESS:
                return {...state,isLoading: false, userdata: payload}

            case GET_DATA_ERROR:
                return {...state,isLoading: false, isError: true}

            case SET_AUTH_DATA:
                return {...state,isAuth: true}

            case POST_DATA_REQUEST:
                return {...state, isLoading: true}


            case POST_DATA_SUCCESS:
                return {...state, isLoading: false}


            case POST_DATA_ERROR:
                return {...state,isError: true}

            default:
                return state;
        }
}