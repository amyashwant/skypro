import React, { useEffect, useState } from "react";
import aboutOne from "../../../assets/images/home-02/about/about-left-bg.png";
import aboutTwo from "../../../assets/images/home-02/about/about-right-bg.png";
import aboutThree from "../../../assets/images/home-02/about/about-01.png";
import aboutFour from "../../../assets/images/home-02/about/about-02.png";
import { Link } from "react-router-dom";

const About = () => {
  const videoUrl = "https://www.youtube.com/embed/-c345tCaU8w";

  return (
    <section className="about home-two-about pt-50 pb-100">
      <div className="home-two-about-bg">
        <img src={aboutOne} alt="img" />
        <img src={aboutTwo} alt="img" />
      </div>
      <div className="container">
        <div className="row gy-5 display-flex align-items-center">
          <div className="col-lg-6">
          <div className="about-left">
        <div className="home-two-about-thumb">
          <iframe
            width='100%'
            height="400"
            src={videoUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          ></iframe>
        </div>
      </div>
          </div>
          <div className="col-lg-6">
            <div className="about-right-content">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-header style-two ps-lg-5">
                    <h4 className="subtitle"> ABOUT US</h4>
                    <h2 className="title">
                      DISCOVER A WORLD OF HIGH-SPEED INTERNET
                    </h2>
                    <p className="para">
                      We are a leading provider of high-speed internet, TV, and
                      phone services to residential and business customers. We
                      are committed to providing our customers with the best
                      possible experience, and we offer a variety of plans and
                      services to meet their needs.Our mission is to provide 
                      our customers with the best possible internet, TV, and 
                      phone services.
                    </p>
                    {/* <p className="para mt-lg-4 mt-3">
                      Our mission is to provide our customers with the best
                      possible internet, TV, and phone services.
                    </p> */}
                  </div>
                </div>
              </div>
              <div className="about-button ps-lg-5 mt-xl-0 mt-3">
                <Link to="/about" className="btn--base">
                  READ MORE
                </Link>
                <Link to="/contact" className="btn--base div-01-contact">
                  CONTACT US
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;