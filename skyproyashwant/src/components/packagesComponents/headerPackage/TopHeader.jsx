import React from "react";
import { Link } from "react-router-dom";

const TopHeader = () => {
  return (
    <div className="header-top d-none d-lg-block">
      <div className="container">
        <div className="top-header-wrapper d-flex flex-wrap justify-content-between align-items-center">
          <div className="top-contact">
            <ul className="top-contact-menu d-flex flex-wrap justify-content-between align-items-center">
              <li className="item">
                <span className="icon-pin"></span>
                <p>
                  SCO 37, Second floor, Sector 67 SAS Nagar - 160062(PUNJAB)
                </p>
              </li>
              <li className="item">|</li>
              <li className="item">
                <span className="icon-mail"></span>{" "}
                <a href="mailto:">info123@gmail.com</a>
              </li>
            </ul>
          </div>
          <div className="top-button d-flex flex-wrap justify-content-between align-items-center">
            <ul className="login-registration d-flex flex-wrap justify-content-between align-items-center">
              <li>
                <Link to="/login">
                  <span className="icon-user-1"></span> Login
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link to="/signup">Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
