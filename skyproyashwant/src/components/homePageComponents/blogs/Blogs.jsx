import React from "react";
import blogOne from "../../../assets/images/home-02/blog/blog-01.png";
import blogTwo from "../../../assets/images/home-02/blog/blog-02.png";
import blogThree from "../../../assets/images/home-02/blog/blog-03.png";
import blogBg from "../../../assets/images/home-02/blog/blog-bg.png";
import { Link } from "react-router-dom";
const Blogs = () => {
  return (
    <section
      className="home-two-blog bg-img py-100"
      style={{
        backgroundImage: `url(${blogBg})`,
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-header">
              {/* <h4 className="subtitle">BLOG POST</h4> */}
              <h2 className="title">YOUR LATEST BLOG POST & ARTICLES</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center g-4">
          <div className="col-lg-4 col-md-6">
            <div className="home-two-blog-item">
              <div className="thumb">
                <Link
                //  to="blog-details.html"
                >
                  <img src={blogOne} alt="img" />
                </Link>
                <div className="date">
                  <span>MAY 14, 2020</span>
                </div>
              </div>
              <div className="content">
                <h4 className="title">
                  <Link
                  //  to="blog-details.html"
                  >
                    Significant achievements from web history in our whole
                    internet business.
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="home-two-blog-item">
              <div className="thumb">
                <Link
                // to="blog-details.html"
                >
                  <img src={blogTwo} alt="img" />
                </Link>
                <div className="date">
                  <span>MAY 24, 2020</span>
                </div>
              </div>
              <div className="content">
                <h4 className="title">
                  <Link
                  // to="blog-details.html"
                  >
                    Infertility Research and Your Mental Health: Does the
                    Internet Help or Hurt?
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="home-two-blog-item">
              <div className="thumb">
                <Link
                //  to="blog-details.html"
                >
                  <img src={blogThree} alt="img" />
                </Link>
                <div className="date">
                  <span>MAY 30, 2020</span>
                </div>
              </div>
              <div className="content">
                <h4 className="title">
                  <Link
                  // to="blog-details.html"
                  >
                    How the Difference Between Wired and Wireless Affects your
                    Internet Experience
                  </Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
