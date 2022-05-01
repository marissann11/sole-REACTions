import { useReducer } from "react";

import { UPDATE_SHOES, ADD_TO_CART, UPDATE_CART_QUANTITY } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    // if action type value is the value of `UPDATE_PRODUCTS`, return a new state object with an updated products array
    case UPDATE_SHOES:
      return {
        ...state,
        shoes: [...action.shoes],
      };
    case ADD_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.shoe],
      };
    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cartOpen: true,
        cart: state.cart.map((shoe) => {
          if (action._id === shoe._id) {
            shoe.purchaseQty = action.purchaseQty;
          }
          return shoe;
        }),
      };
    // if it's none of these actions, do not update state at all and keep things the same!
    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}
