import { FETCH_ACCESORIES_SUCCESS, FETCH_FAILUE, FETCH_MEN_SUCCESS, FETCH_REQUEST, FETCH_WOMEN_SUCCESS } from "./actionTypes";

  const initState = {
    isLoading: false,
    isError: false,
    Sop_men_data: [],
    Sop_women_data: [],
    Sop_Mob_Data:[]
  };
  export const reducer = (state = initState, { type, payload }) => {
    switch (type) {
      case FETCH_REQUEST:
        return { ...state, isLoading: true };
      case FETCH_MEN_SUCCESS:
        return { ...state, isLoading: false, Sop_men_data: payload };
        case FETCH_WOMEN_SUCCESS:
          return { ...state, isLoading: false, Sop_women_data: payload };
          case FETCH_ACCESORIES_SUCCESS:
          return { ...state, isLoading: false, Sop_Mob_Data: payload };
      case FETCH_FAILUE:
        return { ...state, isLoading: false, isError: true };
      default:
        return state;
    }
  };