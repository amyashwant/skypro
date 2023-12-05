import React from "react";
import packageOne from "../../../assets/images/services/WhatsApp Image 2023-11-24 at 16.17.46_9b7f53a8.jpg";
const CallToAction = () => {
  return (
    <section
      className="package-features cta py-100 overlay-bg bg-img"
      //   style="background-image: url(assets/images/services/cta.png);"
      style={{
        backgroundImage: `url(${packageOne})`,
      }}
    >
      <div className="container">
        <div className="row justify-content-center g-4 text-center">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="package-features-item">
              <div className="icon">
                <span className="icon-medal"></span>
              </div>
              <h5 className="title">Award Winning Services</h5>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="package-features-item">
              <div className="icon">
                <span className="icon-cloud-computing"></span>
              </div>
              <h5 className="title">get Unlimited Downloads</h5>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="package-features-item">
              <div className="icon">
                <span className="icon-road"></span>
              </div>
              <h5 className="title">Flexible Contract Lengths</h5>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="package-features-item">
              <div className="icon">
                <span className="icon-chat-1"></span>
              </div>
              <h5 className="title">Professional Support</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
