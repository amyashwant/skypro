import React from "react";
import testiOne from "../../../assets/images/home-01/about/testimonial-01.png";
import testiTwo from "../../../assets/images/home-01/about/testimonial-01.png";
import testiThree from "../../../assets/images/home-01/about/testimonial-01.png";
const TestimonialPage = () => {
  return (
    <section className="testimonial style-two py-100 pb-50">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-header">
              <h4 className="subtitle">TESTIMONIAL</h4>
              <h2 className="title text-dark">WHAT OUR CLIENT SAY ABOUT US</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center g-4">
          <div className="col-lg-4 col-md-6">
            <div className="testimonail-wrapper">
              <div className="testimonial-item">
                <div className="thumb">
                  <img src={testiOne} alt="img" />
                </div>
                <div
                  className="background-img"
                  //  style="background-image: url(assets/images/home-01/testimonial/testi-shape.png);"
                  style={{
                    backgroundImage: `url(${testiOne})`,
                  }}
                ></div>
                <div className="content">
                  <div className="icon">
                    <i className="icon-quote"></i>
                  </div>
                  <p className="para">
                    Broadband internet is Rocket supplier. Their staff is
                    proficient and truly available. They deal with us and cause
                    us to feel they esteem our business."
                  </p>
                  <ul className="rating-star d-flex flex-wrap align-items-center justify-content-start ">
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="far fa-star"></i>
                    </li>
                    <li>
                      <span>4.0</span>
                    </li>
                  </ul>
                  <div className="client-name">
                    <h6 className="name">BROOKLYN SIMMONS</h6>
                    <span>Client</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="testimonail-wrapper">
              <div className="testimonial-item">
                <div className="thumb">
                  <img src={testiTwo} alt="img" />
                </div>
                <div
                  className="background-img"
                  //  style="background-image: url(assets/images/home-01/testimonial/testi-shape.png);"
                ></div>
                <div className="content">
                  <div className="icon">
                    <i className="icon-quote"></i>
                  </div>
                  <p className="para">
                    This is internet is “Our sales rep has been very helpful and
                    has gone out of his way to make our transition to Broadband
                    a painless process.”
                  </p>
                  <ul className="rating-star d-flex flex-wrap align-items-center justify-content-start ">
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      
                      <span>5.0</span>
                    </li>
                  </ul>
                  <div className="client-name">
                    <h6 className="name">DARLENE DOBERTSON</h6>
                    <span>Client</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="testimonail-wrapper">
              <div className="testimonial-item">
                <div className="thumb">
                  <img src={testiThree} alt="img" />
                </div>
                <div
                  className="background-img"
                  // style="background-image: url(assets/images/home-01/testimonial/testi-shape.png);"
                ></div>
                <div className="content">
                  <div className="icon">
                    <i className="icon-quote"></i>
                  </div>
                  <p className="para">
                    I am pleased to recommend the internet service provided by
                    Broadband. The speed and service is excellent and they best
                    in market at this moment.
                  </p>
                  <ul className="rating-star d-flex flex-wrap align-items-center justify-content-start ">
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="far fa-star"></i>
                    </li>
                    <li>
                      {" "}
                      <span>4.0</span>{" "}
                    </li>
                  </ul>
                  <div className="client-name">
                    <h6 className="name">CONRTNEY HENRY</h6>
                    <span>Client</span>
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

export default TestimonialPage;
