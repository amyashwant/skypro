// Modal.js
import React, { useState } from "react";
import MultiForm from "./multiform/MultiForm";
import SecondModal from "./SecondModal";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PaymentModal = ({ handleClose, show, children }) => {
  const [showSecondModal, setShowSecondModal] = useState(false);

  const cartItems = useSelector((state) => state.cart.items);

  console.log("cart in packages", cartItems);

  const checkout = async () => {
    await fetch("http://localhost:4000/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cartItems.items }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url); // Forwarding user to Stripe
        }
      });
  };

  const modalStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: show ? "block" : "none",
    // backgroundColor: "black",
    // padding: "20px",
    zIndex: 1000,
  };

  const overlayStyle = {
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(35, 38, 43, 0.94)",
    display: show ? "block" : "none",
    zIndex: 999,
  };

  const calculateGST = (subtotal) => {
    const gstRate = 0.18;
    return subtotal * gstRate;
  };

  const subtotal = cartItems[0]?.price || 0;
  console.log(subtotal);
  const gstAmount = calculateGST(subtotal);
  console.log(gstAmount);
  const total = subtotal + gstAmount;
  console.log(total);

  return (
    <>
      <div>
        <div style={overlayStyle} onClick={handleClose}></div>
        <div style={modalStyle}>
          <div className="your-shoping-cart">
            <div className="container">
              <div className="title-box">
                <h1>Your Cart</h1>
                <span className="close-icon">x</span>
              </div>
              <div className="product-box">
                <div className="info-box">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
              <hr />
              <div className="cost-box">
                <div>
                  <p>
                    {cartItems[0]?.title ? cartItems[0]?.title : "your package"}
                  </p>
                  <p>₹ {cartItems[0]?.price}</p>
                </div>
                <div>
                  <p>GST</p>
                  <p className="VAT">18%</p>
                </div>
                <div>
                  <p>Total</p>
                  <p className="NOK">₹ {total}</p>
                </div>
              </div>
              <button className="checkout-btn" onClick={checkout}>
                {/* <Link to="/payment"> */}
                Checkout
                {/* </Link> */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentModal;
