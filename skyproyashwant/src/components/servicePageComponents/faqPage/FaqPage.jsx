import React, { useState } from "react";
import faqOne from "../../../assets/images/home-01/about/offer-bg.png";

const FaqPage = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };
  return (
    // <section className="faq py-100 bg-img overlay-bg" style={{backgroundImage: `url(${faqOne})`}}>
    //   <div className="container">
    //     <div className="row justify-content-end">
    //       <div className="col-lg-6">
    //         <div className="row">
    //           <div className="col-lg-12">
    //             <div className="section-header style-two">
    //               {/* <h4 className="subtitle"> FAQ </h4> */}
    //               <h2 className="title">FREQUENTLY ASKED QUESTIONS</h2>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="accordion custom--accordion" id="accordionExample">
    //           {faqData.map((item, index) => (
    //             <div className="accordion-item" key={index}>
    //               <h5 className="accordion-header" id={`heading${index + 1}`}>
    //                 <button
    //                   className="accordion-button"
    //                   type="button"
    //                   data-bs-toggle="collapse"
    //                   data-bs-target={`#collapse${index + 1}`}
    //                   aria-expanded={index === 0 ? "true" : "false"}
    //                   aria-controls={`collapse${index + 1}`}
    //                 >
    //                   {item.question}
    //                 </button>
    //               </h5>
    //               <div
    //                 id={`collapse${index + 1}`}
    //                 className={`accordion-collapse collapse ${index === 0 ? "" : ""}`}
    //                 aria-labelledby={`heading${index + 1}`}
    //                 data-bs-parent="#accordionExample"
    //               >
    //                 <div className="accordion-body">
    //                   <p>{item.answer}</p>
    //                 </div>
    //               </div>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section
    className="faq-accordion py-100 bg-img overlay-bg"
    style={{ backgroundSize: '100%', backgroundImage: `url(${faqOne})` }}>
    <div className="container">
      <div className="row justify-content-end">
        <div className="col-lg-6">
          <div className="package-header" style={{ textAlign: "left" }}>
            <h1>FREQUENTLY ASKED QUESTIONS</h1>
          </div>
          <div className="accordion" id="accordionExample">
            {faqData.map((item, index) => (
              <div className="accordion-item faq-question" key={index}>
                <h2 className="accordion-header" id={`heading${index + 1}`}>
                  <button
                    className={`accordion-button ${
                      index === activeIndex ? "" : "collapsed"
                    }`}
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={index === activeIndex}
                    aria-controls={`collapse${index + 1}`}
                  >
                    {item.question}
                  </button>
                </h2>
                <div
                  id={`collapse${index + 1}`}
                  className={`accordion-collapse collapse ${
                    index === activeIndex ? "show" : ""
                  }`}
                  aria-labelledby={`heading${index + 1}`}
                >
                  <div className="accordion-body">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

const faqData = [
  {
    question: "What does 1 gigabit per second Internet mean?",
    answer:
      "The association speed accessible at the gadget we introduce on your premises is fit for sending 1,000,000,000 pieces of data consistently. Comprehend that your real throughput speed relies upon many variables.",
  },
  {
    question: "Will I be able to use Wi-Fi with Point Gigabit?",
    answer:
      "Indeed. The hardware we will give is intended to give you Internet access through the wired association. You may likewise associate a remote switch to the gadget that Point Broadband gives.",
  },
  {
    question: "Can I use my own wireless router?",
    answer:
      "Indeed. We suggest a 802.11ac or AX (Wi-Fi6) switch/passageway with the ability to help various streams to get the best remote experience. If it's not too much trouble, note that remote paces are reliant upon the gadget abilities.",
  },
  {
    question: "What types of cables will be used for Point Broadband?",
    answer:
      "CAT5e and Cat6 Ethernet links best help Point Broadband Gigabit speeds.",
  },
  {
    question: "What's so special about fiber Internet?",
    answer:
      "Fiber Internet is the latest improvement to the way data is transferred around the world. It’s significantly faster than cable, way faster than dial-up, and can carry large amounts of data in a single line, even reaching multiple terabytes of data transfer with ease.",
  },
];

export default FaqPage;
