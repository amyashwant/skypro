// Modal.js
import React, { useState } from "react";
import MultiForm from "./multiform/MultiForm";
import SecondModal from "./SecondModal";

const PaymentModal = ({ handleClose, show, children }) => {
  const [showSecondModal, setShowSecondModal] = useState(false);

  const handleOpenSecondModal = () => {
    setShowSecondModal(true);
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

  return (
    <>
      <div>
        <div style={overlayStyle} onClick={handleClose}></div>
        <div style={modalStyle}>
          <div className="your-shoping-cart">
            <div className="container">
              <div className="title-box">
                <h1>Your Cart</h1>
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
                  <p>Standard Package</p>
                  <p>₹ 0</p>
                </div>
                <div>
                  <p>Total VAT</p>
                  <p className="VAT">-</p>
                </div>
                <div>
                  <p>Total NOK</p>
                  <p className="NOK">₹ 0</p>
                </div>
              </div>
              <button className="Checkout-btn" onClick={handleOpenSecondModal}>
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <SecondModal show={showSecondModal} /> */}
    </>
  );
};

export default PaymentModal;
