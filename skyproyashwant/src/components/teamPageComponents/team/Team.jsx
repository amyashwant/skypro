import React from "react";
import teamOne from "../../../assets/images/team/team-01.png";
import teamTwo from "../../../assets/images/team/team-02.png";
import teamThree from "../../../assets/images/team/team-03.png";
import teamFour from "../../../assets/images/team/team-04.png";
import teamFive from "../../../assets/images/team/team-05.png";
import teamSix from "../../../assets/images/team/team-06.png";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <section className="team py-100">
      <div className="container">
        <div className="row justify-content-center g-4">
          <div className="col-lg-4 col-md-6">
            <div className="team-item">
              <div className="thumb">
                <img src={teamOne} alt="" />
                <div className="share-icon">
                  <Link to="javascript: void(0)" className="icon-share"></Link>
                  <div className="popup-share-icons">
                    <ul className="popup-icons d-flex">
                      <li>
                        <Link to="#">
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-linkedin-in"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="content">
                <h4 className="name">
                  <Link to="team-details.html">DARLENE ROBERTSON</Link>
                </h4>
                <span className="designation">Ceo</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="team-item">
              <div className="thumb">
                <img src={teamTwo} alt="" />
                <div className="share-icon">
                  <Link to="javascript: void(0)" className="icon-share"></Link>
                  <div className="popup-share-icons">
                    <ul className="popup-icons d-flex">
                      <li>
                        <Link to="#">
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-linkedin-in"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="content">
                <h4 className="name">
                  <Link to="team-details.html">AHMADULLAH</Link>
                </h4>
                <span className="designation">Founder</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="team-item">
              <div className="thumb">
                <img src={teamThree} alt="" />
                <div className="share-icon">
                  <Link to="javascript: void(0)" className="icon-share"></Link>
                  <div className="popup-share-icons">
                    <ul className="popup-icons d-flex">
                      <li>
                        <Link to="#">
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-linkedin-in"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="content">
                <h4 className="name">
                  <Link to="team-details.html">CHARLES BRADFORD</Link>
                </h4>
                <span className="designation">Admin</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="team-item">
              <div className="thumb">
                <img src={teamFour} alt="" />
                <div className="share-icon">
                  <Link to="javascript: void(0)" className="icon-share"></Link>
                  <div className="popup-share-icons">
                    <ul className="popup-icons d-flex">
                      <li>
                        <Link to="#">
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-linkedin-in"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="content">
                <h4 className="name">
                  <Link to="team-details.html">Brandon Tailor</Link>
                </h4>
                <span className="designation">Member</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="team-item">
              <div className="thumb">
                <img src={teamFive} alt="" />
                <div className="share-icon">
                  <Link to="javascript: void(0)" className="icon-share"></Link>
                  <div className="popup-share-icons">
                    <ul className="popup-icons d-flex">
                      <li>
                        <Link to="#">
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-linkedin-in"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="content">
                <h4 className="name">
                  <Link to="team-details.html">Elizabeth Paulsen</Link>
                </h4>
                <span className="designation">Co-Founder</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="team-item">
              <div className="thumb">
                <img src={teamSix} alt="" />
                <div className="share-icon">
                  <Link to="javascript: void(0)" className="icon-share"></Link>
                  <div className="popup-share-icons">
                    <ul className="popup-icons d-flex">
                      <li>
                        <Link to="#">
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-linkedin-in"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="content">
                <h4 className="name">
                  <Link to="team-details.html">Thomas Deloach</Link>
                </h4>
                <span className="designation">Technician</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
