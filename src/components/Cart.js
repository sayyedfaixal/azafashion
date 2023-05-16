import "./Cart.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CLEAR_DATA } from "../redux/actions/action";
import { NavLink } from "react-router-dom";
import OrderConfirmationPopup from "./OrderConfirmationPopup";
import EachProduct from "./EachProduct";

const Cart = () => {
  const dispatch = useDispatch();
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const handlePlaceOrder = () => {
    setIsOrderPlaced(true);
  };

  const handleCloseModal = () => {
    setIsOrderPlaced(false);
    dispatch(CLEAR_DATA());
  };
  const getData = useSelector((state) => state.cartReducer.carts);

  return (
    <div>
      {getData.length ? (
        <>
          <div className="order-details-buy-btn">
            <h2 className="item-details">Order Details</h2>
            <button className="place-order-btn" onClick={handlePlaceOrder}>
              Place Order
            </button>
            {isOrderPlaced && (
              <div className="modal-overlay">
                <OrderConfirmationPopup onClose={handleCloseModal} />
              </div>
            )}
          </div>

          {getData.map((eachProduct) => (
            <EachProduct eachProduct={eachProduct} />
          ))}
        </>
      ) : (
        <>
          <div className="no-product-in-cart">
            <h1>No Product in the cart</h1>
            <NavLink to="/">
              <button className="go-back-btn">GO back </button>
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
