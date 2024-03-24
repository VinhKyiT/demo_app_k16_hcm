import {ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_ITEM} from './constants';

const cartInitialState = {
  carts: [],
};
const cartReducer = (state = cartInitialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case ADD_TO_CART:
      const isItemAlreadyInCart = state.carts.find(product => product.id === payload.id);
      if (isItemAlreadyInCart) {
        return {
          ...state,
          carts: [...state.carts].map(item =>
            item.id === payload.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item,
          ),
        };
      }
      return {
        ...state,
        carts: [...state.carts, {...payload, quantity: 1}],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        carts: state.carts.filter(item => item.id !== payload),
      };
    case UPDATE_CART_ITEM:
      return {
        ...state,
        carts: [...state.carts].map(item =>
          item.id === payload.itemId
            ? {
                ...item,
                quantity: item.quantity + payload.quantity,
              }
            : item,
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
