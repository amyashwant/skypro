import React, { useState } from "react";
import contactOne from "../../../assets/images/contact/contact-icon-01.png";
import contactTwo from "../../../assets/images/contact/contact-icon-02.png";
import contactThree from "../../../assets/images/contact/contact-icon-03.png";
import contactImage from "../../../assets/images/contact/contact-us-form-image.jpg";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = "Name should only contain letters";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (/\s/.test(formData.email)) {
      newErrors.email = "Email should not contain spaces";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Phone number validation
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    // Message validation
    // if (!formData.message.trim()) {
    //   newErrors.message = "Message is required";
    // }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // Form is valid if there are no errors
  };

  const handleClick = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      // Form is not valid, do not proceed
      return;
    }
    try {
      await axios.post("/api/contact", formData);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      alert("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending email. Please try again later.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear validation errors when the user starts typing
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="contact_blok">
              <div className="row align-items-center1 align-items-stretch">
                <div className="col-sm-7 d-flex align-items-center">
                  <form class="form contactForm p-3 p-xl-4" id="contactusForm" onSubmit={handleClick}>
                    <h5 class="mb-3">Send us a message</h5>
                    <div class="row">
                      <div class="form-group col-sm-6 mb-3">
                      <label for="name" className="">Enter Your Name <span className="star">*</span></label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={formData.name}
                          class="form-control"
                          placeholder="Enter Your Name"
                          onChange={handleChange}
                          required={true}
                        />
                        {errors.name && (
                          <span className="error">{errors.name}</span>
                        )}
                      </div>
                      <div class="form-group col-sm-6 mb-3">
                      <label for="email" className="">Enter Your Email <span className="star">*</span></label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={formData.email}
                          required={true}
                          onChange={handleChange}
                          class="form-control"
                          placeholder="Enter Your Email"
                        />
                        {errors.email && (
                          <span className="error">{errors.email}</span>
                        )}
                      </div>
                      <div class="form-group col-sm-6 mb-3">
                      <label for="phone" className="">Enter Your Phone <span className="star">*</span></label>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          maxLength={10}
                          value={formData.phone}
                          required={true}
                          onChange={handleChange}
                          class="form-control"
                          placeholder="Enter Your Phone"
                        />
                        {errors.phone && (
                          <span className="error">{errors.phone}</span>
                        )}
                      </div>
                      <div class="form-group col-sm-6 mb-3">
                      <label for="Subject" className="">Enter Your Subject <span className="star">*</span></label>
                        <input
                          type="text"
                          name="subject"
                          id="subject"
                          value={formData.subject}
                          required={true}
                          onChange={handleChange}
                          class="form-control"
                          placeholder="Enter Your Subject"
                        />
                        {errors.subject && (
                          <span className="error">{errors.subject}</span>
                        )}
                      </div>
                      <div class="form-group col-sm-12 mb-3">
                      <label for="message" className="">Enter Your Message <span className="star"></span></label>
                        <textarea
                          class="form-control"
                          name="message"
                          id="message"
                          value={formData.message}
                          // required={true}
                          onChange={handleChange}
                          placeholder="Message"
                          rows="4"
                          cols="30"
                        ></textarea>
                        {/* {errors.message && (
                          <span className="error">{errors.message}</span>
                        )} */}
                      </div>
                    </div>
                    <div class="mt-3 d-flex align-items-center position-relative">
                      <button type="submit" class="btn blue-btn" id="">
                        <span></span>Submit
                      </button>
                    {/* <ul class="social-icons d-flex align-items-center flex-wrap ContactUS-icon">
                    <li><a href="" target="_blank"><i class="fa-solid fa-phone"></i></a></li>
                      <li><a href="" target="_blank"><i class="fa-solid fa-envelope"></i></a></li>
                    </ul> */}
                    </div>
                  </form>
                </div>
                <div className="col-sm-5">
                  <img
                    src={contactImage}
                    alt="Contact"
                    className="img-fluid"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;