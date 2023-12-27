import React from "react";
import testiOne from "../../../assets/images/home-01/about/testimonial-01.png";
import testiTwo from "../../../assets/images/home-01/about/testimonial-01.png";
import testiThree from "../../../assets/images/home-01/about/testimonial-01.png";

const testimonialData = [
  {
    id: 1,
    image: testiOne,
    content:
      "Broadband internet is Rocket supplier. Their staff is proficient and truly available. They deal with us and cause us to feel they esteem our business. drop in at our place within half an hour of our resgistering a complaint.",
    rating: 4.0,
    client: "BROOKLYN SIMMONS",
  },
  {
    id: 2,
    image: testiTwo,
    content:
      "Broadband internet is Rocket supplier. Their staff is proficient and truly available. They deal with us and cause us to feel they esteem our business. drop in at our place within half an hour of our resgistering a complaint.",
    rating: 5.0,
    client: "DARLENE DOBERTSON",
  },
  {
    id: 3,
    image: testiThree,
    content:
      "Broadband internet is Rocket supplier. Their staff is proficient and truly available. They deal with us and cause us to feel they esteem our business. drop in at our place within half an hour of our resgistering a complaint.",
    rating: 4.0,
    client: "CONRTNEY HENRY",
  },
];

const TestimonialPage = () => {
  return (
    <section className="testimonial style-two py-100 pb-50">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-header">
              <h4 className="subtitle">TESTIMONIAL</h4>
              <h2 className="title text-white">WHAT OUR CLIENT SAY ABOUT US</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center g-4">
          {testimonialData.map((testimonial) => (
            <div key={testimonial.id} className="col-lg-4 col-md-6">
              <div className="testimonail-wrapper">
                <div className="testimonial-item">
                  <div className="thumb">
                    <img src={testimonial.image} alt="img" />
                  </div>
                  <div
                    className="background-img"
                    // style={{ backgroundImage: `url(${testimonial.image})` }}
                  ></div>
                  <div className="content">
                    <div className="icon">
                      <i className="icon-quote"></i>
                    </div>
                    <p className="para">{testimonial.content}</p>
                    <ul className="rating-star d-flex flex-wrap align-items-center justify-content-start">
                      <li>
                        <i className={testimonial.rating >= 1 ? "fas fa-star" : "far fa-star"}></i>
                      </li>
                      <li>
                        <i className={testimonial.rating >= 2 ? "fas fa-star" : "far fa-star"}></i>
                      </li>
                      <li>
                        <i className={testimonial.rating >= 3 ? "fas fa-star" : "far fa-star"}></i>
                      </li>
                      <li>
                        <i className={testimonial.rating >= 4 ? "fas fa-star" : "far fa-star"}></i>
                      </li>
                      <li>
                        <i className={testimonial.rating >= 5 ? "fas fa-star" : "far fa-star"}></i>
                      </li>
                      <li>
                        <span>{testimonial.rating}</span>
                      </li>
                    </ul>
                    <div className="client-name">
                      <h6 className="name">{testimonial.client}</h6>
                      <span>Client</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialPage;
