import React, { useContext, useEffect, useState } from "react";
import loginOne from "../../../assets/images/authentication/account-01.png";
import loginTwo from "../../../assets/images/authentication/account-02.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import AccountContext from "../../../utils/AccountContext";
const AccountPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const navigate = useNavigate();

  const { login, setLogin, setUserData } = useContext(AccountContext);
  console.log("login>", login);
  useEffect(() => {
    if (login) {
      navigate("/");
    }
  }, [login]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    // if (!formData.name.trim()) {
    //   newErrors.name = "Name is required";
    // } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
    //   newErrors.name = "Name should only contain letters";
    // }

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

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // Form is valid if there are no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Submit the form or perform any further action here
      // alert("Form submitted successfully!");
      const { email, password } = formData;
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };

        const { data } = await axios.post(
          "/api/user/login",
          { email, password },
          config
        );
        {
          localStorage.getItem("otpInfo") && localStorage.removeItem("otpInfo");
        }
        localStorage.setItem("userInfo", JSON.stringify(data));

        // window.location.reload(false); //seen from comment lect. 12 youtube
        setLogin(true);
        setUserData(data);
        navigate("/");
      } catch (error) {
        console.log("login >> ", "went wrong while logging in");
      }
    } else {
      console.log("Form has errors. Please check and try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section className="account py-100">
      <div className="container">
        <div className="row gy-5 flex-wrap-reverse">
          <div className="col-lg-7 ">
            <div className="account-left">
              <div className="account-thumbs">
                <span>
                  <img className="w-100" src={loginTwo} alt="img" />
                </span>
                <span>
                  <img className="w-100" src={loginOne} alt="img" />
                </span>
              </div>
              <strong></strong>
            </div>
          </div>
          <div className="col-lg-5 ps-lg-5">
            <div className="account-form">
              <div className="section-header style-two">
                <h4 className="subtitle">LOG IN</h4>
                <h2 className="title">WELCOME BACK</h2>
              </div>
              <form className='cust-formdiv' onSubmit={handleSubmit} autoComplete="off" noValidate>
                <div className="row gy-3">
                  <div className="col-md-12">
                    
                    <div className="contact-form-field">
                      <label
                        for="Emailaddress"
                        className="form-label form--label"
                      ><span className="star">*</span>
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
                  <div className="col-md-12">
                    <div className="contact-form-field d-sm-flex flex-wrap justify-content-between align-items-center">
                      <button type="submit" className="btn--base">
                        LOGIN
                      </button>
                      <p className="text text-dark fw-normal mt-sm-0 mt-2">
                        <a href="#" className="forgot">
                          Forgot Password?
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="remeber-me">
                      <input type="checkbox" id="rem-me" />
                      <label for="rem-me">Remember Me</label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="contact-form-field">
                      <p className="text text-dark fw-normal">
                        Don't Have An Account?
                        <Link to="/register">Sign Up</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountPage;
