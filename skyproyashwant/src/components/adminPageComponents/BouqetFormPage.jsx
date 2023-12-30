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
import { List, Paper, Typography } from "@mui/material";
import { ListItem } from "@mui/material";
import { Grid } from "@mui/material";

import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { FormControlLabel } from "@mui/material";

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
  const [channelName, setChannelName] = useState([]);
  const [channelId, setChannelId] = useState([]);
  const [channelData, setChannelData] = useState([]);
  const [error, setError] = useState([]);
  const [isFormValid, setIsFormValid] = useState(false);
  const [broadcasterData, setBroadcasterData] = useState([]);
  const [broadcasterName, setBroadcasterName] = useState([]);
  const [broadcasterId, setBroadcasterId] = useState([]);
  const [viewBouqueData, setViewBouqueData] = useState([]);
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

  const handleChannelChange = (event) => {
    const {
      target: { name, checked },
    } = event;

    setChannelName((prevChannels) =>
      checked
        ? [...prevChannels, name]
        : prevChannels.filter((channel) => channel !== name)
    );
    setError(null);
  };

  const handleBroadcasterChange = (event) => {
    const {
      target: { value },
    } = event;

    setBroadcasterName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(" ,") : value
    );
    setError(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

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
    setChannelData(data);
    const viewData = await axios.get("/api/package/bouquet", config);
    setViewBouqueData(viewData?.data);
  };

  const getBroadcasterFunc = async () => {
    const config = {
      Headers: {
        "Content-type": "application/json",
      },
    };
    const data = await axios.get("/api/package/broadcaster", config);
    setBroadcasterData(data);
  };

  const getChannelId = () => {
    try {
      const data = channelData.data;

      const channelIds = channelName.map((name) => {
        const channel = data?.find((item) => item?.name === name);
        return channel?._id;
      });
      setChannelId(channelIds);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getBroadcasterId = () => {
    try {
      const data = broadcasterData.data;

      const channelIds = broadcasterName.map((name) => {
        const channel = data?.find((item) => item?.name === name);
        return channel?._id;
      });
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
      console.log("channelIds inside submit>>", channelId);
      const data = await axios.post(
        "/api/package/bouquet",
        { name, price, broadcasterRef: broadcasterId },
        config
      );
      console.log("data after submitting bouque>>", data?.data?._id);

      // const newData = await axios.post(
      //   "/api/package/bouque-channel",
      //   { bouqueRef: data?.data?._id, channelRef: channelId },
      //   config
      // );

      // channelId?.map(
      //   async (Id) =>
      //     await axios.post(
      //       "/api/package/bouque-channel",
      //       { bouqueRef: data?.data?._id, channelRef: Id },
      //       config
      //     )
      // );

      await Promise.all(
        channelId?.map(
          async (Id) =>
            await axios.post(
              "/api/package/bouque-channel",
              { bouqueRef: data?.data?._id, channelRef: Id },
              config
            )
        )
      );

      data &&
        toast.success("Bouquet has been created successfully", {
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
      toast.error("Failed to create the Bouquet", {
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
    setChannelName([]);
    setBroadcasterName([]);
  };

  useEffect(() => {
    getChannelFunc();
    getBroadcasterFunc();
  }, []);

  useEffect(() => {
    getChannelId();
    getBroadcasterId();
  }, [channelName, broadcasterName]);

  useEffect(() => {
    const isNameValid = formData.name.trim() !== "";
    const isPriceValid = formData.price.trim() !== "";
    const areBroadcasterSelected = broadcasterName.length > 0;
    const areChannelsSelected = channelName.length > 0;

    setIsFormValid(
      isNameValid &&
        isPriceValid &&
        areBroadcasterSelected &&
        areChannelsSelected
    );
  }, [formData.name, formData.price, broadcasterName, channelName]);

  return (
    <>
      <PortalHeader>
        <ToastContainer />
        <h2>Add Bouquets</h2>
        <form onSubmit={handleSubmit} className="broadcaster-form p-5 m-5">
          <div className="mb-3">
            <label className="form-label">Bouquet Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div style={{ color: "#071e43" }}>{error && error}</div>
          <div className="mb-3">
            <label className="form-label">Bouquet Price</label>
            <input
              type="text"
              className="form-control"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="form-label">Broadcasters</label>
            <br />
            <FormControl sx={{ m: 1, width: 600 }}>
              <InputLabel id="demo-multiple-checkbox-label">
                Broadcaster Name
              </InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
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
                      <Checkbox
                        checked={broadcasterName.indexOf(channel) > -1}
                      />
                      <ListItemText primary={channel} />
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </div>

          <div>
            {/* <Typography variant="h6" gutterBottom style={{ fontWeight: 500 }}>
              Channels
            </Typography>
            {/* <p style={{ fontSize: '1rem', marginBottom: '0.35em', fontWeight: 'bold' }}>
  Channels
</p> */}
            <label className="form-label">Channels</label>
            <Grid container spacing={2}>
              {channelData?.data?.map((item) => (
                <Grid item key={item.name} xs={12} sm={6} md={4} lg={4} xl={3}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={channelName.includes(item.name)}
                        onChange={handleChannelChange}
                        name={item.name}
                      />
                    }
                    // label={item.name}
                    // label={
                    //   item.name.charAt(0).toUpperCase() + item.name.slice(1)
                    // }
                    label = {
                      item.name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
                    }
                  />
                </Grid>
              ))}
            </Grid>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={!isFormValid}
          >
            Submit
          </button>

          <List>
            <label className="form-label">Bouquets</label>
            {/* <Typography variant="h5" gutterBottom>
        Bouquets Available:
      </Typography> */}
            <Grid container spacing={2}>
              {viewBouqueData?.map((item, index) => (
                <Grid item key={index} xs={12} sm={6} md={6} lg={3}>
                  <Paper
                    elevation={3}
                    style={{
                      margin: "20px",
                      padding: "10px",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ color: "#071e43" }}>{item.name.split(/[ -]/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</div>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </List>
        </form>
      </PortalHeader>
    </>
  );
};

export default BouqetFormPage;

// import React, { useEffect, useState } from "react";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import ListItemText from "@mui/material/ListItemText";
// import Select from "@mui/material/Select";
// import Checkbox from "@mui/material/Checkbox";
// import PortalHeader from "./adminHeader.jsx/PortalHeader";
// import axios from "axios";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { FormControlLabel } from "@mui/material";

// const channels = ["star plus", "mtv", "aat tak"];

// const broadcasters = [
//   "Discovery Communications India",
//   "Celebrities Management Pvt Ltd",
//   "Eenadu Television Pvt Ltd",
// ];

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

// const BouqetFormPage = () => {
//   const [channelName, setchannelName] = useState([]);
//   const [channelId, setChannelId] = useState([]);
//   const [channelData, setChannelData] = useState([]);
//   const [error, setError] = useState([]);
//   const [isFormValid, setIsFormValid] = useState(false);
//   const [broadcasterData, setBroadcasterData] = useState([]);
//   const [broadcasterName, setBroadcasterName] = useState([]);
//   const [broadcasterId, setBroadcasterId] = useState([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     price: "",
//     // channels: "",
//   });

//   //   const {
//   //     target: { value },
//   //   } = event;
//   //   setBroadcasterName(
//   //     // On autofill we get a stringified value.
//   //     typeof value === "string" ? value.split(",") : value
//   //   );
//   // };

//   const resetFormFields = () => {
//     setFormData({
//       name: "",
//       price: "",
//     });
//   };

//   const handleChannelChange = (event) => {
//     const {
//       target: { value },
//     } = event;

//     setchannelName(
//       // On autofill we get a stringified value.
//       typeof value === "string" ? value.split(",") : value
//     );
//     setError(null);
//   };
//   const handleBroadcasterChange = (event) => {
//     const {
//       target: { value },
//     } = event;

//     setBroadcasterName(
//       // On autofill we get a stringified value.
//       typeof value === "string" ? value.split(",") : value
//     );
//     setError(null);
//   };

//   const handleChange = (e) => {
//     const { name, value, type } = e.target;

//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));

//     setError(null);
//   };

//   const getChannelFunc = async () => {
//     const config = {
//       Headers: {
//         "Content-type": "application/json",
//       },
//     };

//     const data = await axios.get("/api/package/channel", config);
//     // console.log("datagetChannel>", data?.data);

//     // const channels = data?.data?.map((item) => item.name);

//     setChannelData(data);
//   };

//   const getBroadcasterFunc = async () => {
//     const config = {
//       Headers: {
//         "Content-type": "application/json",
//       },
//     };
//     const data = await axios.get("/api/package/broadcaster", config);
//     setBroadcasterData(data);
//   };

//   const getChannelId = () => {
//     try {
//       const data = channelData.data;

//       // let newData = data?.find((item) => item?.name === channelName[0]);

//       // const channelIds = channelName.map((name, index) => {
//       //   const newData = data?.find((item) => item?.name === name);
//       //   return newData?._id;
//       // });

//       const channelIds = channelName.map((name) => {
//         const channel = data?.find((item) => item?.name === name);
//         return channel?._id;
//       });
//       console.log("channelidfunc>>", channelIds);
//       setChannelId(channelIds);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };
//   const getBroadcasterId = () => {
//     try {
//       const data = broadcasterData.data;

//       // let newData = data?.find((item) => item?.name === channelName[0]);

//       // const channelIds = channelName.map((name, index) => {
//       //   const newData = data?.find((item) => item?.name === name);
//       //   return newData?._id;
//       // });

//       const channelIds = broadcasterName.map((name) => {
//         const channel = data?.find((item) => item?.name === name);
//         return channel?._id;
//       });
//       console.log("channelidfunc>>", channelIds);
//       setBroadcasterId(channelIds);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const config = {
//         Headers: {
//           "Content-type": "application/json",
//         },
//       };

//       const { name, price } = formData;
//       console.log("channelIdsubmit>>>>", channelId);

//       const data = await axios.post(
//         "/api/package/bouquet",
//         { name, price, broadcasterRef: broadcasterId },
//         config
//       );

//       console.log("data submit>>", data);

//       data &&
//         toast.success("Bouque has been created successfully", {
//           position: "top-center", // Set the position of the toast
//           autoClose: 5000, // Set the duration in milliseconds (e.g., 5000 = 5 seconds)
//           hideProgressBar: false, // Show or hide the progress bar
//           closeOnClick: true, // Close the toast when clicked
//           pauseOnHover: true, // Pause the timer when hovered
//           draggable: true, // Allow dragging the toast
//           progress: undefined, // Use the default progress bar
//           style: { fontSize: "18px", textAlign: "center" }, // Customize the style of the toast
//         });
//     } catch (error) {
//       setError(error?.response?.data?.error);
//       toast.error("Failed to create the Bouque", {
//         position: "top-center", // Set the position of the toast
//         autoClose: 5000, // Set the duration in milliseconds (e.g., 5000 = 5 seconds)
//         hideProgressBar: false, // Show or hide the progress bar
//         closeOnClick: true, // Close the toast when clicked
//         pauseOnHover: true, // Pause the timer when hovered
//         draggable: true, // Allow dragging the toast
//         progress: undefined, // Use the default progress bar
//         style: { fontSize: "18px", textAlign: "center", color: "red" }, // Customize the style of the toast
//       });

//       resetFormFields();
//     }
//     resetFormFields();
//     setchannelName([]);
//     setBroadcasterName([]);
//   };

//   useEffect(() => {
//     getChannelFunc();
//     getBroadcasterFunc();
//     getChannelId();
//     getBroadcasterId();
//   }, [channelName, broadcasterName]);

//   useEffect(() => {
//     const isNameValid = formData.name.trim() !== "";
//     const isPriceValid = formData.price.trim() !== "";
//     // const areChannelsSelected = channelName.length > 0;
//     const areBroadcasterSelected = broadcasterName.length > 0;

//     setIsFormValid(isNameValid && isPriceValid && areBroadcasterSelected);
//   }, [formData.name, formData.price, broadcasterName]);

//   return (
//     <>
//       <PortalHeader>
//         <ToastContainer />
//         <form onSubmit={handleSubmit} className="broadcaster-form p-5 m-5">
//           <div className="mb-3">
//             <label className="form-label">Bouquet Name:</label>
//             <input
//               type="text"
//               className="form-control"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//             />
//           </div>
//           <div style={{ color: "red" }}>{error && error}</div>
//           <div className="mb-3">
//             <label className="form-label">Bouquet Price:</label>
//             <input
//               type="text"
//               className="form-control"
//               name="price"
//               value={formData.price}
//               onChange={handleChange}
//             />
//           </div>

//           <div>
//             <FormControl sx={{ m: 1, width: 600 }}>
//               <InputLabel id="demo-multiple-checkbox-label">
//                 Broadcaster Name
//               </InputLabel>
//               <Select
//                 labelId="demo-multiple-checkbox-label"
//                 id="demo-multiple-checkbox"
//                 // multiple
//                 value={broadcasterName}
//                 onChange={handleBroadcasterChange}
//                 input={<OutlinedInput label="Channel Type" />}
//                 renderValue={(selected) => selected.join(", ")}
//                 MenuProps={MenuProps}
//               >
//                 {broadcasterData?.data
//                   ?.map((item) => item.name)
//                   ?.map((channel) => (
//                     <MenuItem key={channel} value={channel}>
//                       <Checkbox
//                         checked={broadcasterName.indexOf(channel) > -1}
//                       />
//                       <ListItemText primary={channel} />
//                     </MenuItem>
//                   ))}
//               </Select>
//             </FormControl>
//           </div>

//           <div>
//             <h4>channel Name</h4>
//             {channelData?.data?.map((item) => (
//               <FormControlLabel
//                 key={item.name}
//                 control={
//                   <Checkbox
//                     // checked={selectedPackage === item.name}
//                     onChange={handleChannelChange}
//                     name={item.name}
//                   />
//                 }
//                 label={item.name}
//               />
//             ))}
//           </div>

//           <button
//             type="submit"
//             className="btn btn-primary"
//             disabled={!isFormValid}
//           >
//             Submit
//           </button>
//         </form>
//       </PortalHeader>
//     </>
//   );
// };

// export default BouqetFormPage;
