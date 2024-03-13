import React, {useCallback, useReducer} from 'react';
import {createContext} from 'react';

export const CartContext = createContext();

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM';

const cartInitialState = {
  carts: [],
};

const cartReducer = (state, action) => {
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
          item.id === payload.id
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

const CartProvider = ({children}) => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const handleAddToCart = useCallback(item => {
    dispatch({type: ADD_TO_CART, payload: item});
  }, []);

  const handleRemoveFromCart = useCallback(itemId => {
    dispatch({type: REMOVE_FROM_CART, payload: itemId});
  }, []);

  const handleUpdateCartItem = useCallback(
    (itemId, quantity) => {
      const itemToEdit = state.carts.find(item => item.id === itemId);
      if (itemToEdit.quantity === 1 && quantity === -1) {
        dispatch({type: REMOVE_FROM_CART, payload: itemId});
        return;
      }
      dispatch({type: UPDATE_CART_ITEM, payload: {id: itemId, quantity}});
    },
    [state.carts],
  );

  return (
    <CartContext.Provider
      value={{cartData: state.carts, handleAddToCart, handleRemoveFromCart, handleUpdateCartItem}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
