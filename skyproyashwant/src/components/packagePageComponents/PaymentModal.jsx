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

  const amount = 500;
  const currency = "INR";
  const receiptId = "qwsaq1";
  
  const handleCheckout = async (e) => {
    console.log("hello rohit", total, amount, currency, receiptId);
    try {
      const response = await axios.post("/api/checkout", {
        amount,
        currency,
        receipt: receiptId
      },
      { headers: { "Content-Type": "application/json" }});

      const order = await response.data;
      console.log(order);

      const options = {
        key: 'rzp_test_IGNCUX7tGetoC3', // Replace with your Razorpay key
        amount: order.amount,
        currency: order.currency,
        order_id: order.id,
        name: 'SKYPRO',
        description: 'Test Transaction',
        handler: async function (response) {
          const body = {
            ...response,
          };
        
          try {
            const validateRes = await axios.post("/api/checkout/validatepayment", body, {
              headers: {
                "Content-Type": "application/json",
              },
            });
        
            const validateresponse = validateRes.data;
            console.log(validateresponse);
          } catch (error) {
            console.error("Error during validation:", error);
          }
        },
        prefill: {
          name: "Web Dev Matrix", // your customer's name
          email: "webdevmatrix@example.com",
          contact: "9000000000",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
  
      // Corrected line: Remove the misplaced "var" keyword
      const rzp1 = new window.Razorpay(options);
  
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
    } catch (error) {
      console.error("Error doing payment:", error);
      toast.error("Error doing payment. Please try again later.");
    }
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
