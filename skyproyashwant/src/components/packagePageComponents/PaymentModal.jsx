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
  const amount = subtotal + getViewItemsPrice() + gstAmount;
  // console.log(total);
  const currency = "INR";
  const receiptId = "rohit";

  const handleCheckout = async (e) => {
    // const {data:key} = await axios.get("/api/getkeys")
    // console.log(key)
    console.log("hello rohit", amount, currency, receiptId);
    try {
      console.log("amount>>>>>",amount)
      const response = await axios.post(
        "/api/checkout",
        {
          amount,
          currency,
          receipt: receiptId,
        },
        { headers: { "Content-Type": "application/json" } }
      );

      
      const order = await response.data;
      console.log(order);

      const user = {
        name: "John Doe", // Replace with the user's name
        email: "john.doe@example.com", // Replace with the user's email
        contact: "0000000000", // Replace with the user's contact number
      };

      const options = {
        key: "rzp_test_EC1xn57ne3LN2r", // Replace with your Razorpay key
        amount: order.amount,
        currency: order.currency,
        order_id: order.id,
        name: "SKYPRO",
        description: "Test Transaction",
        handler: async function (response) {
          const body = {
            ...response,
          };
          try {
            const validateRes = await axios.post(
              "/api/checkout/validatepayment",
              body,
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            const validateresponse = validateRes.data;
            console.log(validateresponse,"validate response");
          } catch (error) {
            console.error("Error during validation:", error);
          }
        },
        prefill: user,
        // prefill: {
        //   name: "customer", // your customer's name
        //   email: "customers@example.com",
        //   contact: "0000000000",
        // },
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

      rzp1.on("payment.success", function (response) {
        // Handle the successful payment here
        console.log("Payment successful:", response);

        // Add the redirect logic here
        window.location.href = 'http://localhost:3000';
      });
      e.preventDefault();



    } catch (error) {
      console.error("Error doing payment:", error);
      toast.error("Error doing payment. Please try again later.");
    }
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
                    {/* {/ {cartItems[0]?.name ? cartItems[0]?.name : "your package"} /} */}
                  </p>
                  {cartItems[0]?<p>₹ { Math.floor(cartItems[0]?.packagePrice)}.00</p>:"₹ 0"}
                   {/* {/ <p>₹ { Math.floor(cartItems[0]?.packagePrice)}.00</p> /} */}
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
                  <p className="NOK">₹ {amount.toFixed(2)}</p>
                </div>
              </div>
              {/* // {/ <button className="checkout-btn" onClick={checkout}> /}
              // {/ <Link to="/payment"> /}
              // {/ Checkout /}
              // {/ </Link> /}
              {/ </button> /} */}
              {/* <button
                className="checkout-btn"
                style={{
                  color: isHovered ? "white" : "#071e43",
                  fontWeight: isHovered ? "" : "bold",
                  backgroundColor: isHovered ? "#071e43" : "#fd7e14",
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleCheckout}
              > */}
              <button className="checkout-btn" style={{
                  color: isHovered ? "white" : "#071e43",
                  fontWeight: isHovered ? "" : "bold",
                  backgroundColor: isHovered ? "#071e43" : "#fd7e14",
                }}
                onClick={handleCheckout}>
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

// const PaymentModal = ({ handleClose, show, children }) => {
//   const [showSecondModal, setShowSecondModal] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);
//   const [allTotal, setAllTotal] = useState(0);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   const cartItems = useSelector((state) => state.cart.items);
//   const viewCartItems = useSelector((state) => state.cart.viewItems);
//   console.log("cartItems.items>?>", cartItems);

//   console.log("cart in packages", cartItems);

//   const modalStyle = {
//     position: "fixed",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     display: show ? "block" : "none",
//     // backgroundColor: "black",
//     // padding: "20px",
//     zIndex: 1000,
//   };

//   const overlayStyle = {
//     position: "fixed",
//     top: 0,
//     bottom: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: "rgba(35, 38, 43, 0.94)",
//     display: show ? "block" : "none",
//     zIndex: 999,
//   };

//   const getViewItemsPrice = () => {
//     const totalPrice = viewCartItems.reduce((acc, item) => {
//       return acc + parseFloat(item.price);
//     }, 0);

//     return totalPrice;
//   };

//   const calculateGST = (subtotal) => {
//     const gstRate = 0.18;
//     return (subtotal + getViewItemsPrice()) * gstRate;
//   };

//   const subtotal = Math.floor(cartItems[0]?.packagePrice) || 0;
//   // console.log(subtotal);

//   const gstAmount = calculateGST(subtotal);
//   // console.log(gstAmount);
//   const total = subtotal + getViewItemsPrice() + gstAmount;
//   // console.log(total);

//   return (
//     <>
//       <div>
//         <div style={overlayStyle} ></div>
//         <div style={modalStyle}>
//           <div className="your-shoping-cart">
//             <div className="container">
//               <div className="title-box">
//                 <h1>Your Package Cart</h1>
//                 <span className="close-icon" onClick={handleClose}>x</span>
//               </div>
//               <div className="product-box">
//                 <div className="info-box">
//                   <p>{cartItems[0]?.name}</p>
//                 </div>
//               </div>
//               <hr />
//               <div className="cost-box">
//                 <div>
//                   <p>
//                     {cartItems[0]?.title ? cartItems[0]?.title : "your package"}
//                     {/* {cartItems[0]?.name ? cartItems[0]?.name : "your package"} */}
//                   </p>
//                   {cartItems[0] ? (
//                     <p>₹ {Math.floor(cartItems[0]?.packagePrice)}.00</p>
//                   ) : (
//                     "₹ 0"
//                   )}
//                   {/* <p>₹ { Math.floor(cartItems[0]?.packagePrice)}.00</p> */}
//                 </div>
//                 <div>
//                   {viewCartItems?.map((item) => {
//                     return (
//                       <>
//                         <p>{item?.name?.slice(0, 9)}</p>
//                         <p>{item?.price}</p>
//                       </>
//                     );
//                   })}
//                 </div>
//                 <div>
//                   <p>GST (18%)</p>
//                   <p className="VAT">₹ {gstAmount.toFixed(2)}</p>
//                 </div>
//                 <div>
//                   <p>Total</p>
//                   <p className="NOK">₹ {total.toFixed(2)}</p>
//                 </div>
//               </div>
//               {/* <button className="checkout-btn" onClick={checkout}> */}
//               {/* <Link to="/payment"> */}
//               {/* Checkout */}
//               {/* </Link> */}
//               {/* </button> */}
//               <button
//                 className="checkout-btn"
//                 style={{
//                   color: isHovered ? "white" : "#071e43",
//                   fontWeight: isHovered ? "" : "bold",
//                   backgroundColor: isHovered ? "#071e43" : "#fd7e14",
//                 }}
//                 onMouseEnter={handleMouseEnter}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 {/* <Link to="/payment"> */}
//                 Checkout
//                 {/* {/ </Link> /} */}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

export default PaymentModal;