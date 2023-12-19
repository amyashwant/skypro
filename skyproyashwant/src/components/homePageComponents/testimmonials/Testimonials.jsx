import React from "react";
import testOne from "../../../assets/images/home-02/testi/left-img.png";
import testTwo from "../../../assets/images/home-01/about/testi-01.png";
import testThree from "../../../assets/images/home-01/about/testi-02.png";
import testFour from "../../../assets/images/home-01/about/testi-03.png";
import testFive from "../../../assets/images/home-02/testi/setting.png";
import testSix from "../../../assets/images/home-02/testi/phone.png";
import testSeven from "../../../assets/images/home-02/testi/bulb.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonials = () => {
  let settings = {
    // dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    easing: "linear",
    fade: false,
    arrows: true,
  };

return (
  <section className="home-two-testimonial pricing pt-100 pb-50 bg-img">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12">
            <div className="section-header">
              <h4 className="subtitle text-white">Client Testimonials</h4>
            </div>
            <div className="testimonial-left position-relative py-100">
              <div className="row align-items-center">
                <div className="col-sm-12 text-center">
                  <Slider {...settings} className="">
                    {testimonialData.map((item, i) => (
                      <div className="testi-content" key={i}>
                        <div className="icon mb-lg-4">
                          <img src={item?.image} alt="img" />
                        <div className="meta-thumb">
                          {console.log("iamge 1", item.image)}
                        </div>
                        </div>
                        <p className="para text-white"><i class="fa-solid fa-quote-left"></i>{item.description}<i class="fa-solid fa-quote-right"></i></p>
                        <div className="client-meta d-flex align-items-center flex-wrap mt-5">
                          <div className="meta-content">
                            <h5 className="name">{item.name}</h5>
                            <span className="designation">{item.designation}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
);
}

export default Testimonials

const testimonialData = [
  {
    icon: "icon-quote",
    description: "I am extremely pleased with the service and your internet speed that I received from your Telecom. It is encouraging to see such a committed, courteous, knowledgeable and professional team.",
    image: testTwo,
    name: "Chris Coyier",
    designation: "founder"
  },
  {
    icon: "icon-quote",
    description: "I have changed my perception about the services that I was experiencing in the past during 2001-2009. It is so comforting to see your engineer, Mangesh Ghatge, drop in at our place within half an hour of our registering a complaint.",
    image: testTwo,
    name: "Wade Warren",
    designation: "CEO"
  },
  {
    icon: "icon-quote",
    description: "One of the two YOU Broadband connections wasn't working in our office for some time. It is so comforting to see your engineer, Mangesh Ghatge, drop in at our place within half an hour of our registering a complaint.",
    image: testTwo ,
    name: "Abby Covert",
    designation: "CO-founder"
  },
]
