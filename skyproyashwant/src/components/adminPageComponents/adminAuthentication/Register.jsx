import React from "react";
import { Link } from "react-router-dom";
// import redCross from "../../assets/icons/redCross.svg";
// import greenTick from "../../assets/icons/greenTick.svg";
import axios from "axios";
import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    const newErrors = {};
    // Name validation
    if (!formData.userName.trim()) {
      newErrors.userName = "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.userName)) {
      newErrors.userName = "Name should only contain letters";
    }
    if (formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) {
      newErrors.password =
        "Password must include at least one special character";
    }
    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Form is valid if there are no errors
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(name, value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const { userName, email, password } = formData;
      try {
        const { data } = await axios.post("localhost:5000/users/signup", {
          userName,
          email,
          password,
        //   confirmPassword,
        });
        alert("User created successfully");
      } catch (error) {
        const newErrors = {};
        // console.log(error);
        newErrors.authErrors = error.response.data.message;

        setErrors(newErrors);
        console.log("errors>", errors);
      }
    } else {
      console.log("Form has errors. Please check and try again");
    }
  };

  return (
    <div className="form_design relative z-9 bg-white mx-auto w-full grid rounded-[10px]">
      <form onSubmit={handleSubmit}>
        <h1 className="uppercase text-center">Register</h1>

        <p
          className={`text-[16px] text-left text-[#FF0000] font-semibold mb-[10px]`}
        ></p>
        <label htmlFor="refId" className="form-label">
          User Name
        </label>
        <input
          data-te-input-wrapper-init
          data-te-validate="input"
          data-te-validation-ruleset="isRequired"
          className="inpit_row form-input"
          name="refId"
          value={formData.username}
          onChange={handleChange}
          // disabled={userName ? true : false}
        />
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <div className="inpit_row flex gap-[10px] items-center">
          <input
            className="form-input"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <label htmlFor="password" className="form-label">
          Password
        </label>
        <div className="inpit_row flex gap-[10px] items-center">
          <input
            className="form-input"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {/* {password.length >= 6 ? (
                    !inputValidated.pass ? (
                        <img
                            src={redCross}
                            alt="error"
                            className="h-[32px]"
                        />
                    ) : (
                        <img
                            src={greenTick}
                            alt="validated"
                            className="h-[32px]"
                        />
                    )
                ) : null} */}
        </div>
        <label htmlFor="confirmPassword" className="form-label">
          Confirm Password
        </label>
        <div className="inpit_row flex gap-[10px] items-center">
          <input
            className="form-input"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {/* {confirmPassword.length >= 3 ? (
                    !inputValidated.confirmPass ? (
                        <img
                            src={redCross}
                            alt="error"
                            className="h-[32px]"
                        />
                    ) : (
                        <img
                            src={greenTick}
                            alt="validated"
                            className="h-[32px]"
                        />
                    )
                ) : null} */}
        </div>
        <button
          className="form-action"
          onClick={handleChange}
          data-te-submit-btn-ref
        >
          Register
        </button>
      </form>
      <p className="text-[16px] text-center mt-[15px]">
        Already have an account?{" "}
        <Link to="/account?login=true" className="font-medium text_link">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
