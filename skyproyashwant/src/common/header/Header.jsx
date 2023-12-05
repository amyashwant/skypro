import React, { useContext, useState } from "react";
import bottomImg from "../../assets/images/home-01/logo/Skypro_New_Logo.png";
import headerLogo from "../../assets/images/home-01/logo/logo.png";
import { Link, useNavigate } from "react-router-dom";
import ToggleHeader from "./ToggleHeader";
import AccountContext from "../../utils/AccountContext";
const Header = () => {
  const { login, setLogin, setUserData } = useContext(AccountContext);
  const navigate = useNavigate();
  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("userInfo");
    setLogin(false);
    setUserData(null);
    navigate("/login");
  };

  return (
    <>
      <div class="header-top d-none d-lg-block">
        <div class="container">
          <div class="top-header-wrapper d-flex flex-wrap justify-content-between align-items-center">
            <div class="top-contact">
              <ul class="top-contact-menu d-flex flex-wrap justify-content-between align-items-center">
                <li class="item">
                  <span class="icon-pin"></span>
                  <p>1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
                </li>
                <li class="item">|</li>
                <li class="item">
                  <span class="icon-mail"></span>
                  <a href="mailto:">info123@gmail.com</a>
                </li>
              </ul>
            </div>
            <div class="top-button d-flex flex-wrap justify-content-between align-items-center">
              <ul class="login-registration d-flex flex-wrap justify-content-between align-items-center">
                {localStorage.getItem("userInfo") ? (
                  <li>
                    <Link to="/">
                      <span class="icon-user-1"></span>
                      <span onClick={logoutHandler}>LogOut</span>
                    </Link>
                  </li>
                ) : (
                  <>
                    <li>
                      <Link to="/login">
                        <span class="icon-user-1"></span>
                        Login
                      </Link>
                    </li>
                    <li>/</li>
                    <li>
                      <Link to="/register">Register</Link>
                    </li>
                  </>
                )}
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
                    className="nav-link"
                    to="/"
                    role="button"
                    aria-expanded="false"
                  >
                    HOME
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link"
                    to="/about"
                    role="button"
                    aria-expanded="false"
                  >
                    ABOUT
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link"
                    to="/service"
                    role="button"
                    aria-expanded="false"
                  >
                    SERVICES
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link"
                    to="/packages"
                    role="button"
                    aria-expanded="false"
                  >
                    PACKAGES
                  </Link>
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
      </header>
    </>
  );
};

export default Header;
