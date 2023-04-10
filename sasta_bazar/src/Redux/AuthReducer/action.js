import {
    GET_DATA_ERROR,
    GET_DATA_REQUEST,
    GET_DATA_SUCCESS,
    POST_DATA_ERROR,
    POST_DATA_REQUEST,
    POST_DATA_SUCCESS,
    SET_AUTH_DATA,
    SET_LOGOUT
} from "./actionType"
import axios from "axios"

export const getdatarequest = () => {
    return {type: GET_DATA_REQUEST}
}

export const getdatasuccess = (payload) => {
    return {type: GET_DATA_SUCCESS, payload}
}

export const getdataerror = () => {
    return {type: GET_DATA_ERROR}
}

export const postdatarequest = () => {
    return {type: POST_DATA_REQUEST}
}

export const postdatasuccess = () => {
    return {type: POST_DATA_SUCCESS}
}

export const postdataerror = () => {
    return {type: POST_DATA_ERROR}
}

export const getauthstatus = (payload) => {
    return {type: SET_AUTH_DATA, payload}
}

export const gologout = () => {
    return {type: SET_LOGOUT}
}


export const adddata = (payload) =>  (dispatch) => {
    dispatch(postdatarequest())
   return  axios.post(" http://localhost:8000/userdata", payload)
    .then(() => dispatch(postdatasuccess()))
    .catch(() => dispatch(postdataerror()))
}

export const getdata = async (dispatch) => {
    dispatch(getdatarequest())
    await axios.get("http://localhost:8000/userdata").then((res) => {
        dispatch(getdatasuccess(res.data))
    }).catch(() => dispatch(getdataerror()))
}

export const authstatus = (payload) => (dispatch) => {
    localStorage.setItem("user", JSON.stringify(payload))
    localStorage.setItem("isAuth", JSON.stringify(true))
 dispatch(getauthstatus(payload))
}

export const logout = (dispatch) => {
    localStorage.clear();
    dispatch(gologout())
}
