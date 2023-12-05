import React from "react";
import termsOne from "../../assets/images/refund/why360-patten.png"
const TermsPageOne = () => {
  return (
    <section className="py-5 position-relative bglight privacy-section">
      <div className="circle-right circle-left d-none d-lg-block"></div>
      <img
        src={termsOne}
        className="absimggCL"
        width="50"
      />
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h3 className="mt-0">Terms and Conditions</h3>

            <p className="mb-1">
              last updated:{" "}
              <span
                className="bluClr"
                   style={{color:"#337ab7"}}
              >
                November 2023
              </span>
            </p>
            <h4>
              All definition/interpretation are to be construed and understood
              as per the provisions of Cable Television Network (Regulations)
              Act, 1995 & Rules 1994, Amended Act, 2012 and amendment made from
              time to time set out herein:
            </h4>
            <ul className="list-style">
              <li>
                The Applicant shall apply for connection as per the scheme of
                prepaid or post paid selected by him and in case of new
                subscriber it should be accompanied by duly completed and signed
                application form (CAF).
              </li>
              <li>
                The STB and the accessories shall be solely used for availing
                services provided by “Skypro” and shall not be used for availing
                services of any other Cable Network.
              </li>
              <li>
                The Channel/package fees as prescribed from time to time, for
                each channel/packages selected by the subscriber, shall be paid
                in advance.  The channel/package rates may change according to
                the applicable rules and regulations.
              </li>
              <li>
                Any channel/package will have to be subscribed for a minimum
                period of 6 months as per TRAI guidelines.
              </li>
              <li>
                The subscriber shall take adequate care of the STB while
                availing the services of cable/ broadband. Any willful default
                or damage to STB will be billed to the account of the
                subscriber.
              </li>
              <li>
                The subscriber shall not, without the prior authorization of
                “SKYPRO” remove, transfer or otherwise relocate the STB from the
                original place of installation.  In case STB is lost or damaged
                on account of theft, burglary or by any other accident, the
                subscriber will file a police complaint forthwith and notify
                “SKYPRO” of such loss immediately, with copy of complaint.
              </li>
              <li>
                In case of non payment / delay in payment, “SKYPRO” reserves the
                right to cancel the subscription and to discontinue the
                services. In such cases, the subscriber will return the STB
                without any objection and in good working condition. “SKYPRO”
                shall have the right to recover the balance dues and price of
                STB in case it is not returned or is damaged or not working
                properly.
              </li>
              <li>
                The channel/packages fees, as prescribed from time to time for
                each channel/packages selected shall be paid in advance, either
                to “SKYPRO” or to the authorized franchisee as the case may be.
              </li>
              <li>
                The subscriber shall, in advance, notify change of
                address/contact number to “SKYPRO” or its authorized
                representative.
              </li>
              <li>
                For reconnection / activation of the service earlier
                disconnected for any reason, the subscriber shall be liable to
                pay reconnection charges as prescribed from time to time as per
                regulations.
              </li>
              <li>
                Cable services in respect of channels/packages shall be
                available to the subscriber, subject to Force Majeure conditions
                including but not limited to act of God, fires, strikes,
                embargoes, war insurrection, riots and other causes beyond the
                reasonable control “SKYPRO” including atmospheric/topographical
                hindrances.
              </li>
              <li>
                The smart card and STB shall always remain property of “SKYPRO”.
                The warranty of Six Months will cover the smart card & STB only.
                Adaptor and remote control device are not covered under
                warranty. In case of physical or willful damage warranty will
                not be provided.
              </li>
              <li>
                Subscribers are not authorized to install any Gadgets on STB
                without “SKYPRO”’s prior written permission.
              </li>
              <li>
                Subscriber data can be used for marketing/promotional purposes
                by “SKYPRO” or its associates. 
              </li>
              <li>All prices are exclusive of taxes.</li>
              <li>For every STB separate application form shall be used.</li>
              <li>
                For choosing available packages logon to company’s website.
                Different packages can be selected for different T.V. sets and a
                separate Package Application Form shall be filled for each T.V.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsPageOne;
