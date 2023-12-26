import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem, viewItem } from "../../utils/cartSlice";
// import imgone from "../../assets/images/packagesImages/1703050192954-jsdownload.png";
// const imgone = require("../../assets/images/packagesImages/1703050192954-jsdownload.png");

const imageProvider = (imageName) => {
  const imgChannel = require(`../../assets/images/packagesImages/${imageName}`);
  return imgChannel;
};

const ViewMoreSection = () => {
  const { packageId } = useParams();
  const dispatch = useDispatch();
  const [packageData, setPackageData] = useState([]);
  const [bouqueData, setBouqueData] = useState([]);
  const [packageResult, setPackageResult] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);
  console.log("packageId>>>", packageId);
  const cartItems = useSelector((state) => state.cart.items);

  // const viewCartItems = useSelector((state) => state.cart.viewItems);
  // console.log("viewCartItems>>>", viewCartItems);
  // let disableBouqueArray = [];
  const [disableBouqueArray, setDisableBouqueArray] = useState([]);
  const handleAddPackage = (pack) => {
    console.log("disabled................False........");

    dispatch(addItem(pack));
  };

  const handleBouquePrice = (price, titleName) => {
    dispatch(viewItem(price));
    // disableBouqueArray.push(index);
    setDisableBouqueArray((prev) => [...prev, titleName]);
  };

  const getPackageFunc = async () => {
    const data = await axios.get("/api/package/package-bouque");
    const dataPackage = data?.data?.filter(
      (item) => item?.packageRef?._id === packageId
    );

    setPackageData(dataPackage);
  };

  const getBouqueChannel = async () => {
    const data = await axios.get("/api/package/bouque-channel");
    console.log("Bouque data>>", data?.data);
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

    console.log("result>>", result);
    console.log(
      "API opening>>",
      result[0]?.bouqueData[0]?.channelRef?.language?.name
    );
    setPackageResult(result);
  };

  useEffect(() => {
    getPackageFunc();
    getBouqueChannel();
  }, []);

  useEffect(() => {
    getPackageResult();
  }, [packageData, bouqueData]);

  let uniqueIdCounter = 1;

  const packageResultFinal = packageResult.reduce((result, packageEntry) => {
    const existingBroadcaster = result.find(
      (b) => b.broadcasterRef._id === packageEntry.broadcasterRef._id
    );

    if (!existingBroadcaster) {
      result.push({
        _id: uniqueIdCounter++,
        broadcasterRef: packageEntry.broadcasterRef,
        bouqueData: [],
      });
    }

    const broadcasterIndex = result.findIndex(
      (b) => b.broadcasterRef._id === packageEntry.broadcasterRef._id
    );

    packageEntry.bouqueData.forEach((bouqueEntry) => {
      const existingBouque = result[broadcasterIndex].bouqueData.find(
        (b) => b.bouqueRef._id === bouqueEntry.bouqueRef._id
      );

      if (!existingBouque) {
        const channelRefs = packageEntry.bouqueData
          .filter((b) => b.bouqueRef._id === bouqueEntry.bouqueRef._id)
          .map((b) => b.channelRef);

        result[broadcasterIndex].bouqueData.push({
          _id: uniqueIdCounter++,
          ...bouqueEntry,
          channelRefs,
        });
      }
    });

    return result;
  }, []);

  console.log("packageResultFinal>>>>", packageResultFinal);

  return (
    <>
      <section className="Accordion-Div">
        <div className="container">
          {console.log("packageData>>>", packageData[0]?.packageRef)}
          {console.log("packageResult>>>", packageResult)}

          <div>
            <button
              style={{
                backgroundColor: cartItems.length > 0 ? "grey" : "#071e43",
                color: "white",
                padding: "10px 10px",
                borderRadius: "20px",
              }}
              onClick={() => handleAddPackage(packageData[0].packageRef)}
              disabled={cartItems.length > 0}
            >
              {cartItems.length > 0 ? (
                <span style={{ color: "lightgreen" }}>ADDED &#x2713;</span>
              ) : (
                " ADD PACKAGE"
              )}
            </button>
            <h2>{packageData[0]?.packageRef?.name}</h2>
          </div>
          <h3>
            {/* Price: {Number(packageData[0]?.packageRef?.packagePrice).toFixed(0)} */}
            Price:{" "}
            {Math.floor(Number(packageData[0]?.packageRef?.packagePrice))}.00
            */-per month
          </h3>
          <div className="accordion" id="accordionPanelsStayOpenExample">
            {packageResultFinal?.map((accordionItem) => (
              <div className="accordion-item" key={accordionItem._id}>
                <h2
                  className="accordion-header"
                  id={`panelsStayOpen-heading${accordionItem._id}`}
                >
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#panelsStayOpen-collapse${accordionItem._id}`}
                    aria-expanded="true"
                    aria-controls={`panelsStayOpen-collapse${accordionItem._id}`}
                  >
                    {accordionItem.broadcasterRef.name}
                  </button>
                </h2>
                <div
                  id={`panelsStayOpen-collapse${accordionItem._id}`}
                  className="accordion-collapse collapse show"
                  aria-labelledby={`panelsStayOpen-heading${accordionItem._id}`}
                >
                  <div className="accordion-body">
                    <div className="accordion-innerDiv">
                      <strong style={{ color: "#4CAF50", fontSize: "24px" }}>
                        Bouquets:
                      </strong>
                      {accordionItem.bouqueData.map((bouquet, index) => (
                        <div
                          key={index}
                          style={{
                            color: "#4CAF50", // Green color for bouquets
                            fontSize: "20px",
                            marginRight: "10px",
                            backgroundColor: "#f2f2f2", // Light gray background color
                            padding: "8px",
                            borderRadius: "100px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <span>{bouquet.bouqueRef.name}</span>
                            <span>
                              <span
                                style={{
                                  color: "black",
                                  marginRight: "20px",
                                  marginLeft: "20px",
                                }}
                              >
                                ₹{bouquet.bouqueRef.price}
                              </span>
                              <button
                                style={{
                                  backgroundColor: disableBouqueArray.includes(
                                    bouquet?.bouqueRef?.name
                                  )
                                    ? "grey"
                                    : "#071e43",
                                  color: "white",
                                  padding: "0px 10px",
                                  borderRadius: "50px",
                                }}
                                onClick={() =>
                                  handleBouquePrice(
                                    bouquet?.bouqueRef,
                                    bouquet?.bouqueRef?.name
                                  )
                                }
                                disabled={disableBouqueArray.includes(
                                  bouquet?.bouqueRef?.name
                                )}
                              >
                                {/* {disableBouqueArray.includes(
                                  bouquet?.bouqueRef?.name
                                ) ? (
                                  <span style={{ color: "lightgreen" }}>
                                    Selected &#x2713;
                                  </span>
                                ) : (
                                  "Select"
                                )} */}
                              </button>
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div style={{ marginTop: "25px" }}>
                      {accordionItem.bouqueData.map((item) => (
                        <div key={item._id}>
                          <strong
                            style={{ color: "#2196F3", fontSize: "20px" }}
                          >
                            Channels for {item.bouqueRef.name}:
                          </strong>
                          <ul
                            className="accordion-channelList"
                            style={{ listStyleType: "none", padding: 0 }}
                          >
                            {item.channelRefs.map((channel) => (
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  marginBottom: "20px",
                                  marginRight: "40px",
                                }}
                              >
                                <li
                                  key={channel._id}
                                  style={{ marginBottom: "-20px" }}
                                >
                                  <img
                                    src={imageProvider(channel.image)}
                                    // src={
                                    //   "../../assets/images/packagesImages/1703050192954-jsdownload.png"
                                    // }
                                    // alt={channel.name}
                                    style={{
                                      marginRight: "10px",
                                      // borderRadius: "50%",
                                      width: "50px",
                                      height: "50px",
                                    }}
                                  />
                                  {/* <span
                                  style={{
                                    color: "#2196F3",
                                    fontSize: "16px",
                                    fontWeight: "bold",
                                    marginTop:"20px"

                                  }}
                                >
                                  {channel.name}
                                </span> */}
                                </li>
                                <span
                                  style={{
                                    color: "#2196F3",
                                    fontSize: "16px",
                                    fontWeight: "bold",
                                    marginTop: "20px",
                                    marginLeft: "5px",
                                  }}
                                >
                                  {channel.name}
                                </span>
                              </div>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewMoreSection;

//----------------------------------------------------------------------------------------------

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";

// const ViewMoreSection = () => {
//   const accordionData = [
//     {
//       id: 1,
//       broadCaster: "Premium Hindi HD",
//       bouquet: [
//         "Hindi News Aaj Tak Pack",
//         "Family Pack",
//         "Ala-carte",
//         "Ala-carte",
//         "Ala-carte",
//       ],
//       channels: [
//         {
//           id: 1,
//           channleImage: "https://www.d2h.com/MasterChannel/colors.png",
//           label: "Colors",
//         },
//         {
//           id: 2,
//           channleImage: "https://www.d2h.com/MasterChannel/colors.png",
//           label: "Colors",
//         },
//       ],
//     },
//     {
//       id: 2,
//       broadCaster: "Hamara Punjabi Plus HD Combo",
//       bouquet: [
//         "HD Infotainmentbn Kids Pack",
//         "Family Pack",
//         "Hindi News Aaj Tak Pack",
//         "Bouquet -3",
//         "Ala-carte",
//         "Ala-carte",
//       ],
//       channels: [
//         {
//           id: 1,
//           channleImage: "https://www.d2h.com/MasterChannel/colors.png",
//           label: "Colors",
//         },
//         {
//           id: 2,
//           channleImage: "https://www.d2h.com/MasterChannel/colors.png",
//           label: "Colors",
//         },
//         {
//           id: 3,
//           channleImage: "https://www.d2h.com/MasterChannel/colors.png",
//           label: "Colors",
//         },
//       ],
//     },
//     {
//       id: 3,
//       broadCaster: "Value Lite Hindi HD",
//       bouquet: [
//         "Basic Infotainment HD Pack",
//         "Family Pack",
//         "IN10 Bouquet",
//         "Colors Wala HindiBudget Plus HD",
//         "Ala-carte",
//       ],
//       channels: [
//         {
//           id: 1,
//           channleImage: "https://www.d2h.com/MasterChannel/colors.png",
//           label: "Colors",
//         },
//         {
//           id: 2,
//           channleImage: "https://www.d2h.com/MasterChannel/colors.png",
//           label: "Colors",
//         },
//         {
//           id: 3,
//           channleImage: "https://www.d2h.com/MasterChannel/colors.png",
//           label: "Colors",
//         },
//         {
//           id: 4,
//           channleImage: "https://www.d2h.com/MasterChannel/colors.png",
//           label: "Colors",
//         },
//         {
//           id: 5,
//           channleImage: "https://www.d2h.com/MasterChannel/colors.png",
//           label: "Colors",
//         },
//         {
//           id: 6,
//           channleImage: "https://www.d2h.com/MasterChannel/colors.png",
//           label: "Colors",
//         },
//         {
//           id: 6,
//           channleImage: "https://www.d2h.com/MasterChannel/colors.png",
//           label: "Colors",
//         },
//         {
//           id: 6,
//           channleImage: "https://www.d2h.com/MasterChannel/colors.png",
//           label: "Colors",
//         },
//         {
//           id: 6,
//           channleImage: "https://www.d2h.com/MasterChannel/colors.png",
//           label: "Colors",
//         },
//         {
//           id: 6,
//           channleImage: "https://www.d2h.com/MasterChannel/colors.png",
//           label: "Colors",
//         },
//         {
//           id: 6,
//           channleImage: "https://www.d2h.com/MasterChannel/colors.png",
//           label: "Colors",
//         },
//         {
//           id: 6,
//           channleImage: "https://www.d2h.com/MasterChannel/colors.png",
//           label: "Colors",
//         },
//         {
//           id: 6,
//           channleImage: "https://www.d2h.com/MasterChannel/colors.png",
//           label: "Colors",
//         },
//         {
//           id: 6,
//           channleImage: "https://www.d2h.com/MasterChannel/colors.png",
//           label: "Colors",
//         },
//         {
//           id: 6,
//           channleImage: "https://www.d2h.com/MasterChannel/colors.png",
//           label: "Colors",
//         },
//         {
//           id: 6,
//           channleImage: "https://www.d2h.com/MasterChannel/colors.png",
//           label: "Colors",
//         },
//         {
//           id: 6,
//           channleImage: "https://www.d2h.com/MasterChannel/colors.png",
//           label: "Colors",
//         },
//         {
//           id: 6,
//           channleImage: "https://www.d2h.com/MasterChannel/colors.png",
//           label: "Colors",
//         },
//         {
//           id: 6,
//           channleImage: "https://www.d2h.com/MasterChannel/colors.png",
//           label: "Colors",
//         },
//         {
//           id: 6,
//           channleImage: "https://www.d2h.com/MasterChannel/colors.png",
//           label: "Colors",
//         },
//         {
//           id: 6,
//           channleImage: "https://www.d2h.com/MasterChannel/colors.png",
//           label: "Colors",
//         },
//         {
//           id: 6,
//           channleImage: "https://www.d2h.com/MasterChannel/colors.png",
//           label: "Colors",
//         },
//         {
//           id: 6,
//           channleImage: "https://www.d2h.com/MasterChannel/colors.png",
//           label: "Colors",
//         },
//         {
//           id: 6,
//           channleImage: "https://www.d2h.com/MasterChannel/colors.png",
//           label: "Colors",
//         },
//         {
//           id: 6,
//           channleImage: "https://www.d2h.com/MasterChannel/colors.png",
//           label: "Colors",
//         },
//         {
//           id: 6,
//           channleImage: "https://www.d2h.com/MasterChannel/colors.png",
//           label: "Colors",
//         },
//       ],
//     },
//   ];
//   const { packageId } = useParams();
//   const [packageData, setPackageData] = useState([]);
//   const [bouqueData, setBouqueData] = useState([]);
//   const [packageResult, setPackageResult] = useState([]);
//   console.log("packageId>>>", packageId);
//   // const cartItems = useSelector((state) => state.cart.items);
//   const viewCartItems = useSelector((state) => state.cart.viewItems);
//   // console.log("viewCartItems>>>", viewCartItems);

//   const getPackageFunc = async () => {
//     const data = await axios.get("/api/package/package-bouque");
//     const dataPackage = data?.data?.filter(
//       (item) => item?.packageRef?._id === packageId
//     );

//     setPackageData(dataPackage);
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
//     getPackageFunc();
//     getBouqueChannel();
//   }, []);

//   useEffect(() => {
//     getPackageResult();
//   }, [packageData, bouqueData]);

//   return (
//     <>
//       <section className="Accordion-Div">
//         <div className="container">
//           {console.log("packageData>>>", packageData)}
//           {console.log("packageResult>>>", packageResult)}
//           <h2>{packageData[0]?.packageRef?.name}</h2>
//           <h3>Price: {packageData[0]?.packageRef?.packagePrice}*/-per month</h3>
//           <div className="accordion" id="accordionPanelsStayOpenExample">
//             {accordionData.map((accordionItem) => (
//               <div className="accordion-item" key={accordionItem.id}>
//                 <h2
//                   className="accordion-header"
//                   id={`panelsStayOpen-heading${accordionItem.id}`}
//                 >
//                   <button
//                     className="accordion-button"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target={`#panelsStayOpen-collapse${accordionItem.id}`}
//                     aria-expanded="true"
//                     aria-controls={`panelsStayOpen-collapse${accordionItem.id}`}
//                   >
//                     {accordionItem.broadCaster}
//                   </button>
//                 </h2>
//                 <div
//                   id={`panelsStayOpen-collapse${accordionItem.id}`}
//                   className="accordion-collapse collapse"
//                   aria-labelledby={`panelsStayOpen-heading${accordionItem.id}`}
//                 >
//                   <div className="accordion-body">
//                     <div className="accordion-innerDiv">
//                       <strong>Bouquets:</strong>
//                       {accordionItem.bouquet.map((bouquet, index) => (
//                         <span key={index}>&nbsp; {bouquet},</span>
//                       ))}
//                     </div>
//                     <ul className="accordion-channelList">
//                       {accordionItem.channels.map((item) => (
//                         <li key={item.id}>
//                           <img src={item.channleImage} alt={item.label} />
//                           <span>{item.label}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default ViewMoreSection;
