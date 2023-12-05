import React from "react";

const BreadCumb = ({ headerName }) => {
  return (
    <section
      className="breadcumb bg-img overlay-bg py-80"
      //   style="background-image: url(assets/images/breadcumb/breadcumb.png);"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="breadcumb-content">
              <h4 className="breadcumb-title text-center text-white">
               OUR {headerName}
              </h4>
              <ul className="breadcumb-list d-flex justify-content-center align-items-center">
                <li>
                  <a href="index.html">HOME</a>
                </li>
                <li>
                  <span>/</span>
                </li>
                <li>{headerName}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadCumb;
