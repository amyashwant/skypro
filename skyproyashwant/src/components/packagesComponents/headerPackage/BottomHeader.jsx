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
                          <a href="login.html">
                            <span className="icon-user-1"></span> Login
                          </a>
                        </li>
                        <li>|</li>
                        <li>
                          <a href="registration.html">Registration</a>
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
                          <a className="dropdown-item" href="home-two.html">
                            HOME
                          </a>
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
                          <a className="dropdown-item" href="about.html">
                            ABOUT
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="team.html">
                            TEAM
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="team-details.html">
                            TEAM DETAILS
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="packages.html">
                            PACKAGES
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="404.html">
                            404
                          </a>
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
                          <a className="dropdown-item" href="services.html">
                            IPTV
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="services-details.html"
                          >
                            Cable TV
                          </a>
                        </li>
                      </ul> */}
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        PACKAGES
                        <i className="fa-solid fa-angle-down"></i>
                      </a>
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
          <a className="toggler-logo" href="index.html">
            <img src={toggleOne} alt="" />
          </a>
          <p className="text">
            Rorem ipsum dolor sit amet, consectet adipiscing elit. Ut elit
            tellusuctus
          </p>
          <h6 className="title">PHOTO GALLERY</h6>
          <div className="toggle-thumbs d-flex align-items-center flex-wrap justify-content-between">
            <a
              className="gallery-popup"
              href="assets/images/home-01/toggle-bar/toggle-img-01.png"
            >
              <img src={toggleTwo} alt="" />
            </a>
            <a
              className="gallery-popup"
              href="assets/images/home-01/toggle-bar/toggle-img-02.png"
            >
              <img src={toggleThree} alt="" />
            </a>
            <a
              className="gallery-popup"
              href="assets/images/home-01/toggle-bar/toggle-img-03.png"
            >
              <img src={toggleFour} alt="" />
            </a>
            <a
              className="gallery-popup"
              href="assets/images/home-01/toggle-bar/toggle-img-04.png"
            >
              <img src={toggleFive} alt="" />
            </a>
            <a
              className="gallery-popup"
              href="assets/images/home-01/toggle-bar/toggle-img-05.png"
            >
              <img src={toggleSix} alt="" />
            </a>
            <a className="gallery-popup" href="">
              <img src={toggleSeven} alt="" />
            </a>
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
                <a href="#" className="active">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-pinterest-p"></i>
                </a>
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
