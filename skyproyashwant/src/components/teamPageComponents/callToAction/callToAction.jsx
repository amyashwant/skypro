import React from "react";

const callToAction = () => {
  return (
    <section
      className="cta py-100 overlay-bg bg-img"
      style="background-image: url(assets/images/services/cta.png)"
    >
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-6">
            <div className="cta-content">
              <h3 className="title text-white mb-xl-4 mb-3">
                SAVE MONEY BY BUNDLING YOUR INTERNET SERVICE
              </h3>
              <a href="contact.html" className="btn--base style-two">
                CONTACT US $20 <i className="icon-check-mark"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default callToAction;
