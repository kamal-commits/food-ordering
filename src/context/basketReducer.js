import {
  SET_FOOD_IN_BASKET,
  INCREASE_FOOD_IN_BASKET,
  DECREASE_FOOD_IN_BASKET,
  REMOVE_FROM_CART,
} from './action.types';

export default (state, action) => {
  const { shoppingCart, qty, totalPrice } = state;
  let food;
  let updatedQty;
  let updatedPrice;
  let index;

  switch (action.type) {
    case SET_FOOD_IN_BASKET:
      console.log('clicked');
      const check = shoppingCart.find((item) => item.id === action.id);
      if (check) {
        return state;
      } else {
        food = action.item;
        updatedQty = qty + 1;
        updatedPrice = totalPrice + food.rate;
        return {
          shoppingCart: [food, ...shoppingCart],
          totalPrice: updatedPrice,
          qty: updatedQty,
        };
      }

    case DECREASE_FOOD_IN_BASKET:
      food = action.item;

      if (food.qty > 1) {
        food.qty = food.qty - 1;
        updatedPrice = totalPrice - food.rate;
        updatedQty = qty - 1;
        index = shoppingCart.findIndex((item) => item.id === action.id);
        shoppingCart[index] = food;
      }

      return {
        shoppingCart: [...shoppingCart],
        totalPrice: updatedPrice,
        qty: updatedQty,
      };

    case INCREASE_FOOD_IN_BASKET:
      food = action.item;
      food.qty = food.qty + 1;
      updatedPrice = totalPrice + food.rate;
      updatedQty = qty + 1;
      index = shoppingCart.findIndex((item) => item.id === action.id);
      shoppingCart[index] = food;

      return {
        shoppingCart: [...shoppingCart],
        totalPrice: updatedPrice,
        qty: updatedQty,
      };

    case REMOVE_FROM_CART:
      const filter = shoppingCart.filter((item) => item.id !== action.id);
      food = action.item;
      updatedQty = qty - food.qty;
      updatedPrice = totalPrice - food.price * food.qty;

      return {
        shoppingCart: [...filter],
        totalPrice: updatedPrice,
        qty: updatedQty,
      };

    default:
      return state;
  }
};
