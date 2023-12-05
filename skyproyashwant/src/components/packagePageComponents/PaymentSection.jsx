import React, { useState } from "react";
import PaymentModal from "./PaymentModal";
import { useSelector } from "react-redux";
import MultiForm from "./multiform/MultiForm";

// const SecondModal = ({ handleClose }) => {
//   return (
//     <div className="modal">
//       <p>
//         <MultiForm />
//       </p>
//       <button onClick={handleClose}>Close</button>
//     </div>
//   );
// };

const PaymentSection = () => {
  const [showModal, setShowModal] = useState(false);
  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <>
      <div className="checkout-outer" onClick={handleModalToggle}>
        <div className="checkout-sec">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div id="viewcart-style" className="viewcart-style">
                  <span className="img-style1">
                    <img
                      src="https://www.hathway.com/digitaltv-images/cart.png"
                      alt="#"
                    />
                  </span>
                  <p>
                    <span>
                      <span className="add_cart">{cartItems.length}</span>View
                      Cart
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PaymentModal show={showModal} handleClose={handleCloseModal} />

      {/* {showSecondModal && (
          <>
            <SecondModal />
          </>
        )} */}
      {/* </PaymentModal> */}
    </>
  );
};

export default PaymentSection;
