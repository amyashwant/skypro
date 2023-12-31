import React from "react";
import { Link } from "react-router-dom";
import cta from "../../../assets/images/services/cta.png"

const CtaPage = () => {
  return (
    <section
      className="cta py-100 overlay-bg bg-img"
      style={{backgroundImage: `url(${cta})`}}
    >
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-6">
            <div className="cta-content">
              <h3 className="title text-white mb-xl-4 mb-3">
                SAVE MONEY BY BUNDLING YOUR INTERNET SERVICE
              </h3>
              <Link to="/contact" className="btn--base style-two">
                CONTACT US $20 <i className="icon-check-mark"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaPage;
