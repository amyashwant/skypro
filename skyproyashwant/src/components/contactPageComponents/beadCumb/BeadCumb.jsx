import React from "react";
import { Link } from "react-router-dom";
import contactImg from "../../../assets/images/breadcumb/_1530667899_390_yEZPsIaoTI3ZNDdB-croppedUundb-jpg-details.jpg";
const BeadCumb = () => {
  return (
    <section
      className="breadcumb bg-img overlay-bg py-80"
      //   style="background-image: url(assets/images/breadcumb/breadcumb.png);"
      style={{
        backgroundImage: `url(${contactImg})`,
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="breadcumb-content">
              <h4 className="breadcumb-title text-center text-white">CONTACT US</h4>
              <ul className="breadcumb-list d-flex justify-content-center align-items-center">
                <li>
                  <Link to="/">HOME</Link>
                </li>
                <li>
                  <span>/</span>
                </li>
                <li>CONTACT US</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeadCumb;
