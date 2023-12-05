import React from "react";
import faqOne from "../../../assets/images/home-01/about/offer-bg.png"
const FaqPage = () => {
  return (
    <section
      className="faq py-100 bg-img overlay-bg"
    //   style="background-image: url(assets/images/home-01/offer/offer-bg.png);"
    style={{
      backgroundImage: `url(${faqOne})`,
    }}
    >
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-header style-two">
                  <h4 className="subtitle"> FAQ </h4>
                  <h2 className="title">A FREQUENTLY ASKED QUESTIONS</h2>
                </div>
              </div>
            </div>
            <div className="accordion custom--accordion" id="accordionExample">
              <div className="accordion-item">
                <h5 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What does 1 gigabit per second Internet mean?
                  </button>
                </h5>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      The association speed accessible at the gadget we
                      introduce on your premises is fit for sending
                      1,000,000,000 pieces of data consistently. Comprehend that
                      your real throughput speed relies upon many variables.
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h5 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Will I be able to use Wi-Fi with Point Gigabit?
                  </button>
                </h5>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Indeed. The hardware we will give is intended to give you
                      Internet access through the wired association. You may
                      likewise associate a remote switch to the gadget that
                      Point Broadband gives.
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h5 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Can I use my own wireless router?
                  </button>
                </h5>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Indeed. We suggest a 802.11ac or AX (Wi-Fi6)
                      switch/passageway with the ability to help various streams
                      to get the best remote experience. If it's not too much
                      trouble, note that remote paces are reliant upon the
                      gadget abilities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h5 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    What types of cables will be used for Point Broadband?
                  </button>
                </h5>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      CAT5e and Cat6 Ethernet links best help Point Broadband
                      Gigabit speeds.
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h5 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    What's so special about fiber Internet?
                  </button>
                </h5>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Fiber Internet is the latest improvement to the way data
                      is transferred around the world. It’s significantly faster
                      than cable, way faster than dial-up, and can carry large
                      amounts of data in a single line, even reaching multiple
                      terabytes of data transfer with ease.
                    </p>
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

export default FaqPage;
