import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
import { useParams } from "react-router";
import {
  addItem,
  clearItem,
  removeItem,
  viewItem,
} from "../../utils/cartSlice";
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
  console.log("CartItems>>>................>", cartItems);

  const [disableBouqueArray, setDisableBouqueArray] = useState([]);
  const handleAddPackage = (pack) => {
    console.log("disabled................False........");
    if (cartItems.length > 0) {
      dispatch(clearItem());
    }

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
          <div className="row d-flex align-items-center">
            <div className="col-sm-10">
              <h2>{packageData[0]?.packageRef?.name}</h2>
              <h3>
                {/* Price: {Number(packageData[0]?.packageRef?.packagePrice).toFixed(0)} */}
                Price:{" "}
                {Math.floor(Number(packageData[0]?.packageRef?.packagePrice))}
                .00 */-per month
              </h3>
            </div>
            <div className="col-sm-2 text-align-right">
              <button
                className="adpack-btn"
                onClick={() => handleAddPackage(packageData[0].packageRef)}
                disabled={
                  cartItems.length > 0 &&
                  packageResult[0]?.packageRef?.name === cartItems[0]?.name
                }
              >
                {cartItems.length > 0 &&
                packageResult[0]?.packageRef?.name === cartItems[0]?.name ? (
                  <span style={{ color: "lightgreen" }}>ADDED &#x2713;</span>
                ) : (
                  " ADD PACKAGE"
                )}

                {/* {packageResult[0]?.packageRef?.name === cartItems[0]?.name} */}
              </button>
            </div>
          </div>
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
                    <strong>Broadcaster:</strong> &nbsp;
                    {accordionItem.broadcasterRef.name}
                  </button>
                </h2>
                <div
                  id={`panelsStayOpen-collapse${accordionItem._id}`}
                  className="accordion-collapse collapse show"
                  aria-labelledby={`panelsStayOpen-heading${accordionItem._id}`}
                >
                  <div className="accordion-body">
                    <div className="accordion-innerDiv"></div>
                    <div style={{ marginTop: "25px" }}>
                      {accordionItem?.bouqueData?.map((item) => (
                        <div key={item._id}>
                          <strong
                            style={{
                              color: "rgb(7 30 67)",
                              textTransform: "uppercase",
                              fontSize: "17px",
                            }}
                          >
                            Channels for{" "}
                            <span
                              style={{ color: "#fd5901", fontStyle: "italic" }}
                            >
                              {item.bouqueRef.name}
                            </span>{" "}
                            :
                            {/* <input type="number" name={item.bouqueRef.price} value={`${item.bouqueRef.price}`} style={{width:"30px",marginLeft:"10px"}} readOnly/> */}
                            <span
                              style={{ marginLeft: "10px", color: "#fd5901" }}
                            >
                              {"    ₹ "}
                              {item.bouqueRef.price}
                            </span>
                          </strong>
                          <ul
                            className="accordion-channelList"
                            style={{ listStyleType: "none", padding: 0 }}
                          >
                            {item?.channelRefs?.map((channel, index) => (
                              <div key={index}>
                                <div>
                                  <li className="viewmore-channelname" key={channel._id}>
                                    <img
                                      // src={imageProvider(channel.image)}
                                      src={`${channel?.image}`}
                                    />
                                    <span>{channel.name}</span>
                                  </li>
                                </div>
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
