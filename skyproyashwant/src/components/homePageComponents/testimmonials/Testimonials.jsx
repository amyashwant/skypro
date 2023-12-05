import React from "react";
import testOne from "../../../assets/images/home-02/testi/left-img.png";
import testTwo from "../../../assets/images/home-01/about/testi-01.png";
import testThree from "../../../assets/images/home-01/about/testi-02.png";
import testFour from "../../../assets/images/home-01/about/testi-03.png";
import testFive from "../../../assets/images/home-02/testi/features-02.png";
import testSix from "../../../assets/images/home-02/testi/features-02.png";
import testSeven from "../../../assets/images/home-02/testi/features-03.png";
const Testimonials = () => {
  return (
    <section className="home-two-testimonial overflow-hidden">
      <div className="row align-items-center">
        <div className="col-xl-7 col-lg-6">
          <div className="testimonial-left py-100">
            <div className="row align-items-center">
              <div className="col-xxl-6 d-xxl-block d-none">
                <div className="testimonial-thumbs">
                  <img src={testOne} alt="img" />
                </div>
              </div>
              <div className="col-xxl-6 col-xl-12">
                <div className="testi-slider">
                  <div className="testi-content">
                    <div className="icon mb-lg-4">
                      <i className="icon-quote"></i>
                    </div>
                    <p className="para text-white">
                      I am extremely pleased with the service and your internet
                      speed that I received from your Telecom. It is encouraging
                      to see such a committed, courteous, knowledgeable and
                      professional team.
                    </p>
                    <p className="para text-white pt-3">
                      I feel better that YOU has such passionate and committed
                      executives to assist its customers."
                    </p>
                    <div className="client-meta d-flex align-items-center flex-wrap mt-5">
                      <div className="meta-thumb">
                        <img src={testTwo} alt="img" />
                      </div>
                      <div className="meta-content">
                        <h5 className="name">Wade warren</h5>
                        <span className="designation">CEO</span>
                      </div>
                    </div>
                  </div>
                  <div className="testi-content">
                    <div className="icon mb-lg-4">
                      <i className="icon-quote"></i>
                    </div>
                    <p className="para text-white">
                      I have changed my perception about the services that I was
                      experiencing in the past during 2001-2009.
                    </p>
                    <p className="para text-white pt-3">
                      Please accept my heartfelt gratitude for the services and
                      keep it up , and make it more better in future!!!"
                    </p>
                    <div className="client-meta d-flex align-items-center flex-wrap mt-5">
                      <div className="meta-thumb">
                        <img src={testThree} alt="img" />
                      </div>
                      <div className="meta-content">
                        <h5 className="name">Abby Covert</h5>
                        <span className="designation">CO-Founder</span>
                      </div>
                    </div>
                  </div>
                  <div className="testi-content">
                    <div className="icon mb-lg-4">
                      <i className="icon-quote"></i>
                    </div>
                    <p className="para text-white">
                      One of the two YOU Broadband connections wasn't working in
                      our office for some time. It is so comforting to see your
                      engineer, Mangesh Ghatge, drop in at our place within half
                      an hour of our registering a complaint.
                    </p>
                    <p className="para text-white pt-3">
                      Actually the problem was in our system itself.
                    </p>
                    <div className="client-meta d-flex align-items-center flex-wrap mt-5">
                      <div className="meta-thumb">
                        <img src={testFour} alt="img" />
                      </div>
                      <div className="meta-content">
                        <h5 className="name">Chris Coyier</h5>
                        <span className="designation">Founder</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-5 col-lg-6">
          <div className="testimonial-right">
            <div className="right-item d-flex flex-wrap align-items-sm-start align-items-center">
              <div className="icon">
                <img src={testFive} alt="img" />
              </div>
              <div className="content">
                <h5 className="title text-white mb-3">
                  ULTRA SPEED CONNECTIONS
                </h5>
                <p className="para text-white">
                  The term broadband alludes to a fast and high-data
                  transmission correspondence foundation.
                </p>
              </div>
            </div>
            <div className="right-item d-flex flex-wrap align-items-sm-start align-items-center">
              <div className="icon">
                <img src={testSix} alt="img" />
              </div>
              <div className="content">
                <h5 className="title text-white mb-3">FREE INSTALLATIONS</h5>
                <p className="para text-white">
                  It commonly relates to high-speed Internet services, which
                  have become very important to both consumers.
                </p>
              </div>
            </div>
            <div className="right-item d-flex flex-wrap align-items-sm-start align-items-center">
              <div className="icon">
                <img src={testSeven} alt="img" />
              </div>
              <div className="content">
                <h5 className="title text-white mb-3">FLEXIBLE TARIFF PLANS</h5>
                <p className="para text-white">
                  The main part of Internet clients (97%) across the globe
                  access broadband through their cell phones.
                </p>
                {/* <a href="index.html" className="btn--base-two mt-md-3 mt-2">
                  READ MORE <i className="fas fa-circle"></i>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
