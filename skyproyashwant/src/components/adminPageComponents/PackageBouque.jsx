import React, { useEffect, useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import PortalHeader from "./adminHeader.jsx/PortalHeader";
import axios from "axios";
import { Grid } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { List, Paper, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import Loader from "../../common/loaderComponent.jsx/Loader";

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
  const [netSubscriber, setNetSubscriber] = useState(0);

  const [networkCarriageFee, setNetworkCarriageFee] = useState(130);
  const [discount, setDiscount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isDiscountEntered, setIsDiscountEntered] = useState(false);
  const [isBouquetsSelected, setIsBouquetsSelected] = useState(false);

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
    const discountValue = Number(event.target.value) || 0;
    setDiscount(discountValue);
    setIsDiscountEntered(discountValue > 0);
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
    setIsBouquetsSelected(true);
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
    setLoading(true);
    try {
      const config = {
        Headers: {
          "Content-type": "application/json",
        },
      };
      console.log(
        "price before sending API post totalPrice..............................",
        totalPrice
      );
      const { name } = formData;
      const firstData = await axios.post(
        "/api/package/pack",
        { name, packagePrice: netSubscriber },
        config
      );

      // Create an array of objects containing broadcasterRef and selectedBouques
      console.log("selectedBroadcasters check>>", selectedBroadcasters);
      console.log("broadcasterdata check>>", broadcasterData);

      const broadcastersData = selectedBroadcasters.map(
        (broadcaster, index) => ({
          // broadcasterRef: broadcaster,
          broadcasterRef: broadcasterData?.data
            ?.filter((item) =>
              selectedBroadcasters[index]?.includes(item?.name)
            )
            ?.map((item) => item?._id),
          selectedBouques: bouqueData.data
            .filter(
              (bouquet) =>
                bouqueName.includes(bouquet.name) &&
                bouquet.broadcasterRef.name === broadcaster
            )
            .map((bouquet) => bouquet._id),
        })
      );

      const selectedBouquetPrices = bouqueData.data
        .filter((item) => bouqueName.includes(item.name))
        .map((item) => Number(item.price));

      const totalPriceWithoutAdditionalCharges = selectedBouquetPrices.reduce(
        (acc, price) => acc + price,
        0
      );

      const totalPrices =
        totalPriceWithoutAdditionalCharges + networkCarriageFee - discount;

      setTotalPrice(totalPrices);

      console.log("broadcastersData plural check>>", broadcastersData);

      // Send the request for each combination of broadcaster and bouquet
      await axios.post("/api/package/package-bouque", {
        packageRef: firstData?.data?._id,
        broadcasters: broadcastersData, // Make sure it's an array
      });

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
        style: { fontSize: "18px", textAlign: "center", color: "#071e43" },
      });

      resetFormFields();
    }

    resetFormFields();
    setSelectedBroadcasters([]);
    setSelectedPackage("");
    setLoading(false);
    setBouqueName([]);
    setDiscount(0);
    setIsDiscountEntered(false);
    setIsBouquetsSelected(false);
  };

  useEffect(() => {
    getBroadcasterFunc();
    getPackageFunc();
    getBouqueFunc();
  }, []);

  useEffect(() => {
    const areChannelsSelected = selectedBroadcasters.length > 0;
    const isDiscountValid = discount > 0;
    // setIsFormValid(isBouquetsSelected && isDiscountValid);
    setIsFormValid(
      areChannelsSelected && isBouquetsSelected && isDiscountValid
    );
  }, [selectedBroadcasters, selectedPackage, isBouquetsSelected, discount]);

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
    const calculateTotalPrice = () => {
      const selectedBouquetPrices = bouqueData.data
        ?.filter((item) => bouqueName.includes(item.name))
        ?.map((item) => Number(item.price));

      const totalPriceWithoutAdditionalCharges = selectedBouquetPrices?.reduce(
        (acc, price) => acc + price,
        0
      );

      const totalPrices =
        totalPriceWithoutAdditionalCharges + networkCarriageFee - discount;

      setTotalPrice(totalPrices);
    };

    calculateTotalPrice();
  }, [bouqueName, bouqueData, networkCarriageFee]);

  useEffect(() => {
    const total = totalPrice - discount;
    setNetSubscriber(total);
  }, [discount]);
  return (
    <PortalHeader>
      <ToastContainer />
      <h2>Add Package</h2>
      <form onSubmit={handleSubmit} className="broadcaster-form p-5 m-5">
        <div className="mb-3">
          <label className="form-label">Package Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="form-label">Broadcasters</label>
          <Grid container spacing={2} className="wrap-stylediv">
            {broadcasterData?.data?.map((item) => (
              <Grid item key={item.name} xs={12} sm={6} md={4} lg={3} xl={3}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedBroadcasters.includes(item.name)}
                      onChange={handleBroadcasterChange}
                      name={item.name}
                    />
                  }
                  // label={item.name}
                  label={item.name
                    .split(" ")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                />
              </Grid>
            ))}
          </Grid>
        </div>

        <div>
          <label className="form-label">Bouquets</label>

          {/* <Typography variant="h5" style={{ marginBottom: "20px" }}>
            Bouquet Name
          </Typography> */}
          {selectedBroadcasters.length > 0 && (
            <Grid container spacing={2}>
              {selectedBroadcasters?.map((broadcasterName) => {
                const broadcasterBouquets = filteredBouquets?.filter((name) => {
                  const selectedBouquet = bouqueData.data.find(
                    (bouquet) => bouquet.name === name
                  );
                  return (
                    selectedBouquet.broadcasterRef.name === broadcasterName
                  );
                });

                return (
                  <Grid item key={broadcasterName} xs={6}>
                    <Paper
                      className="wrap-bouque-package"
                      elevation={3}
                      style={{ padding: "5px", marginBottom: "10px" }}
                    >
                      <Typography variant="h6">
                        {broadcasterName
                          .split(/[ -]/)
                          .map(
                            (word) =>
                              word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join(" ")}
                      </Typography>
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
                            label={
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <div style={{ flexGrow: 1 }}>
                                  {name
                                    .split(/[ -]/)
                                    .map(
                                      (word) =>
                                        word.charAt(0).toUpperCase() +
                                        word.slice(1)
                                    )
                                    .join(" ")}
                                </div>
                                <TextField
                                  className="price-package-css-modify"
                                  variant="outlined"
                                  value={`Rs ${selectedBouquet.price}/-`}
                                  InputProps={{ readOnly: true }}
                                  style={{ marginLeft: "20px" }}
                                />
                              </div>
                            }
                          />
                        );
                      })}
                    </Paper>
                  </Grid>
                );
              })}
            </Grid>
          )}
        </div>

        <div>
          <h4>Pay Channel Total</h4>
          <input
            type="number"
            value={totalPrice - networkCarriageFee}
            onChange={handleNetworkCarriageFeeChange}
            readOnly
          />
        </div>
        <div>
          <h4>Network Carriage Fee</h4>
          <input
            type="number"
            value={networkCarriageFee}
            onChange={handleNetworkCarriageFeeChange}
            readOnly
          />
        </div>

        <div>
          <h4>Total</h4>
          <input type="number" value={totalPrice} readOnly />
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
          <h4>Net Subscriber Price</h4>
          <input
            type="number"
            id="totalPriceInput"
            value={netSubscriber}
            readOnly
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={!isFormValid || loading}
        >
          {loading ? <Loader /> : "Submit"}
        </button>
      </form>
    </PortalHeader>
  );
};

export default PackageBouque;
