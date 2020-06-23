/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext } from 'react';
import FoodCard from './FoodCard';
import { FoodContext } from '../context/foodContext';

const FoodMenu = () => {
  const { foods } = useContext(FoodContext);

  return (
    <div className="container-fluid">
      <div className="row">
        {foods.map((item) => (
          <div className="col-md-3" key={item.id}>
            <FoodCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodMenu;
