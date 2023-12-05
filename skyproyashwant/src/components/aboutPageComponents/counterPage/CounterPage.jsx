import React from "react";
import counterOne from "../../../assets/images/home-01/about/counter-bg.png";
const CounterPage = () => {
  return (
    <section
      className="counterup bg-img pb-100 pt-50"
      //   style="background-image: url(assets/images/about/counter/counter-bg.png);"
      style={{
        backgroundImage: `url(${counterOne})`,
      }}
    >
      <div className="container">
        <div className="row justify-content-center gy-md-5 gy-4">
          <div className="col-xl-3 col-lg-3 col-sm-6">
            <div className="counterup-item d-flex align-items-center">
              <div className="icon">
                <span className="icon-wifi-2"></span>
              </div>
              <div className="content">
                <div className="number">
                  <h2 className="title">
                    <span className="odometer" data-odometer-final="252">
                      0
                    </span>
                    K
                  </h2>
                </div>
                <h6 className="text">CONNECTION PROVIDED</h6>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-sm-6">
            <div className="counterup-item d-flex align-items-center">
              <div className="icon">
                <span className="icon-user-1"></span>
              </div>
              <div className="content">
                <div className="number">
                  <h2 className="title">
                    <span className="odometer" data-odometer-final="35">
                      0
                    </span>
                    M
                  </h2>
                </div>
                <h6 className="text">CLIENT IN THE WOLRD</h6>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-sm-6">
            <div className="counterup-item d-flex align-items-center">
              <div className="icon">
                <span className="icon-satellite-dish"></span>
              </div>
              <div className="content">
                <div className="number">
                  <h2 className="title">
                    <span className="odometer" data-odometer-final="460">
                      0
                    </span>
                    K
                  </h2>
                </div>
                <h6 className="text">SATTELLITE CHANNELE</h6>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-sm-6">
            <div className="counterup-item d-flex align-items-center">
              <div className="icon">
                <span className="icon-wifi-2"></span>
              </div>
              <div className="content">
                <div className="number">
                  <h2 className="title">
                    <span className="odometer" data-odometer-final="252">
                      0
                    </span>
                    K
                  </h2>
                </div>
                <h6 className="text">CONNECTION PROVIDED</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterPage;
