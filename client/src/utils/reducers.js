import { useReducer } from "react";

import {
  UPDATE_SHOES,
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  ADD_MULTIPLE_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
} from "./actions";

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
        cart: [...state.cart, action.shoe],
      };
    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((shoe) => {
          if (action.sku === shoe.sku) {
            shoe.purchaseQty = action.purchaseQty;
          }
          return shoe;
        }),
      };
    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.shoes],
      };
    case REMOVE_FROM_CART:
      let newState = state.cart.filter((shoe) => {
        return shoe.sku !== action.sku;
      });
      return {
        ...state,
        cart: newState,
      };
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    // if it's none of these actions, do not update state at all and keep things the same!
    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}
