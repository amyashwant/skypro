import React from "react";
import funOne from "../../../assets/images/home-02/fun/fun-img.png";
import funTwo from "../../../assets/images/home-02/fun/fun-bg.png";
const Facts = () => {
  return (
    <section className="home-two-fun py-100">
      <div className="container">
        <div className="row align-items-center justify-content-center gy-5">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-header style-two ps-lg-5">
                  <h4 className="subtitle">OUR FACT</h4>
                  <h2 className="title">
                    UNLIMITED MOVIES,K TV SHOWS AND MORE
                  </h2>
                  <p className="para">
                    We are dedicated to serving customers. We achieve this not
                    only through our extensive portfolio of internet.
                  </p>
                </div>
              </div>
            </div>
            <div className="fun-fact-right-content d-flex flex-column gap-lg-5 gap-4 ps-lg-5">
              <div className="fun-fact-right d-flex text-sm-start text-start flex-sm-row flex-row">
                <div className="icon">
                  <span className="icon-wifi-2"></span>
                </div>
                <div className="contents">
                  <h3 className="title">
                    254<span>K CONNECTION PROVIDED</span>
                  </h3>
                  <p className="para">
                    Broadband Internet Corporate Internet and Data Connectivity
                  </p>
                </div>
              </div>
              <div className="fun-fact-right d-flex text-sm-start text-start flex-sm-row flex-row">
                <div className="icon">
                  <span className="icon-user-1"></span>
                </div>
                <div className="contents">
                  <h3 className="title">
                    35<span>M CLIENT IN THE WOLRD</span>
                  </h3>
                  <p className="para">
                    Broadband Internet High Quality &amp; Reliable IPTSP Service
                  </p>
                </div>
              </div>
              <div className="fun-fact-right d-flex text-sm-start text-start flex-sm-row flex-row">
                <div className="icon">
                  <span className="icon-satellite-dish"></span>
                </div>
                <div className="contents">
                  <h3 className="title">
                    480 <span> SATELLED CHANNELE</span>
                  </h3>
                  <p className="para">
                    Broadband Internet Safe &amp; Smarter Home Internet
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="fun-right-bg-img bg-img"
              style={{
                backgroundImage: `url(${funTwo})`,
              }}
            >
              <img src={funOne} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facts;
