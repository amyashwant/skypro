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

const PackageFormPage = () => {
  const [broadcasterName, setBroadcasterName] = useState([]);

  const [broadcasterData, setBroadcasterData] = useState([]);
  const [broadcasterId, setBroadcasterId] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
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

  const getBroadcasterId = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const responseTwo = await axios.get("/api/package/broadcaster", config);
      console.log("bouquetFormBroadcater>>>", responseTwo);

      let newDataTwo = responseTwo?.data?.find(
        (item) => item?.name === broadcasterName[0]
      );
      setBroadcasterId(newDataTwo?._id);
      console.log("setBroadcasterId>>c?????????????????", broadcasterId);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  getBroadcasterId();

  const getBroadcasterFunc = async () => {
    const config = {
      Headers: {
        "Content-Type": "application/json",
      },
    };

    const data = await axios.get("/api/package/broadcaster", config);

    const newData = data?.data?.map((item) => item.name);

    setBroadcasterData(newData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const config = {
      Headers: {
        "Content-type": "application/json",
      },
    };
    const { name, price } = formData;

    const { data } = await axios.post(
      "/api/package/pack",
      { name, price, broadcasterRef: broadcasterId },
      config
    );
    console.log("data>>after submit package final", data);
  };

  useEffect(() => {
    getBroadcasterFunc();
  }, []);

  return (
    <PortalHeader>
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

        <div className="mb-3">
          <label className="form-label">Package Price:</label>
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
              value={broadcasterName}
              onChange={handleBroadcasterChange}
              input={<OutlinedInput label="Broadcaster" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {broadcasterData.map((broadcaster) => (
                <MenuItem key={broadcaster} value={broadcaster}>
                  <Checkbox
                    checked={broadcasterName.indexOf(broadcaster) > -1}
                  />
                  <ListItemText primary={broadcaster} />
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

export default PackageFormPage;
