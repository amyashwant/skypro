import React, { useEffect, useState } from "react";
import logo from "../../assets/images/home-01/logo/white-logo.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [error, setError] = useState({});
  const [email, setEmail] = useState("");

  const validateEmail = () => {
    const newError = {};

    if (!email.trim()) {
      newError.email = "Email is required";
    } else if (/\s/.test(email)) {
      newError.email = "Email should not contain spaces";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newError.email = "Invalid email format";
    } else {
      setError({});
    }

    setError(newError);

    return Object.keys(newError).length === 0;
  };

  const handleClick = async (e) => {
    e.preventDefault();

    if (!validateEmail()) {
      // Form is not valid, do not proceed
      return;
    }
    try {
      console.log(email,"email")
      await axios.post(
        "/api/contact/newsletter",
        { email: email },
        { Headers: { "Content-type": "application/json" } }
      );
      setEmail("");
      toast.success("ThankYou for subscibing our Newsletter");
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Error sending email. Please try again later.");
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;

    setEmail(value);

    setError((prevErrors) => ({
      ...prevErrors,
      email: "",
    }));
  };

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer
        className="footer-area bg-img"
        //   style="background-image: url(assets/images/home-01/footer/footer-bg.png);"
      >
        <div className="container py-100">
          <div className="row justify-content-between gy-5">
            <div className="col-lg-3 col-sm-6">
              <div className="footer-item">
                <Link className="footer-img" to="/">
                  <img src={logo} alt="img" />
                </Link>
                <p className="content">
                  Get a dedicated server hosted on your end to complete your
                  daily needs with efficient network routing and configuration.
                </p>
                <ul className="social-icons d-flex align-items-center flex-wrap pt-4">
                  <li>
                    <Link
                      to="https://www.facebook.com/tvskypro/"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://twitter.com/Skypro_TV" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://www.linkedin.com/company/skyprotv/"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://in.pinterest.com/skyprotv/"
                      target="_blank"
                    >
                      <i className="fab fa-pinterest-p"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6">
              <div className="footer-item">
                <h4 className="common-footer">QUICK LINKS</h4>
                <ul className="footer-menu">
                  <li>
                    <i className="fas fa-square-full"></i>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <i className="fas fa-square-full"></i>
                    <Link to="/service">Services</Link>
                  </li>
                  {/* <li>
                    <i className="fas fa-square-full"></i>
                    <Link to="/signup">Appointment</Link>
                  </li> */}
                  <li>
                    <i className="fas fa-square-full"></i>
                    <Link to="/packages">IPTV</Link>
                  </li>
                  <li>
                    <i className="fas fa-square-full"></i>
                    <Link to="/packages">Our Plans</Link>
                  </li>
                  <li>
                    <i className="fas fa-square-full"></i>
                    <Link to="/contact"> Contact </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6">
              <div className="footer-item">
                <h4 className="common-footer">USEFUL LINKS</h4>
                <ul className="footer-menu">
                  <li>
                    <i className="fas fa-square-full"></i>
                    <Link to="/privacy">Privacy Policy</Link>
                  </li>
                  <li>
                    <i className="fas fa-square-full"></i>
                    <Link to="/terms">Terms & Conditions </Link>
                  </li>
                  <li>
                    <i className="fas fa-square-full"></i>
                    <Link to="/refund">Refund Policy</Link>
                  </li>
                  <li>
                    <i className="fas fa-square-full"></i>
                    <Link to="/cancelation">Cancelation Policy</Link>
                  </li>
                  <li>
                    <i className="fas fa-square-full"></i>
                    <Link to="/compliance">Compliance</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer-item">
                <h4 className="common-footer">NEWS LETTER</h4>
                <div className="footer-buttons pt-3">
                  <form onSubmit={handleClick} autoComplete="off">
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                      className="form-control form--control text-center"
                      placeholder="Enter Your Email"
                      required
                    />
                    {error.email && (
                      <div className="" style={{ color: "#fd5901" }}>
                        {error.email}*
                      </div>
                    )}
                    <button type="submit" className="btn--base w-100 mt-3">
                      SUBSCRIBE NOW!
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-footer py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 text-center">
                <p className="bottom-footer-text text-white">
                  Copyright &copy; {currentYear}. All Rights Reserved By Skypro
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div>
        {showButton && (
          <Link className={`scroll-top show`} onClick={scrollToTop}>
            <i className="fas fa-angle-double-up"></i>
          </Link>
        )}
      </div>
    </>
  );
};

export default Footer;
