import React, { useEffect, useState } from "react";
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
  const [packages, setPackages] = useState([]);

  const cartItems = useSelector((store) => store.cart.items);

  const handleClick = (arg) => {
    if (cartItems.length > 0) {
      dispatch(clearItem());
    }
    dispatch(addItem(arg));
    setSelectedPack(arg);
  };

  const handleViewClick = () => {
    setView(true)
  }

  const languageClick = (language) => {
    setLang(language.toLowerCase());
  };

  useEffect(() => {
    const packages = broadcaster.filter((item) => item.language === lang);
    setPackages(packages);
  }, [lang]);

  console.log("lang>>>>>", lang)
  console.log("packagessss>>>>>", packages)

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
                      // className={`nav-link ${index === 0 ? "active" : ""}`}
                      className="nav-link"
                      // data-bs-toggle="tab"
                      // to={`#ex2-tabs-${index + 1}`}
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
              <div className="pricing-New">
                <div className="container">
                  <div className="row">
                    {packages.map((pricing, index) => (
                      <div className="col-md-4 mb-4" key={index}>
                        <div className="single-price">
                          <div className="deal-top">
                            <h3>{pricing.title}</h3>
                            <h4>₹ {pricing.price} <span>/mo</span></h4>
                          </div>
                          <div className="deal-bottom">
                            <ul className="deal-item" style={{display: 'inline-block'}}>
                              {pricing.features.map((feature, featureIndex) => (
                                <li key={featureIndex}>
                                  <span>✓</span>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                            <div className="btn-area">
                              <Link to="/viewmorepackage" onClick={handleViewClick}>View More</Link> 
                              <Link className={`btn-style ${ selectedPack === pricing ? "selected" : ""}`}
                                to="#"
                                onClick={() => handleClick(pricing)}
                                disabled={selectedPack === pricing}
                              >
                                {selectedPack === pricing
                                ? "Selected"
                                : "Add Pack"}
                              </Link>
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
    </div>
  </div>
</div>

  );
};

const languages = ["Hindi", "Punjabi", "Marathi", "Oriya"];

// bouquet: price_1OKcfxSBYt5a6mPeuFEF0QBc
// bouquetTwo: price_1OKcliSBYt5a6mPe7OHM2nUO

// const broadcaster = [
//   {
//     id: "price_1OKcfxSBYt5a6mPeuFEF0QBc",
//     title: "Discovery Communications India",
//     price: 150,
//     subTitle: "View channels",
//     images: [imgThree, imgTwo, imgOne],
//     channels: 272,
//     quantity: 1,
//     priceTitle: "*Prices are excluding taxes",
//     language: "hindi",
//   },
//   {
//     id: "price_1OKcliSBYt5a6mPe7OHM2nUO",
//     title: "Celebrities Management Pvt Ltd",
//     price: 450,
//     subTitle: "View channels",
//     images: [imgThree, imgTwo, imgOne],
//     channels: 272,
//     priceTitle: "*Prices are excluding taxes",
//     language: "hindi",
//   },


const broadcaster = [
  {
    id: "1",
    title: "Basic Service Tier (BST )",
    price: 150,
    features: [
      "1+ 18 000 chaines",
      "+ 2 000 Series",
      "4K / HD / Full HD",
      "100% Stable",
    ],
    language: "hindi"
  },
  {
    id: "2",
    title: "NORTH FTA",
    price: 450,
    features: [
      "1+ 18 000 chaines",
      "+ 2 000 Series",
      "4K / HD / Full HD",
      "100% Stable",
    ],
    language: "hindi"
  },
  {
    id: "3",
    title: "SILVER BUDGET HINDI",
    price: 260,
    features: [
      "1+ 18 000 chaines",
      "+ 2 000 Series",
      "4K / HD / Full HD",
      "100% Stable",
    ],
    language: "hindi"
  },
  {
    id: "4",
    title: "SILVER BUDGET HINDI",
    price: 260,
    features: [
      "1+ 18 000 chaines",
      "+ 2 000 Series",
      "4K / HD / Full HD",
      "100% Stable",
    ],
    language: "punjabi"
  },
  {
    id: "5",
    title: "SILVER BUDGET HINDI",
    price: 260,
    features: [
      "1+ 18 000 chaines",
      "+ 2 000 Series",
      "4K / HD / Full HD",
      "100% Stable",
    ],
    language: "punjabi"
  },
  {
    id: "6",
    title: "SILVER BUDGET HINDI",
    price: 260,
    features: [
      "1+ 18 000 chaines",
      "+ 2 000 Series",
      "4K / HD / Full HD",
      "100% Stable",
    ],
    language: "marathi"
  },
  {
    id: "7",
    title: "SILVER BUDGET HINDI",
    price: 260,
    features: [
      "1+ 18 000 chaines",
      "+ 2 000 Series",
      "4K / HD / Full HD",
      "100% Stable",
    ],
    language: "marathi"
  },
  {
    id: "8",
    title: "SILVER BUDGET HINDI",
    price: 260,
    features: [
      "1+ 18 000 chaines",
      "+ 2 000 Series",
      "4K / HD / Full HD",
      "100% Stable",
    ],
    language: "oriya"
  },
  {
    id: "9",
    title: "SILVER BUDGET HINDI",
    price: 260,
    features: [
      "1+ 18 000 chaines",
      "+ 2 000 Series",
      "4K / HD / Full HD",
      "100% Stable",
    ],
    language: "oriya"
  },
  {
    id: "10",
    title: "SILVER BUDGET HINDI",
    price: 260,
    features: [
      "1+ 18 000 chaines",
      "+ 2 000 Series",
      "4K / HD / Full HD",
      "100% Stable",
    ],
    language: "oriya"
  },
  {
    id: "11",
    title: "SILVER BUDGET HINDI",
    price: 260,
    features: [
      "1+ 18 000 chaines",
      "+ 2 000 Series",
      "4K / HD / Full HD",
      "100% Stable",
    ],
    language: "hindi"
  },
  {
    id: "12",
    title: "SILVER BUDGET HINDI",
    price: 260,
    features: [
      "1+ 18 000 chaines",
      "+ 2 000 Series",
      "4K / HD / Full HD",
      "100% Stable",
    ],
    language: "hindi"
  },
];


export default PackageMainPage;

