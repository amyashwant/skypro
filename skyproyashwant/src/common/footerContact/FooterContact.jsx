import React from "react";
import footerOne from "../../assets/images/home-01/footer_contact/location.png";
import footerTwo from "../../assets/images/home-01/footer_contact/message.png";
import footerThree from "../../assets/images/home-01/footer_contact/phone.png";
const FooterContact = () => {
  return (
    <section className="footer-contact py-80">
      <div className="container">
        <div className="row justify-content-center gy-5">
          <div className="col-md-4 col-sm-6">
            <div className="footer-contact-item d-flex flex-row flex-md-column flex-lg-row text-start text-lg-start">
              <div className="icon">
                <img src={footerOne} alt="img" />
              </div>
              <div className="content">
                <h6 className="title">OFFICIAL LOCATION</h6>
                <p className="para">
                Abacus Cloud, B-70 ,Sector-74, Phase-7  
                </p>
                <p className="para">Mohali, Punjab, IN</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="footer-contact-item d-flex flex-row flex-md-column flex-lg-row text-start text-lg-start">
              <div className="icon">
                <img src={footerTwo} alt="img" />
              </div>
              <div className="content">
                <h6 className="title">SEND US A MESSAGE</h6>
                <p className="para">
                  <a href="mailto:">info123@gmail.com</a>
                </p>
                <p className="para">
                  <a href="mailto:">text123@etob.com</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="footer-contact-item d-flex flex-row flex-md-column flex-lg-row text-start text-lg-start">
              <div className="icon">
                <img src={footerThree} alt="img" />
              </div>
              <div className="content">
                <h6 className="title">GIVE US A CALL</h6>
                <p className="para">
                  <a href="tel:">+(91) 9803596035</a>
                </p>
                <p className="para">
                  <a href="tel:">+(91) 9803596035</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterContact;
