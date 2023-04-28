import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { delItem , addItem} from "../redux/action/index";

const Cart = () => {
  const state = useSelector((state) => state.handelCart);
  const dispatch = useDispatch();

  const handelPlusButton = (cartItem) =>{
    dispatch(addItem(cartItem))
  }

  const handelMinusButton = (cartItem) =>{
    dispatch(delItem(cartItem))
}

function handlePlaceOrder(){
  alert("Your order is sucessfully done!!!!!!!")
}
  const cartItems = (cartItem) => {
    return (
      <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src={cartItem.image}
                alt={cartItem.title}
                height="200px"
                width="180px"
              />
            </div>
            <div className="col-md-4">
              <h3>{cartItem.title}</h3>
              <p className="lead fw-bold">
                {cartItem.qty} X ₹ {cartItem.price}= ₹{" "}
                {cartItem.qty * cartItem.price}
              </p>
              <button
                className="btn btn-outline-dark me-4 mt-3"
                onClick={() => handelMinusButton(cartItem)}
              >
                <i className="fa fa-minus"></i>
              </button>

              <button
                className="btn btn-outline-dark mt-3"
                onClick={() => handelPlusButton(cartItem)}
              >
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };

  const button = () => {
    return (
      <div className="container">
        <div className="row">
          <buttom className="btn btn-outline-dark mb-5 w-25 mx-auto" onClick={handlePlaceOrder}>
            Proceed To checkout
          </buttom>
        </div>
      </div>
    );
  };

  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && button()}
    </>
  );
};

export default Cart;
