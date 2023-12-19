import React from "react";
import teamOne from "../../../assets/images/home-01/about/team-bg.png";
import teamTwo from "../../../assets/images/home-01/about/team-01.png";
import teamThree from "../../../assets/images/home-01/about/team-02.png";
import teamFour from "../../../assets/images/home-01/about/team-03.png";
import { Link } from "react-router-dom";

const teamData = [
  {
    name: "DARLENE ROBERTSON",
    designation: "CEO",
    image: teamTwo,
    link: "https://www.linkedin.com/company/skyprotv/"
  },
  {
    name: "AHMADULLAH",
    designation: "Founder",
    image: teamThree,
    link: "https://www.linkedin.com/company/skyprotv/"
  },
  {
    name: "CHARLES BRADFORD",
    designation: "Admin",
    image: teamFour,
    link: "https://www.linkedin.com/company/skyprotv/"
  },
];

const TeamPage = () => {
  return (
    <section
      className="team bg-img overlay-bg pt-100 pb-50"
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
          {teamData.map((member, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="team-item">
                <div className="thumb">
                  <img src={member.image} alt="img"/>
                  <div className="share-icon">
                    {/* <a href="javascript: void(0)" className="icon-share"></a> */}
                    <Link to={member.link} className="icon-share" target="_blank"></Link>
                  </div>
                </div>
                <div className="content">
                  <h4 className="name">{member.name}</h4>
                  <span className="designation">{member.designation}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamPage;
