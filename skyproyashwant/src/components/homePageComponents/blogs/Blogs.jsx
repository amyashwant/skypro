import React from "react";
import blogOne from "../../../assets/images/home-02/blog/blog-01.png";
import blogTwo from "../../../assets/images/home-02/blog/blog-02.png";
import blogThree from "../../../assets/images/home-02/blog/blog-03.png";
import blogBg from "../../../assets/images/home-02/blog/blog-bg.png";
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
              <h4 className="subtitle">BLOG POST</h4>
              <h2 className="title">YOUR LATEST BLOG POST & ARTICALS</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center g-4">
          <div className="col-lg-4 col-md-6">
            <div className="home-two-blog-item">
              <div className="thumb">
                <a
                //  href="blog-details.html"
                >
                  <img src={blogOne} alt="img" />
                </a>
                <div className="date">
                  <span>MAY 14, 2020</span>
                </div>
              </div>
              <div className="content">
                <h4 className="title">
                  <a
                  //  href="blog-details.html"
                  >
                    Significant achievements from web history in our whole
                    internet business.
                  </a>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="home-two-blog-item">
              <div className="thumb">
                <a
                // href="blog-details.html"
                >
                  <img src={blogTwo} alt="img" />
                </a>
                <div className="date">
                  <span>MAY 24, 2020</span>
                </div>
              </div>
              <div className="content">
                <h4 className="title">
                  <a
                  // href="blog-details.html"
                  >
                    Infertility Research and Your Mental Health: Does the
                    Internet Help or Hurt?
                  </a>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="home-two-blog-item">
              <div className="thumb">
                <a
                //  href="blog-details.html"
                >
                  <img src={blogThree} alt="img" />
                </a>
                <div className="date">
                  <span>MAY 30, 2020</span>
                </div>
              </div>
              <div className="content">
                <h4 className="title">
                  <a
                  // href="blog-details.html"
                  >
                    How the Difference Between Wired and Wireless Affects your
                    Internet Experience
                  </a>
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
