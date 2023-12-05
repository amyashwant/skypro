import React from "react";
import aboutOne from "../../../assets/images/home-02/about/about-left-bg.png";
import aboutTwo from "../../../assets/images/home-02/about/about-right-bg.png";
import aboutThree from "../../../assets/images/home-02/about/about-01.png";
import aboutFour from "../../../assets/images/home-02/about/about-02.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about home-two-about pt-50 pb-100">
      <div className="home-two-about-bg">
        <img src={aboutOne} alt="img" />
        <img src={aboutTwo} alt="img" />
      </div>
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-6">
            <div className="about-left">
              <div className="play-button">
                <a
                  href="https://www.youtube.com/watch?v=_D-mh3aZK_4"
                  className="magnific-video"
                >
                  <i className="icon-play"></i>
                </a>
              </div>
              <div className="home-two-about-thumb">
                <span>
                  <img className="w-100" src={aboutThree} alt="img" />
                </span>
                <span>
                  <img className="w-100" src={aboutFour} alt="img" />
                </span>
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
                      services to meet their needs.
                    </p>
                    <p className="para mt-lg-4 mt-3">
                      Our mission is to provide our customers with the best
                      possible internet, TV, and phone services.
                    </p>
                  </div>
                </div>
              </div>
              <div className="about-button ps-lg-5 mt-xl-0 mt-3">
                <Link to="/about" className="btn--base">
                  READ MORE
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
