import {
  GET_DATA_ERROR,
  GET_DATA_REQUEST,
  GET_MENS_DATA_SUCESS,
  GET_MOBILE_DATA_SUCESS,
  GET_WOMENS_DATA_SUCESS,
} from "./actionType";
import axios from "axios";
//mens Data
export const getMensData = () => (dispatch) => {
  dispatch({ type: GET_DATA_REQUEST });
  axios
    .get("https://wild-blue-swallow-wig.cyclic.app/mens")
    .then((res) => dispatch({ type: GET_MENS_DATA_SUCESS, payload: res.data }))
    .catch((e) => dispatch({ type: GET_DATA_ERROR }));
};
//womens Data
export const getWomensData = () => (dispatch) => {
  dispatch({ type: GET_DATA_REQUEST });
  axios
    .get("https://wild-blue-swallow-wig.cyclic.app/womens")
    .then((res) =>
      dispatch({ type: GET_WOMENS_DATA_SUCESS, payload: res.data })
    )
    .catch((e) => dispatch({ type: GET_DATA_ERROR }));
};
//Mobile Data
export const getMobileData = () => (dispatch) => {
  dispatch({ type: GET_DATA_REQUEST });
  axios
    .get("https://wild-blue-swallow-wig.cyclic.app/mobile_accessories")
    .then((res) =>
      dispatch({ type: GET_MOBILE_DATA_SUCESS, payload: res.data })
    )
    .catch((e) => dispatch({ type: GET_DATA_ERROR }));
};
