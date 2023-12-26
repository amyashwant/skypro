import React from "react";
import bottomImg from "../../../assets/images/home-01/logo/Skypro_New_Logo.png";
import toggleOne from "../../../assets/images/home-01/logo/logo.png";
import toggleTwo from "../../../assets/images/home-01/toggle-bar/toggle-img-01.png";
import toggleThree from "../../../assets/images/home-01/toggle-bar/toggle-img-02.png";
import toggleFour from "../../../assets/images/home-01/toggle-bar/toggle-img-03.png";
import toggleFive from "../../../assets/images/home-01/toggle-bar/toggle-img-04.png";
import toggleSix from "../../../assets/images/home-01/toggle-bar/toggle-img-05.png";
import toggleSeven from "../../../assets/images/home-01/toggle-bar/toggle-img-06.png";
import { Link } from "react-router-dom";
const BottomHeader = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-wrapper position-relative">
            <div className="header-bottom">
              <nav className="navbar navbar-expand-lg navbar-light">
                <Link className="navbar-brand logo" to="/">
                  <img src={bottomImg} alt="" />
                </Link>
                <button
                  className="navbar-toggler header-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="fa-solid fa-bars"></i>
                </button>

                {/* <div className="toggle-search-box">
                  <div className="search-icon">
                    <span className="icon-search"></span>
                  </div>
                  <div className="search-input">
                    <form>
                      <input type="text" placeholder="Search..." />
                      <button type="submit">
                        <i className="fas fa-search"></i>
                      </button>
                    </form>
                  </div>
                </div> */}
                {/* the toggle menu starts here */}
                <div className="toggle-bar">
                  <div className="bar-icon">
                    <span className="icon-paragraph"></span>
                  </div>
                </div>
                {/* toggle menu ends here */}
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav nav-menu ms-auto">
                    {/* <li className="nav-item d-block d-lg-none">
                      <ul className="login-registration d-flex flex-wrap align-items-center justify-content-start">
                        <li>
                          <Link to="login.html">
                            <span className="icon-user-1"></span> Login
                          </Link>
                        </li>
                        <li>|</li>
                        <li>
                          <Link to="registration.html">Registration</Link>
                        </li>
                      </ul>
                    </li> */}
                    <li
                     className="nav-item dropdown"
                     >
                      <Link
                        className="nav-link"
                        to="/"
                        role="button"
                        // data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        HOME
                        {/* <i className="fa-solid fa-angle-down"></i> */}
                      </Link>
                      {/* <ul className="dropdown-menu">
                        <li>
                          <Link className="dropdown-item" to="home-two.html">
                            HOME
                          </Link>
                        </li>
                      </ul> */}
                    </li>
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link"
                        to="/about"
                        role="button"
                        // data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        ABOUT 
                        {/* <i className="fa-solid fa-angle-down"></i> */}
                      </Link>
                      {/* <ul className="dropdown-menu">
                        <li>
                          <Link className="dropdown-item" to="about.html">
                            ABOUT
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="team.html">
                            TEAM
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="team-details.html">
                            TEAM DETAILS
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="packages.html">
                            PACKAGES
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="404.html">
                            404
                          </Link>
                        </li>
                      </ul> */}
                    </li>
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link"
                        to="/service"
                        role="button"
                        // data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        SERVICES 
                        {/* <i className="fa-solid fa-angle-down"></i> */}
                      </Link>
                      {/* <ul className="dropdown-menu">
                        <li>
                          <Link className="dropdown-item" to="services.html">
                            IPTV
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="services-details.html"
                          >
                            Cable TV
                          </Link>
                        </li>
                      </ul> */}
                    </li>
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link"
                        to="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        PACKAGES
                        <i className="fa-solid fa-angle-down"></i>
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link className="dropdown-item" to="/packages">
                            IPTV
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/packages">
                            Cable TV
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/contact">
                        CONTACT US
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* toggle section bar starts here --------------------------------------------------------------- */}
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
      {/* toggle section bar ends here ------------------------------------------------------------------ */}
    </>
  );
};

export default BottomHeader;
