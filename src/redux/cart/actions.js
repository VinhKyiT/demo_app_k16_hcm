import {ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_ITEM} from './constants';

export const addToCart = payload => ({
  type: ADD_TO_CART,
  payload,
});

export const removeFromCart = payload => ({
  type: REMOVE_FROM_CART,
  payload,
});

export const updateCartItem = payload => ({
  type: UPDATE_CART_ITEM,
  payload,
});
