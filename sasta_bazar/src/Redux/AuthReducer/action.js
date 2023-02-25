import { GET_DATA_ERROR, GET_DATA_REQUEST, GET_DATA_SUCCESS, POST_DATA_ERROR, POST_DATA_REQUEST, POST_DATA_SUCCESS } from "./actionType"
import axios from "axios"

export const getdatarequest=()=>{
    return {type: GET_DATA_REQUEST}
}

export const getdatasuccess=(payload)=>{
    return {type: GET_DATA_SUCCESS,payload}
}

export const getdataerror=()=>{
    return {type: GET_DATA_ERROR}
}

export const postdatarequest=()=>{
    return {type: POST_DATA_REQUEST}
}

export const postdatasuccess=()=>{
    return {type: POST_DATA_SUCCESS}
}

export const postdataerror=()=>{
    return {type: POST_DATA_ERROR}
}


export const adddata=(newdata)=>async(dispatch)=>{
    postdatarequest()
    let res=await axios.post(" http://localhost:8000/userdata",newdata)
    .then(()=>postdatasuccess())
    .catch(()=>postdataerror())
}