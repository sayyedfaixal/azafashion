import { NavLink } from "react-router-dom";
import "./OrderConfirmationPopup.css";
import React from "react";

const OrderConfirmationPopup = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Order Placed!</h2>
        <p>Your order has been successfully placed.</p>
        <NavLink to="/">
          <button onClick={onClose}>Go Home</button>
        </NavLink>
      </div>
    </div>
  );
};

export default OrderConfirmationPopup;
