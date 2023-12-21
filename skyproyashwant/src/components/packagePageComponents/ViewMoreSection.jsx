import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ViewMoreSection = () => {
  const accordionData = [
    {
      id: 1,
      broadCaster: "Premium Hindi HD",
      bouquet: [
        "Hindi News Aaj Tak Pack",
        "Family Pack",
        "Ala-carte",
        "Ala-carte",
        "Ala-carte",
      ],
      channels: [
        {
          id: 1,
          channleImage: "https://www.d2h.com/MasterChannel/colors.png",
          label: "Colors",
        },
        {
          id: 2,
          channleImage: "https://www.d2h.com/MasterChannel/colors.png",
          label: "Colors",
        },
      ],
    },
    {
      id: 2,
      broadCaster: "Hamara Punjabi Plus HD Combo",
      bouquet: [
        "HD Infotainmentbn Kids Pack",
        "Family Pack",
        "Hindi News Aaj Tak Pack",
        "Bouquet -3",
        "Ala-carte",
        "Ala-carte",
      ],
      channels: [
        {
          id: 1,
          channleImage: "https://www.d2h.com/MasterChannel/colors.png",
          label: "Colors",
        },
        {
          id: 2,
          channleImage: "https://www.d2h.com/MasterChannel/colors.png",
          label: "Colors",
        },
        {
          id: 3,
          channleImage: "https://www.d2h.com/MasterChannel/colors.png",
          label: "Colors",
        },
      ],
    },
    {
      id: 3,
      broadCaster: "Value Lite Hindi HD",
      bouquet: [
        "Basic Infotainment HD Pack",
        "Family Pack",
        "IN10 Bouquet",
        "Colors Wala HindiBudget Plus HD",
        "Ala-carte",
      ],
      channels: [
        {
          id: 1,
          channleImage: "https://www.d2h.com/MasterChannel/colors.png",
          label: "Colors",
        },
        {
          id: 2,
          channleImage: "https://www.d2h.com/MasterChannel/colors.png",
          label: "Colors",
        },
        {
          id: 3,
          channleImage: "https://www.d2h.com/MasterChannel/colors.png",
          label: "Colors",
        },
        {
          id: 4,
          channleImage: "https://www.d2h.com/MasterChannel/colors.png",
          label: "Colors",
        },
        {
          id: 5,
          channleImage: "https://www.d2h.com/MasterChannel/colors.png",
          label: "Colors",
        },
        {
          id: 6,
          channleImage: "https://www.d2h.com/MasterChannel/colors.png",
          label: "Colors",
        },
        {
          id: 6,
          channleImage: "https://www.d2h.com/MasterChannel/colors.png",
          label: "Colors",
        },
        {
          id: 6,
          channleImage: "https://www.d2h.com/MasterChannel/colors.png",
          label: "Colors",
        },
        {
          id: 6,
          channleImage: "https://www.d2h.com/MasterChannel/colors.png",
          label: "Colors",
        },
        {
          id: 6,
          channleImage: "https://www.d2h.com/MasterChannel/colors.png",
          label: "Colors",
        },
        {
          id: 6,
          channleImage: "https://www.d2h.com/MasterChannel/colors.png",
          label: "Colors",
        },
        {
          id: 6,
          channleImage: "https://www.d2h.com/MasterChannel/colors.png",
          label: "Colors",
        },
        {
          id: 6,
          channleImage: "https://www.d2h.com/MasterChannel/colors.png",
          label: "Colors",
        },
        {
          id: 6,
          channleImage: "https://www.d2h.com/MasterChannel/colors.png",
          label: "Colors",
        },
        {
          id: 6,
          channleImage: "https://www.d2h.com/MasterChannel/colors.png",
          label: "Colors",
        },
        {
          id: 6,
          channleImage: "https://www.d2h.com/MasterChannel/colors.png",
          label: "Colors",
        },
        {
          id: 6,
          channleImage: "https://www.d2h.com/MasterChannel/colors.png",
          label: "Colors",
        },
        {
          id: 6,
          channleImage: "https://www.d2h.com/MasterChannel/colors.png",
          label: "Colors",
        },
        {
          id: 6,
          channleImage: "https://www.d2h.com/MasterChannel/colors.png",
          label: "Colors",
        },
        {
          id: 6,
          channleImage: "https://www.d2h.com/MasterChannel/colors.png",
          label: "Colors",
        },
        {
          id: 6,
          channleImage: "https://www.d2h.com/MasterChannel/colors.png",
          label: "Colors",
        },
        {
          id: 6,
          channleImage: "https://www.d2h.com/MasterChannel/colors.png",
          label: "Colors",
        },
        {
          id: 6,
          channleImage: "https://www.d2h.com/MasterChannel/colors.png",
          label: "Colors",
        },
        {
          id: 6,
          channleImage: "https://www.d2h.com/MasterChannel/colors.png",
          label: "Colors",
        },
        {
          id: 6,
          channleImage: "https://www.d2h.com/MasterChannel/colors.png",
          label: "Colors",
        },
        {
          id: 6,
          channleImage: "https://www.d2h.com/MasterChannel/colors.png",
          label: "Colors",
        },
      ],
    },
  ];
  const { packageId } = useParams();
  const [packageData, setPackageData] = useState([]);
  const [bouqueData, setBouqueData] = useState([]);
  const [packageResult, setPackageResult] = useState([]);
  console.log("packageId>>>", packageId);
  // const cartItems = useSelector((state) => state.cart.items);
  const viewCartItems = useSelector((state) => state.cart.viewItems);
  // console.log("viewCartItems>>>", viewCartItems);

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

  // Given packageResult data

  // Create packageResultFinal array

  // const packageResultFinal = packageResult.reduce((result, packageEntry) => {
  //   // Check if broadcasterRef is already in the result array
  //   const existingBroadcaster = result.find(
  //     (b) => b.broadcasterRef._id === packageEntry.broadcasterRef._id
  //   );

  //   if (!existingBroadcaster) {
  //     // If broadcasterRef is not in the result array, add it
  //     result.push({
  //       broadcasterRef: packageEntry.broadcasterRef,
  //       bouqueData: [],
  //     });
  //   }

  //   // Find the index of the broadcasterRef in the result array
  //   const broadcasterIndex = result.findIndex(
  //     (b) => b.broadcasterRef._id === packageEntry.broadcasterRef._id
  //   );

  //   // Add bouqueData entries to the corresponding broadcasterRef in the result array
  //   packageEntry.bouqueData.forEach((bouqueEntry) => {
  //     const existingBouque = result[broadcasterIndex].bouqueData.find(
  //       (b) => b.bouqueRef._id === bouqueEntry.bouqueRef._id
  //     );

  //     if (!existingBouque) {
  //       // If bouqueRef is not in the result array, add it
  //       result[broadcasterIndex].bouqueData.push(bouqueEntry);
  //     }
  //   });

  //   return result;
  // }, []);

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
          {console.log("packageData>>>", packageData)}
          {console.log("packageResult>>>", packageResult)}
          <h2>{packageData[0]?.packageRef?.name}</h2>
          <h3>
            Price: {Number(packageData[0]?.packageRef?.packagePrice).toFixed(2)}
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
                  className="accordion-collapse collapse"
                  aria-labelledby={`panelsStayOpen-heading${accordionItem._id}`}
                >
                  <div className="accordion-body">
                    <div className="accordion-innerDiv">
                      <strong>Bouquets:</strong>
                      {accordionItem.bouqueData.map((bouquet, index) => (
                        <span
                          key={index}
                          style={{
                            color: "black",
                            fontSize: "20px",
                            marginRight: "10px",
                          }}
                        >
                          &nbsp; {bouquet.bouqueRef.name},
                        </span>
                      ))}
                    </div>
                    {/* <ul className="accordion-channelList"> */}
                    {accordionItem.bouqueData.map((item) => (
                      <li key={item._id}>
                        {/* <img src={item.channleImage} alt={item.label} /> */}
                        <span>
                          {item.channelRefs.map((channel) => (
                            <span style={{color:"black",marginRight:"10px"}}>{channel.name}</span>
                          ))}
                        </span>
                      </li>
                    ))}
                    {/* </ul> */}
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
