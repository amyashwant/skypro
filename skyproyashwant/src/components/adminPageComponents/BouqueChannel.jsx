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
import "react-toastify/dist/ReactToastify.css";

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

const BouqueChannel = () => {
  const [channelName, setchannelName] = useState([]);
  const [channelId, setChannelId] = useState([]);
  const [channelData, setChannelData] = useState([]);
  const [error, setError] = useState([]);
  const [isFormValid, setIsFormValid] = useState(false);
  const [broadcasterData, setBroadcasterData] = useState([]);
  const [broadcasterName, setBroadcasterName] = useState([]);
  const [broadcasterId, setBroadcasterId] = useState([]);
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
  const handleBroadcasterChange = (event) => {
    const {
      target: { value },
    } = event;

    setBroadcasterName(
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
    const config = {
      Headers: {
        "Content-type": "application/json",
      },
    };

    const data = await axios.get("/api/package/channel", config);
    // console.log("datagetChannel>", data?.data);

    // const channels = data?.data?.map((item) => item.name);

    setChannelData(data);
  };

  const getBroadcasterFunc = async () => {
    const config = {
      Headers: {
        "Content-type": "application/json",
      },
    };
    const data = await axios.get("/api/package/bouquet", config);
    setBroadcasterData(data);
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
  const getBroadcasterId = () => {
    try {
      const data = broadcasterData.data;

      // let newData = data?.find((item) => item?.name === channelName[0]);

      // const channelIds = channelName.map((name, index) => {
      //   const newData = data?.find((item) => item?.name === name);
      //   return newData?._id;
      // });

      const channelIds = broadcasterName.map((name) => {
        const channel = data?.find((item) => item?.name === name);
        return channel?._id;
      });
      console.log("channelidfunc>>", channelIds);
      setBroadcasterId(channelIds);
    } catch (error) {
      console.error("Error fetching data:", error);
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

      const { name, price } = formData;
      console.log("channelIdsubmit>>>>", channelId);

      const data = await axios.post(
        "/api/package/bouque-channel",
        { bouqueRef: broadcasterId, channelRef: channelId },
        config
      );

      console.log("data submit>>", data);

      data &&
        toast.success("Bouque has been created successfully", {
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
      setError(error?.response?.data?.error);
      toast.error("Failed to create the Bouque", {
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
    setBroadcasterName([]);
  };

  useEffect(() => {
    getChannelFunc();
    getBroadcasterFunc();
    getChannelId();
    getBroadcasterId();
  }, [channelName, broadcasterName]);

  useEffect(() => {
    const areChannelsSelected = channelName.length > 0;
    const areBroadcasterSelected = broadcasterName.length > 0;

    setIsFormValid(areChannelsSelected && areBroadcasterSelected);
  }, [channelName, broadcasterName]);

  return (
    <>
      <PortalHeader>
      <ToastContainer />
      <form onSubmit={handleSubmit} className="broadcaster-form p-5 m-5">
        <div>
          <FormControl sx={{ m: 1, width: 600 }}>
            <InputLabel id="demo-multiple-checkbox-label">
              bouque Name
            </InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              // multiple
              value={broadcasterName}
              onChange={handleBroadcasterChange}
              input={<OutlinedInput label="Channel Type" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {broadcasterData?.data
                ?.map((item) => item.name)
                ?.map((channel) => (
                  <MenuItem key={channel} value={channel}>
                    <Checkbox checked={broadcasterName.indexOf(channel) > -1} />
                    <ListItemText primary={channel} />
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </div>

        <div>
          <FormControl sx={{ m: 1, width: 600 }}>
            <InputLabel id="demo-multiple-checkbox-label">
              channel Name
            </InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              // multiple
              value={channelName}
              onChange={handleChannelChange}
              input={<OutlinedInput label="Channel Type" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {channelData?.data
                ?.map((item) => item.name)
                ?.map((channel) => (
                  <MenuItem key={channel} value={channel}>
                    <Checkbox checked={channelName.indexOf(channel) > -1} />
                    <ListItemText primary={channel} />
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
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
    </>
  );
};

export default BouqueChannel;
