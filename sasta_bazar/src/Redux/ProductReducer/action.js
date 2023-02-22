import {
  GET_DATA_ERROR,
  GET_DATA_REQUEST,
  GET_DATA_SUCESS,
} from "./actionType";
import axios from "axios";
export const getMensData = () => (dispatch) => {
  dispatch({ type: GET_DATA_REQUEST });
  axios
    .get("https://wild-blue-swallow-wig.cyclic.app/mens")
    .then((res) => dispatch({ type: GET_DATA_SUCESS, payload: res.data }))
    .catch((e) => dispatch({ type: GET_DATA_ERROR }));
};
