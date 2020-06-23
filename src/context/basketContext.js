import React, { createContext, useReducer } from 'react';
import basketReducer from './basketReducer';

export const BasketContext = createContext();

export const BasketContextProvider = (props) => {
  const [basket, dispatch] = useReducer(basketReducer, {
    shoppingCart: [],
    totalPrice: 0,
    qty: 0,
  });
  return (
    <BasketContext.Provider value={{ ...basket, dispatch }}>
      {props.children}
    </BasketContext.Provider>
  );
};
