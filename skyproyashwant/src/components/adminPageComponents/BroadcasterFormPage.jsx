import React, { useEffect, useState } from "react";
import PortalHeader from "./adminHeader.jsx/PortalHeader";
import axios from "axios";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

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
const BroadcasterFormPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    image: null,
  });
  const [bouqueName, setBouqueName] = useState([]);
  const [bouqueData, setBouqueData] = useState([]);
  const [bouqueId, setBouqueId] = useState([]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    // const value = event.target.value;

    const newValue =
      name === "image" && type === "file" ? e.target.files[0] : value;

    // typeof value === "string" ? value.split(",") : value

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleBouqueChange = (event) => {
    const value = event.target.value;
    setBouqueName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const getBouqueFunc = async () => {
    const config = {
      Headers: {
        "Content-Type": "application/json",
      },
    };
    const data = await axios.get("/api/package/bouquet", config);
    const bouques = data?.data?.map((item) => item.name);
    console.log(bouques);
    setBouqueData(bouques);
  };

  const getBouqueId = async () => {
    const config = {
      Headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios.get("/api/package/bouquet", config);
    const data = response.data;

    // console.log("data>ID", data);
    // console.log("languageNamebeforeID", channelName[0]);

    let newData = data?.find((item) => item?.name === bouqueName[0]);

    // console.log("languageNameafterID", channelName[0]);
    // console.log("newDataID", newData);
    // console.log("newDataidID", newData?._id);
    console.log("newData?._id>...........>", newData?._id);
    setBouqueId(newData?._id);
  };

  getBouqueId();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      Headers: {
        // "Content-type": "application/json",
        "Content-Type": "multipart/form-data",
      },
    };
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("image", formData.image);
    formDataToSend.append("bouqueRef", bouqueId);
    const data = await axios.post(
      "/api/package/broadcaster",
      formDataToSend,
      config
    );
    console.log("databrpadcaster", data);
  };

  useEffect(() => {
    getBouqueFunc();
  }, []);

  return (
    <PortalHeader>
      <form onSubmit={handleSubmit} className="broadcaster-form p-5 m-5">
        <div className="mb-3">
          <label className="form-label">Broadcaster Name:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Image:</label>
          <input
            type="file"
            className="form-control"
            name="image"
            onChange={handleChange}
          />
        </div>

        <div>
          <FormControl sx={{ m: 1, width: 600 }}>
            <InputLabel id="demo-multiple-checkbox-label">bouque</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              // multiple
              value={bouqueName}
              onChange={handleBouqueChange}
              // onChange={handleChange}
              input={<OutlinedInput label="Channel Type" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {bouqueData?.map((channel) => (
                <MenuItem key={channel} value={channel}>
                  <Checkbox checked={bouqueName.indexOf(channel) > -1} />
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

export default BroadcasterFormPage;
