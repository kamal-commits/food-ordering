import React, { useState } from 'react';

const { createContext } = require('react');
export const FoodContext = createContext();

export const FoodContextProvider = (props) => {
  const [foods] = useState([
    {
      id: 1,
      name: 'Chowmein',
      picture: 'images/veg noodles.jpg',
      rate: 60,
      qty: 1,
    },
    { id: 2, name: 'Roll', picture: 'images/veg-roll.jpg', rate: 30, qty: 1 },
    { id: 3, name: 'Momos', picture: 'images/momos.jpg', rate: 40, qty: 1 },
    {
      id: 4,
      name: 'Manchoorian',
      picture: 'images/manchoorian.png',
      rate: 40,
      qty: 1,
    },
    {
      id: 5,
      name: 'French Fries',
      picture: 'images/french-fries.jpg',
      rate: 40,
      qty: 1,
    },
  ]);

  return (
    <FoodContext.Provider value={{ foods: [...foods] }}>
      {props.children}
    </FoodContext.Provider>
  );
};
