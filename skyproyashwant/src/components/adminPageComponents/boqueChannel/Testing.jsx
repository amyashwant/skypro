import React, { useEffect, useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import PortalHeader from "./adminHeader.jsx/PortalHeader";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PackageBouque = () => {
  const [selectedPackage, setSelectedPackage] = useState("");
  const [broadcasterData, setBroadcasterData] = useState([]);
  const [error, setError] = useState([]);
  const [isFormValid, setIsFormValid] = useState(false);
  const [packageData, setPackageData] = useState([]);
  const [bouqueName, setBouqueName] = useState([]);
  const [bouqueData, setBouqueData] = useState([]);
  const [selectedBroadcasters, setSelectedBroadcasters] = useState([]);
  const [filteredBouquets, setFilteredBouquets] = useState([]);
  const [differentiateBouque, setDifferentiateBouque] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const [networkCarriageFee, setNetworkCarriageFee] = useState(0);
  const [discount, setDiscount] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
  });

  const resetFormFields = () => {
    setFormData({
      name: "",
      price: "",
    });
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setError(null);
  };

  const handleNetworkCarriageFeeChange = (event) => {
    setNetworkCarriageFee(Number(event.target.value) || 0);
  };

  const handleDiscountChange = (event) => {
    setDiscount(Number(event.target.value) || 0);
  };

  const handlePackageChange = (event) => {
    const {
      target: { name, checked },
    } = event;

    setSelectedPackage(checked ? name : "");
    setError(null);
  };

  const handleBroadcasterChange = (event) => {
    const {
      target: { name, checked },
    } = event;

    setSelectedBroadcasters((prevBroadcasters) =>
      checked
        ? [...prevBroadcasters, name]
        : prevBroadcasters.filter((b) => b !== name)
    );
    setError(null);
  };

  const handleBouqueChange = (event) => {
    const {
      target: { name, checked },
    } = event;

    setBouqueName((prevNames) =>
      checked ? [...prevNames, name] : prevNames.filter((n) => n !== name)
    );
    setError(null);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const config = {
        Headers: {
          "Content-type": "application/json",
        },
      };
      const { name } = formData;

      const firstData = await axios.post("/api/package/pack", { name }, config);
      console.log("firstData>>", firstData);

      const broadcasterRefIds = broadcasterData.data
        .filter((item) => selectedBroadcasters.includes(item.name))
        .map((item) => item._id);

      const bouqueRefIds = bouqueData.data
        .filter((item) => bouqueName.includes(item.name))
        .map((item) => item._id);

      const data = await axios.post(
        "/api/package/package-bouque",
        {
          packageRef: firstData?.data?._id,
          broadcasterRef: broadcasterRefIds,
          bouqueRef: bouqueRefIds,
        },
        config
      );

      const selectedBouquetPrices = bouqueData.data
        .filter((item) => bouqueName.includes(item.name))
        .map((item) => Number(item.price));

      const totalPriceWithoutAdditionalCharges = selectedBouquetPrices.reduce(
        (acc, price) => acc + price,
        0
      );

      const totalPrice =
        totalPriceWithoutAdditionalCharges + networkCarriageFee - discount;

      setTotalPrice(totalPrice);

      data &&
        toast.success("package has been created successfully", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          style: { fontSize: "18px", textAlign: "center" },
        });
    } catch (error) {
      console.log(error);
      setError(error?.response?.data?.error);
      toast.error("Failed to create the package", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: { fontSize: "18px", textAlign: "center", color: "red" },
      });

      resetFormFields();
    }
    resetFormFields();
    setSelectedBroadcasters([]);
    setSelectedPackage("");
  };

  useEffect(() => {
    getBroadcasterFunc();
    getPackageFunc();
    getBouqueFunc();
  }, []);

  useEffect(() => {
    const areChannelsSelected = selectedBroadcasters.length > 0;

    setIsFormValid(areChannelsSelected);
  }, [selectedBroadcasters, selectedPackage]);

  useEffect(() => {
    const fetchBouquets = async () => {
      try {
        const config = {
          Headers: {
            "Content-type": "application/json",
          },
        };

        const data = await axios.get("/api/package/bouquet", config);
        console.log("selectedBroadcaster>>useeffect>", selectedBroadcasters);
        console.log("Bouquetdata>>>useeffect>Data>", data.data);

        const filteredBouquets = data?.data
          .filter((bouquet) =>
            selectedBroadcasters?.includes(bouquet?.broadcasterRef.name)
          )
          .map((item) => item.name);

        console.log(
          "selectedBroadcaster>>>useeffect>filteredBouquets>",
          filteredBouquets
        );
        setFilteredBouquets(filteredBouquets);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBouquets();
  }, [selectedBroadcasters]);

  useEffect(() => {
    const selectedBouquetPrices = bouqueData.data
      ?.filter((item) => bouqueName.includes(item.name))
      ?.map((item) => Number(item.price));

    const totalPrice = selectedBouquetPrices?.reduce(
      (acc, price) => acc + price,
      0
    );
    setTotalPrice(totalPrice);
  }, [bouqueName, bouqueData]);

  return (
    <PortalHeader>
      <ToastContainer />

      <form onSubmit={handleSubmit} className="broadcaster-form p-5 m-5">
        <div className="mb-3">
          <label className="form-label">Package Name:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <h4>Broadcaster Name</h4>
          {broadcasterData?.data?.map((item) => (
            <FormControlLabel
              key={item.name}
              control={
                <Checkbox
                  checked={selectedBroadcasters.includes(item.name)}
                  onChange={handleBroadcasterChange}
                  name={item.name}
                />
              }
              label={item.name}
            />
          ))}
        </div>

        <h4 style={{ marginBottom: "20px" }}>Bouquet Name</h4>
        {selectedBroadcasters.length > 0 && (
          <div>
            {selectedBroadcasters?.map((broadcasterName) => {
              const broadcasterBouquets = filteredBouquets?.filter((name) => {
                const selectedBouquet = bouqueData.data.find(
                  (bouquet) => bouquet.name === name
                );
                return selectedBouquet.broadcasterRef.name === broadcasterName;
              });

              return (
                <div key={broadcasterName}>
                  <h5>{broadcasterName}</h5>
                  {broadcasterBouquets.map((name) => {
                    const selectedBouquet = bouqueData.data.find(
                      (bouquet) => bouquet.name === name
                    );

                    return (
                      <FormControlLabel
                        key={name}
                        control={
                          <Checkbox
                            checked={bouqueName.includes(name)}
                            onChange={handleBouqueChange}
                            name={name}
                          />
                        }
                        label={`${name} Price: Rs ${selectedBouquet.price}`}
                      />
                    );
                  })}
                </div>
              );
            })}
          </div>
        )}

        <div>
          <h4>Network Carriage Fee</h4>
          <input
            type="number"
            value={networkCarriageFee}
            onChange={handleNetworkCarriageFeeChange}
          />
        </div>

        <div>
          <h4>Discount</h4>
          <input
            type="number"
            value={discount}
            onChange={handleDiscountChange}
          />
        </div>

        <div>
          <h4>Total Price</h4>
          <p>{totalPrice}</p>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={!isFormValid}
        >
          Submit
        </button>
      </form>
    </PortalHeader>
  );
};

export default PackageBouque;

//handle submit working with  bouque against the broadcaster but nor corresponding bouque--------

// const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const config = {
//         Headers: {
//           "Content-type": "application/json",
//         },
//       };

//       const { name } = formData;
//       const firstData = await axios.post("/api/package/pack", { name }, config);

//       const broadcasterRefIds = broadcasterData.data
//         .filter((item) => selectedBroadcasters.includes(item.name))
//         .map((item) => item._id);

//       const bouqueRefIds = bouqueData.data
//         .filter((item) => bouqueName.includes(item.name))
//         .map((item) => item._id);

//       // Send the request for each combination of broadcaster and bouquet
//       await Promise.all(
//         broadcasterRefIds.map((broadcasterId) =>
//           bouqueRefIds.map((bouqueId) =>
//             axios.post("/api/package/package-bouque", {
//               packageRef: firstData?.data?._id,
//               broadcasterRef: broadcasterId,
//               bouqueRef: bouqueId,
//             })
//           )
//         )
//       );

//       const selectedBouquetPrices = bouqueData.data
//         .filter((item) => bouqueName.includes(item.name))
//         .map((item) => Number(item.price));

//       const totalPriceWithoutAdditionalCharges = selectedBouquetPrices.reduce(
//         (acc, price) => acc + price,
//         0
//       );

//       const totalPrice =
//         totalPriceWithoutAdditionalCharges + networkCarriageFee - discount;

//       setTotalPrice(totalPrice);

//       toast.success("package has been created successfully", {
//         position: "top-center",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         style: { fontSize: "18px", textAlign: "center" },
//       });
//     } catch (error) {
//       console.log(error);
//       setError(error?.response?.data?.error);
//       toast.error("Failed to create the package", {
//         position: "top-center",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         style: { fontSize: "18px", textAlign: "center", color: "red" },
//       });

//       resetFormFields();
//     }

//     resetFormFields();
//     setSelectedBroadcasters([]);
//     setSelectedPackage("");
//   };
