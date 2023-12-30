import React, { useEffect, useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import PortalHeader from "./adminHeader.jsx/PortalHeader";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const channels = ["star plus", "mtv", "aat tak"];

const broadcasters = [
  "Discovery Communications India",
  "Celebrities Management Pvt Ltd",
  "Eenadu Television Pvt Ltd",
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const PackageFormPage = () => {
  const [channelName, setchannelName] = useState([]);
  const [channelId, setChannelId] = useState([]);
  const [channelData, setChannelData] = useState([]);
  const [error, setError] = useState([]);
  const [isFormValid, setIsFormValid] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    // channels: "",
  });

  //   const {
  //     target: { value },
  //   } = event;
  //   setBroadcasterName(
  //     // On autofill we get a stringified value.
  //     typeof value === "string" ? value.split(",") : value
  //   );
  // };

  const resetFormFields = () => {
    setFormData({
      name: "",
      price: "",
    });
  };

  const handleChannelChange = (event) => {
    const {
      target: { value },
    } = event;

    setchannelName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    setError(null);
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setError(null);
  };

  const getChannelFunc = async () => {
    try {
      const config = {
        Headers: {
          "Content-type": "application/json",
        },
      };

      const data = await axios.get("/api/package/Broadcaster", config);
      // console.log("datagetChannel>", data?.data);

      // const channels = data?.data?.map((item) => item.name);

      setChannelData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getChannelId = () => {
    try {
      const data = channelData.data;

      // let newData = data?.find((item) => item?.name === channelName[0]);

      // const channelIds = channelName.map((name, index) => {
      //   const newData = data?.find((item) => item?.name === name);
      //   return newData?._id;
      // });

      const channelIds = channelName.map((name) => {
        const channel = data?.find((item) => item?.name === name);
        return channel?._id;
      });
      console.log("channelidfunc>>", channelIds);
      setChannelId(channelIds);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("channelIdsubmit>>>>", channelId);
    try {
      const config = {
        Headers: {
          "Content-type": "application/json",
        },
      };

      const { name, price } = formData;

      const data = await axios.post("/api/package/pack", { name }, config);

      console.log("data submit>>", data);

      data &&
        toast.success("Package has been created successfully", {
          position: "top-center", // Set the position of the toast
          autoClose: 5000, // Set the duration in milliseconds (e.g., 5000 = 5 seconds)
          hideProgressBar: false, // Show or hide the progress bar
          closeOnClick: true, // Close the toast when clicked
          pauseOnHover: true, // Pause the timer when hovered
          draggable: true, // Allow dragging the toast
          progress: undefined, // Use the default progress bar
          style: { fontSize: "18px", textAlign: "center" }, // Customize the style of the toast
        });
    } catch (error) {
      console.log(error);
      setError(error?.response?.data?.error);
      toast.error("Failed to create the package", {
        position: "top-center", // Set the position of the toast
        autoClose: 5000, // Set the duration in milliseconds (e.g., 5000 = 5 seconds)
        hideProgressBar: false, // Show or hide the progress bar
        closeOnClick: true, // Close the toast when clicked
        pauseOnHover: true, // Pause the timer when hovered
        draggable: true, // Allow dragging the toast
        progress: undefined, // Use the default progress bar
        style: { fontSize: "18px", textAlign: "center", color: "red" }, // Customize the style of the toast
      });

      resetFormFields();
    }
    resetFormFields();
    setchannelName([]);
  };

  useEffect(() => {
    getChannelFunc();
    getChannelId();
  }, [channelName]);

  useEffect(() => {
    const isNameValid = formData.name.trim() !== "";
    // const isPriceValid = formData.price.trim() !== "";
    // const areChannelsSelected = channelName.length > 0;

    setIsFormValid(isNameValid);
  }, [formData.name]);

  return (
    <PortalHeader>
      <ToastContainer />
      <h2>Add Package</h2>
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
        <div style={{ color: "red" }}>{error && error}</div>

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

export default PackageFormPage;
