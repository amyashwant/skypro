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
import {
  Box,
  Button,
  IconButton,
  Input,
  List,
  Modal,
  Paper,
  Typography,
} from "@mui/material";
import { ListItem } from "@mui/material";
import { Grid } from "@mui/material";

import { ToastContainer, toast } from "react-toastify";
import Loader from "../../common/loaderComponent.jsx/Loader";
import { Delete } from "@mui/icons-material";
import EditNoteIcon from "@mui/icons-material/EditNote";
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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "1px solid #ccc",
  boxShadow: 24,
  p: 4,
  width: "50%",
  borderRadius: 8,
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "space-around",
  paddingLeft: "2em",
  marginBottom: "2em",
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
  const [loading, setLoading] = useState(false);
  const [getLoading, setGetLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    type: "",
    lang: "",
    image: null,
  });

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [formDataUpdate, setFormDataUpdate] = useState({
    name: "",
  });
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);

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

  const handleChangeUpdate = (e) => {
    const { name } = e.target;

    setFormDataUpdate((prevData) => ({
      ...prevData,
      [name]: e.target.value,
    }));
    setError(null);
  };

  const handleSubmitUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const config = {
        Headers: {
          "Content-type": "application/json",
        },
      };
      const { name } = formDataUpdate;
      const data = await axios.put(
        `/api/package/channel/${selectedLanguage._id}`,
        { name },
        config
      );

      setLoading(false);

      handleClose();
      await getLanguageFunc();
    } catch (error) {
      // await getLanguageFunc();
      setError(error?.response?.data?.error);
      console.log(error);
      setLoading(false);
    }
  };
  //------------------------update/delete-------------------------------

  const resetFormFields = () => {
    // Create a new input element
    const newInput = document.createElement("input");

    // Clone the attributes from the original input
    const oldInput = document.querySelector('input[name="image"]');
    if (oldInput) {
      Array.from(oldInput.attributes).forEach((attr) => {
        newInput.setAttribute(attr.name, attr.value);
      });
      newInput.addEventListener("change", handleChange);
    }

    // Replace the old input with the new one
    oldInput.parentNode.replaceChild(newInput, oldInput);

    setFormData({
      name: "",
      price: "",
      type: "",
      lang: "",
      image: null,
    });
  };

  const handleSettings = (item) => {
    setSelectedLanguage(item);
    // setFormDataUpdate({
    //   name: language.name,
    // });
    setOpen(true);
  };

  useEffect(() => {
    if (selectedLanguage) {
      setFormDataUpdate({
        name: selectedLanguage.name,
      });
    }
  }, [selectedLanguage]);

  const handleDelete = async () => {
    // Handle delete logic here
    setGetLoading(true);
    console.log("Deleting language:", selectedLanguage);
    // Close the confirmation modal
    const data = await axios.delete(
      `/api/package/channel/${selectedLanguage._id}`
    );
    await getLanguageFunc();
    setGetLoading(false);
    setDeleteConfirmationOpen(false);
  };

  const handleDeleteConfirmationOpen = (item) => {
    setSelectedLanguage(item);
    setDeleteConfirmationOpen(true);
  };

  const handleDeleteConfirmationClose = () => {
    setDeleteConfirmationOpen(false);
  };

  //------------------------update/delete-close-------------------------------

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
    setLoading(true);

    console.log("formdata.image>>>>>", formData.image);

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
      // setError(error?.response?.data);
      resetFormFields();
      toast.error("Failed to create the channel", {
        position: "top-center", // Set the position of the toast
        autoClose: 5000, // Set the duration in milliseconds (e.g., 5000 = 5 seconds)
        hideProgressBar: false, // Show or hide the progress bar
        closeOnClick: true, // Close the toast when clicked
        pauseOnHover: true, // Pause the timer when hovered
        draggable: true, // Allow dragging the toast
        progress: undefined, // Use the default progress bar
        style: { fontSize: "18px", textAlign: "center", color: "#071e43" }, // Customize the style of the toast
      });
    }
    setchannelName([]);
    setlanguageName([]);

    resetFormFields();
    setCategoryName([]);
    setLoading(false);
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
    setGetLoading(true);
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
    } finally {
      setGetLoading(false);
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
    const isTypeValid = channelName.length > 0;
    // const isLanguageValid = formData.language.trim() !== "";
    // const isImageValid = formData.image !== null;
    // const areChannelsSelected = channelName.length > 0;
    const areLanguagesSelected = languageName.length > 0;
    const areCategorySelected = categoryName.length > 0;

    setIsFormValid(
      isNameValid &&
        isTypeValid &&
        // areChannelsSelected &&
        areLanguagesSelected &&
        areCategorySelected
      // && isImageValid
    );
  }, [
    formData.name,
    // formData.type,
    // formData.image,
    channelName,
    categoryName,
    languageName,
  ]);

  return (
    <>
      <PortalHeader>
        <ToastContainer />
        <h2>Add Channels</h2>
        <form onSubmit={handleSubmit} className="broadcaster-form p-5 m-5">
          <div className="mb-3">
            <label className="form-label">Channel Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div style={{ color: "#071e43" }}>{error && error}</div>

          <div>
            {/* <label className="form-label">Type</label> */}
            <FormControl
              sx={{ m: 1, width: 600 }}
              style={{ width: "100%", margin: "12px 0px" }}
            >
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
            {/* <label className="form-label">Language</label> */}
            <FormControl
              sx={{ m: 1, width: 600 }}
              style={{ width: "100%", margin: "12px 0px" }}
            >
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
            {/* <label className="form-label">Category</label> */}
            <FormControl
              sx={{ m: 1, width: 600 }}
              style={{ width: "100%", margin: "12px 0px" }}
            >
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
            <label className="form-label">Channel Image</label>
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
            // disabled={!isFormValid }
            disabled={!isFormValid || loading}
          >
            {/* Submit */}
            {loading ? <Loader /> : "Submit"}
          </button>

          <div style={{ color: "#071e43" }}>{modal && modal}</div>

          <List>
            <Typography variant="h5" gutterBottom>
              Channels
            </Typography>
            {getLoading ? <Loader /> : ""}
            <Grid container spacing={2}>
              {viewChannelData?.map((item, index) => (
                <Grid item key={index} xs={12} sm={6} md={6} lg={3}>
                  <Paper
                    elevation={3}
                    style={{
                      margin: "20px",
                      padding: "10px",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ color: "#071e43" }}>
                      <ListItem>
                        <ListItemText>
                          <Typography variant="body1">{item.name}</Typography>
                        </ListItemText>
                        <IconButton onClick={() => handleSettings(item)}>
                          <EditNoteIcon />
                        </IconButton>
                        <IconButton
                          onClick={() => handleDeleteConfirmationOpen(item)}
                        >
                          <Delete />
                        </IconButton>
                      </ListItem>
                      {/* {item.name
                        .split(" ")
                        .map(
                          (word) => word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join(" ")} */}
                    </div>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </List>
        </form>
      </PortalHeader>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" mb={4}>
              Channels
            </Typography>
          </div>
          <form
            style={formStyle}
            onSubmit={handleSubmitUpdate}
            action="/addNews"
            method="post"
            encType="multipart/form-data"
          >
            <FormControl fullWidth mb={4}>
              <InputLabel
                htmlFor="title"
                sx={{ fontSize: "20px", marginLeft: "-10px" }}
              >
                Name
              </InputLabel>
              <Input
                id="title"
                name="name"
                type="text"
                placeholder="Enter News Title"
                value={formDataUpdate.name}
                onChange={handleChangeUpdate}
              />
            </FormControl>

            <FormControl
              sx={{ m: 1, width: 600 }}
              style={{ width: "100%", margin: "12px 0px" }}
            >
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

            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ marginTop: "20px" }}
            >
              {loading ? <Loader /> : "Update"}
            </Button>
          </form>
        </Box>
      </Modal>
      <Modal
        open={deleteConfirmationOpen}
        onClose={handleDeleteConfirmationClose}
        aria-labelledby="delete-confirmation-modal-title"
        aria-describedby="delete-confirmation-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6">Confirm Deletion</Typography>
          <Typography>
            Are you sure you want to delete this language?
          </Typography>
          <Button onClick={handleDeleteConfirmationClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="secondary">
            Delete
          </Button>
          {getLoading ? <Loader /> : ""}
        </Box>
      </Modal>
    </>
  );
};

export default ChannelFormPage;
