import React, { useState } from "react";
import contactOne from "../../../assets/images/contact/contact-icon-01.png";
import contactTwo from "../../../assets/images/contact/contact-icon-02.png";
import contactThree from "../../../assets/images/contact/contact-icon-03.png";
import axios from "axios";
const Contact = () => {

  const [formData, setFormData] = useState({
    name:'',
    email:'',
    phone:"",
    subject:"",
    message:""
  })

  const handleClick = async (e) => {
    e.preventDefault();
    const {name, email, phone, subject, message} = formData
    console.log(`{${name} ${email} ${phone} ${subject} ${message}}`)
    try {
      await axios.post('/api/contact', {name,email,phone,subject,message});
      alert('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email. Please try again later.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(() => ({
      ...formData,
      [name]: value,
    }));
  };

  return (
    <section className="contact contactus-style py-80">
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-6">
            <div className="row gy-4">
              <div className="col-sm-6">
                <div className="contact-address d-flex flex-row text-sm-start text-start">
                  <div className="icon">
                    <img src={contactOne} alt="img" />
                  </div>
                  <div className="content">
                    <h6 className="title">OFFICIAL LOCATION</h6>
                    <p className="text">
                       Abacus Cloud, B-70 ,Sector-74, Phase-7 Mohali, - 160062(PUNJAB)
                    </p>
                    {/* <p className="text">Maine 98380</p>  */}
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="contact-address d-flex flex-row text-sm-start text-start">
                  <div className="icon">
                    <img src={contactTwo} alt="img" />
                  </div>
                  <div className="content">
                    <h6 className="title">SEND US A MESSAGE</h6>
                    <p className="text">
                      <a href="mailto:">info123@gmail.com</a>
                    </p>
                    <p className="text">
                      <a href="mailto:">text123@etob.com</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="contact-address d-flex flex-row text-sm-start text-start">
                  <div className="icon">
                    <img src={contactThree} alt="img" />
                  </div>
                  <div className="content">
                    <h6 className="title">OUR OFFICE TIME</h6>
                    <p className="text">Monday - Friday</p>
                    <p className="text">10 am to 6 pm</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="contact-address d-flex flex-row text-sm-start text-start">
                  <div className="icon">
                    <img src={contactThree} alt="img" />
                  </div>
                  <div className="content">
                    <h6 className="title">GIVE US CALL</h6>
                    <p className="text">
                      <a href="tel:">+(91) 9803596035</a>
                    </p>
                    {/* <p className="text">
                      <a href="tel:">+(91) 9803596035</a>
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
            <p className="contact-para pt-lg-4 pt-2">
              We are dedicated to serving customers.Thank you for reaching out
              to Skypro. We appreciate your interest and are eager to assist
              you. Please choose from the options to get in touch with us.
            </p>
          </div>
          <div className="col-lg-6">
            <form onSubmit={handleClick} autoComplete="off">
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-1" style={{ color: "#071e43", fontWeight: "bolder", }}>
                    Enter Your Name
                  </div>
                  <div className="contact-form-field mb-4">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      id="yourname"
                      className="form-control form--control style-two"
                      placeholder="Your Name"
                      required={true}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-1" style={{ color: "#071e43", fontWeight: "bolder" }}>
                    Enter Your Email
                  </div>
                  <div className="contact-form-field mb-4">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      id="yourEmail"
                      className="form-control form--control style-two"
                      placeholder="Email"
                      required={true}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-1" style={{ color: "#071e43", fontWeight: "bolder" }}>
                    Enter Your Phone
                  </div>
                  <div className="contact-form-field mb-4">
                    <input
                      type="number"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      className="form-control form--control style-two"
                      placeholder="Phone"
                      required={true}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-1" style={{ color: "#071e43", fontWeight: "bolder" }}>
                    Enter Your Subject
                  </div>
                  <div className="contact-form-field mb-4">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      id="yoursubject"
                      className="form-control form--control style-two"
                      placeholder="Subject"
                      required={true}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="contact-form-field mb-4">
                    <textarea
                      id="yourComment"
                      name="message"
                      value={formData.message}
                      className="form-control form--control style-two py-2"
                      placeholder="Message"
                      spellcheck="false"
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-12 mt-2">
                  <div className="contact-form-field">
                    <button type="submit" className="btn--base">
                      SEND MESSAGE
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
