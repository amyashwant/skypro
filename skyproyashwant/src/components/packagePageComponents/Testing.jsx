{/* <div className="accordion-body">
<div className="accordion-innerDiv">
  <strong>Bouquets:</strong>
  {accordionItem.bouqueData.map((bouquet, index) => (
    <span
      key={index}
      style={{
        color: "black",
        fontSize: "20px",
        marginRight: "10px",
      }}
    >
      &nbsp; {bouquet.bouqueRef.name},
    </span>
  ))}
</div>
{/* <ul className="accordion-channelList"> */}
// {accordionItem.bouqueData.map((item) => (
//   <li key={item._id}>
//     {/* <img src={item.channleImage} alt={item.label} /> */}
//     <span>
//       {item.channelRefs.map((channel) => (
//         <span
//           style={{ color: "black", marginRight: "10px" }}
//         >
//           {channel.name}
//         </span>
//       ))}
//     </span>
//   </li>
// ))}
// {/* </ul> */}
// </div> */}





//-----------------------------------------------------------------------------------------------------
// import React, { useEffect, useState } from "react";
// import imgOne from "../../assets/images/packageNew/aljazeera.png";
// import imgTwo from "../../assets/images/packageNew/b4u.png";
// import imgThree from "../../assets/images/packageNew/dangal.png";
// import { useDispatch, useSelector } from "react-redux";
// import { addItem, clearItem } from "../../utils/cartSlice";
// import { Link } from "react-router-dom";
// import axios from "axios";
// const PackageMainPage = () => {
//   const dispatch = useDispatch();

//   const [lang, setLang] = useState(languages[0]);
//   const [view, setView] = useState(false);
//   const [selectedPack, setSelectedPack] = useState(null);
//   const [packages, setPackages] = useState([]);
//   const [packageData, setPackageData] = useState([]);
//   const cartItems = useSelector((store) => store.cart.items);

//   const handleClick = (arg) => {
//     if (cartItems.length > 0) {
//       dispatch(clearItem());
//     }
//     dispatch(addItem(arg));
//     setSelectedPack(arg);
//   };

//   const handleViewClick = () => {
//     setView(true);
//   };

//   const languageClick = (language) => {
//     setLang(language.toLowerCase());
//   };

//   const getPackagesDetails = async () => {
//     const data = await axios.get("/api/package/package-bouque");
//     console.log("data>getPackageDetails>>", data?.data);
//     setPackageData(data?.data);
//   };

//   useEffect(() => {
//     const packages = broadcaster.filter((item) => item.language === lang);
//     setPackages(packages);
//   }, [lang]);

//   useEffect(() => {
//     getPackagesDetails();
//   }, []);

//   console.log("lang>>>>>", lang);
//   console.log("packagessss>>>>>", packages);

//   return (
//     <div>
//       <div className="package-section-new" style={{ marginTop: "38px" }}>
//         <div className="container" style={{ background: "white" }}>
//           <div className="row">
//             <div className="col-sm-12">
//               <div className="package-header">
//                 <h1> Make your own plans</h1>
//               </div>
//               <div className="package-tab-sec">
//                 <div className="container">
//                   <h3>Choose your Language</h3>
//                   <ul
//                     className="nav nav-tabs nav-fill mb-3"
//                     style={{ border: "none", paddingBottom: "0" }}
//                     id="ex1"
//                     role="tablist"
//                   >
//                     {languages.map((language, index) => (
//                       <li className="nav-item" role="presentation" key={index}>
//                         <Link
//                           // className={`nav-link ${index === 0 ? "active" : ""}`}
//                           className="nav-link"
//                           // data-bs-toggle="tab"
//                           // to={`#ex2-tabs-${index + 1}`}
//                           // role="tab"
//                           // aria-controls={`ex2-tabs-${index + 1}`}
//                           // aria-selected={index === 0 ? "true" : "false"}
//                           onClick={() => languageClick(language)}
//                         >
//                           {language}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <div className="tab-content" id="ex2-content">
//                   <div className="pricing-New">
//                     <div className="container">
//                       <div className="row">
//                         {packages.map((pricing, index) => (
//                           <div className="col-md-4 mb-4" key={index}>
//                             <div className="single-price">
//                               <div className="deal-top">
//                                 <h3>{pricing.title}</h3>
//                                 <h4>
//                                   ₹ {pricing.price} <span>-/mo</span>
//                                 </h4>
//                               </div>
//                               <div className="deal-bottom">
//                                 <ul
//                                   className="deal-item"
//                                   style={{ display: "inline-block" }}
//                                 >
//                                   {pricing.features.map(
//                                     (feature, featureIndex) => (
//                                       <li key={featureIndex}>
//                                         <span>✓</span>
//                                         {feature}
//                                       </li>
//                                     )
//                                   )}
//                                 </ul>
//                                 <div className="btn-area">
//                                   <Link
//                                     to="/viewmorepackage"
//                                     onClick={handleViewClick}
//                                   >
//                                     View More
//                                   </Link>
//                                   <Link
//                                     className={`btn-style ${
//                                       selectedPack === pricing ? "selected" : ""
//                                     }`}
//                                     to="#"
//                                     onClick={() => handleClick(pricing)}
//                                     disabled={selectedPack === pricing}
//                                   >
//                                     {selectedPack === pricing
//                                       ? "Selected"
//                                       : "Add Pack"}
//                                   </Link>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const languages = ["Hindi", "Punjabi", "Marathi", "Oriya"];

