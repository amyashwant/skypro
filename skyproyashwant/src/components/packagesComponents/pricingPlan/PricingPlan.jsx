import React from "react";
import pricingOne from "../../../assets/images/home-01/pricing/pricing-bg.png";
import pricingTwo from "../../../assets/images/home-01/pricing/pricing-01.png";
import pricingThree from "../../../assets/images/home-01/pricing/pricing-02.jpg";
import pricingFour from "../../../assets/images/home-01/pricing/pricing-03.jpg";
const PricingPlan = () => {
  return (
    <section className="pricing py-100 bg-img">
      <div className="pricing-background-img">
        <img src={pricingOne} alt="" />
      </div>
      <div className="container">
        <div className="row justify-content-center g-4">
          <div className="col-xl-4 col-md-6">
            <div className="price-wrapper">
              <div className="pricing-item">
                <div className="background-img">
                  <img src={pricingTwo} alt="" />
                </div>
                <h2 className="title">INTERNET + TV</h2>
                <p className="para">
                  For 12 mos when bundled, + taxes & equip fee
                </p>
                <ul className="pricing-icons d-flex flex-wrap align-items-center justify-content-start">
                  <li>
                    <span className="icon-monitor"></span>
                  </li>
                  <li>
                    <span className="icon-wifi-2"></span>
                  </li>
                </ul>
                <ul className="price-list">
                  <li>Home Broadband</li>
                  <li>Internet with a 1000 Mbps</li>
                  <li>99% Internet Uptime</li>
                  <li>Unlimited devices</li>
                </ul>
                <div className="price-amount-icon d-flex flex-wrap align-items-center justify-content-between">
                  <h2 className="price">
                    $30.00 <span>/ Month</span>
                  </h2>
                  <div className="icon-plus">
                    <a href="packages.html">
                      <span className="icon-add-1"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="price-wrapper">
              <div className="pricing-item">
                <div className="background-img">
                  <img src={pricingThree} alt="" />
                </div>
                <h2 className="title">INTERNET + TV + PHONE</h2>
                <p className="para">
                  For 12 mos when bundled, + taxes & equip fee
                </p>
                <ul className="pricing-icons d-flex flex-wrap align-items-center justify-content-start">
                  <li>
                    <span className="icon-wifi-2"></span>
                  </li>
                  <li>
                    <span className="icon-antena"></span>
                  </li>
                  <li>
                    <span className="icon-monitor"></span>
                  </li>
                </ul>
                <ul className="price-list">
                  <li>Home Broadband</li>
                  <li>Internet with a 1000 Mbps</li>
                  <li>99% Internet Uptime</li>
                  <li>Unlimited devices</li>
                </ul>
                <div className="price-amount-icon d-flex flex-wrap align-items-center justify-content-between">
                  <h2 className="price">
                    $59.00 <span>/ Month</span>
                  </h2>
                  <div className="icon-plus">
                    <a href="packages.html">
                      <span className="icon-add-1"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="price-wrapper">
              <div className="pricing-item">
                <div className="background-img">
                  <img src={pricingFour} alt="" />
                </div>
                <h2 className="title">INTERNET</h2>
                <p className="para">
                  For 12 mos when bundled, + taxes & equip fee
                </p>
                <ul className="pricing-icons d-flex flex-wrap align-items-center justify-content-start">
                  <li>
                    <span className="icon-wifi-2"></span>
                  </li>
                </ul>
                <ul className="price-list">
                  <li>Home Broadband</li>
                  <li>Internet with a 1000 Mbps</li>
                  <li>99% Internet Uptime</li>
                  <li>Unlimited devices</li>
                </ul>
                <div className="price-amount-icon d-flex flex-wrap align-items-center justify-content-between">
                  <h2 className="price">
                    $30.00 <span>/ Month</span>
                  </h2>
                  <div className="icon-plus">
                    <a href="packages.html">
                      <span className="icon-add-1"></span>
                    </a>
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

export default PricingPlan;
