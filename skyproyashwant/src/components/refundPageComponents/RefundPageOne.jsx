import React from "react";
import refundImg from "../../assets/images/refund/WhatsApp Image 2023-11-27 at 15.40.21_0f782808.jpg";
import refundTwo from "../../assets/images/refund/why360-patten.png"
const RefundPageOne = () => {
  return (
    <>
      <section className="py-5 position-relative bglight privacy-section">
        <div className="circle-right circle-left d-none d-lg-block"></div>
        <img src={refundTwo} className="absimggCL" width="50" />
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="mt-0">Refund and Cancellation Policy</h3>

              <p className="mb-1">
                last updated:{" "}
                <span className="bluClr" style={{ color: "#337ab7" }}>
                  November 2023
                </span>
              </p>
              <p>
                Refund & Cancellation Policy Our focus is complete customer
                satisfaction. In the event, if you are displeased with the
                services provided, we will refund back the money, provided the
                reasons are genuine and proved after investigation. Please read
                the fine prints of each deal before buying it, it provides all
                the details about the services or the product you purchase.
              </p>
              <h4>
                In case of dissatisfaction from our services, clients have the
                liberty to cancel their order and request a refund from us. Our
                Policy for the cancellation and refund will be as follows:
              </h4>
              <p className="cost-clr">
                <span>
                  <img src={refundImg} />
                </span>
                <b>Cancellation Policy</b>
              </p>
              <p>
                For Cancellations please contact us via contact us link.
                Requests received later than 10 business days prior to the end
                of the current service period will be treated as cancellation of
                services for the next service period.
              </p>
              <p className="cost-clr">
                <span>
                  <img src={refundImg} />
                </span>
                <b>Refund Policy</b>
              </p>
              <p>
                We will try our best to provide the suitable services for our
                clients. In case any client is not completely satisfied with our
                services we can provide a refund. If paid by credit card,
                refunds will be issued to the original credit card provided at
                the time of purchase and in case of payment gateway same
                payments refund will be made to the same account.
              </p>
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
