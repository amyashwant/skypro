import React from "react";
import teamOne from "../../../assets/images/home-01/about/team-bg.png";
import teamTwo from "../../../assets/images/home-01/about/team-01.png";
import teamThree from "../../../assets/images/home-01/about/team-02.png";
import teamFour from "../../../assets/images/home-01/about/team-03.png";

const TeamPage = () => {
  return (
    <section
      className="team bg-img overlay-bg pt-100 pb-50"
      //  style="background-image: url(assets/images/about/team/team-bg.png);"
      style={{
        backgroundImage: `url(${teamOne})`,
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-header">
              <h4 className="subtitle">OUR TEAM</h4>
              <h2 className="title text-white">MEET OUR EXPERTS TEAM</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center g-4">
          <div className="col-lg-4 col-md-6">
            <div className="team-item">
              <div className="thumb">
                <img src={teamTwo} alt="img" />
                <div className="share-icon">
                  <a href="javascript: void(0)" className="icon-share"></a>
                  <div className="popup-share-icons"> 
                    <ul className="popup-icons d-flex">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="content">
                <h4 className="name">
                  <a href="team-details.html">DARLENE ROBERTSON</a>
                </h4>
                <span className="designation">Ceo</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="team-item">
              <div className="thumb">
                <img src={teamThree} alt="img" />
                <div className="share-icon">
                  <a href="javascript: void(0)" className="icon-share"></a>
                  <div className="popup-share-icons">
                    <ul className="popup-icons d-flex">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="content">
                <h4 className="name">
                  <a href="team-details.html">AHMADULLAH</a>
                </h4>
                <span className="designation">Founder</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="team-item">
              <div className="thumb">
                <img src={teamFour} alt="img" />
                <div className="share-icon">
                  <a href="javascript: void(0)" className="icon-share"></a>
                  <div className="popup-share-icons">
                    <ul className="popup-icons d-flex">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="content">
                <h4 className="name">
                  <a href="team-details.html">CHARLES BRADFORD</a>
                </h4>
                <span className="designation">Admin</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamPage;
