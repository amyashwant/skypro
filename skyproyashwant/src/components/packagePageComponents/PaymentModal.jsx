// Modal.js
import React, { useState } from "react";
import MultiForm from "./multiform/MultiForm";
import SecondModal from "./SecondModal";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const PaymentModal = ({ handleClose, show, children }) => {
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [allTotal, setAllTotal] = useState(0);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cartItems = useSelector((state) => state.cart.items);
  const viewCartItems = useSelector((state) => state.cart.viewItems);
  console.log("cartItems.items>?>", cartItems);

  console.log("cart in packages", cartItems);

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

  const getViewItemsPrice = () => {
    const totalPrice = viewCartItems.reduce((acc, item) => {
      return acc + parseFloat(item.price);
    }, 0);

    return totalPrice;
  };

  const calculateGST = (subtotal) => {
    const gstRate = 0.18;
    return (subtotal + getViewItemsPrice()) * gstRate;
  };

  const subtotal = Math.floor(cartItems[0]?.packagePrice) || 0;
  // console.log(subtotal);

  const gstAmount = calculateGST(subtotal);
  // console.log(gstAmount);
  const total = subtotal + getViewItemsPrice() + gstAmount;
  // console.log(total);

  return (
    <>
      <div>
        <div style={overlayStyle} ></div>
        <div style={modalStyle}>
          <div className="your-shoping-cart">
            <div className="container">
              <div className="title-box">
                <h1>Your Package Cart</h1>
                <span className="close-icon" onClick={handleClose}>x</span>
              </div>
              <div className="product-box">
                <div className="info-box">
                  <p>{cartItems[0]?.name}</p>
                </div>
              </div>
              <hr />
              <div className="cost-box">
                <div>
                  <p>
                    {cartItems[0]?.title ? cartItems[0]?.title : "your package"}
                    {/* {cartItems[0]?.name ? cartItems[0]?.name : "your package"} */}
                  </p>
                  {cartItems[0] ? (
                    <p>₹ {Math.floor(cartItems[0]?.packagePrice)}.00</p>
                  ) : (
                    "₹ 0"
                  )}
                  {/* <p>₹ { Math.floor(cartItems[0]?.packagePrice)}.00</p> */}
                </div>
                <div>
                  {viewCartItems?.map((item) => {
                    return (
                      <>
                        <p>{item?.name?.slice(0, 9)}</p>
                        <p>{item?.price}</p>
                      </>
                    );
                  })}
                </div>
                <div>
                  <p>GST (18%)</p>
                  <p className="VAT">₹ {gstAmount.toFixed(2)}</p>
                </div>
                <div>
                  <p>Total</p>
                  <p className="NOK">₹ {total.toFixed(2)}</p>
                </div>
              </div>
              {/* <button className="checkout-btn" onClick={checkout}> */}
              {/* <Link to="/payment"> */}
              {/* Checkout */}
              {/* </Link> */}
              {/* </button> */}
              <button
                className="checkout-btn"
                style={{
                  color: isHovered ? "white" : "#071e43",
                  fontWeight: isHovered ? "" : "bold",
                  backgroundColor: isHovered ? "#071e43" : "#fd7e14",
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {/* <Link to="/payment"> */}
                Checkout
                {/* {/ </Link> /} */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentModal;