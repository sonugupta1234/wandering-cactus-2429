import {
  GET_MENS_DATA_ERROR,
  GET_MENS_DATA_REQUEST,
  GET_MENS_DATA_SUCESS,
} from "./actionType";

const initState = {
  isLoading: false,
  isError: false,
  mens_data: [],
};
export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_MENS_DATA_REQUEST:
      return { ...state, isLoading: true };
    case GET_MENS_DATA_SUCESS:
      return { ...state, isLoading: false, mens_data: payload };
    case GET_MENS_DATA_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
