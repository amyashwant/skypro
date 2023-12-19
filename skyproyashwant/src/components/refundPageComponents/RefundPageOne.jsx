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
              <h3 className="mt-0">Refund Policy</h3>

              <p className="mb-1">
                last updated:{" "}
                <span className="bluClr" style={{ color: "#337ab7" }}>
                  November 2023
                </span>
              </p>
              <p>
                At The skypro, our primary goal is to ensure complete customer
                satisfaction. To ensure a transparent understanding of our
                refund policy, please carefully read the terms outlined below:
              </p>
              <p className="cost-clr">
                <span>
                  <img src={refundImg} />
                </span>
                <b>Eligibility for Refund:</b>
              </p>
              <p>
                We understand that circumstances may arise where a refund is
                warranted. To be eligible for a refund, you must meet the
                certain criteria:
              </p>
              <ul>
                <li>
                  The request for a refund must be submitted within stipulated
                  days from the date of purchase or service activation as
                  decided by the company rules
                </li>
                <li>
                  The reason for the refund request must be genuine and
                  supported by evidence after our investigation.
                </li>
              </ul>
              <p className="cost-clr">
                <span>
                  <img src={refundImg} />
                </span>
                <b>Refund Request Procedure:</b>
              </p>
              <ul>
                <li>
                  To request a refund, please contact our customer support team
                  at <a href="mailto:info@theskypro.in">info@theskypro.in</a>{" "}
                  with the subject line 'Refund Request'.
                </li>
                <li>
                  Provide detailed information regarding the reason for the
                  refund along with any supporting documentation or evidence.
                </li>
              </ul>
              <p className="cost-clr">
                <span>
                  <img src={refundImg} />
                </span>
                <b>Limitations:</b>
              </p>
              <ul>
                <li>
                  Refunds are processed only for eligible services or products,
                  as specified in the fine print of each deal. Please review the
                  details of your purchase before making any transactions.
                </li>
              </ul>
              <p className="cost-clr">
                <span>
                  <img src={refundImg} />
                </span>
                <b>Our Commitment:</b>
              </p>
              <ul>
                <li>
                  We strive to provide the best services to our clients and will
                  make every effort to address and rectify any issues. Your
                  satisfaction is our priority.
                </li>
                <li>
                  By using our services and making a purchase on{" "}
                  <a href="http://www.theskypro.in">www.theskypro.in</a>, you
                  agree to adhere to the terms and conditions of this refund
                  policy.
                </li>
                <li>
                  For any questions or concerns regarding our refund policy,
                  please contact us at{" "}
                  <a href="mailto:info@theskypro.in">info@theskypro.in</a>.
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
