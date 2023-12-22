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

import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { ProgressBar, Icon } from "react-toastify/dist/components";
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
  const [languageName, setlanguageName] = useState([]);
  const [languageData, setLanguageData] = useState([]);
  var [languageId, setLanguageId] = useState("");
  const [categoryName, setCategoryName] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [categoryId, setCategoryId] = useState([]);
  const [channelName, setchannelName] = useState([]);
  const [channelType, setChannelType] = useState();
  const [channelId, setChannelId] = useState([]);
  const [modal, setModal] = useState("");
  const [error, setError] = useState(null);
  const [isFormValid, setIsFormValid] = useState(false);
  const [viewChannelData, setViewChannelData] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    type: "",
    lang: "",
    image: null,
  });

  const resetFormFields = () => {
    setFormData({
      name: "",
      price: "",
      type: "",
      lang: "",
      image: null,
    });
  };

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
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;

    setCategoryName(typeof value === "string" ? value.split(",") : value);
  };

  console.log("languageName>>>>,,,>>", languageName);

  const getLanguageId = () => {
    try {
      const data = languageData?.data;

      let newData = data?.find((item) => item?.name === languageName[0]);

      setLanguageId(newData?._id);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getChannelTypeId = () => {
    try {
      const data = channelType?.data;

      // let newData = data?.find((item) => item?.name === channelName[0]);

      // const channelIds = channelName.map((name, index) => {
      //   const newData = data?.find((item) => item?.name === name);
      //   return newData?._id;
      // });

      const channelIds = channelName.map((name) => {
        const channel = data?.find((item) => item?.name === name);
        return channel?._id;
      });

      // setChannelId(newData?._id);
      setChannelId(channelIds);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  console.log("channelIds>>", channelId);

  const getCategoryId = () => {
    try {
      const data = categoryData?.data;

      let newData = data?.find((item) => item?.name === categoryName[0]);

      setCategoryId(newData?._id);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      Headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    console.log("laguageId inside submit>>", languageId);
    console.log("channelId inside submit>>", channelId);
    console.log("categoryId inside submit>>", categoryId);
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name.toLowerCase());
      // formDataToSend.append("price", formData.price);
      formDataToSend.append("language", languageId);
      formDataToSend.append("image", formData.image);
      formDataToSend.append("type", channelId[0]);
      formDataToSend.append("category", categoryId);

      // channelId.forEach((id) => {
      //   formDataToSend.append("type", id);
      // });

      const { data } = await axios.post(
        "/api/package/channel",
        formDataToSend,
        config
      );

      // data && setModal("channel has been created successfully");
      data &&
        toast.success("channel has been created successfully", {
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
      resetFormFields();
      toast.error("Failed to create the channel", {
        position: "top-center", // Set the position of the toast
        autoClose: 5000, // Set the duration in milliseconds (e.g., 5000 = 5 seconds)
        hideProgressBar: false, // Show or hide the progress bar
        closeOnClick: true, // Close the toast when clicked
        pauseOnHover: true, // Pause the timer when hovered
        draggable: true, // Allow dragging the toast
        progress: undefined, // Use the default progress bar
        style: { fontSize: "18px", textAlign: "center", color: "red" }, // Customize the style of the toast
      });
    }
    setchannelName([]);
    setlanguageName([]);

    resetFormFields();
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    const newValue =
      name === "image" && type === "file" ? e.target.files[0] : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));

    setError(null);
    setModal(null);
  };

  const getLanguageFunc = async () => {
    try {
      const config = {
        Headers: {
          "Content-type": "application/json",
        },
      };
      const data = await axios.get("/api/package/language", config);
      setLanguageData(data);
      const viewData = await axios.get("/api/package/channel");
      setViewChannelData(viewData?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getChannelTypeFunc = async () => {
    const config = {
      Headers: {
        "Content-type": "application/json",
        // "Content-Type": "multipart/form-data",
      },
    };

    const data = await axios.get("/api/package/type", config);

    setChannelType(data);
  };
  const getCategoryFunc = async () => {
    const config = {
      Headers: {
        "Content-type": "application/json",
        // "Content-Type": "multipart/form-data",
      },
    };

    const data = await axios.get("/api/package/category", config);

    setCategoryData(data);
  };

  useEffect(() => {
    getLanguageFunc();
    getChannelTypeFunc();
    getLanguageId();
    getChannelTypeId();
    getCategoryFunc();
    getCategoryId();
  }, [languageName, channelName, categoryName]);

  useEffect(() => {
    const isNameValid = formData.name.trim() !== "";
    // const isPriceValid = formData.price.trim() !== "";
    const isImageValid = formData.image !== null;
    // const areChannelsSelected = channelName.length > 0;
    const areLanguagesSelected = languageName.length > 0;

    setIsFormValid(
      isNameValid &&
        // isPriceValid &&
        // areChannelsSelected &&
        areLanguagesSelected &&
        isImageValid
    );
  }, [
    formData.name,
    // formData.price,
    formData.image,
    // channelName,
    languageName,
  ]);

  return (
    <>
      <PortalHeader>
        <ToastContainer />
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
          <div style={{ color: "red" }}>{error && error}</div>

          {/* <div className="mb-3">
          <label className="form-label">Channel Price: (If Ala Carte):</label>
          <input
            type="text"
            className="form-control"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div> */}

          <div>
            <FormControl sx={{ m: 1, width: 600 }}>
              <InputLabel id="demo-multiple-checkbox-label">Type</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                // multiple
                value={channelName}
                onChange={handleChannelChange}
                // onChange={handleChange}
                input={<OutlinedInput label="Language" />}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {channelType?.data
                  ?.map((item) => item.name)
                  ?.map((language) => (
                    <MenuItem key={language} value={language}>
                      <Checkbox checked={channelName.indexOf(language) > -1} />
                      <ListItemText primary={language} />
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </div>

          <div>
            <FormControl sx={{ m: 1, width: 600 }}>
              <InputLabel id="demo-multiple-checkbox-label">
                Language
              </InputLabel>
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
                {languageData?.data
                  ?.map((item) => item.name)
                  ?.map((language) => (
                    <MenuItem key={language} value={language}>
                      <Checkbox checked={languageName.indexOf(language) > -1} />
                      <ListItemText primary={language} />
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </div>
          <div>
            <FormControl sx={{ m: 1, width: 600 }}>
              <InputLabel id="demo-multiple-checkbox-label">
                Category
              </InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                // multiple
                value={categoryName}
                onChange={handleCategoryChange}
                // onChange={handleChange}
                input={<OutlinedInput label="Language" />}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {categoryData?.data
                  ?.map((item) => item.name)
                  ?.map((language) => (
                    <MenuItem key={language} value={language}>
                      <Checkbox checked={categoryName.indexOf(language) > -1} />
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

          <button
            type="submit"
            className="btn btn-primary"
            disabled={!isFormValid}
          >
            Submit
          </button>

          <div style={{ color: "green" }}>{modal && modal}</div>
        </form>
        <div style={{ marginLeft: "30px" }}>
          <h3>Channels Aailable:</h3>
          {viewChannelData.map((item) => (
            <p style={{ color: "black", fontWeight: "bold" }}>{item.name}</p>
          ))}
        </div>
      </PortalHeader>
    </>
  );
};

export default ChannelFormPage;
