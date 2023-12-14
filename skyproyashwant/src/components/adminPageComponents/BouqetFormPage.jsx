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

const BouqetFormPage = () => {
  const [broadcastername, setBroadcasterName] = useState([]);
  const [channelName, setchannelName] = useState([]);
  const [channelData, setChannelData] = useState([]);
  const [channelId, setChannelId] = useState([]);

  const [broadcasterTwoName, setBroadcasterTwoName] = useState([]);
  const [broadcasterId, setBroadcasterId] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    broadcaster: "",
    channels: "",
  });

  const handleBroadcasterChange = (event) => {
    const {
      target: { value },
    } = event;
    setBroadcasterName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChannelChange = (event) => {
    const {
      target: { value },
    } = event;
    setchannelName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    // const value = event.target.value;

    // const newValue =
    //   name === "image" && type === "file" ? e.target.files[0] : value;

    // typeof value === "string" ? value.split(",") : value

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const getChannelId = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const response = await axios.get("/api/package/channel", config);
      const data = response.data;
      let newData = data?.find((item) => item?.name === channelName[0]);
      setChannelId(newData?._id);

      // console.log("data>IDz", data);

      // console.log("channelNamebeforeID>mm>", channelName[0]);

      console.log("newDataID>>m>", newData);

      console.log("channelNameafterID", channelName[0]);
      // console.log("newDataidID", newData?._id);

      console.log("langFinalInID", channelId);

      // const responseTwo = await axios.get("/api/package/broadcaster", config);
      // let newDataTwo = responseTwo?.data?.find(
      //   (item) => item?.name === broadcastername[0]
      // );
      // setBroadcasterId(newDataTwo?._id);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  getChannelId();

  const getBroadcasterId = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      // const response = await axios.get("/api/package/broadcaster", config);
      // const data = response.data;
      // let newData = data?.find((item) => item?.name === channelName[0]);
      // setChannelId(newData?._id);

      // // console.log("data>IDz", data);

      // // console.log("channelNamebeforeID>mm>", channelName[0]);

      // console.log("newDataID>>m>", newData);

      // console.log("channelNameafterID", channelName[0]);
      // // console.log("newDataidID", newData?._id);

      // console.log("langFinalInID", channelId);

      const responseTwo = await axios.get("/api/package/broadcaster", config);
      console.log("bouquetFormBroadcater>>>", responseTwo);
      let newDataTwo = responseTwo?.data?.find(
        (item) => item?.name === broadcastername[0]
      );
      setBroadcasterId(newDataTwo?._id);
      console.log("setBroadcasterId>>c><<<<<", broadcasterId);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  getBroadcasterId();

  const getChannelFunc = async () => {
    const config = {
      Headers: {
        "Content-type": "application/json",
        // "Content-Type": "multipart/form-data",
      },
    };

    const data = await axios.get("/api/package/channel", config);
    console.log("datagetChannel>", data?.data);

    const responseTwo = await axios.get("/api/package/broadcaster", config);
    console.log("responseTwo>>", responseTwo?.data);
    console.log("broadcasterTwoName>", broadcasterTwoName);

    const channels = data?.data?.map((item) => item.name);
    const broadcaster = responseTwo?.data?.map((item) => item.name);
    setBroadcasterTwoName(broadcaster);
    setChannelData(channels);
    console.log("channelData;;;;;:::", channelData);
  };

  const getBroadcasterFunc = async () => {};

  console.log("channelData>>>", channelData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log("formData in>>>", formData);
    // getChannelId();
    // console.log("languageName>>", languageName[0]);
    // const formDataToSend = new FormData();
    // formDataToSend.append("name", formData.name);
    // formDataToSend.append("price", formData.price);
    // console.log("languageFinalOutId>", languageId);
    // formDataToSend.append("language", languageId);
    // formDataToSend.append("image", formData.image);
    // formDataToSend.append("type", channelName[0]);

    const config = {
      Headers: {
        "Content-type": "application/json",
        // "Content-Type": "multipart/form-data",
      },
    };
    const { name, price } = formData;
    console.log("channelIdSUBMIT>m>>", channelId);
    const { data } = await axios.post(
      "/api/package/bouquet",
      // "http://localhost:5000/api/package/channel",
      { name, price, broadcasterRef: broadcasterId, channelRef: channelId },
      config
    );
    console.log("data>>after submit bouque final", data);
  };

  useEffect(() => {
    getChannelFunc();
    getBroadcasterFunc();
  }, []);

  return (
    <PortalHeader>
      <form onSubmit={handleSubmit} className="broadcaster-form p-5 m-5">
        <div className="mb-3">
          <label className="form-label">Bouquet Name:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Bouquet Price:</label>
          <input
            type="text"
            className="form-control"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>

        <div>
          <FormControl sx={{ m: 1, width: 600 }}>
            <InputLabel id="demo-multiple-checkbox-label">
              Broadcaster
            </InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              // multiple
              value={broadcastername}
              onChange={handleBroadcasterChange}
              input={<OutlinedInput label="Broadcaster" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {broadcasterTwoName.map((broadcaster) => (
                <MenuItem key={broadcaster} value={broadcaster}>
                  <Checkbox
                    checked={broadcastername.indexOf(broadcaster) > -1}
                  />
                  <ListItemText primary={broadcaster} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div>
          <FormControl sx={{ m: 1, width: 600 }}>
            <InputLabel id="demo-multiple-checkbox-label">
              Channel Name
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
              {channelData.map((channel) => (
                <MenuItem key={channel} value={channel}>
                  <Checkbox checked={channelName.indexOf(channel) > -1} />
                  <ListItemText primary={channel} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </PortalHeader>
  );
};

export default BouqetFormPage;
