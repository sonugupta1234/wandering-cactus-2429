import axios from "axios";
import { FETCH_ACCESORIES_SUCCESS, FETCH_FAILUE, FETCH_MEN_SUCCESS, FETCH_REQUEST, FETCH_WOMEN_SUCCESS } from "./actionTypes";
export const getSop_men = (count) => (dispatch) => {
  dispatch({ type: FETCH_REQUEST });
  axios
    .get(`https://wild-blue-swallow-wig.cyclic.app/mens?_page=1&_limit=${count}`)
    .then((res) => dispatch({ type: FETCH_MEN_SUCCESS, payload: res.data }))
    .catch((e) => dispatch({ type: FETCH_FAILUE }));
};
export const getSop_Women = (count) => (dispatch) => {
    dispatch({ type: FETCH_REQUEST });
    axios
      .get(`https://wild-blue-swallow-wig.cyclic.app/womens?_page=1&_limit=${count}`)
      .then((res) => dispatch({ type: FETCH_WOMEN_SUCCESS, payload: res.data }))
      .catch((e) => dispatch({ type: FETCH_FAILUE }));
  };
  export const getSop_Accesories = (count) => (dispatch) => {
    dispatch({ type: FETCH_REQUEST });
    axios
      .get(`https://wild-blue-swallow-wig.cyclic.app/mobile_accessories?_page=1&_limit=${count}`)
      .then((res) => dispatch({ type: FETCH_ACCESORIES_SUCCESS, payload: res.data }))
      .catch((e) => dispatch({ type: FETCH_FAILUE }));
  };