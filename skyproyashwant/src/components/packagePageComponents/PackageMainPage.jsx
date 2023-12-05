import React from "react";
import imgOne from "../../assets/images/packageNew/aljazeera.png";
import imgTwo from "../../assets/images/packageNew/b4u.png";
import imgThree from "../../assets/images/packageNew/dangal.png";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../utils/cartSlice";
const PackageMainPage = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((store) => store.cart.items);

  const handleClick = (arg) => {
    dispatch(addItem(arg));
  };

  console.log("cartItems", cartItems);

  return (
    <div>
      <div className="package-section-new" style={{ marginTop: "100px" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="package-header">
                <h1> Make your own plans</h1>
              </div>
              <div className="package-tab-sec">
                <div className="container">
                  <h3>Choose your State</h3>
                  <ul
                    className="nav nav-tabs nav-fill mb-3"
                    id="ex1"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link active"
                        id="ex2-tab-1"
                        data-bs-toggle="tab"
                        href="#ex2-tabs-1"
                        role="tab"
                        aria-controls="ex2-tabs-1"
                        aria-selected="true"
                      >
                        ANDHRA PRADESH
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link"
                        id="ex2-tab-2"
                        data-bs-toggle="tab"
                        href="#ex2-tabs-2"
                        role="tab"
                        aria-controls="ex2-tabs-2"
                        aria-selected="false"
                      >
                        RAJASTHAN
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link"
                        id="ex2-tab-3"
                        data-bs-toggle="tab"
                        href="#ex2-tabs-3"
                        role="tab"
                        aria-controls="ex2-tabs-3"
                        aria-selected="false"
                      >
                        HARYANA
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link"
                        id="ex2-tab-4"
                        data-bs-toggle="tab"
                        href="#ex3-tabs-4"
                        role="tab"
                        aria-controls="ex3-tabs-4"
                        aria-selected="false"
                      >
                        KARNATAKA
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link"
                        id="ex4-tab-5"
                        data-bs-toggle="tab"
                        href="#ex4-tabs-5"
                        role="tab"
                        aria-controls="ex4-tabs-5"
                        aria-selected="false"
                      >
                        MAHARASHTRA
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link"
                        id="ex5-tab-6"
                        data-bs-toggle="tab"
                        href="#ex5-tabs-6"
                        role="tab"
                        aria-controls="ex5-tabs-6"
                        aria-selected="false"
                      >
                        MADHYA PRADESH
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link"
                        id="ex6-tab-7"
                        data-bs-toggle="tab"
                        href="#ex6-tabs-7"
                        role="tab"
                        aria-controls="ex6-tabs-7"
                        aria-selected="false"
                      >
                        PUNJABI
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link"
                        id="ex6-tab-8"
                        data-bs-toggle="tab"
                        href="#ex7-tabs-8"
                        role="tab"
                        aria-controls="ex7-tabs-8"
                        aria-selected="false"
                      >
                        DELHI
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="tab-content" id="ex2-content">
                  <div
                    className="tab-pane fade show active"
                    id="ex2-tabs-1"
                    role="tabpanel"
                    aria-labelledby="ex2-tab-1"
                  >
                    <div className="tab-content" id="stateTabsContent">
                      <div
                        className="tab-pane fade show active"
                        id="content-AP"
                        role="tabpanel"
                        aria-labelledby="tab-AP"
                      >
                        <div className="container">
                          <div className="row style-div2">
                            <div className="col-sm-8">
                              <div className="tab-bg">
                                <div className="width-div w-50">
                                  <h4>HW AP SILVER BUDGET TELUGU</h4>
                                  <a href="#">View channels</a>
                                </div>
                                <div className="channelImage w-50">
                                  <ul className="m-0 p-0">
                                    <li>
                                      <img src={imgThree} alt="" />
                                    </li>
                                    <li>
                                      <img src={imgTwo} alt="" />
                                    </li>
                                    <li>
                                      <img src={imgOne} alt="" />
                                    </li>
                                    <li>
                                      <span>+272</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-4 d-flix">
                              <div className="tab-price">
                                <div className="price-style">
                                  <h2>
                                    HW ₹ 150.00<span>/mo</span>
                                  </h2>
                                  <p>*Prices are excluding taxes</p>
                                </div>
                                <div className="selectbtn">
                                  <a className="btn-style" href="#">
                                    <span onClick={() => handleClick("add")}>
                                      Add Pack
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row style-div2">
                            <div className="col-sm-8">
                              <div className="tab-bg">
                                <div className="width-div w-50">
                                  <h4>NORTH FTA</h4>
                                  <a href="#">View channels</a>
                                </div>
                                <div className="channelImage w-50">
                                  <ul className="m-0 p-0">
                                    <li>
                                      <img src={imgThree} alt="" />
                                    </li>
                                    <li>
                                      <img src={imgOne} alt="" />
                                    </li>
                                    <li>
                                      <img src={imgTwo} alt="" />
                                    </li>
                                    <li>
                                      <span>+72</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-4 d-flix">
                              <div className="tab-price">
                                <div className="price-style">
                                  <h2>
                                    ₹ 450.00<span>/mo</span>
                                  </h2>
                                  <p>*Prices are excluding taxes</p>
                                </div>
                                <div className="selectbtn">
                                  <a className="btn-style" href="#">
                                    <span onClick={() => handleClick("add")}>
                                      Add Pack
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row style-div2">
                            <div className="col-sm-8">
                              <div className="tab-bg">
                                <div className="width-div w-50">
                                  <h4>SILVER BUDGET HINDI</h4>
                                  <a href="#">View channels</a>
                                </div>
                                <div className="channelImage w-50">
                                  <ul className="m-0 p-0">
                                    <li>
                                      <img src={imgThree} alt="" />
                                    </li>
                                    <li>
                                      <img src={imgTwo} alt="" />
                                    </li>
                                    <li>
                                      <img src={imgThree} alt="" />
                                    </li>
                                    <li>
                                      <span>+372</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-4 d-flix">
                              <div className="tab-price">
                                <div className="price-style">
                                  <h2>
                                    ₹ 260.00<span>/mo</span>
                                  </h2>
                                  <p>*Prices are excluding taxes</p>
                                </div>
                                <div className="selectbtn">
                                  <a className="btn-style" href="#">
                                    <span onClick={() => handleClick("add")}>
                                      Add Pack
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row style-div2">
                            <div className="col-sm-8">
                              <div className="tab-bg">
                                <div className="width-div w-50">
                                  <h4>HW NORTH ULTRA VALUE HD</h4>
                                  <a href="#">View channels</a>
                                </div>
                                <div className="channelImage w-50">
                                  <ul className="m-0 p-0">
                                    <li>
                                      <img src={imgOne} alt="" />
                                    </li>
                                    <li>
                                      <img src={imgTwo} alt="" />
                                    </li>
                                    <li>
                                      <img src={imgThree} alt="" />
                                    </li>
                                    <li>
                                      <span>+372</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-4 d-flix">
                              <div className="tab-price">
                                <div className="price-style">
                                  <h2>
                                    ₹ 460.00<span>/mo</span>
                                  </h2>
                                  <p>*Prices are excluding taxes</p>
                                </div>
                                <div className="selectbtn">
                                  <a className="btn-style" href="#">
                                    <span onClick={() => handleClick("add")}>
                                      Add Pack
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="ex2-tabs-2"
                    role="tabpanel"
                    aria-labelledby="ex2-tab-2"
                  >
                    <div className="container">
                      <div className="row style-div2">
                        <div className="col-sm-8">
                          <div className="tab-bg">
                            <div className="width-div w-50">
                              <h4>SILVER BUDGET TELUGU</h4>
                              <a href="#">View channels</a>
                            </div>
                            <div className="channelImage w-50">
                              <ul className="m-0 p-0">
                                <li>
                                  <img src={imgOne} alt="" />
                                </li>
                                <li>
                                  <img src={imgTwo} alt="" />
                                </li>
                                <li>
                                  <img src={imgThree} alt="" />
                                </li>
                                <li>
                                  <span>+272</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4 d-flix">
                          <div className="tab-price">
                            <div className="price-style">
                              <h2>
                                ₹ 140.00<span>/mo</span>
                              </h2>
                              <p>*Prices are excluding taxes</p>
                            </div>
                            <div className="selectbtn">
                              <a className="btn-style" href="#">
                                <span onClick={() => handleClick("add")}>
                                  Add Pack
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="ex2-tabs-3"
                    role="tabpanel"
                    aria-labelledby="ex2-tab-3"
                  >
                    <div className="container">
                      <div className="row style-div2">
                        <div className="col-sm-8">
                          <div className="tab-bg">
                            <div className="width-div w-50">
                              <h4>HW NORTH BUDGET</h4>
                              <a href="#">View channels</a>
                            </div>
                            <div className="channelImage w-50">
                              <ul className="m-0 p-0">
                                <li>
                                  <img src={imgOne} alt="" />
                                </li>
                                <li>
                                  <img src={imgTwo} alt="" />
                                </li>
                                <li>
                                  <img src={imgThree} alt="" />
                                </li>
                                <li>
                                  <span>+72</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4 d-flix">
                          <div className="tab-price">
                            <div className="price-style">
                              <h2>
                                ₹ 150.00<span>/mo</span>
                              </h2>
                              <p>*Prices are excluding taxes</p>
                            </div>
                            <div className="selectbtn">
                              <a className="btn-style" href="#">
                                <span onClick={() => handleClick("add")}>
                                  Add Pack
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="ex3-tabs-4"
                    role="tabpanel"
                    aria-labelledby="ex3-tab-4"
                  >
                    <div className="container">
                      <div className="row style-div2">
                        <div className="col-sm-8">
                          <div className="tab-bg">
                            <div className="width-div w-50">
                              <h4>NORTH FTA</h4> <a href="#">View channels</a>
                            </div>
                            <div className="channelImage w-50">
                              <ul className="m-0 p-0">
                                <li>
                                  <img src={imgOne} alt="" />
                                </li>
                                <li>
                                  <img src={imgTwo} alt="" />
                                </li>
                                <li>
                                  <img src={imgThree} alt="" />
                                </li>
                                <li>
                                  <span>+72</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4 d-flix">
                          <div className="tab-price">
                            <div className="price-style">
                              <h2>
                                ₹ 150.00<span>/mo</span>
                              </h2>
                              <p>*Prices are excluding taxes</p>
                            </div>
                            <div className="selectbtn">
                              <a className="btn-style" href="#">
                                <span onClick={() => handleClick("add")}>
                                  Add Pack
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="ex4-tabs-5"
                    role="tabpanel"
                    aria-labelledby="ex4-tab-5"
                  >
                    <div className="container">
                      <div className="row style-div2">
                        <div className="col-sm-8">
                          <div className="tab-bg">
                            <div className="width-div w-50">
                              <h4>SILVER BUDGET</h4>
                              <a href="#">View channels</a>
                            </div>
                            <div className="channelImage w-50">
                              <ul className="m-0 p-0">
                                <li>
                                  <img src={imgOne} alt="" />
                                </li>
                                <li>
                                  <img src={imgTwo} alt="" />
                                </li>
                                <li>
                                  <img src={imgThree} alt="" />
                                </li>
                                <li>
                                  <span>+272</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4 d-flix">
                          <div className="tab-price">
                            <div className="price-style">
                              <h2>
                                ₹ 170.00<span>/mo</span>
                              </h2>
                              <p>*Prices are excluding taxes</p>
                            </div>
                            <div className="selectbtn">
                              <a className="btn-style" href="#">
                                <span onClick={() => handleClick("add")}>
                                  Add Pack
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="ex5-tabs-6"
                    role="tabpanel"
                    aria-labelledby="ex5-tab-6"
                  >
                    <div className="container">
                      <div className="row style-div2">
                        <div className="col-sm-8">
                          <div className="tab-bg">
                            <div className="width-div w-50">
                              <h4>SILVER BUDGET HINDI</h4>
                              <a href="#">View channels</a>
                            </div>
                            <div className="channelImage w-50">
                              <ul className="m-0 p-0">
                                <li>
                                  <img src={imgOne} alt="" />
                                </li>
                                <li>
                                  <img src={imgTwo} alt="" />
                                </li>
                                <li>
                                  <img src={imgThree} alt="" />
                                </li>
                                <li>
                                  <span>+372</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4 d-flix">
                          <div className="tab-price">
                            <div className="price-style">
                              <h2>
                                ₹ 160.00<span>/mo</span>
                              </h2>
                              <p>*Prices are excluding taxes</p>
                            </div>
                            <div className="selectbtn">
                              <a className="btn-style" href="#">
                                <span onClick={() => handleClick("add")}>
                                  Add Pack
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="ex6-tabs-7"
                    role="tabpanel"
                    aria-labelledby="ex6-tab-7"
                  >
                    <div className="container">
                      <div className="row style-div2">
                        <div className="col-sm-8">
                          <div className="tab-bg">
                            <div className="width-div w-50">
                              <h4> BUDGET PUNJABI</h4>
                              <a href="#">View channels</a>
                            </div>
                            <div className="channelImage w-50">
                              <ul className="m-0 p-0">
                                <li>
                                  <img src={imgOne} alt="" />
                                </li>
                                <li>
                                  <img src={imgTwo} alt="" />
                                </li>
                                <li>
                                  <img src={imgThree} alt="" />
                                </li>
                                <li>
                                  <span>+272</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4 d-flix">
                          <div className="tab-price">
                            <div className="price-style">
                              <h2>
                                ₹ 140.00<span>/mo</span>
                              </h2>
                              <p>*Prices are excluding taxes</p>
                            </div>
                            <div className="selectbtn">
                              <a className="btn-style" href="#">
                                <span onClick={() => handleClick("add")}>
                                  Add Pack
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="ex7-tabs-8"
                    role="tabpanel"
                    aria-labelledby="ex7-tab-8"
                  >
                    <div className="container">
                      <div className="row style-div2">
                        <div className="col-sm-8">
                          <div className="tab-bg">
                            <div className="width-div w-50">
                              <h4>HW TL SUPER HD</h4>
                              <a href="#">View channels</a>
                            </div>
                            <div className="channelImage w-50">
                              <ul className="m-0 p-0">
                                <li>
                                  <img src={imgOne} alt="" />
                                </li>
                                <li>
                                  <img src={imgTwo} alt="" />
                                </li>
                                <li>
                                  <img src={imgThree} alt="" />
                                </li>
                                <li>
                                  <span>+272</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4 d-flix">
                          <div className="tab-price">
                            <div className="price-style">
                              <h2>
                                ₹ 180.00<span>/mo</span>
                              </h2>
                              <p>*Prices are excluding taxes</p>
                            </div>
                            <div className="selectbtn">
                              <a className="btn-style" href="#">
                                <span onClick={() => handleClick("add")}>
                                  Add Pack
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageMainPage;
