import React, { useEffect, useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import PortalHeader from "./adminHeader.jsx/PortalHeader";
import axios from "axios";
import { List, Paper, Typography } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemText } from "@mui/material";
import { Grid } from "@mui/material";

import { ToastContainer, toast } from "react-toastify";
import Loader from "../../common/loaderComponent.jsx/Loader";


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
  const [channelName, setchannelName] = useState([]);
  const [channelId, setChannelId] = useState([]);
  const [channelData, setChannelData] = useState([]);
  const [error, setError] = useState([]);
  const [isFormValid, setIsFormValid] = useState(false);
  const [viewBroadcasterData, setViewBroadcasterData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    image: null,
  });

  const resetFormFields = () => {
    const newInput = document.createElement("input");
    const oldInput = document.querySelector('input[name="image"]');
    if (oldInput) {
      Array.from(oldInput.attributes).forEach((attr) => {
        newInput.setAttribute(attr.name, attr.value);
      });
      newInput.addEventListener("change", handleChange);
    }

    oldInput.parentNode.replaceChild(newInput, oldInput);

    setFormData({
      name: "",
      image: null,
    });
  };

  const handleChannelChange = (event) => {
    const {
      target: { value },
    } = event;

    setchannelName(
      typeof value === "string" ? value.split(",") : value
    );
    setError(null);
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
  };

  const getChannelFunc = async () => {
    const config = {
      Headers: {
        "Content-type": "application/json",
      },
    };

    const data = await axios.get("/api/package/Bouquet", config);
    setChannelData(data);
    const viewData = await axios.get("/api/package/broadcaster");
    setViewBroadcasterData(viewData?.data);
  };

  const getChannelId = () => {
    try {
      const data = channelData.data;

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
    setLoading(true);
    try {
      const config = {
        Headers: {
          "Content-type": "application/json",
        },
      };

      const { name, image } = formData;
      console.log("channelIdsubmit>>>>", channelId);

      const formNewData = new FormData();

      formNewData.append("name", name);
      formNewData.append("image", image);

      const data = await axios.post(
        "/api/package/broadcaster",
        formNewData,
        config
      );

      console.log("data submit>>", data);

      data &&
        toast.success("Broadcaster has been created successfully", {
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
      setError(error?.response?.data?.error);
      toast.error("Failed to create the Broadcaster", {
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
    setchannelName([]);
    setLoading(false);
  };

  useEffect(() => {
    getChannelFunc();
    getChannelId();
  }, [channelName]);

  useEffect(() => {
    const isNameValid = formData.name.trim() !== "";

    const isImageValid = formData.image !== null;
    // setIsFormValid(isNameValid && isPriceValid && areChannelsSelected);
    setIsFormValid(isNameValid && isImageValid);
  }, [formData.name, formData.image]);

  return (
    <PortalHeader>
      <ToastContainer />
      <h2>Add Broadcasters</h2>
      <form onSubmit={handleSubmit} className="broadcaster-form p-5 m-5">
        <div className="mb-3">
          <label className="form-label">Broadcaster Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div style={{ color: "#071e43" }}>{error && error}</div>
        {/* <div className="mb-3">
          <label className="form-label">Broadcaster Price:</label>
          <input
            type="text"
            className="form-control"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div> */}
        <div className="mb-3">
          <label className="form-label">Broadcaster Image</label>
          <input
            type="file"
            className="form-control"
            name="image"
            onChange={handleChange}
          />
        </div>

        {/* <div>
          <FormControl sx={{ m: 1, width: 600 }}>
            <InputLabel id="demo-multiple-checkbox-label">
              Bouque Name
            </InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
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
        </div> */}

        <button
          type="submit"
          className="btn btn-primary"
          disabled={!isFormValid || loading}
        >
          {loading ? <Loader /> : "Submit"}
        </button>

        <List>
          <Typography variant="h5" gutterBottom>
            Broadcasters
          </Typography>
          <Grid container spacing={2}>
            {viewBroadcasterData?.map((item, index) => (
              <Grid item key={index} xs={12} sm={6} md={6} lg={3}>
                <Paper
                  elevation={3}
                  style={{
                    marginTop: "10px",
                    padding: "14px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ color: "#071e43" }}>
                    {item.name
                      .split(" ")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ")}
                  </div>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </List>
      </form>
    </PortalHeader>
  );
};

export default BroadcasterFormPage;

// import React, { useEffect, useState } from "react";
// import PortalHeader from "./adminHeader.jsx/PortalHeader";
// import axios from "axios";

// import OutlinedInput from "@mui/material/OutlinedInput";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import ListItemText from "@mui/material/ListItemText";
// import Select from "@mui/material/Select";
// import Checkbox from "@mui/material/Checkbox";

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };
// const BroadcasterFormPage = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     image: null,
//   });
//   const [bouqueName, setBouqueName] = useState([]);
//   const [bouqueData, setBouqueData] = useState([]);
//   const [bouqueId, setBouqueId] = useState([]);

//   const handleChange = (e) => {
//     const { name, value, type } = e.target;
//     // const value = event.target.value;

//     const newValue =
//       name === "image" && type === "file" ? e.target.files[0] : value;

//     // typeof value === "string" ? value.split(",") : value

//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: newValue,
//     }));
//   };

//   const handleBouqueChange = (event) => {
//     const value = event.target.value;
//     setBouqueName(
//       // On autofill we get a stringified value.
//       typeof value === "string" ? value.split(",") : value
//     );
//   };

//   const getBouqueFunc = async () => {
//     const config = {
//       Headers: {
//         "Content-Type": "application/json",
//       },
//     };
//     const data = await axios.get("/api/package/bouquet", config);
//     const bouques = data?.data?.map((item) => item.name);
//     console.log(bouques);
//     setBouqueData(bouques);
//   };

//   const getBouqueId = async () => {
//     const config = {
//       Headers: {
//         "Content-Type": "application/json",
//       },
//     };
//     const response = await axios.get("/api/package/bouquet", config);
//     const data = response.data;

//     // console.log("data>ID", data);
//     // console.log("languageNamebeforeID", channelName[0]);

//     let newData = data?.find((item) => item?.name === bouqueName[0]);

//     // console.log("languageNameafterID", channelName[0]);
//     // console.log("newDataID", newData);
//     // console.log("newDataidID", newData?._id);
//     console.log("newData?._id>...........>", newData?._id);
//     setBouqueId(newData?._id);
//   };

//   getBouqueId();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const config = {
//       Headers: {
//         // "Content-type": "application/json",
//         "Content-Type": "multipart/form-data",
//       },
//     };
//     const formDataToSend = new FormData();
//     formDataToSend.append("name", formData.name);
//     formDataToSend.append("image", formData.image);
//     formDataToSend.append("bouqueRef", bouqueId);
//     const data = await axios.post(
//       "/api/package/broadcaster",
//       formDataToSend,
//       config
//     );
//     console.log("databrpadcaster", data);
//   };

//   useEffect(() => {
//     getBouqueFunc();
//   }, []);

//   return (
//     <PortalHeader>
//       <form onSubmit={handleSubmit} className="broadcaster-form p-5 m-5">
//         <div className="mb-3">
//           <label className="form-label">Broadcaster Name:</label>
//           <input
//             type="text"
//             className="form-control"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Image:</label>
//           <input
//             type="file"
//             className="form-control"
//             name="image"
//             onChange={handleChange}
//           />
//         </div>

//         <div>
//           <FormControl sx={{ m: 1, width: 600 }}>
//             <InputLabel id="demo-multiple-checkbox-label">bouque</InputLabel>
//             <Select
//               labelId="demo-multiple-checkbox-label"
//               id="demo-multiple-checkbox"
//               // multiple
//               value={bouqueName}
//               onChange={handleBouqueChange}
//               // onChange={handleChange}
//               input={<OutlinedInput label="Channel Type" />}
//               renderValue={(selected) => selected.join(", ")}
//               MenuProps={MenuProps}
//             >
//               {bouqueData?.map((channel) => (
//                 <MenuItem key={channel} value={channel}>
//                   <Checkbox checked={bouqueName.indexOf(channel) > -1} />
//                   <ListItemText primary={channel} />
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//         </div>

//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </PortalHeader>
//   );
// };

// export default BroadcasterFormPage;
