import React, { useContext, useEffect, useRef, useState } from "react";
import bottomImg from "../../assets/images/home-01/logo/Skypro_New_Logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <>
      <div className="header-top d-none d-lg-block">
        <div className="container">
          <div className="top-header-wrapper d-flex flex-wrap justify-content-between align-items-center">
            <div className="top-contact">
              <ul className="top-contact-menu d-flex flex-wrap justify-content-between align-items-center">
                <li className="item">
                  <span className="icon-pin"></span>
                  <p>Abacus Cloud, B-70 ,Sector-74, Phase-7 Mohali, Punjab</p>
                </li>
              </ul>
            </div>
            <div className="top-button d-flex flex-wrap justify-content-between align-items-center">
              <ul className="login-registration d-flex flex-wrap justify-content-between align-items-center">
                <>
                  <span className="social-icons d-flex align-items-center flex-wrap header-social-icon">
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
                  </span>
                </>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <header className="header-bottom home-two-header">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand logo" to="/">
              <img src={bottomImg} alt="img" />
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

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav nav-menu ms-auto">
                <li className="nav-item d-block d-lg-none"></li>
                <li className="nav-item dropdown">
                  <Link
                    className={`nav-link ${isActive("/")}`}
                    to="/"
                    role="button"
                    aria-expanded="false"
                  >
                    HOME
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className={`nav-link ${isActive("/about")}`}
                    to="/about"
                    role="button"
                    aria-expanded="false"
                  >
                    ABOUT
                  </Link>
                </li>

                {/* {/ Add similar logic for other navigation items /} */}
                <li className="nav-item dropdown">
                  <Link
                    className={`nav-link ${isActive("/packages")}`}
                    to="/packages"
                    role="button"
                    aria-expanded="false"
                  >
                    PACKAGES
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className={`nav-link ${isActive("/contact")}`}
                    to="/contact"
                  >
                    CONTACT US
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
