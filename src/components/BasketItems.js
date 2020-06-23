import React, { useContext } from 'react';
import { BasketContext } from '../context/basketContext';
import {
  INCREASE_FOOD_IN_BASKET,
  DECREASE_FOOD_IN_BASKET,
  REMOVE_FROM_CART,
} from '../context/action.types';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const BasketItems = ({ history }) => {
  const { shoppingCart, totalPrice, qty, dispatch } = useContext(BasketContext);
  console.log(shoppingCart);

  console.log(qty);

  const basket = () => {
    return (
      <div>
        {shoppingCart.length > 0 ? (
          <div>
            <table className="table table-borderless text-center table-responsive">
              <thead>
                <tr className="food-details">
                  <th>Item</th>
                  <th>Item Name</th>
                  <th>Quantity</th>
                  <th>Rate(Rs.)</th>
                  <th>Remove</th>
                  <th>Total of Item(Rs.)</th>
                </tr>
              </thead>
              <tbody>
                {shoppingCart.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img src={item.picture} alt="" height="100px" />
                    </td>
                    <td> {item.name} </td>
                    <td>
                      <div
                        className="btn btn-success"
                        onClick={() =>
                          dispatch({
                            type: INCREASE_FOOD_IN_BASKET,
                            id: item.id,
                            item,
                          })
                        }
                      >
                        +
                      </div>

                      <div className="font-weight-bold mr-2 ml-2">
                        {item.qty}
                      </div>
                      <div
                        className="btn btn-danger"
                        onClick={() =>
                          dispatch({
                            type: DECREASE_FOOD_IN_BASKET,
                            id: item.id,
                            item,
                          })
                        }
                      >
                        -
                      </div>
                    </td>

                    <td>
                      {' '}
                      <i class="fa fa-inr" aria-hidden="true"></i>
                      {item.rate}{' '}
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() =>
                          dispatch(
                            {
                              type: REMOVE_FROM_CART,
                              id: item.id,
                              item,
                            },
                            toast(' Item Removed From Cart..!', {
                              type: 'success',
                              position: 'top-center',
                              autoClose: 5000,
                              // hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                            })
                          )
                        }
                      >
                        Remove
                      </button>
                    </td>
                    <td>
                      {' '}
                      <i class="fa fa-inr" aria-hidden="true"></i>
                      {item.rate * item.qty}{' '}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>
            <h1>Your Cart is Empty</h1>
            <Link to="/" className="btn btn-success">
              Order Now
            </Link>
          </div>
        )}
      </div>
    );
  };

  const placeOrder = () => {
    toast(' Order Placed..!', {
      type: 'success',
      position: 'top-center',
      autoClose: 5000,
      // hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const amountTotal = () => {
    return (
      <div className="text-center">
        <h3>
          Subtotal ( {qty} items ) :
          <i className="fa fa-inr ml-2" aria-hidden="true"></i>
          {totalPrice}
        </h3>

        {totalPrice > 0 ? (
          <button className="btn btn-secondary" onClick={() => placeOrder()}>
            Place Order
          </button>
        ) : null}
      </div>
    );
  };

  return (
    <div className="container-fluid ">
      <ToastContainer />
      <div className="row">
        <div className="col-md-7 offset-md-1 text-center mt-5">{basket()}</div>
        <div className="col-md-4 mt-5 ">{amountTotal()}</div>
      </div>
    </div>
  );
};

export default BasketItems;
