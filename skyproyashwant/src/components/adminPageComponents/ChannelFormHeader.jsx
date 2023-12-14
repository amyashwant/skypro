import React, { useEffect, useState } from "react";
import PortalHeader from "./adminHeader.jsx/PortalHeader";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import axios from "axios";

// {languageData?.data?.map((item, index) => {
//   return (
//     <div style={{ margin: "20px", color: "red" }}>{item.name}</div>
//   );
// })}

const channels = ["HD", "SD"];
// const languages = ["Hindi", "English", "Punjabi"];

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

const ChannelFormPage = () => {
  const [channelName, setchannelName] = useState([]);
  const [languageName, setlanguageName] = useState([]);
  const [languageData, setLanguageData] = useState([]);
  var [languageId, setLanguageId] = useState("");
  const [channelType, setChannelType] = useState();
  const [channelId, setChannelId] = useState();
  const [modal, setModal] = useState("");

  const handleChannelChange = (event) => {
    const value = event.target.value;
    setchannelName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleLanguageChange = (event) => {
    const value = event.target.value;
    setlanguageName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    console.log("langname>>>CH", languageName);
  };

  // console.log("languageName>>>>", languageName);
  // console.log("channelName>>>>", channelName);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    type: "",
    lang: "",
    image: null,
  });

  // const getLanguageId = async () => {
  //   const config = {
  //     Headers: {
  //       "Content-type": "application/json",
  //       // "Content-Type": "multipart/form-data",
  //     },
  //   };
  //   // const { name, type, language, image, price } = formData;

  //   let { data } = await axios.get("/api/package/language", config);
  //   console.log("data>ID", data);

  //   console.log("languageNamebeforeID", languageName[0]);
  //   let newData = data?.find((item) => item?.name === languageName[0]);
  //   console.log("languageNameafterID", languageName[0]);

  //   console.log("newDataID", newData);
  //   console.log("newDataidID", newData?._id);

  //   setLanguageId(newData?._id);
  //   console.log("langFinalInID", languageId);
  // };

  const getLanguageId = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const response = await axios.get("/api/package/language", config);
      const data = response.data;

      console.log("data>ID", data);
      console.log("languageNamebeforeID", languageName[0]);

      let newData = data?.find((item) => item?.name === languageName[0]);

      console.log("languageNameafterID", languageName[0]);
      console.log("newDataID", newData);
      console.log("newDataidID", newData?._id);

      setLanguageId(newData?._id);
      console.log("langFinalInID", languageId);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  getLanguageId();

  const getChannelTypeId = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const response = await axios.get("/api/package/type", config);
      const data = response.data;

      console.log("data>ID", data);
      console.log("languageNamebeforeID", channelName[0]);

      let newData = data?.find((item) => item?.name === channelName[0]);

      console.log("languageNameafterID", channelName[0]);
      console.log("newDataID", newData);
      console.log("newDataidID", newData?._id);

      setChannelId(newData?._id);
      console.log("langFinalInID", channelId);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  getChannelTypeId();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("formData in>>>", formData);
    // getLanguageId();
    console.log("languageName>>", languageName[0]);
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("price", formData.price);
    // console.log("languageFinalOutId>", languageId);
    formDataToSend.append("language", languageId);
    formDataToSend.append("image", formData.image);
    formDataToSend.append("type", channelId);

    const config = {
      Headers: {
        // "Content-type": "application/json",
        "Content-Type": "multipart/form-data",
      },
    };
    // const { name, type, language, image, price } = formData;

    const { data } = await axios.post(
      "/api/package/channel",
      // "http://localhost:5000/api/package/channel",
      formDataToSend,
      config
    );
    data && setModal("channel has been created successfully");
    console.log("data>>after submit", data);
  };

  console.log("formData out>>>", formData);

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

  const getLanguageFunc = async () => {
    const config = {
      Headers: {
        "Content-type": "application/json",
        // "Content-Type": "multipart/form-data",
      },
    };
    const data = await axios.get("/api/package/language", config);
    console.log("languageData.data>>>", data?.data);
    const languages = data?.data?.map((item) => item.name);
    console.log("languages>>", languages);
    // languages.push("6576c56e6341f9449637a448")
    setLanguageData(languages);
  };

  // const getChannelFunc = async () => {
  // const config = {
  //   Headers: {
  //     "Content-type": "application/json",
  //     // "Content-Type": "multipart/form-data",
  //   },
  // };

  // const data = await axios.get("/api/package/channel", config);
  // console.log("getchannelData>>>", data?.data);
  // };

  const getChannelTypeFunc = async () => {
    const config = {
      Headers: {
        "Content-type": "application/json",
        // "Content-Type": "multipart/form-data",
      },
    };

    const data = await axios.get("/api/package/type", config);
    console.log("getchannelTypeData>>>", data?.data);
    const newData = data?.data?.map((item) => item.name);
    setChannelType(newData);
  };

  useEffect(() => {
    getLanguageFunc();
    getChannelTypeFunc();
    // getLanguageId();
  }, []);

  return (
    <PortalHeader>
      <form onSubmit={handleSubmit} className="broadcaster-form p-5 m-5">
        <div className="mb-3">
          <label className="form-label">Channel Name:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Channel Price:</label>
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
              Channel Type
            </InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              // multiple
              value={channelName}
              onChange={handleChannelChange}
              // onChange={handleChange}
              input={<OutlinedInput label="Channel Type" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {channelType?.map((channel) => (
                <MenuItem key={channel} value={channel}>
                  <Checkbox checked={channelName.indexOf(channel) > -1} />
                  <ListItemText primary={channel} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div>
          <FormControl sx={{ m: 1, width: 600 }}>
            <InputLabel id="demo-multiple-checkbox-label">Language</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              // multiple
              value={languageName}
              onChange={handleLanguageChange}
              // onChange={handleChange}
              input={<OutlinedInput label="Language" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {languageData?.map((language) => (
                <MenuItem key={language} value={language}>
                  <Checkbox checked={languageName.indexOf(language) > -1} />
                  <ListItemText primary={language} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="mb-3">
          <label className="form-label">Channel Image:</label>
          <input
            type="file"
            className="form-control"
            name="image"
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <div style={{ color: "green" }}>{modal && modal}</div>
      </form>
    </PortalHeader>
  );
};

export default ChannelFormPage;
