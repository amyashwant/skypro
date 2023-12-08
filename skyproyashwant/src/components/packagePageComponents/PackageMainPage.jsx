import React, { useState } from "react";
import imgOne from "../../assets/images/packageNew/aljazeera.png";
import imgTwo from "../../assets/images/packageNew/b4u.png";
import imgThree from "../../assets/images/packageNew/dangal.png";
import { useDispatch, useSelector } from "react-redux";
import { addItem, clearItem } from "../../utils/cartSlice";
import { Link } from "react-router-dom";

const PackageMainPage = () => {
  const dispatch = useDispatch();

  const [lang, setLang] = useState(languages[0]);
  const [view, setView] = useState(false);
  const [selectedPack, setSelectedPack] = useState(null);

  const cartItems = useSelector((store) => store.cart.items);

  const handleClick = (arg) => {
    if (cartItems.length > 0) {
      dispatch(clearItem());
    }
    dispatch(addItem(arg));
    setSelectedPack(arg);
  };

  const languageClick = (language) => {
    setLang(language.toLowerCase());
  };

  const packages = broadcaster.filter((item) => item.language === lang);

  // console.log("lang>>>>>", lang)
  // console.log("packagessss>>>>>", packages)

 

  return (
    <div>
      <div className="package-section-new" style={{ marginTop: "38px" }}>
        <div className="container" style={{ background: "white" }}>
          <div className="row">
            <div className="col-sm-12">
              <div className="package-header">
                <h1> Make your own plans</h1>
              </div>
              <div className="package-tab-sec">
                <div className="container">
                  <h3>Choose your Language</h3>
                  <ul
                    className="nav nav-tabs nav-fill mb-3"
                    style={{ border: "none", paddingBottom: "0" }}
                    id="ex1"
                    role="tablist"
                  >
                    {languages.map((language, index) => (
                      <li className="nav-item" role="presentation" key={index}>
                        <Link
                          className={`nav-link ${index === 0 ? "active" : ""}`}
                          data-bs-toggle="tab"
                          to={`#ex2-tabs-${index + 1}`}
                          // role="tab"
                          // aria-controls={`ex2-tabs-${index + 1}`}
                          // aria-selected={index === 0 ? "true" : "false"}
                          onClick={() => languageClick(language)}
                        >
                          {language}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="tab-content" id="ex2-content">
                  {packages.map((item, index) => (
                    <div
                      key={index}
                      className="tab-pane fade show active"
                      // id={`ex2-tabs-${index + 1}`}
                      // role="tabpanel"
                      // aria-labelledby={`ex2-tab-${index + 1}`}
                    >
                      <div className="container">
                        <div className="row style-div2 align-items-center align-items-center">
                          <div className="col-sm-8">
                            <div className="tab-bg">
                              <div className="width-div w-50">
                                <h4>{item.title}</h4>
                                <Link
                                  onClick={() =>
                                    setView((prevIndex) =>
                                      prevIndex === index ? null : index
                                    )
                                  }
                                >
                                  {view === index
                                    ? "Hide Channels"
                                    : "View Channels"}
                                </Link>
                                {view === index && (
                                  <div className="">Hello</div>
                                )}
                              </div>
                              <div className="channelImage w-50">
                                <ul className="m-0 p-0">
                                  {item.images.map((image, imgIndex) => (
                                    <li key={imgIndex}>
                                      <img src={image} alt="" />
                                    </li>
                                  ))}
                                  <li>
                                    <span>+{item.channels}</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4 d-flix">
                            <div className="tab-price">
                              <div className="price-style">
                                <h2>
                                  ₹ {item.price}
                                  <span>/mo</span>
                                </h2>
                                <p>{item.priceTitle}</p>
                              </div>
                              <div className="selectbtn">
                                <Link
                                  className={`btn-style ${
                                    selectedPack === item ? "selected" : ""
                                  }`}
                                  to="#"
                                  onClick={() => handleClick(item)}
                                  disabled={selectedPack === item}
                                >
                                  {selectedPack === item
                                    ? "Selected"
                                    : "Add Pack"}
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const languages = ["Hindi", "Punjabi", "Marathi", "Oriya"];

// bouquet: price_1OKcfxSBYt5a6mPeuFEF0QBc
// bouquetTwo: price_1OKcliSBYt5a6mPe7OHM2nUO

const broadcaster = [
  {
    id: "price_1OKcfxSBYt5a6mPeuFEF0QBc",
    title: "HW AP SILVER BUDGET TELUGU",
    price: 150,
    subTitle: "View channels",
    images: [imgThree, imgTwo, imgOne],
    channels: 272,
    quantity: 1,
    priceTitle: "*Prices are excluding taxes",
    language: "hindi",
  },
  {
    id: "price_1OKcliSBYt5a6mPe7OHM2nUO",
    title: "NORTH FTA",
    price: 450,
    subTitle: "View channels",
    images: [imgThree, imgTwo, imgOne],
    channels: 272,
    priceTitle: "*Prices are excluding taxes",
    language: "hindi",
  },
  {
    id: "3",
    title: "SILVER BUDGET HINDI",
    price: 260,
    subTitle: "View channels",
    images: [imgThree, imgTwo, imgOne],
    channels: 272,
    priceTitle: "*Prices are excluding taxes",
    language: "hindi",
  },
  {
    id: "4",
    title: "HW NORTH ULTRA VALUE HD",
    price: 460,
    subTitle: "View channels",
    images: [imgThree, imgTwo, imgOne],
    channels: 272,
    priceTitle: "*Prices are excluding taxes",
    language: "hindi",
  },
  {
    id: "5",
    title: "NORTH FTA",
    price: 150,
    subTitle: "View channels",
    images: [imgThree, imgTwo, imgOne],
    channels: 272,
    priceTitle: "*Prices are excluding taxes",
    language: "punjabi",
  },
  {
    id: "6",
    title: "NORTH FTA",
    price: 450,
    subTitle: "View channels",
    images: [imgThree, imgTwo, imgOne],
    channels: 272,
    priceTitle: "*Prices are excluding taxes",
    language: "punjabi",
  },
  {
    id: "7",
    title: "SILVER BUDGET HINDI",
    price: 260,
    subTitle: "View channels",
    images: [imgThree, imgTwo, imgOne],
    channels: 272,
    priceTitle: "*Prices are excluding taxes",
    language: "marathi",
  },
  {
    id: "8",
    title: "HW NORTH ULTRA VALUE HD",
    price: 460,
    subTitle: "View channels",
    images: [imgThree, imgTwo, imgOne],
    channels: 272,
    priceTitle: "*Prices are excluding taxes",
    language: "marathi",
  },
  {
    id: "9",
    title: "SILVER BUDGET TELUGU",
    price: 140,
    subTitle: "View channels",
    images: [imgThree, imgTwo, imgOne],
    channels: 272,
    priceTitle: "*Prices are excluding taxes",
    language: "oriya",
  },
  {
    id: "10",
    title: "HW NORTH BUDGET",
    subTitle: "View channels",
    images: [imgThree, imgTwo, imgOne],
    channels: 272,
    price: [140],
    priceTitle: "*Prices are excluding taxes",
    language: "oriya",
  },
  {
    id: "11",
    title: "NORTH FTA",
    price: 150,
    subTitle: "View channels",
    images: [imgThree, imgTwo, imgOne],
    channels: 272,
    priceTitle: "*Prices are excluding taxes",
    language: "oriya",
  },
];

export default PackageMainPage;
