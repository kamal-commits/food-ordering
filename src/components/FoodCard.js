import React, { useContext } from 'react';
import { SET_FOOD_IN_BASKET } from '../context/action.types';
import { BasketContext } from '../context/basketContext';
import { toast, ToastContainer } from 'react-toastify';

const FoodCard = ({ item }) => {
  const { dispatch } = useContext(BasketContext);
  const { id, name, picture, rate } = item;

  const addToCart = () => {
    dispatch(
      {
        type: SET_FOOD_IN_BASKET,
        id: id,
        item,
      },
      toast(' Item Added to Basket', {
        type: 'success',
        position: 'top-center',
        autoClose: 5000,
        // hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    );
  };

  return (
    <div>
      <ToastContainer />
      <div className="card text-center mt-3 ml-3" style={{ width: '20rem' }}>
        <img
          className="card-img-top"
          src={picture}
          alt="Card  cap"
          height="200px"
        />
        <div className="card-body">
          <h5 className="card-title card-details ">{name}</h5>
          <p className="card-text card-details">
            <i className="fa fa-inr" aria-hidden="true"></i>
            {rate}
          </p>
          <div
            className="btn btn-primary card-details"
            onClick={() => {
              addToCart();
            }}
          >
            Add to Basket
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
