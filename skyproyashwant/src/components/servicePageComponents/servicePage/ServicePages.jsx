import React from "react";
import serviceOne from "../../../assets/images/services/services-img-01.png";
import serviceTwo from "../../../assets/images/services/services-img-02.jpg";
import serviceThree from "../../../assets/images/services/services-img-03.jpg";
import serviceFour from "../../../assets/images/services/services-img-04.jpg";
import serviceFive from "../../../assets/images/services/services-img-05.jpg";
import serviceSix from "../../../assets/images/services/services-img-06.jpg";

const ServicePages = () => {
  return (
    <section className="services py-100">
      <div className="container">
        <div className="row justify-content-center g-4">
          <div className="col-lg-4 col-md-6">
            <div className="services-item">
              <div className="background-img">
                <img src={serviceOne} alt="" />
              </div>
              <div className="icon">
                <span className="icon-satellite"></span>
              </div>
              <h4 className="title">SATELLITE TV</h4>
              <p className="para">
                The last and slowest broadband service is provided by satellite.
                Offering devoted web association with different price to
                purchase.
              </p>
              {/* <a
                href="services-details.html"
                className="btn--base-two style-two"
              >
                <i className="fas fa-circle "></i>READ MORE
                <i className="fas fa-circle"></i>
              </a> */}
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="services-item">
              <div className="background-img">
                <img src={serviceTwo} alt="" />
              </div>
              <div className="icon">
                <span className="icon-wifi-1"></span>
              </div>
              <h4 className="title">WIFI INTERNET</h4>
              <p className="para">
                Broadband Internet is giving one of the quickest broadband web
                and organization arrangements all through.
              </p>
              {/* <a
                href="services-details.html"
                className="btn--base-two style-two"
              >
                <i className="fas fa-circle "></i>READ MORE{" "}
                <i className="fas fa-circle"></i>
              </a> */}
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="services-item">
              <div className="background-img">
                <img src={serviceThree} alt="" />
              </div>
              <div className="icon">
                <span className="icon-tv-box"></span>
              </div>
              <h4 className="title">PRO TV BOX</h4>
              <p className="para">
                Make it reasonable! Golden IT programs are quite often 33% to
                one around 50% of the expense of practically identical.
              </p>
              {/* <a
                href="services-details.html"
                className="btn--base-two style-two"
              >
                {" "}
                <i className="fas fa-circle "></i>READ MORE{" "}
                <i className="fas fa-circle"></i>
              </a> */}
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="services-item">
              <div className="background-img">
                <img src={serviceFour} alt="" />
              </div>
              <div className="icon">
                <span className="icon-satellite"></span>
              </div>
              <h4 className="title">HOME SECURITY</h4>
              <p className="para">
                The networking of computers in the home is made easier with a
                broadband connection, by either using wireless or wired modems.
              </p>
              {/* <a
                href="services-details.html"
                className="btn--base-two style-two"
              >
                {" "}
                <i className="fas fa-circle "></i>READ MORE{" "}
                <i className="fas fa-circle"></i>
              </a> */}
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="services-item">
              <div className="background-img">
                <img src={serviceFive} alt="" />
              </div>
              <div className="icon">
                <span className="icon-wifi-1"></span>
              </div>
              <h4 className="title">MOBILE CONNECTION</h4>
              <p className="para">
                A broadband association permits you to play numerous famous PC
                games that depend on a quick Internet association.
              </p>
              {/* <a
                href="services-details.html"
                className="btn--base-two style-two"
              >
                {" "}
                <i className="fas fa-circle "></i>READ MORE{" "}
                <i className="fas fa-circle"></i>
              </a> */}
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="services-item">
              <div className="background-img">
                <img src={serviceSix} alt="" />
              </div>
              <div className="icon">
                <span className="icon-tv-box"></span>
              </div>
              <h4 className="title">HOME BROADBAND</h4>
              <p className="para">
                Broadband association, dissimilar to the old dial-up web
                association, won't draw in your telephone line when being used.
              </p>
              {/* <a
                href="services-details.html"
                className="btn--base-two style-two"
              >
                {" "}
                <i className="fas fa-circle "></i>READ MORE{" "}
                <i className="fas fa-circle"></i>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePages;
