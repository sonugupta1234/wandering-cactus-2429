import { ADD_TO_CART, DELETE_TO_CART } from "./actionType";

const initialstate = {
  cart: [],
};

//console.log(initialstate);
export const reducer = (state = initialstate, { type, payload }) => {
  //console.log(payload)
  switch (type) {
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, payload] };
    case DELETE_TO_CART:
      return { ...state, cart: [...payload] };
    default:
      return state;
  }
};
