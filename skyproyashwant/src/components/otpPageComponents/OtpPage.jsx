import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OtpPage = ({ handleSubmitTwo, handleChange, otpValue }) => {
//   const navigate = useNavigate();

//   const handleSubmitTwo = () => {
//     if (formData.otp !== showOtp) {
//       // const newErrors = {};
//       // newErrors.otp = "Please enter the correct OTP";
//       // setErrors(newErrors);
//       console.log("please enter correct otp");
//     } else {
//       console.log("correct otp");
//       navigate("/login");
//     }
//   };
  return (
    // <section className="account py-100">
    //   <div className="container">
    //     <div className="row gy-5 flex-wrap-reverse">
    //       <div className="col-xl-7 col-lg-6 ">
    //         <div
    //           className="fun-right-bg-img bg-img"
    //           style={{
    //             backgroundImage: `url(${signupOne})`,
    //           }}
    //         >
    //           <img src={signupTwo} alt="" />
    //         </div>
    //       </div>
    //       <div className="col-xl-5 col-lg-6 ps-xl-5">
    //         <div className="account-form">
    //           <div className="section-header style-two">
    //             <h4 className="subtitle">SIGN UP</h4>
    //             <h2 className="title">CREATE AN ACCOUNT</h2>
    //           </div>

    <form onSubmit={handleSubmitTwo} autoComplete="off" noValidate>
      <div className="row gy-3">
        <div className="col-md-12">
          <span className="star">*</span>
          <div className="contact-form-field">
            <label for="otp" className="form-label form--label">
              Enter OTP
            </label>
            <input
              type="text"
              id="otp"
              className="form-control form--control"
              placeholder="Enter Your OTP"
              maxLength={6}
              // required={true}
              name="otp"
              value={otpValue}
              onChange={handleChange}
            />
            {/* {errors && <span className="error">{errors.otp}</span>} */}
          </div>
        </div>
        <div className="col-md-12">
          <div className="contact-form-field d-sm-flex flex-wrap justify-content-between align-items-center">
            <button type="submit" className="btn--base">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </form>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default OtpPage;
