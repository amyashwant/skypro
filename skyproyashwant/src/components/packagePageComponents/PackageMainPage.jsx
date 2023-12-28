import React, { useEffect, useState } from "react";
import imgOne from "../../assets/images/packageNew/aljazeera.png";
import imgTwo from "../../assets/images/packageNew/b4u.png";
import imgThree from "../../assets/images/packageNew/dangal.png";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  clearItem,
  removeItem,
  viewClearItem,
  viewItem,
} from "../../utils/cartSlice";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const PackageMainPage = () => {
  const dispatch = useDispatch();

  const [lang, setLang] = useState(languages[0]);
  const [view, setView] = useState(false);
  const [selectedPack, setSelectedPack] = useState(null);
  const [packages, setPackages] = useState([]);
  const [packageData, setPackageData] = useState([]);
  const [languagesData, setLanguagesData] = useState([]);
  const [bouqueData, setBouqueData] = useState([]);
  const [packageResult, setPackageResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const cartItems = useSelector((store) => store.cart.items);
  const viewCartItems = useSelector((store) => store.cart.viewItems);
  // const parameterName = useParams();
  // console.log("parameterName>>>>....>>", parameterName);
  const handleClick = (arg) => {
    if (cartItems.length > 0) {
      dispatch(clearItem());
    }
    // dispatch(addItem(arg));
    selectedPack ? dispatch(removeItem()) : dispatch(addItem(arg));
    selectedPack ? setSelectedPack(null) : setSelectedPack(arg);
  };

  const handleViewClick = (arg) => {
    // setView(true);
    // if (viewCartItems.length > 0) {
    //   dispatch(viewClearItem());
    // }
    // dispatch(viewItem(arg));
  };

  const languageClick = (language) => {
    setLang(language.toLowerCase());
  };

  const getPackagesDetails = async () => {
    const data = await axios.get("/api/package/package-bouque");
    console.log("data>getPackageDetails>>", data?.data);
    setPackageData(data?.data);
  };

  const getLanguageDetails = async () => {
    const data = await axios.get("/api/package/language");
    console.log("language data>>", data?.data);
    const newData = data?.data?.map((item) => item?.name);
    console.log("newData>", newData);
    setLanguagesData(newData);
  };

  const getBouqueChannel = async () => {
    const data = await axios.get("/api/package/bouque-channel");
    console.log("Bouque data>>", data?.data);
    setBouqueData(data?.data);
  };

  // console.log("lang>>>>>", lang);
  // console.log("packagessss>>>>>", packages);

  const getPackageResult = () => {
    const result = packageData.map((packageEntry) => {
      const correspondingBouqueEntry = bouqueData.filter(
        (bouqueEntry) =>
          bouqueEntry.bouqueRef &&
          bouqueEntry.bouqueRef._id === packageEntry.bouqueRef._id
      );

      return {
        ...packageEntry,
        bouqueData: correspondingBouqueEntry,
      };
    });

    console.log("result>>", result);
    console.log(
      "API opening>>",
      result[0]?.bouqueData[0]?.channelRef?.language?.name
    );
    setPackageResult(result);
  };

  useEffect(() => {
    getPackagesDetails();
    getLanguageDetails();
    getBouqueChannel();
  }, []);

  useEffect(() => {
    getPackageResult();
  }, [packageData, bouqueData]);

  // useEffect(() => {
  //   const packages = broadcaster.filter((item) => item.language === lang);
  //   setPackages(packages);
  // }, [lang]);

  useEffect(() => {
    // This will log the updated state after it's set
    console.log(
      "API opening second>>",
      packageResult[0]?.bouqueData[0]?.channelRef?.language?.name
    );

    // const finalResult = packageResult.map((item) => item?.bouqueData);
    // const finalResultTwo = finalResult.map((item) =>
    //   item?.map((itm) => itm?.channelRef?.language?.name)
    // );
    // console.log("finalResult>>>>>", finalResultTwo);

    // Function to filter package data based on language
    const filterPackageDataByLanguage = (packageData, language) => {
      return packageData?.filter((item) => {
        // Check if any bouqueData has the specified language
        const hasLanguage = item?.bouqueData?.some((bouque) => {
          return (
            bouque.channelRef.language.name.toLowerCase() ===
            language.toLowerCase()
          );
        });

        return hasLanguage;
      });
    };

    // Filter package data based on language
    const filteredPackageData = filterPackageDataByLanguage(
      packageResult,
      lang
    );

    console.log("filteredPackageData>>>>", filteredPackageData);

    // const filteredPackageDataFinal = filteredPackageData
    //   .map((item) => item.bouqueData)
    //   .flat(1);

    // const filteredPackageDataFinal = filteredPackageData.map(
    //   (item) => item.packageRef
    // );

    const filteredPackageDataFinal = [
      ...new Map(
        filteredPackageData.map((item) => [
          item.packageRef.name,
          item.packageRef,
        ])
      ).values(),
    ];

    console.log(filteredPackageDataFinal);

    setPackages(filteredPackageDataFinal);
  }, [packageResult, lang]);

  // const result = packageData.map((packageEntry) => {
  //   const { bouqueRef } = packageEntry;

  //   // Find corresponding entries in bouqueData based on bouqueRef
  //   const correspondingBouques = bouqueData.filter(
  //     (bouqueEntry) => bouqueEntry.bouqueRef === bouqueRef
  //   );

  //   // Create a new object containing the properties from packageEntry
  //   // and an additional property for the corresponding bouques
  //   return {
  //     ...packageEntry,
  //     correspondingBouques,
  //   };
  // });

  // console.log("result>>>", result);

  //--------------------------------------------------------------------------------------

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
                    {languagesData.map((language, index) => (
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
                        {console.log("packages return..>>.....", packages)}

                        {packages?.map((pricing, index) => (
                          <div className="col-md-4 mb-4" key={index}>
                            <div className="single-price">
                              <div className="deal-top">
                                <h3>{pricing.name}</h3>
                                <h4>
                                  ₹ {Math.floor(Number(pricing.packagePrice))}
                                  .00
                                  <span>-/mo</span>
                                  {/* <span>₹ 138</span> */}
                                </h4>
                              </div>
                              <div className="deal-bottom">
                                <ul
                                  className="deal-item"
                                  style={{ display: "inline-block" }}
                                >
                                  {/* {pricing.features.map(
                                    (feature, featureIndex) => (
                                      <li key={featureIndex}>
                                        <span>✓</span>
                                        {feature}
                                      </li>
                                    )
                                  )} */}
                                </ul>
                                <div className="btn-area">
                                  <Link
                                    // to={`/packages/${pricing.name.replaceAll(" ","-")}`}
                                    // to={`/packages/${pricing._id}`}
                                    to={`packages/${pricing._id}`}
                                    // onClick={handleViewClick(pricing)}
                                    onClick={() => handleViewClick(pricing)}
                                  >
                                    View More
                                  </Link>
                                  <Link
                                    className={`btn-style ${
                                      selectedPack === pricing ? "selected" : ""
                                    }`}
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
export default PackageMainPage;
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
    language: "hindi",
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
    language: "hindi",
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
    language: "hindi",
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
    language: "punjabi",
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
    language: "punjabi",
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
    language: "marathi",
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
    language: "marathi",
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
    language: "oriya",
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
    language: "oriya",
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
    language: "oriya",
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
    language: "hindi",
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
    language: "hindi",
  },
];

// // package Data-
// [
//   {
//     _id: "6582a3977ca48ef1cea16e50",
//     bouqueData: [
//       {
//         _id: "65827e9202bb961e20c2258d",
//         bouqueRef: {
//           _id: "65827e9202bb961e20c2258b",
//           name: "ALA-CARTE-COLOR-RISHTEY",
//           price: "0.1",
//           broadcasterRef: "65827e0902bb961e20c22575",
//           createdAt: "2023-12-20T05:41:38.346Z",
//           modifiedAt: "2023-12-20T05:41:38.346Z",
//           __v: 0,
//         },
//         channelRef: {
//           _id: "65827c3102bb961e20c224ca",
//           name: "colors rishtey",
//           type: "65827b5a02bb961e20c22460",
//           language: {
//             _id: "65827a2102bb961e20c21ce8",
//             name: "HINDI",
//             createdAt: "2023-12-20T05:22:41.309Z",
//             modifiedAt: "2023-12-20T05:22:41.309Z",
//             __v: 0,
//           },
//           category: "65827b2102bb961e20c222f7",
//           image:
//             "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg ",
//           createdAt: "2023-12-20T05:31:29.595Z",
//           modifiedAt: "2023-12-20T05:31:29.595Z",
//           __v: 0,
//         },
//         createdAt: "2023-12-20T05:41:38.562Z",
//         modifiedAt: "2023-12-20T05:41:38.562Z",
//         __v: 0,
//       },
//     ],
//     packageRef: {
//       _id: "6582a3967ca48ef1cea16e4c",
//       name: "Hindi Bronze SD Suggestive Bouquet",
//       packagePrice: "2.3200000000000003",
//       createdAt: "2023-12-20T08:19:34.799Z",
//       modifiedAt: "2023-12-20T08:19:34.799Z",
//       __v: 0,
//     },
//     broadcasterRef: {
//       _id: "65827e0902bb961e20c22575",
//       name: "TV18 Broadcast Limited",
//       image: "1703050761476-IMG_20221005_170359-01 (1).jpeg",
//       createdAt: "2023-12-20T05:39:21.526Z",
//       modifiedAt: "2023-12-20T05:39:21.526Z",
//       __v: 0,
//     },
//     bouqueRef: {
//       _id: "65827e9202bb961e20c2258b",
//       name: "ALA-CARTE-COLOR-RISHTEY",
//       price: "0.1",
//       broadcasterRef: "65827e0902bb961e20c22575",
//       createdAt: "2023-12-20T05:41:38.346Z",
//       modifiedAt: "2023-12-20T05:41:38.346Z",
//       __v: 0,
//     },
//     createdAt: "2023-12-20T08:19:35.060Z",
//     modifiedAt: "2023-12-20T08:19:35.060Z",
//     __v: 0,
//   },
//   {
//     _id: "6582a3977ca48ef1cea16e4f",
//     bouqueData: [
//       {
//         _id: "65827e7702bb961e20c22588",
//         bouqueRef: {
//           _id: "65827e7702bb961e20c22586",
//           name: "ALA-CARTE-NEWS18-PUNJABI",
//           price: "0.1",
//           broadcasterRef: "65827e0902bb961e20c22575",
//           createdAt: "2023-12-20T05:41:11.236Z",
//           modifiedAt: "2023-12-20T05:41:11.236Z",
//           __v: 0,
//         },
//         channelRef: {
//           _id: "65827bd002bb961e20c224bb",
//           name: "news18 punjab haryana",
//           type: "65827b5a02bb961e20c22460",
//           language: {
//             _id: "65827a7d02bb961e20c21f00",
//             name: "PUNJABI",
//             createdAt: "2023-12-20T05:24:13.161Z",
//             modifiedAt: "2023-12-20T05:24:13.161Z",
//             __v: 0,
//           },
//           category: "65827acf02bb961e20c220f5",
//           image: "1703050192954-jsdownload.png",
//           createdAt: "2023-12-20T05:29:52.999Z",
//           modifiedAt: "2023-12-20T05:29:52.999Z",
//           __v: 0,
//         },
//         createdAt: "2023-12-20T05:41:11.450Z",
//         modifiedAt: "2023-12-20T05:41:11.450Z",
//         __v: 0,
//       },
//     ],
//     packageRef: {
//       _id: "6582a3967ca48ef1cea16e4c",
//       name: "Hindi Bronze SD Suggestive Bouquet",
//       packagePrice: "2.3200000000000003",
//       createdAt: "2023-12-20T08:19:34.799Z",
//       modifiedAt: "2023-12-20T08:19:34.799Z",
//       __v: 0,
//     },
//     broadcasterRef: {
//       _id: "65827e0902bb961e20c22575",
//       name: "TV18 Broadcast Limited",
//       image: "1703050761476-IMG_20221005_170359-01 (1).jpeg",
//       createdAt: "2023-12-20T05:39:21.526Z",
//       modifiedAt: "2023-12-20T05:39:21.526Z",
//       __v: 0,
//     },
//     bouqueRef: {
//       _id: "65827e7702bb961e20c22586",
//       name: "ALA-CARTE-NEWS18-PUNJABI",
//       price: "0.1",
//       broadcasterRef: "65827e0902bb961e20c22575",
//       createdAt: "2023-12-20T05:41:11.236Z",
//       modifiedAt: "2023-12-20T05:41:11.236Z",
//       __v: 0,
//     },
//     createdAt: "2023-12-20T08:19:35.060Z",
//     modifiedAt: "2023-12-20T08:19:35.060Z",
//     __v: 0,
//   },
// ];
