import {
  GET_ALL_DATA_SUCESS,
  GET_DATA_ERROR,
  GET_DATA_REQUEST,
  GET_MENS_DATA_SUCESS,
  GET_MOBILE_DATA_SUCESS,
  GET_WOMENS_DATA_SUCESS,
} from "./actionType";
import axios from "axios";
// mens Data
export const getMensData = (obj) => (dispatch) => {
  dispatch({ type: GET_DATA_REQUEST });
  axios
    .get("https://wild-blue-swallow-wig.cyclic.app/products?category=mens", obj)
    .then((res) => dispatch({ type: GET_MENS_DATA_SUCESS, payload: res.data }))
    .catch((e) => dispatch({ type: GET_DATA_ERROR }));
};
// womens Data
export const getWomensData = (obj) => (dispatch) => {
  dispatch({ type: GET_DATA_REQUEST });
  axios
    .get(
      "https://wild-blue-swallow-wig.cyclic.app/products?category=womens",
      obj
    )
    .then((res) =>
      dispatch({ type: GET_WOMENS_DATA_SUCESS, payload: res.data })
    )
    .catch((e) => dispatch({ type: GET_DATA_ERROR }));
};
// Mobile Data
export const getMobileData = (obj) => (dispatch) => {
  dispatch({ type: GET_DATA_REQUEST });
  axios
    .get(
      "https://wild-blue-swallow-wig.cyclic.app/products?category=mobile_accessories",
      obj
    )
    .then((res) =>
      dispatch({ type: GET_MOBILE_DATA_SUCESS, payload: res.data })
    )
    .catch((e) => dispatch({ type: GET_DATA_ERROR }));
};
//get all data

export const getAllData = (query) => (dispatch) => {
  dispatch({ type: GET_DATA_REQUEST });
  axios
    .get(
      `https://wild-blue-swallow-wig.cyclic.app/products?q=${query}&_limit=20`
    )
    .then((res) => dispatch({ type: GET_ALL_DATA_SUCESS, payload: res.data }))
    .catch((e) => dispatch({ type: GET_DATA_ERROR }));
};
