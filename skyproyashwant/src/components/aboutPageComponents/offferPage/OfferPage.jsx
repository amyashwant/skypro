import React from "react";
import offerOne from "../../../assets/images/home-01/about/offer-bg.png";
import { Link } from "react-router-dom";
const OfferPage = () => {
  return (
    <section
      className="offer py-100 bg-img"
      //  style="background-image: url(assets/images/home-01/offer/offer-bg.png);"
      style={{
        backgroundImage: `url(${offerOne})`,
      }}
    >
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-header style-two">
                  <h4 className="subtitle">40% OFF FOR YOU</h4>
                  <h2 className="title">
                    SAVE MONEY BY BUNDLING YOUR INTERNET SERVICE
                  </h2>
                  <p className="para">
                    We are dedicated to serving customers. We achieve this not
                    only through our extensive portfolio of internet.
                  </p>
                </div>
              </div>

              <div
                id="offer-countdown"
                className="d-flex flex-wrap align-items-center gap-2"
              ></div>

              <div className="col-lg-12">
                <div className="offer-button-price">
                  <div className="offer-button flex-shrink-0">
                    <Link to="/contact" className="btn--base">
                      DISCOVER MORE
                    </Link>
                  </div>
                  <div className="offer-price flex-grow-1">
                    <h2 className="price">
                      $30.00<span className="month">/MONTH </span>{" "}
                      <span className="previous-price">$58.00</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferPage;
