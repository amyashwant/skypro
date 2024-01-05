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

// ... (your existing imports)

const PackageMainPage = () => {
  const dispatch = useDispatch();

  const [lang, setLang] = useState(null); // Initialize lang state as null
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

  const handleClick = (arg) => {
    if (cartItems.length > 0) {
      dispatch(clearItem());
    }
    selectedPack ? dispatch(removeItem()) : dispatch(addItem(arg));
    selectedPack ? setSelectedPack(null) : setSelectedPack(arg);
  };

  const handleViewClick = (arg) => {};

  const languageClick = (language) => {
    setLang(language.toLowerCase() === lang ? null : language.toLowerCase());
  };

  const getPackagesDetails = async () => {
    const data = await axios.get("/api/package/package-bouque");
    setPackageData(data?.data);
  };

  const getLanguageDetails = async () => {
    const data = await axios.get("/api/package/language");
    const newData = data?.data?.map((item) => item?.name);
    setLanguagesData(newData);
  };

  const getBouqueChannel = async () => {
    const data = await axios.get("/api/package/bouque-channel");
    setBouqueData(data?.data);
  };

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

  useEffect(() => {
    const filterPackageDataByLanguage = (packageData, language) => {
      return packageData?.filter((item) => {
        const hasLanguage = item?.bouqueData?.some((bouque) => {
          return (
            bouque?.channelRef?.language?.name?.toLowerCase() ===
            language?.toLowerCase()
          );
        });

        return hasLanguage;
      });
    };

    const filteredPackageData = filterPackageDataByLanguage(
      packageResult,
      lang
    );

    const filteredPackageDataFinal = [
      ...new Map(
        filteredPackageData.map((item) => [
          item?.packageRef?.name,
          item?.packageRef,
        ])
      ).values(),
    ];

    setPackages(filteredPackageDataFinal);
  }, [packageResult, lang]);

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
                          className={`nav-link ${
                            lang === language.toLowerCase() ? "active" : ""
                          }`}
                          onClick={() => languageClick(language)}
                        >
                          {language}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                {lang && ( // Display packages only if a language is selected
                  <div className="tab-content" id="ex2-content">
                    <div className="pricing-New">
                      <div className="container">
                        <div className="row">
                          {packages?.map((pricing, index) => (
                            <div className="col-md-4 mb-4" key={index}>
                              <div className="single-price">
                                <div className="deal-top">
                                  <h3>{pricing?.name}</h3>
                                  <h4>
                                    ₹{" "}
                                    {Math.floor(Number(pricing?.packagePrice))}
                                    .00
                                    <span>-/month</span>
                                  </h4>
                                </div>
                                <div className="deal-bottom">
                                  <div className="btn-area">
                                    <Link
                                      to={`/packages/${pricing?._id}`}
                                      onClick={() => handleViewClick(pricing)}
                                    >
                                      View More
                                    </Link>
                                    <Link
                                      className={`btn-style ${
                                        selectedPack === pricing
                                          ? "selected"
                                          : ""
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
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageMainPage;

// const PackageMainPage = () => {
//   const dispatch = useDispatch();

//   const [lang, setLang] = useState(languages[0]);
//   const [view, setView] = useState(false);
//   const [selectedPack, setSelectedPack] = useState(null);
//   const [packages, setPackages] = useState([]);
//   const [packageData, setPackageData] = useState([]);
//   const [languagesData, setLanguagesData] = useState([]);
//   const [bouqueData, setBouqueData] = useState([]);
//   const [packageResult, setPackageResult] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();
//   const cartItems = useSelector((store) => store.cart.items);
//   const viewCartItems = useSelector((store) => store.cart.viewItems);

//   const handleClick = (arg) => {
//     if (cartItems.length > 0) {
//       dispatch(clearItem());
//     }
//     // dispatch(addItem(arg));
//     selectedPack ? dispatch(removeItem()) : dispatch(addItem(arg));
//     selectedPack ? setSelectedPack(null) : setSelectedPack(arg);
//   };

//   const handleViewClick = (arg) => {};

//   const languageClick = (language) => {
//     setLang(language.toLowerCase());
//   };

//   const getPackagesDetails = async () => {
//     const data = await axios.get("/api/package/package-bouque");
//     console.log("data>getPackageDetails>>", data?.data);
//     setPackageData(data?.data);
//   };

//   const getLanguageDetails = async () => {
//     const data = await axios.get("/api/package/language");
//     console.log("language data>>", data?.data);
//     const newData = data?.data?.map((item) => item?.name);
//     console.log("newData>", newData);
//     setLanguagesData(newData);
//   };

//   const getBouqueChannel = async () => {
//     const data = await axios.get("/api/package/bouque-channel");
//     console.log("Bouque data>>", data?.data);
//     setBouqueData(data?.data);
//   };

//   const getPackageResult = () => {
//     const result = packageData.map((packageEntry) => {
//       const correspondingBouqueEntry = bouqueData.filter(
//         (bouqueEntry) =>
//           bouqueEntry.bouqueRef &&
//           bouqueEntry.bouqueRef._id === packageEntry.bouqueRef._id
//       );

//       return {
//         ...packageEntry,
//         bouqueData: correspondingBouqueEntry,
//       };
//     });

//     console.log("result>>", result);
//     console.log(
//       "API opening>>",
//       result[0]?.bouqueData[0]?.channelRef?.language?.name
//     );
//     setPackageResult(result);
//   };

//   useEffect(() => {
//     getPackagesDetails();
//     getLanguageDetails();
//     getBouqueChannel();
//   }, []);

//   useEffect(() => {
//     getPackageResult();
//   }, [packageData, bouqueData]);

//   useEffect(() => {
//     console.log(
//       "API opening second>>",
//       packageResult[0]?.bouqueData[0]?.channelRef?.language?.name
//     );

//     const filterPackageDataByLanguage = (packageData, language) => {
//       return packageData?.filter((item) => {
//         // Check if any bouqueData has the specified language
//         const hasLanguage = item?.bouqueData?.some((bouque) => {
//           return (
//             bouque?.channelRef?.language?.name?.toLowerCase() ===
//             language?.toLowerCase()
//           );
//         });

//         return hasLanguage;
//       });
//     };

//     // Filter package data based on language
//     const filteredPackageData = filterPackageDataByLanguage(
//       packageResult,
//       lang
//     );

//     console.log("filteredPackageData>>>>", filteredPackageData);

//     const filteredPackageDataFinal = [
//       ...new Map(
//         filteredPackageData.map((item) => [
//           item?.packageRef?.name,
//           item?.packageRef,
//         ])
//       ).values(),
//     ];

//     console.log(filteredPackageDataFinal);

//     setPackages(filteredPackageDataFinal);
//   }, [packageResult, lang]);

//   //---------------------------------------------------------------------------------------

//   return (
//     <div>
//       <div className="package-section-new" style={{ marginTop: "38px" }}>
//         <div className="container" style={{ background: "white" }}>
//           <div className="row">
//             <div className="col-sm-12">
//               <div className="package-header">
//                 <h1> Make your own plans</h1>
//               </div>
//               <div className="package-tab-sec">
//                 <div className="container">
//                   <h3>Choose your Language</h3>
//                   <ul
//                     className="nav nav-tabs nav-fill mb-3"
//                     style={{ border: "none", paddingBottom: "0" }}
//                     id="ex1"
//                     role="tablist"
//                   >
//                     {languagesData.map((language, index) => (
//                       <li className="nav-item" role="presentation" key={index}>
//                         <Link
//                           className={`nav-link ${index === 0 ? "active" : ""}`}
//                           // className="nav-link"
//                           // data-bs-toggle="tab"
//                           // to={`#ex2-tabs-${index + 1}`}
//                           // role="tab"
//                           // aria-controls={`ex2-tabs-${index + 1}`}
//                           // aria-selected={index === 0 ? "true" : "false"}
//                           onClick={() => languageClick(language)}
//                         >
//                           {language}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <div className="tab-content" id="ex2-content">
//                   <div className="pricing-New">
//                     <div className="container">
//                       <div className="row">
//                         {console.log("packages return..>>.....", packages)}

//                         {packages?.map((pricing, index) => (
//                           <div className="col-md-4 mb-4" key={index}>
//                             <div className="single-price">
//                               <div className="deal-top">
//                                 <h3>{pricing?.name}</h3>
//                                 <h4>
//                                   ₹ {Math.floor(Number(pricing?.packagePrice))}
//                                   .00
//                                   <span>-/mo</span>
//                                   {/* <span>₹ 138</span> */}
//                                 </h4>
//                               </div>
//                               <div className="deal-bottom">
//                                 <ul
//                                   className="deal-item"
//                                   style={{ display: "inline-block" }}
//                                 ></ul>
//                                 <div className="btn-area">
//                                   <Link
//                                     to={`/packages/${pricing?._id}`}
//                                     // onClick={handleViewClick(pricing)}
//                                     onClick={() => handleViewClick(pricing)}
//                                   >
//                                     View More
//                                   </Link>
//                                   <Link
//                                     className={`btn-style ${
//                                       selectedPack === pricing ? "selected" : ""
//                                     }`}
//                                     to="#"
//                                     onClick={() => handleClick(pricing)}
//                                     disabled={selectedPack === pricing}
//                                   >
//                                     {selectedPack === pricing
//                                       ? "Selected"
//                                       : "Add Pack"}
//                                   </Link>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default PackageMainPage;
// const languages = ["Hindi", "Punjabi", "Marathi", "Oriya"];
