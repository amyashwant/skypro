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

    try {
      const config = {
        Headers: {
          "Content-type": "application/json",
        },
      };

      const { name, price } = formData;
      console.log("channelIdsubmit>>>>", channelId);

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
        {/* <div className="mb-3">
          <label className="form-label">Pa Price:</label>
          <input
            type="text"
            className="form-control"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div> */}

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

// const PackageFormPage = () => {
//   const [broadcasterName, setBroadcasterName] = useState([]);

//   const [broadcasterData, setBroadcasterData] = useState([]);
//   const [broadcasterId, setBroadcasterId] = useState([]);
//   const [bouqueData, setBouqueData] = useState([]);
//   const [availableBouque, setAvailableBouque] = useState([]);

//   const [formData, setFormData] = useState({
//     name: "",
//     price: "",
//   });

//   const handleBroadcasterChange = (event) => {
//     const {
//       target: { value },
//     } = event;
//     setBroadcasterName(
//       // On autofill we get a stringified value.
//       typeof value === "string" ? value.split(",") : value
//     );
//   };

//   const handleChange = (e) => {
//     const { name, value, type } = e.target;
//     // const value = event.target.value;

//     // const newValue =
//     //   name === "image" && type === "file" ? e.target.files[0] : value;

//     // typeof value === "string" ? value.split(",") : value

//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const getBroadcasterId = async () => {
//     try {
//       const config = {
//         headers: {
//           "Content-type": "application/json",
//         },
//       };

//       const responseTwo = await axios.get("/api/package/broadcaster", config);
//       console.log("bouquetFormBroadcater>>>", responseTwo);

//       let newDataTwo = responseTwo?.data?.find(
//         (item) => item?.name === broadcasterName[0]
//       );
//       setBroadcasterId(newDataTwo?._id);
//       console.log("setBroadcasterId>>c?????????????????", broadcasterId);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   getBroadcasterId();

//   const getBroadcasterFunc = async () => {
//     const config = {
//       Headers: {
//         "Content-Type": "application/json",
//       },
//     };

//     const data = await axios.get("/api/package/broadcaster", config);

//     const newData = data?.data?.map((item) => item.name);
//     console.log("newDatabroad>", data?.data);
//     setBroadcasterData(newData);

//     // const selectedObj = data?.find((item) => item?._id === broadcasterId);
//     // const bouqueRefValue = selectedObj?.bouqueRef;
//     // setAvailableBouque(bouqueRefValue);
//   };

//   const getBouqueFunc = async () => {
//     const config = {
//       Headers: {
//         "Content-Type": "application/json",
//       },
//     };
//     const data = await axios.get("/api/package/bouquet", config);
//     console.log("data bouque all>>", data?.data);
//     const bouques = data?.data?.map((item) => item._id);
//     console.log("bouques id all>>", bouques);
//     setBouqueData(bouques);
//   };

//   getBouqueFunc();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const config = {
//       Headers: {
//         "Content-type": "application/json",
//       },
//     };
//     const { name, price } = formData;

//     const { data } = await axios.post(
//       "/api/package/pack",
//       // { name, price, broadcasterRef: ["657a0162a5c4d9a6637fe0e9","6579fe6ac4dde561a560c9e2"] },
//       { name, price, broadcasterRef: broadcasterId },
//       config
//     );
//     console.log("data>>after submit package final", data);
//   };

//   useEffect(() => {
//     getBroadcasterFunc();
//   }, []);

//   return (
//     <PortalHeader>
//       <form onSubmit={handleSubmit} className="broadcaster-form p-5 m-5">
//         <div className="mb-3">
//           <label className="form-label">Package Name:</label>
//           <input
//             type="text"
//             className="form-control"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Package Price:</label>
//           <input
//             type="text"
//             className="form-control"
//             name="price"
//             value={formData.price}
//             onChange={handleChange}
//           />
//         </div>

//         <div>
//           <FormControl sx={{ m: 1, width: 600 }}>
//             <InputLabel id="demo-multiple-checkbox-label">
//               Broadcaster
//             </InputLabel>
//             <Select
//               labelId="demo-multiple-checkbox-label"
//               id="demo-multiple-checkbox"
//               // multiple
//               value={broadcasterName}
//               onChange={handleBroadcasterChange}
//               input={<OutlinedInput label="Broadcaster" />}
//               renderValue={(selected) => selected.join(", ")}
//               MenuProps={MenuProps}
//             >
//               {broadcasterData.map((broadcaster) => (
//                 <MenuItem key={broadcaster} value={broadcaster}>
//                   <Checkbox
//                     checked={broadcasterName.indexOf(broadcaster) > -1}
//                   />
//                   <ListItemText primary={broadcaster} />
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//         </div>

//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//       {/* <div>
//         {availableBouque?.map((item, index) => {
//           return <div> {item.name}</div>;
//         })}
//       </div> */}
//     </PortalHeader>
//   );
// };

// export default PackageFormPage;