// // bouquet: price_1OKcfxSBYt5a6mPeuFEF0QBc
// // bouquetTwo: price_1OKcliSBYt5a6mPe7OHM2nUO

// // const broadcaster = [
// //   {
// //     id: "price_1OKcfxSBYt5a6mPeuFEF0QBc",
// //     title: "Discovery Communications India",
// //     price: 150,
// //     subTitle: "View channels",
// //     images: [imgThree, imgTwo, imgOne],
// //     channels: 272,
// //     quantity: 1,
// //     priceTitle: "*Prices are excluding taxes",
// //     language: "hindi",
// //   },
// //   {
// //     id: "price_1OKcliSBYt5a6mPe7OHM2nUO",
// //     title: "Celebrities Management Pvt Ltd",
// //     price: 450,
// //     subTitle: "View channels",
// //     images: [imgThree, imgTwo, imgOne],
// //     channels: 272,
// //     priceTitle: "*Prices are excluding taxes",
// //     language: "hindi",
// //   },

// const broadcaster = [
//   {
//     id: "1",
//     title: "Basic Service Tier (BST )",
//     price: 150,
//     features: [
//       "1+ 18 000 chaines",
//       "+ 2 000 Series",
//       "4K / HD / Full HD",
//       "100% Stable",
//     ],
//     language: "hindi",
//   },
//   {
//     id: "2",
//     title: "NORTH FTA",
//     price: 450,
//     features: [
//       "1+ 18 000 chaines",
//       "+ 2 000 Series",
//       "4K / HD / Full HD",
//       "100% Stable",
//     ],
//     language: "hindi",
//   },
//   {
//     id: "3",
//     title: "SILVER BUDGET HINDI",
//     price: 260,
//     features: [
//       "1+ 18 000 chaines",
//       "+ 2 000 Series",
//       "4K / HD / Full HD",
//       "100% Stable",
//     ],
//     language: "hindi",
//   },
//   {
//     id: "4",
//     title: "SILVER BUDGET HINDI",
//     price: 260,
//     features: [
//       "1+ 18 000 chaines",
//       "+ 2 000 Series",
//       "4K / HD / Full HD",
//       "100% Stable",
//     ],
//     language: "punjabi",
//   },
//   {
//     id: "5",
//     title: "SILVER BUDGET HINDI",
//     price: 260,
//     features: [
//       "1+ 18 000 chaines",
//       "+ 2 000 Series",
//       "4K / HD / Full HD",
//       "100% Stable",
//     ],
//     language: "punjabi",
//   },
//   {
//     id: "6",
//     title: "SILVER BUDGET HINDI",
//     price: 260,
//     features: [
//       "1+ 18 000 chaines",
//       "+ 2 000 Series",
//       "4K / HD / Full HD",
//       "100% Stable",
//     ],
//     language: "marathi",
//   },
//   {
//     id: "7",
//     title: "SILVER BUDGET HINDI",
//     price: 260,
//     features: [
//       "1+ 18 000 chaines",
//       "+ 2 000 Series",
//       "4K / HD / Full HD",
//       "100% Stable",
//     ],
//     language: "marathi",
//   },
//   {
//     id: "8",
//     title: "SILVER BUDGET HINDI",
//     price: 260,
//     features: [
//       "1+ 18 000 chaines",
//       "+ 2 000 Series",
//       "4K / HD / Full HD",
//       "100% Stable",
//     ],
//     language: "oriya",
//   },
//   {
//     id: "9",
//     title: "SILVER BUDGET HINDI",
//     price: 260,
//     features: [
//       "1+ 18 000 chaines",
//       "+ 2 000 Series",
//       "4K / HD / Full HD",
//       "100% Stable",
//     ],
//     language: "oriya",
//   },
//   {
//     id: "10",
//     title: "SILVER BUDGET HINDI",
//     price: 260,
//     features: [
//       "1+ 18 000 chaines",
//       "+ 2 000 Series",
//       "4K / HD / Full HD",
//       "100% Stable",
//     ],
//     language: "oriya",
//   },
//   {
//     id: "11",
//     title: "SILVER BUDGET HINDI",
//     price: 260,
//     features: [
//       "1+ 18 000 chaines",
//       "+ 2 000 Series",
//       "4K / HD / Full HD",
//       "100% Stable",
//     ],
//     language: "hindi",
//   },
//   {
//     id: "12",
//     title: "SILVER BUDGET HINDI",
//     price: 260,
//     features: [
//       "1+ 18 000 chaines",
//       "+ 2 000 Series",
//       "4K / HD / Full HD",
//       "100% Stable",
//     ],
//     language: "hindi",
//   },
// ];

// export default PackageMainPage;



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
  const amount = subtotal + gstAmount;
  console.log(amount);

  // const amount = 50000;
  const currency = "INR";
  const receiptId = "rohit";

  const handleCheckout = async (e) => {
    console.log("hello rohit", amount, currency, receiptId);
    try {
      console.log("amount>>>>>",amount)
      const response = await axios.post(
        "/api/checkout",
        {
          amount: Math.floor(amount),
          currency,
          receipt: receiptId,
        },
        { headers: { "Content-Type": "application/json" } }
      );

      const order = await response.data;
      console.log(order);

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
                  <p className="NOK">₹ {amount}</p>
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
