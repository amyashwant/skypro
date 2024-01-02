import React, { useState } from "react";
import contactOne from "../../../assets/images/contact/contact-icon-01.png";
import contactTwo from "../../../assets/images/contact/contact-icon-02.png";
import contactThree from "../../../assets/images/contact/contact-icon-03.png";
import contactImage from "../../../assets/images/contact/contact-us-form-image.jpg";
import axios from "axios";
import { toast } from "react-toastify";
import countriesData from "../../../common/stdCode/stdCodes.json";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
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

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleClick = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }
    try {
      await axios.post("/api/contact", formData);
      setFormData({
        name: "",
        email: "",
        countryCode: "+91",
        phone: "",
        subject: "",
        message: "",
      });
      toast.success("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Error sending email. Please try again later.");
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
                  <form
                    class="form contactForm p-3 p-xl-4"
                    id="contactusForm"
                    onSubmit={handleClick}
                  >
                    <h5 class="mb-3">Send us a message</h5>
                    <div class="row">
                      <div class="form-group col-sm-6 mb-3">
                        <label for="name" className="">
                          Enter Your Name <span className="star">*</span>
                        </label>
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
                        <label for="email" className="">
                          Enter Your Email <span className="star">*</span>
                        </label>
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
                        <label for="phone" className="">
                          Enter Your Phone <span className="star">*</span>
                        </label>
                        <div className="d-flex align-items-center">
                          <select
                            name="countryCode"
                            id="countryCode"
                            value={formData.countryCode}
                            onChange={handleChange}
                            className="form-control mr-2"
                            style={{ width: "80px" }}
                          >
                            {countriesData.map((country) => (
                              <option
                                key={country.code}
                                value={country.dial_code}
                              >
                                {`${country.dial_code} ${country.code} `}
                              </option>
                            ))}
                          </select>
                          <input
                            type="tel"
                            name="phone"
                            id="phone"
                            maxLength={10}
                            value={formData.phone}
                            required={true}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Enter Your Phone"
                          />
                        </div>
                        {errors.phone && (
                          <span className="error">{errors.phone}</span>
                        )}
                      </div>
                      <div class="form-group col-sm-6 mb-3">
                        <label for="Subject" className="">
                          Enter Your Subject <span className="star">*</span>
                        </label>
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
                        <label for="message" className="">
                          Enter Your Message <span className="star"></span>
                        </label>
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
                      </div>
                    </div>
                    <div class="mt-3 d-flex align-items-center position-relative">
                      <button type="submit" class="btn blue-btn" id="">
                        <span></span>Submit
                      </button>
                    </div>
                  </form>
                </div>
                <div className="col-sm-5">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4079.200739425459!2d76.69185718317433!3d30.71319131412005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef99cc17fe25%3A0x6a593a19f7208f9b!2sAbacus%20Cloud!5e0!3m2!1sen!2sin!4v1700492253995!5m2!1sen!2sin"
                    width="100%"
                    height="500"
                    //   style="border:0;"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
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
