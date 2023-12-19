import axios from "axios";
import React, { useEffect, useState } from "react";
import PortalHeader from "./adminHeader.jsx/PortalHeader";

const ViewPackageBouque = () => {
  const [selectedPackage, setSelectedPackage] = useState("");
  const [broadcasterData, setBroadcasterData] = useState([]);
  const [error, setError] = useState([]);
  const [isFormValid, setIsFormValid] = useState(false);
  const [packageData, setPackageData] = useState([]);
  const [bouqueName, setBouqueName] = useState([]);
  const [bouqueData, setBouqueData] = useState([]);
  const [packageBouqueData, setPackageBouqueData] = useState([]);
  const [selectedBroadcasters, setSelectedBroadcasters] = useState([]);
  const [filteredBouquets, setFilteredBouquets] = useState([]);

  const getPackageFunc = async () => {
    try {
      const config = {
        Headers: {
          "Content-type": "application/json",
        },
      };
      const data = await axios.get("/api/package/pack", config);
      setPackageData(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getBroadcasterFunc = async () => {
    try {
      const config = {
        Headers: {
          "Content-type": "application/json",
        },
      };

      const data = await axios.get("/api/package/Broadcaster", config);

      setBroadcasterData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getBouqueFunc = async () => {
    try {
      const config = {
        Headers: {
          "Content-type": "application/json",
        },
      };
      const data = await axios.get("/api/package/bouquet", config);
      setBouqueData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPackageBouque = async () => {
    try {
      const config = {
        Headers: {
          "Content-type": "application/json",
        },
      };
      const data = await axios.get("/api/package/package-bouque", config);
      setPackageBouqueData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBroadcasterFunc();
    getPackageFunc();
    getBouqueFunc();
    getPackageBouque();
  }, []);

  //   console.log("packageData", packageData);
  //   console.log("broadcasterData", broadcasterData);
  //   console.log("bouqueData", bouqueData);
  console.log("packageBouqueData", packageBouqueData);

  //   useEffect(() => {
  //     // Map through package-bouque data and find corresponding names
  //     const mappedData = packageBouqueData.map((item) => {
  //       const packageInfo = packageData.find((p) => p._id === item.packageRef);
  //       const broadcasterInfo = broadcasterData.find((b) =>
  //         item.broadcasterRef.includes(b._id)
  //       );
  //       const bouqueInfo = bouqueData.find((b) => item.bouqueRef.includes(b._id));

  //       return {
  //         ...item,
  //         packageName: packageInfo ? packageInfo.name : "N/A",
  //         broadcasterName: broadcasterInfo ? broadcasterInfo.name : "N/A",
  //         bouqueName: bouqueInfo ? bouqueInfo.name : "N/A",
  //       };
  //     });

  //     console.log(mappedData);
  //   }, [packageBouqueData, packageData, broadcasterData, bouqueData]);

  return (
    <PortalHeader>
      <div>
        <h4
        //   style={{
        //     display: "flex",
        //       alignItems: "center",
        //     // justifyContent: "center",
        //   }}
        >
          View Package their broadcaster and their bouque:
        </h4>
        <div>
          {packageBouqueData?.data?.map((item) => {
            return (
              <div>
                <div style={{ color: "red", fontSize: "30px",marginTop:"20px" }}>
                  {item?.packageRef?.name}
                </div>
                <div>
                  <div style={{ color: "blue", fontSize: "20px" }}>
                    {item?.broadcasterRef?.map((innerItem) => (
                      <div>{innerItem?.name}</div>
                    ))}
                  </div>
                  <div style={{ color: "green", fontSize: "10px" }}>
                    {item?.bouqueRef?.map((innerItem) => (
                      <div>{innerItem?.name}</div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PortalHeader>
  );
};

export default ViewPackageBouque;
