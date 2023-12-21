import React, { useState } from "react";
import MultiForm from "./multiform/MultiForm";
import SecondModal from "./SecondModal";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const PaymentModal = ({ handleClose, show, children }) => {
  const [showSecondModal, setShowSecondModal] = useState(false);

  const cartItems = useSelector((state) => state.cart.items);
  console.log("cartItems.items>?>", cartItems);

  console.log("cart in packages", cartItems);

  // const checkout = async () => {
  //   // await fetch("http://localhost:4000/checkout", {
  //   //   method: "POST",
  //   //   headers: {
  //   //     "Content-Type": "application/json",
  //   //   },
  //   //   body: JSON.stringify({ items: cartItems.items }),
  //   // })
  //   //   .then((response) => {
  //   //     return response.json();
  //   //   })
  //   //   .then((response) => {
  //   //     if (response.url) {
  //   //       window.location.assign(response.url); // Forwarding user to Stripe
  //   //     }
  //   //   });
  // };

  const handleCheckout = async (e) => {
    

   
  const amount = 500;
  const currency = "INR";
  const receiptId = "qwsaq1";

  const handleCheckout = async (e) => {
    const response = await fetch("http://localhost:5000/api/checkout", {
      method: "POST",
      body: JSON.stringify({
        amount,
        currency,
        receipt: receiptId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const order = await response.json();
    console.log(order);

    var options = {
      key: "rzp_test_9HKVEPG7qmotGQ", // Enter the Key ID generated from the Dashboard
      amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency,
      name: "Acme Corp", //your business name
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
        name: "Gaurav Kumar", //your customer's name
        email: "gaurav.kumar@example.com",
        contact: "9000090000", //Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new window.Razorpay(options);
  rzp1.on("payment.failed", function (response) {
    alert(response.error.code);
    alert(response.error.description);
    alert(response.error.source);
    alert(response.error.step);
    alert(response.error.reason);
    alert(response.error.metadata.order_id);
    alert(response.error.metadata.payment_id);
  });
  rzp1.open();
  e.preventDefault();
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

  const subtotal = cartItems[0]?.packagePrice || 0;
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
                <h1>Your Package Cart</h1>
                <span className="close-icon">x</span>
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
                  </p>
                  <p>₹ {cartItems[0]?.packagePrice}</p>
                </div>
                <div>
                  <p>GST (18%)</p>
                  <p className="VAT">₹ {gstAmount}</p>
                </div>
                <div>
                  <p>Total</p>
                  <p className="NOK">₹ {total}</p>
                </div>
              </div>
              {/* {/ <button className="checkout-btn" onClick={checkout}> /} */}
              {/* {/ <Link to="/payment"> /} */}
              {/* {/ Checkout /} */}
              {/* {/ </Link> /} */}
              {/* {/ </button> /} */}
              <button className="checkout-btn" onClick={handleCheckout}>
                {/* {/ <Link to="/payment"> /} */}
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
