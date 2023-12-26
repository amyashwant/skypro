import React from "react";
import toggleOne from "../../../assets/images/home-01/logo/logo.png";
import toggleTwo from "../../../assets/images/home-01/toggle-bar/toggle-img-01.png";
import toggleThree from "../../../assets/images/home-01/toggle-bar/toggle-img-02.png";
import toggleFour from "../../../assets/images/home-01/toggle-bar/toggle-img-03.png";
import toggleFive from "../../../assets/images/home-01/toggle-bar/toggle-img-04.png";
import toggleSix from "../../../assets/images/home-01/toggle-bar/toggle-img-05.png";
import toggleSeven from "../../../assets/images/home-01/toggle-bar/toggle-img-06.png";
import { Link } from "react-router-dom";
const ToggleBar = () => {
  return (
    <section>
      <div className="toggle-bar-content">
        <button className="close-icon">
          <i className="fas fa-times"></i>
        </button>
        <Link className="toggler-logo" to="index.html">
          <img src={toggleOne} alt="" />
        </Link>
        <p className="text">
          Rorem ipsum dolor sit amet, consectet adipiscing elit. Ut elit
          tellusuctus
        </p>
        <h6 className="title">PHOTO GALLERY</h6>
        <div className="toggle-thumbs d-flex align-items-center flex-wrap justify-content-between">
          <Link
            className="gallery-popup"
            to="assets/images/home-01/toggle-bar/toggle-img-01.png"
          >
            <img src={toggleTwo} alt="" />
          </Link>
          <Link
            className="gallery-popup"
            to="assets/images/home-01/toggle-bar/toggle-img-02.png"
          >
            <img src={toggleThree} alt="" />
          </Link>
          <Link
            className="gallery-popup"
            to="assets/images/home-01/toggle-bar/toggle-img-03.png"
          >
            <img src={toggleFour} alt="" />
          </Link>
          <Link
            className="gallery-popup"
            to="assets/images/home-01/toggle-bar/toggle-img-04.png"
          >
            <img src={toggleFive} alt="" />
          </Link>
          <Link
            className="gallery-popup"
            to="assets/images/home-01/toggle-bar/toggle-img-05.png"
          >
            <img src={toggleSix} alt="" />
          </Link>
          <Link className="gallery-popup" to="">
            <img src={toggleSeven} alt="" />
          </Link>
        </div>
        <h6 className="title">CONTACT WITH US</h6>
        <div className="toggle-adress">
          <div className="contact d-flex flex-wrap align-items-center">
            <i className="fas fa-map-marker-alt"></i>
            <p>8502 Proston Rd. London</p>
          </div>
          <div className="contact d-flex flex-wrap align-items-center">
            <i className="fas fa-envelope"></i>
            <p>demo123@gmail.com</p>
          </div>
          <div className="contact d-flex flex-wrap align-items-center">
            <i className="fas fa-phone"></i>
            <p>000 - 5555 - 8888</p>
          </div>
        </div>
        <div className="toggle-social-icons pt-3">
          <ul className="social-icons d-flex align-items-center flex-wrap">
            <li>
              <Link to="#" className="active">
                <i className="fab fa-facebook-f"></i>
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fab fa-twitter"></i>
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fab fa-pinterest-p"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ToggleBar;
