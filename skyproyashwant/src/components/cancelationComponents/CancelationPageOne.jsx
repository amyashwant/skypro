import React from "react";
import refundImg from "../../assets/images/refund/WhatsApp Image 2023-11-27 at 15.40.21_0f782808.jpg";
import refundTwo from "../../assets/images/refund/why360-patten.png";
const RefundPageOne = () => {
  return (
    <>
      <section className="py-5 position-relative bglight privacy-section">
        <div className="circle-right circle-left d-none d-lg-block"></div>
        <img src={refundTwo} className="absimggCL" width="50" />
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="mt-0">Cancellation Policy</h3>

              <p className="mb-1">
                last updated:{" "}
                <span className="bluClr" style={{ color: "#337ab7" }}>
                  November 2023
                </span>
              </p>
              <p>
                At skypro Cloud, we understand that plans can change, and
                flexibility is essential. Our cancellation policy is designed
                with your convenience in mind, ensuring a seamless experience
                for our users.
              </p>
              <p className="cost-clr">
                <span>
                  <img src={refundImg} />
                </span>
                <b>Flexible Options:</b>
              </p>

              <ul>
                <li>
                  We believe in providing flexibility to our users. Whether your
                  needs have evolved, or circumstances have changed, skypro
                  Cloud offers a variety of cancellation options to accommodate
                  your needs. Our process is simple and hassle free.
                </li>
              </ul>
              <p className="cost-clr">
                <span>
                  <img src={refundImg} />
                </span>
                <b>Cancellation Deadline:</b>
              </p>
              <ul>
                <li>
                  To facilitate smooth operations and allow us to make necessary
                  adjustments, we request that cancellations be made within a
                  specified time frame. This timeframe ensures that both parties
                  have enough time to manage the transition effectively.{" "}
                </li>
              </ul>
              <p className="cost-clr">
                <span>
                  <img src={refundImg} />
                </span>
                <b>Transparent Communication:</b>
              </p>
              <ul>
                <li>
                  Communication is important, and we value transparency. In the
                  event of a cancellation, we encourage Users to communicate
                  their decision immediately. This allows us to address any
                  concerns, gather feedback, and ensure that your experience
                  with skypro Cloud is as positive as possible.{" "}
                </li>
              </ul>
              <p className="cost-clr">
                <span>
                  <img src={refundImg} />
                </span>
                <b>User support:</b>
              </p>
              <ul>
                <li>
                  Our dedicated support team is here to assist you during the
                  cancellation process. If you have any questions, concerns, or
                  need assistance, feel free to contact our support team. We are
                  committed to providing excellent customer service and helping
                  you overcome any challenges.
                </li>
              </ul>
              <p className="cost-clr">
                <span>
                  <img src={refundImg} />
                </span>
                <b>Continuous Improvement:</b>
              </p>
              <ul>
                <li>
                  skypro Cloud reserves the right to suspend or terminate
                  services to users who violate our terms and conditions.
                  Subject to applicable cancellation policies, Users may
                  terminate their Accounts at any time.{" "}
                </li>
              </ul>
              <p className="cost-clr">
                <span>
                  <img src={refundImg} />
                </span>
                <b>Intellectual property:</b>
              </p>
              <ul>
                <li>
                  Your feedback matters to us. We use the insights we gain from
                  cancellations to continually improve our services. We
                  appreciate your input and strive to enhance our offerings
                  based on user experiences. At skypro Cloud, our goal is to
                  make your journey with us as seamless as possible, even if
                  plans change. Our cancellation policy reflects our commitment
                  to providing a user-centric and friendly experience. If you
                  have any questions or would like some clarification from us,
                  please do not hesitate to contact our support team.{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <a className="scroll-top">
        <i className="fas fa-angle-double-up"></i>
      </a>
    </>
  );
};

export default RefundPageOne;
