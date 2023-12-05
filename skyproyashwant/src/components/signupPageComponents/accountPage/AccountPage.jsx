import React, { useEffect, useState } from "react";
import signupOne from "../../../assets/images/authentication/fun-bg.png";
import signupTwo from "../../../assets/images/authentication/fun-img.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import OtpPage from "../../otpPageComponents/OtpPage";
// import OtpPage from "../../otpPageComponents/OtpPage";

const AccountPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showReenteredPassword, setShowReenteredPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const toggleReenteredPasswordVisibility = () => {
    setShowReenteredPassword(
      (prevShowReenteredPassword) => !prevShowReenteredPassword
    );
  };
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    otp: "",
  });
  console.log("formData>>", formData);

  const [showOtp, setShowOtp] = useState(null);

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = "Name should only contain letters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (/\s/.test(formData.email)) {
      newErrors.email = "Email should not contain spaces";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) {
      newErrors.password =
        "Password must include at least one special character";
    }

    // Confirm Password validation
    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // Form is valid if there are no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("formData.otp", formData.otp);
    // console.log("showOtp", showOtp);
    // if (formData.otp === showOtp) {
    //   navigate("/login");
    //   console.log("correct otp");
    //   // const newErrors = {};
    //   // newErrors.otp = "Please enter the correct OTP";
    //   // setErrors(newErrors);
    // } else {
    //   console.log("please enter correct otp");
    //   // newErrors.otp = "please enter correct otp";
    // }
    if (validateForm()) {
      // Submit the form or perform any further action here
      const { name, email, password, confirmPassword } = formData;
      console.log(`{${name} ${email} ${password} ${confirmPassword}}`);
      try {
        const config = {
          Headers: {
            "Content-type": "application/json",
          },
        };

        const { data } = await axios.post(
          "/api/user",
          { name, email, password, confirmPassword },
          config
        );
        setShowOtp(data.otp);
        console.log(data);
        localStorage.setItem("otpInfo", data.otp);
        // navigate("/login");
      } catch (error) {
        const newErrors = {};
        // console.log(error);
        newErrors.authErrors = error.response.data.message;

        setErrors(newErrors);
        // console.log("errors>", errors);
        // console.log("while signup>>> ", "something wrong happened");
      }
      // alert("Form submitted successfully!");
    } else {
      console.log("Form has errors. Please check and try again.");
    }
  };

  const handleSubmitTwo = (e) => {
    e.preventDefault();

    const newErrorsTwo = {};
    console.log("formData.otp two>>", typeof formData.otp);
    console.log("showOtp type two>>", typeof showOtp);
    const otpcheck = localStorage.getItem("otpInfo");
    console.log("otpcheck two", typeof otpcheck);
    if (formData.otp === otpcheck) {
      localStorage.removeItem("otpInfo");
      navigate("/login");
      console.log("correct otp");
      // const newErrors = {};
      // newErrors.otp = "Please enter the correct OTP";
      // setErrors(newErrors);
    } else {
      console.log("please enter correct otp");
      newErrorsTwo.otp = "please enter correct otp";
      // newErrors.otp = "please enter correct otp";
    }
    setErrors(newErrorsTwo);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // if (formData.otp !== showOtp) {
  //   // const newErrors = {};
  //   // newErrors.otp = "Please enter the correct OTP";
  //   // setErrors(newErrors);
  //   console.log("please enter correct otp");
  // } else {
  //   console.log("correct otp");
  //   navigate("/login");
  // }

  // const handleSubmitTwo = () => {
  //   if (formData.otp !== showOtp) {
  //     // const newErrors = {};
  //     // newErrors.otp = "Please enter the correct OTP";
  //     // setErrors(newErrors);
  //     console.log("please enter correct otp");
  //   } else {
  //     console.log("correct otp");
  //     navigate("/login");
  //   }
  // };

  console.log("formdata.otp>>", formData.otp);
  return (
    <section className="account py-100">
      <div className="container">
        <div className="row gy-5 flex-wrap-reverse">
          <div className="col-xl-7 col-lg-6 ">
            <div
              className="fun-right-bg-img bg-img"
              style={{
                backgroundImage: `url(${signupOne})`,
              }}
            >
              <img src={signupTwo} alt="" />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 ps-xl-5">
            <div className="account-form">
              <div className="section-header style-two">
                <h4 className="subtitle">SIGN UP</h4>
                <h2 className="title">CREATE AN ACCOUNT</h2>
              </div>
              {localStorage.getItem("otpInfo") ? (
                <>
                  <form className="cust-formdiv"
                    onSubmit={handleSubmitTwo}
                    autoComplete="off"
                    noValidate
                  >
                    <div className="row gy-3">
                      <div className="col-md-12">
                        <div className="contact-form-field">
                          <label for="otp" className="form-label form--label">
                            <span className="star">*</span>
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
                            value={formData.otp}
                            onChange={handleChange}
                          />
                          {/* {errors && <span className="error">{errors.otp}</span>} */}
                          {errors.otp && (
                            <span className="error">{errors.otp}</span>
                          )}
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
                </>
              ) : (
                // <OtpPage
                //   handleSubmitTwo={handleSubmitTwo}
                //   handleChange={handleChange}
                // otpValue={formData.otp}
                // formData={formData}
                // showOtp={showOtp}
                // />
                <form  className="cust-formdiv" onSubmit={handleSubmit} autoComplete="off" noValidate>
                  <div className="row gy-3">
                    <div className="col-md-12">
                      
                      <div className="contact-form-field">
                        <label
                          for="userName"
                          className="form-label form--label"
                        ><span className="star">*</span>
                          User Name
                        </label>

                        <input
                          type="text"
                          id="userName"
                          className="form-control form--control"
                          placeholder="Enter Your Name"
                          // required={true}
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                        {errors.name && (
                          <span className="error">{errors.name}</span>
                        )}
                      </div>
                    </div>
                    <div className="col-md-12">
                      
                      <div className="contact-form-field">
                        <label
                          for="Emailaddress"
                          className="form-label form--label"><span className="star">*</span>
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="Emailaddress"
                          className="form-control form--control"
                          placeholder="Enter Your Email"
                          // required={true}
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        {errors.email && (
                          <span className="error">{errors.email}</span>
                        )}
                      </div>
                    </div>
                    <div className="col-sm-12">
                      
                      <div className="contact-form-field">
                        <label className="form--label" for="password"><span className="star">*</span>
                          Password
                        </label>
                        <div className="input--group position-relative">
                          <input
                            id="password"
                            // type="password"
                            type={showPassword ? "text" : "password"}
                            className="form-control form--control"
                            placeholder="Enter your password"
                            // value="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                          />
                          <span
                            id="#password"
                            // className="fa fa-fw field-icon toggle-password fa-eye"
                            className={`cust-div3 fa fa-fw field-icon toggle-password ${
                              showPassword ? "fa-eye-slash" : "fa-eye"
                            }`}
                            onClick={togglePasswordVisibility}
                          ></span>
                          {errors.password && (
                            <span className="error">{errors.password}</span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      
                      <div className="contact-form-field">
                        <label className="form--label" for="re-password"><span className="star">*</span>
                          Re Password
                        </label>
                        <div className="input--group position-relative">
                          <input
                            id="re-password"
                            // type="password"
                            type={showReenteredPassword ? "text" : "password"}
                            className="form-control form--control "
                            placeholder="Re enter password"
                            // value="re-password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                          />
                          <span
                            id="#re-password"
                            // className="fa fa-fw field-icon toggle-password fa-eye"
                            className={`cust-div3 fa fa-fw field-icon toggle-password ${
                              showReenteredPassword ? "fa-eye-slash" : "fa-eye"
                            }`}
                            onClick={toggleReenteredPasswordVisibility}
                          ></span>

                          {errors.confirmPassword && (
                            <span className="error">
                              {errors.confirmPassword}
                            </span>
                          )}
                          {errors.authErrors && (
                            <span className="error">{errors?.authErrors}</span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="contact-form-field d-sm-flex flex-wrap justify-content-between align-items-center">
                        <button type="submit" className="btn--base">
                          REGISTER
                        </button>
                        <p className="text text-dark fw-normal mt-sm-0 mt-2">
                          Already Have An Account?
                          <Link to="/login">Log in</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              )}

              {/* <form onSubmit={handleSubmit} autoComplete="off" noValidate>
                <div className="row gy-3">
                  <div className="col-md-12">
                    <span className="star">*</span>
                    <div className="contact-form-field">
                      <label for="userName" className="form-label form--label">
                        User Name
                      </label>

                      <input
                        type="text"
                        id="userName"
                        className="form-control form--control"
                        placeholder="Enter Your Name"
                        // required={true}
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {errors.name && (
                        <span className="error">{errors.name}</span>
                      )}
                    </div>
                  </div>
                  <div className="col-md-12">
                    <span className="star">*</span>
                    <div className="contact-form-field">
                      <label
                        for="Emailaddress"
                        className="form-label form--label"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="Emailaddress"
                        className="form-control form--control"
                        placeholder="Enter Your Email"
                        // required={true}
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && (
                        <span className="error">{errors.email}</span>
                      )}
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <span className="star">*</span>
                    <div className="contact-form-field">
                      <label className="form--label" for="password">
                        Password
                      </label>
                      <div className="input--group">
                        <input
                          id="password"
                          type="password"
                          className="form-control form--control"
                          placeholder="Enter your password"
                          // value="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                        />
                        <span
                          id="#password"
                          className="fa fa-fw field-icon toggle-password fa-eye"
                        ></span>
                        {errors.password && (
                          <span className="error">{errors.password}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <span className="star">*</span>
                    <div className="contact-form-field">
                      <label className="form--label" for="re-password">
                        Re Password
                      </label>
                      <div className="input--group">
                        <input
                          id="re-password"
                          type="password"
                          className="form-control form--control "
                          placeholder="Re enter password"
                          // value="re-password"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                        />
                        <span
                          id="#re-password"
                          className="fa fa-fw field-icon toggle-password fa-eye"
                        ></span>
                        {errors.confirmPassword && (
                          <span className="error">
                            {errors.confirmPassword}
                          </span>
                        )}
                        {errors.authErrors && (
                          <span className="error">{errors?.authErrors}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="contact-form-field d-sm-flex flex-wrap justify-content-between align-items-center">
                      <button type="submit" className="btn--base">
                        SIGN UP YOUR ACCOUNT
                      </button>
                      <p className="text text-dark fw-normal mt-sm-0 mt-2">
                        Already Have An Account? <Link to="/login">Log in</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </form> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountPage;

// import React from "react";
// import signupOne from "../../../assets/images/authentication/fun-bg.png";
// import signupTwo from "../../../assets/images/authentication/fun-img.png";
// import { Link } from "react-router-dom";

// const AccountPage = () => {
//   return (
//     <section className="account py-100">
//       <div className="container">
//         <div className="row gy-5 flex-wrap-reverse">
//           <div className="col-xl-7 col-lg-6 ">
//             <div
//               className="fun-right-bg-img bg-img"
//               style={{
//                 backgroundImage: `url(${signupOne})`,
//               }}
//             >
//               <img src={signupTwo} alt="" />
//             </div>
//           </div>
//           <div className="col-xl-5 col-lg-6 ps-xl-5">
//             <div className="account-form">
//               <div className="section-header style-two">
//                 <h4 className="subtitle">SIGN UP</h4>
//                 <h2 className="title">CREATE AN ACCOUNT</h2>
//               </div>
//               <form action="#" autoComplete="off">
//                 <div className="row gy-3">
//                   <div className="col-md-12">
//                     <div className="contact-form-field">
//                       <label for="userName" className="form-label form--label">
//                         User Name
//                       </label>
//                       <input
//                         type="text"
//                         id="userName"
//                         className="form-control form--control"
//                         placeholder="Enter Your Name"
//                         required={true}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-md-12">
//                     <div className="contact-form-field">
//                       <label
//                         for="Emailaddress"
//                         className="form-label form--label"
//                       >
//                         Email Address
//                       </label>
//                       <input
//                         type="email"
//                         id="Emailaddress"
//                         className="form-control form--control"
//                         placeholder="Enter Your Email"
//                         required={true}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-sm-12">
//                     <div className="contact-form-field">
//                       <label className="form--label" for="password">
//                         Password
//                       </label>
//                       <div className="input--group">
//                         <input
//                           id="password"
//                           type="password"
//                           className="form-control form--control"
//                           placeholder="Enter your password"
//                           // value="password"
//                         />
//                         <span
//                           id="#password"
//                           className="fa fa-fw field-icon toggle-password fa-eye"
//                         ></span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-sm-12">
//                     <div className="contact-form-field">
//                       <label className="form--label" for="re-password">
//                         Re Password
//                       </label>
//                       <div className="input--group">
//                         <input
//                           id="re-password"
//                           type="password"
//                           className="form-control form--control "
//                           placeholder="Re enter password"
//                           // value="re-password"
//                         />
//                         <span
//                           id="#re-password"
//                           className="fa fa-fw field-icon toggle-password fa-eye"
//                         ></span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-md-12">
//                     <div className="contact-form-field d-sm-flex flex-wrap justify-content-between align-items-center">
//                       <button type="submit" className="btn--base">
//                         SIGN UP YOUR ACCOUNT
//                       </button>
//                       <p className="text text-dark fw-normal mt-sm-0 mt-2">
//                         Already Have An Account? <Link to="/login">Log in</Link>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AccountPage;
