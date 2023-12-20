import React from "react";
import privacyOne from "../../assets/images/refund/why360-patten.png";

const PrivacyPageOne = () => {
  return (
    <section className="py-5 position-relative bglight privacy-section">
      <div className="circle-right circle-left d-none d-lg-block"></div>
      <img src={privacyOne} className="absimggCL" width="50" />
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h3 className="mt-0">SkyPro Privacy Policy</h3>

            <p className="mb-1">
              Policy last updated:
              <span className="bluClr" style={{ color: "#337ab7" }}>
                November 2023
              </span>
            </p>
            <p>
              At skypro Cloud, we value your privacy and are committed to protecting
              and processing your personal information responsibly. This Privacy 
              Policy outlines how we collect, use, disclose, and safeguard your 
              information when you visit our website or use our services at <a href="">https://www.theskypro.in/</a>
            </p>

            <h4>
              Information We Collect  
            </h4>
            <ul className="list-style">
              <li>
                <strong>Personal Information:</strong><br/>
                We may collect particular information such as your name, address, 
                and contact details when you interact with our website, especially when 
                you freely give it through forms.   
              </li>
              <li>
                <strong>Usage Information:</strong><br/>
                We automatically collect personal information about your commerce 
                with our website, including runners visited, time spent, and other 
                analytics data to enhance your experience.
              </li>
            </ul>

            <h4>
              How We Use Your Information
            </h4>
            <ul className="list-style">
              <li>
                <strong>Service Delivery:</strong><br/>
                We use your information to provide, improve, and personalize our cloud computing services, responding to inquiries, and delivering customer support. 
              </li>
              <li>
                <strong>Communication:</strong><br/>
                We may use your contact information to send important updates, newsletters, and promotional materials. You can opt-out of promotional dispatches at any time.
              </li>
            </ul>

            <h4>
              Information Sharing
            </h4>
            <ul className="list-style">
              <li>
                <strong>Service Providers:</strong><br/>
                We may share your information with trusted third-party service providers to help us in delivering our services, subject to confidentiality agreements.
              </li>
              <li>
                <strong>Legal Compliance:</strong><br/>
                We may disclose your information in accordance with applicable laws, regulations, or legal process.
              </li>
            </ul>

            <h4>
              Security
            </h4>
            <p>
              We employ reasonable security measures to cover your information from unauthorized access, exposure, revision, and destruction.
            </p>

            <h4>
              Cookies
            </h4>
            <p>
              We use cookies to enhance your browsing experience. You can manage cookie preferences through your browser settings.
            </p>

            <h4>
              Your Choices
            </h4>
            <p>
              You have the right to review, update, or cancel your particular information. Please communicate with us at info@theskypro.in for assistance.
            </p>

            <h4>
              Changes to this Privacy Policy
            </h4>
            <p>
              We may update this Privacy Policy periodically. Any changes will be posted on this runner with the updated date.
            </p>

            <h4>
              Contact Us
            </h4>
            <p>
              If you have questions or concerns about this Privacy Policy, please contact us at info@theskypro.in.
            </p>

            <p>
              Thank you for choosing The skypro. Your privacy is our priority.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPageOne;
