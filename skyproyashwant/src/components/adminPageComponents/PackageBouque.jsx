import React, { useEffect, useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import PortalHeader from "./adminHeader.jsx/PortalHeader";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PackageBouque = () => {
  const [selectedPackage, setSelectedPackage] = useState("");
  const [broadcasterData, setBroadcasterData] = useState([]);
  const [error, setError] = useState([]);
  const [isFormValid, setIsFormValid] = useState(false);
  const [packageData, setPackageData] = useState([]);
  const [bouqueName, setBouqueName] = useState([]);
  const [bouqueData, setBouqueData] = useState([]);
  const [selectedBroadcasters, setSelectedBroadcasters] = useState([]);
  const [filteredBouquets, setFilteredBouquets] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);

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

  const handlePackageChange = (event) => {
    const {
      target: { name, checked },
    } = event;

    setSelectedPackage(checked ? name : "");
    setError(null);
  };

  const handleBroadcasterChange = (event) => {
    const {
      target: { name, checked },
    } = event;

    setSelectedBroadcasters((prevBroadcasters) =>
      checked
        ? [...prevBroadcasters, name]
        : prevBroadcasters.filter((b) => b !== name)
    );
    setError(null);
  };

  const handleBouqueChange = (event) => {
    const {
      target: { name, checked },
    } = event;

    setBouqueName((prevNames) =>
      checked ? [...prevNames, name] : prevNames.filter((n) => n !== name)
    );
    setError(null);
  };

  const getBroadcasterFunc = async () => {
    try {
      const config = {
        Headers: {
          "Content-type": "application/json",
        },
      };

      const data = await axios.get("/api/package/Broadcaster", config);

      setBroadcasterData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPackageFunc = async () => {
    try {
      const config = {
        Headers: {
          "Content-type": "application/json",
        },
      };
      const data = await axios.get("/api/package/pack", config);
      setPackageData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getBouqueFunc = async () => {
    try {
      const config = {
        Headers: {
          "Content-type": "application/json",
        },
      };
      const data = await axios.get("/api/package/bouquet", config);
      setBouqueData(data);
    } catch (error) {
      console.log(error);
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

      const packageRefId = packageData.data.find(
        (item) => item.name === selectedPackage
      )._id;
      const broadcasterRefIds = broadcasterData.data
        .filter((item) => selectedBroadcasters.includes(item.name))
        .map((item) => item._id);

      const bouqueRefIds = bouqueData.data
        .filter((item) => bouqueName.includes(item.name))
        .map((item) => item._id);

      const data = await axios.post(
        "/api/package/package-bouque",
        {
          packageRef: packageRefId,
          broadcasterRef: broadcasterRefIds,
          bouqueRef: bouqueRefIds,
        },
        config
      );

      console.log("data submit>>", data);

      // Calculate total price based on selected bouquets
      const selectedBouquetPrices = bouqueData.data
        .filter((item) => bouqueName.includes(item.name))
        .map((item) => Number(item.price));

      const totalPrice = selectedBouquetPrices.reduce(
        (acc, price) => acc + price,
        0
      );
      setTotalPrice(totalPrice);

      data &&
        toast.success("package has been created successfully", {
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
      console.log(error);
      setError(error?.response?.data?.error);
      toast.error("Failed to create the package", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: { fontSize: "18px", textAlign: "center", color: "red" },
      });

      resetFormFields();
    }
    resetFormFields();
    setSelectedBroadcasters([]);
    setSelectedPackage("");
  };

  useEffect(() => {
    getBroadcasterFunc();
    getPackageFunc();
    getBouqueFunc();
  }, []);

  useEffect(() => {
    const areChannelsSelected =
      selectedBroadcasters.length > 0 && selectedPackage !== "";
    setIsFormValid(areChannelsSelected);
  }, [selectedBroadcasters, selectedPackage]);

  useEffect(() => {
    const fetchBouquets = async () => {
      try {
        const config = {
          Headers: {
            "Content-type": "application/json",
          },
        };

        const data = await axios.get("/api/package/bouquet", config);

        // Filter bouquets based on the selected broadcasters
        const filteredBouquets = data.data
          .filter((bouquet) =>
            selectedBroadcasters.includes(bouquet.broadcasterRef.name)
          )
          .map((item) => item.name);
        setFilteredBouquets(filteredBouquets);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBouquets();
  }, [selectedBroadcasters]);

  // useEffect(() => {
  //   // Calculate total price based on selected bouquets
  //   const selectedBouquetPrices = bouqueData.data
  //     .filter((item) => bouqueName.includes(item.name))
  //     .map((item) => Number(item.price));

  //   const totalPrice = selectedBouquetPrices.reduce(
  //     (acc, price) => acc + price,
  //     0
  //   );
  //   setTotalPrice(totalPrice);
  // }, [bouqueName, filteredBouquets]);

  useEffect(() => {
    // Calculate total price based on selected bouquets
    const selectedBouquetPrices = bouqueData.data
      ?.filter((item) => bouqueName.includes(item.name))
      ?.map((item) => Number(item.price));

    const totalPrice = selectedBouquetPrices?.reduce(
      (acc, price) => acc + price,
      0
    );
    setTotalPrice(totalPrice);
  }, [bouqueName, bouqueData]);

  return (
    <PortalHeader>
      <ToastContainer />
      <form onSubmit={handleSubmit} className="broadcaster-form p-5 m-5">
        <div>
          <h4>Select a package Name</h4>
          {packageData?.data?.map((item) => (
            <FormControlLabel
              key={item.name}
              control={
                <Checkbox
                  checked={selectedPackage === item.name}
                  onChange={handlePackageChange}
                  name={item.name}
                />
              }
              label={item.name}
            />
          ))}
        </div>
        <div style={{ color: "red" }}>{error && error}</div>

        <div>
          <h4>Broadcaster Name</h4>
          {broadcasterData?.data?.map((item) => (
            <FormControlLabel
              key={item.name}
              control={
                <Checkbox
                  checked={selectedBroadcasters.includes(item.name)}
                  onChange={handleBroadcasterChange}
                  name={item.name}
                />
              }
              label={item.name}
            />
          ))}
        </div>
        {/* {selectedBroadcasters.length > 0 && (
          <div>
            <h4>Bouquet Name</h4>
            {filteredBouquets?.map((name) => (
              <FormControlLabel
                key={name}
                control={
                  <Checkbox
                    checked={bouqueName.includes(name)}
                    onChange={handleBouqueChange}
                    name={name}
                  />
                }
                label={name}
              />
            ))}
          </div>
        )} */}

        {selectedBroadcasters.length > 0 && (
          <div>
            <h4>Bouquet Name</h4>
            {filteredBouquets?.map((name) => {
              const selectedBouquet = bouqueData.data.find(
                (bouquet) => bouquet.name === name
              );

              return (
                <div key={name}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={bouqueName.includes(name)}
                        onChange={handleBouqueChange}
                        name={name}
                      />
                    }
                    label={`${name} Price: Rs ${selectedBouquet.price}`}
                  />
                </div>
              );
            })}
          </div>
        )}

        <div>
          <h4>Total Price</h4>
          <p>{totalPrice}</p>
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
  );
};

export default PackageBouque;

//----------------------------only individual broadcaster selected---------------------------------------------------------------------
// import React, { useEffect, useState } from "react";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import PortalHeader from "./adminHeader.jsx/PortalHeader";
// import axios from "axios";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const PackageBouque = () => {
//   const [selectedPackage, setSelectedPackage] = useState("");
//   const [broadcasterData, setBroadcasterData] = useState([]);
//   const [error, setError] = useState([]);
//   const [isFormValid, setIsFormValid] = useState(false);
//   const [packageData, setPackageData] = useState([]);
//   const [bouqueName, setBouqueName] = useState([]);
//   const [bouqueData, setBouqueData] = useState([]);
//   const [selectedBroadcasters, setSelectedBroadcasters] = useState([]);
//   const [filteredBouquets, setFilteredBouquets] = useState([]);

//   const [formData, setFormData] = useState({
//     name: "",
//     price: "",
//   });

//   const resetFormFields = () => {
//     setFormData({
//       name: "",
//       price: "",
//     });
//   };

//   const handlePackageChange = (event) => {
//     const {
//       target: { name, checked },
//     } = event;

//     setSelectedPackage(checked ? name : "");
//     setError(null);
//   };

//   const handleBroadcasterChange = (event) => {
//     const {
//       target: { name, checked },
//     } = event;

//     setSelectedBroadcasters((prevBroadcasters) =>
//       checked
//         ? [...prevBroadcasters, name]
//         : prevBroadcasters.filter((b) => b !== name)
//     );
//     setError(null);
//   };

//   const handleBouqueChange = (event) => {
//     const {
//       target: { name, checked },
//     } = event;

//     setBouqueName((prevNames) =>
//       checked ? [...prevNames, name] : prevNames.filter((n) => n !== name)
//     );
//     setError(null);
//   };

//   const getBroadcasterFunc = async () => {
//     try {
//       const config = {
//         Headers: {
//           "Content-type": "application/json",
//         },
//       };

//       const data = await axios.get("/api/package/Broadcaster", config);

//       setBroadcasterData(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const getPackageFunc = async () => {
//     try {
//       const config = {
//         Headers: {
//           "Content-type": "application/json",
//         },
//       };
//       const data = await axios.get("/api/package/pack", config);
//       setPackageData(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const getBouqueFunc = async () => {
//     try {
//       const config = {
//         Headers: {
//           "Content-type": "application/json",
//         },
//       };
//       const data = await axios.get("/api/package/bouquet", config);
//       setBouqueData(data);
//     } catch (error) {
//       console.log(error);
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

//       const data = await axios.post(
//         "/api/package/package-bouque",
//         {
//           packageRef: selectedPackage,
//           broadcasterRef: selectedBroadcasters,
//           bouqueRef: bouqueName,
//         },
//         config
//       );

//       console.log("data submit>>", data);

//       data &&
//         toast.success("package has been created successfully", {
//           position: "top-center",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           style: { fontSize: "18px", textAlign: "center" },
//         });
//     } catch (error) {
//       console.log(error);
//       setError(error?.response?.data?.error);
//       toast.error("Failed to create the package", {
//         position: "top-center",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         style: { fontSize: "18px", textAlign: "center", color: "red" },
//       });

//       resetFormFields();
//     }
//     resetFormFields();
//     setSelectedBroadcasters([]);
//     setSelectedPackage("");
//   };

//   useEffect(() => {
//     getBroadcasterFunc();
//     getPackageFunc();
//     getBouqueFunc();
//   }, []);

//   useEffect(() => {
//     const areChannelsSelected = selectedBroadcasters.length > 0 && selectedPackage !== "";
//     setIsFormValid(areChannelsSelected);
//   }, [selectedBroadcasters, selectedPackage]);

//   useEffect(() => {
//     const fetchBouquets = async () => {
//       try {
//         const config = {
//           Headers: {
//             "Content-type": "application/json",
//           },
//         };

//         const data = await axios.get("/api/package/bouquet", config);

//         // Filter bouquets based on the selected broadcasters
//         const filteredBouquets = data.data
//           .filter((bouquet) =>
//             selectedBroadcasters.includes(bouquet.broadcasterRef.name)
//           )
//           .map((item) => item.name);
//         setFilteredBouquets(filteredBouquets);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchBouquets();
//   }, [selectedBroadcasters]);

//   return (
//     <PortalHeader>
//       <ToastContainer />
//       <form onSubmit={handleSubmit} className="broadcaster-form p-5 m-5">
//         <div>
//           <h4>Select a package Name</h4>
//           {packageData?.data?.map((item) => (
//             <FormControlLabel
//               key={item.name}
//               control={
//                 <Checkbox
//                   checked={selectedPackage === item.name}
//                   onChange={handlePackageChange}
//                   name={item.name}
//                 />
//               }
//               label={item.name}
//             />
//           ))}
//         </div>
//         <div style={{ color: "red" }}>{error && error}</div>

//         <div>
//           <h4>Broadcaster Name</h4>
//           {broadcasterData?.data?.map((item) => (
//             <FormControlLabel
//               key={item.name}
//               control={
//                 <Checkbox
//                   checked={selectedBroadcasters.includes(item.name)}
//                   onChange={handleBroadcasterChange}
//                   name={item.name}
//                 />
//               }
//               label={item.name}
//             />
//           ))}
//         </div>
//         {selectedBroadcasters.length > 0 && (
//           <div>
//             <h4>Bouquet Name</h4>
//             {filteredBouquets?.map((name) => (
//               <FormControlLabel
//                 key={name}
//                 control={
//                   <Checkbox
//                     checked={bouqueName.includes(name)}
//                     onChange={handleBouqueChange}
//                     name={name}
//                   />
//                 }
//                 label={name}
//               />
//             ))}
//           </div>
//         )}

//         <button
//           type="submit"
//           className="btn btn-primary"
//           disabled={!isFormValid}
//         >
//           Submit
//         </button>
//       </form>
//     </PortalHeader>
//   );
// };

// export default PackageBouque;

//----------------------main initially---------------------------------------------------------------

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

// const PackageBouque = () => {
//   const [broadcasterName, setBroadcasterName] = useState([]);
//   const [broadcasterId, setBroadcasterId] = useState([]);
//   const [broadcasterData, setBroadcasterData] = useState([]);
//   const [error, setError] = useState([]);
//   const [isFormValid, setIsFormValid] = useState(false);
//   const [packageName, setPackageName] = useState([]);
//   const [packageId, setPackageId] = useState([]);
//   const [packageData, setPackageData] = useState([]);
//   const [bouqueName, setBouqueName] = useState([]);
//   const [bouqueId, setBouqueId] = useState([]);
//   const [bouqueData, setBouqueData] = useState([]);

//   const [filteredBouquets, setFilteredBouquets] = useState([]);

//   const [formData, setFormData] = useState({
//     name: "",
//     price: "",
//   });

//   const resetFormFields = () => {
//     setFormData({
//       name: "",
//       price: "",
//     });
//   };

//   const handleBroadcasterChange = (event) => {
//     const {
//       target: { value },
//     } = event;

//     setBroadcasterName(typeof value === "string" ? value.split(",") : value);
//     setError(null);

//     // Filter bouquets based on the selected broadcasters
//     // const filteredBouquets = bouqueData.data.filter((bouquet) =>
//     //   broadcasterId.includes(bouquet.broadcasterRef)
//     // );
//     // console.log(
//     //   "filteredBouquets in broadcaster handle change>>>",
//     //   filteredBouquets
//     // );
//     // const filteredBouqueName = filteredBouquets.map((item) => item.name);
//     // console.log(
//     //   "filteredBouquetName in broadcaster handle change>>>",
//     //   filteredBouqueName
//     // );
//     // setFilteredBouquets(filteredBouqueName);

//     // await getBroadcasterId();

//     // // Filter bouquets based on the selected broadcasters
//     // if (broadcasterId.length > 0) {
//     //   const filteredBouquets = bouqueData.data.filter((bouquet) =>
//     //     broadcasterId.includes(bouquet.broadcasterRef)
//     //   );
//     //   console.log(
//     //     "filteredBouquets in broadcaster handle change>>>",
//     //     filteredBouquets
//     //   );
//     //   const filteredBouqueName = filteredBouquets.map((item) => item.name);
//     //   console.log(
//     //     "filteredBouquetName in broadcaster handle change>>>",
//     //     filteredBouqueName
//     //   );
//     //   setFilteredBouquets(filteredBouqueName);
//     // }

//     if (bouqueData.data.length > 0) {
//       const filteredBouquets = bouqueData.data.filter((bouquet) =>
//         value.includes(bouquet.broadcasterRef.name)
//       );
//       console.log(
//         "filteredBouquets in broadcaster handle change>>>",
//         filteredBouquets
//       );
//       const filteredBouqueName = filteredBouquets.map((item) => item.name);
//       console.log(
//         "filteredBouquetName in broadcaster handle change>>>",
//         filteredBouqueName
//       );
//       setFilteredBouquets(filteredBouqueName);
//     }
//   };

//   const handlePackageChange = (e) => {
//     const value = e.target.value;
//     setPackageName(typeof value === "string" ? value.split(",") : value);
//     setError(null);
//   };

//   const handleBouqueChange = (e) => {
//     const value = e.target.value;
//     setBouqueName(typeof value === "string" ? value.split(",") : value);
//     setError(null);
//   };

//   const getBroadcasterFunc = async () => {
//     try {
//       const config = {
//         Headers: {
//           "Content-type": "application/json",
//         },
//       };

//       const data = await axios.get("/api/package/Broadcaster", config);

//       setBroadcasterData(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const getBroadcasterId = () => {
//     try {
//       const data = broadcasterData.data;

//       const broadcasterIds = broadcasterName.map((name) => {
//         const channel = data?.find((item) => item?.name === name);

//         return channel?._id;
//       });

//       console.log("broadcasterIdfunc>>", broadcasterIds);
//       setBroadcasterId(broadcasterIds);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const getPackageFunc = async () => {
//     try {
//       const config = {
//         Headers: {
//           "Content-type": "application/json",
//         },
//       };
//       const data = await axios.get("/api/package/pack", config);
//       setPackageData(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const getPackageId = () => {
//     try {
//       const data = packageData.data;

//       const broadcasterIds = packageName.map((name) => {
//         const channel = data?.find((item) => item?.name === name);
//         return channel?._id;
//       });
//       console.log("channelidfunc>>", broadcasterIds);
//       setPackageId(broadcasterIds);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };
//   const getBouqueFunc = async () => {
//     try {
//       const config = {
//         Headers: {
//           "Content-type": "application/json",
//         },
//       };
//       const data = await axios.get("/api/package/bouquet", config);
//       setBouqueData(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const getBouqueId = () => {
//     try {
//       const data = bouqueData.data;

//       const broadcasterIds = bouqueName.map((name) => {
//         const channel = data?.find((item) => item?.name === name);
//         return channel?._id;
//       });
//       console.log("channelidfunc>>", broadcasterIds);
//       setBouqueId(broadcasterIds);
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
//       console.log("broadcasterIdsubmit>>>>", broadcasterId);

//       const data = await axios.post(
//         "/api/package/package-bouque",
//         {
//           packageRef: packageId,
//           broadcasterRef: broadcasterId,
//           bouqueRef: bouqueId,
//         },
//         config
//       );

//       console.log("data submit>>", data);

//       data &&
//         toast.success("package has been created successfully", {
//           position: "top-center",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           style: { fontSize: "18px", textAlign: "center" },
//         });
//     } catch (error) {
//       console.log(error);
//       setError(error?.response?.data?.error);
//       toast.error("Failed to create the package", {
//         position: "top-center",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         style: { fontSize: "18px", textAlign: "center", color: "red" },
//       });

//       resetFormFields();
//     }
//     resetFormFields();
//     setBroadcasterName([]);
//   };

//   useEffect(() => {
//     getBroadcasterFunc();
//     getBroadcasterId();
//     getPackageFunc();
//     getPackageId();
//     getBouqueFunc();
//     getBouqueId();
//   }, [broadcasterName, packageName, bouqueName]);

//   useEffect(() => {
//     // const isNameValid = formData.name.trim() !== "";
//     // const isPriceValid = formData.price.trim() !== "";
//     const areChannelsSelected = broadcasterName.length > 0;

//     setIsFormValid(areChannelsSelected);
//   }, [broadcasterName]);

//   return (
//     <PortalHeader>
//       <ToastContainer />
//       <form onSubmit={handleSubmit} className="broadcaster-form p-5 m-5">
//         <div>
//           <FormControl sx={{ m: 1, width: 600 }}>
//             <InputLabel id="demo-multiple-checkbox-label">
//               Select a package Name
//             </InputLabel>
//             <Select
//               labelId="demo-multiple-checkbox-label"
//               id="demo-multiple-checkbox"
//               // multiple
//               value={packageName}
//               onChange={handlePackageChange}
//               input={<OutlinedInput label="Channel Type" />}
//               renderValue={(selected) => selected.join(", ")}
//               MenuProps={MenuProps}
//             >
//               {packageData?.data
//                 ?.map((item) => item.name)
//                 ?.map((channel) => (
//                   <MenuItem key={channel} value={channel}>
//                     <Checkbox checked={packageName.indexOf(channel) > -1} />
//                     <ListItemText primary={channel} />
//                   </MenuItem>
//                 ))}
//             </Select>
//           </FormControl>
//         </div>
//         <div style={{ color: "red" }}>{error && error}</div>

//         <div>
//           <FormControl sx={{ m: 1, width: 600 }}>
//             <InputLabel id="demo-multiple-checkbox-label">
//               Broadcaster Name
//             </InputLabel>
//             <Select
//               labelId="demo-multiple-checkbox-label"
//               id="demo-multiple-checkbox"
//               multiple
//               value={broadcasterName}
//               onChange={handleBroadcasterChange}
//               input={<OutlinedInput label="Channel Type" />}
//               renderValue={(selected) => selected.join(", ")}
//               MenuProps={MenuProps}
//             >
//               {broadcasterData?.data
//                 ?.map((item) => item.name)
//                 ?.map((channel) => (
//                   <MenuItem key={channel} value={channel}>
//                     <Checkbox checked={broadcasterName.indexOf(channel) > -1} />
//                     <ListItemText primary={channel} />
//                   </MenuItem>
//                 ))}
//             </Select>
//           </FormControl>
//         </div>
//         <div>
//           <FormControl sx={{ m: 1, width: 600 }}>
//             <InputLabel id="demo-multiple-checkbox-label">
//               Bouque Name
//             </InputLabel>
//             <Select
//               labelId="demo-multiple-checkbox-label"
//               id="demo-multiple-checkbox"
//               multiple
//               value={bouqueName}
//               onChange={handleBouqueChange}
//               input={<OutlinedInput label="Channel Type" />}
//               renderValue={(selected) => selected.join(", ")}
//               MenuProps={MenuProps}
//             >
//               {
//                 // bouqueData?.data
//                 //   ?.map((item) => item.name)
//                 filteredBouquets?.map((channel) => (
//                   <MenuItem key={channel} value={channel}>
//                     <Checkbox checked={bouqueName.indexOf(channel) > -1} />
//                     <ListItemText primary={channel} />
//                   </MenuItem>
//                 ))
//               }
//             </Select>
//           </FormControl>
//         </div>

//         <button
//           type="submit"
//           className="btn btn-primary"
//           disabled={!isFormValid}
//         >
//           Submit
//         </button>
//       </form>
//     </PortalHeader>
//   );
// };

// export default PackageBouque;
