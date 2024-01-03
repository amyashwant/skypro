// import React, { useEffect, useState } from "react";
// import PortalHeader from "./adminHeader.jsx/PortalHeader";
// import axios from "axios";
// import {
//   Box,
//   Button,
//   FormControl,
//   FormGroup,
//   Grid,
//   IconButton,
//   Input,
//   InputLabel,
//   ListItem,
//   ListItemText,
//   Modal,
//   Switch,
//   Typography,
// } from "@mui/material";
// import { Paper } from "@mui/material";
// import Loader from "../../common/loaderComponent.jsx/Loader";
// import { Delete } from "@mui/icons-material";
// import EditNoteIcon from "@mui/icons-material/EditNote";
// // import currImg from "../../assets/images/packagesImages/1702451103822-Default.jpg";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   bgcolor: "background.paper",
//   border: "1px solid #ccc",
//   boxShadow: 24,
//   p: 4,
//   width: "70%",
//   //   maxWidth: 600,
//   borderRadius: 8,
//   //   textAlign: "center",
// };
// const formStyle = {
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "start",
//   justifyContent: "space-around",
//   paddingLeft: "3em",
//   marginBottom: "2em",
// };

// const LanguageFormPage = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//   });

//   const [languageOne, setLanguageOne] = useState();
//   const [error, setError] = useState();
//   const [languageData, setLanguageData] = useState();
//   const [loading, setLoading] = useState(false);

//   const [open, setOpen] = useState(false);
//   const [data, setData] = useState([]);
//   const handleClose = () => setOpen(false);
//   const handleSettings = () => {
//     setOpen(true);
//   };
//   const [checked, setChecked] = useState();

//   const handleSwitch = (event) => {
//     // event.preventDefault()
//     setChecked(event.target.checked);
//   };

//   const getLanguageFunc = async () => {
//     const config = {
//       Headers: {
//         "Content-type": "application/json",
//         // "Content-Type": "multipart/form-data",
//       },
//     };
//     const data = await axios.get("/api/package/language", config);
//     setLanguageData(data);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setLoading(true);

//     try {
//       const config = {
//         Headers: {
//           "Content-type": "application/json",
//           // "Content-Type": "multipart/form-data",
//         },
//       };
//       const { name } = formData;
//       const data = await axios.post(
//         "/api/package/language",
//         { name: name.toUpperCase() },
//         config
//       );
//       console.log("data post>>>", data?.data?.name);
//       // setLanguageData(data);
//       await getLanguageFunc();
//     } catch (error) {
//       console.log("error.response>>>>", error?.response?.data?.error);
//       setError(error?.response?.data?.error);
//     }

//     setFormData((prevData) => ({
//       ...prevData,
//       name: "", // Set the 'name' property to an empty string
//     }));
//     setLoading(false);
//   };

//   const handleChange = (e) => {
//     const { name } = e.target;

//     // const newValue =
//     //   name === "image" && type === "file" ? e.target.files[0] : value;

//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: e.target.value,
//     }));
//     setError(null);
//   };

//   useEffect(() => {
//     getLanguageFunc();
//   }, []);

//   console.log(languageData?.data[0]?.name, "languageData>>");
//   return (
//     <>
//       <PortalHeader>
//         <h2>Add Languages</h2>
//         <form onSubmit={handleSubmit} className="broadcaster-form p-5 m-5">
//           <div className="language-div mb-3">
//             <label className="language-label form-label">Language</label>
//             <input
//               className="form-label2"
//               type="text"
//               // className="form-control"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//             />
//           </div>
//           <div style={{ color: "#071e43" }}>{error && error}</div>
//           <button
//             type="submit"
//             className="btn btn-primary"
//             disabled={formData.name === "" || loading}
//           >
//             {loading ? <Loader /> : "Submit"}
//           </button>
//           <div
//             style={{
//               marginTop: "30px",
//               color: "#081e43",
//               fontSize: "20px",
//             }}
//           >
//             <div>Language Available</div>

//             <div style={{ fontSize: "10px" }}>
//               {languageData ? "" : "Loading......"}
//             </div>
//           </div>
//           <Grid container spacing={2}>
//             {languageData?.data?.map((item, index) => (
//               // <Grid item key={index} xs={12} sm={6} md={8} lg=2}>
//               <Grid item key={index} xs={12} sm={6} md={8} lg={2} xl={4}>
//                 <Paper
//                   elevation={3}
//                   style={{
//                     margin: "20px",
//                     padding: "10px",
//                     textAlign: "center",
//                   }}
//                 >
//                   {/* <div style={{ color: "#071e43" }}>{item.name}</div> */}
//                   <ListItem>
//                     <ListItemText>
//                       <Typography variant="body1">{item.name}</Typography>
//                     </ListItemText>

//                     <IconButton onClick={handleSettings}>
//                       <EditNoteIcon />
//                     </IconButton>
//                     <IconButton>
//                       <Delete />
//                     </IconButton>
//                   </ListItem>
//                 </Paper>
//               </Grid>
//             ))}
//           </Grid>
//         </form>
//       </PortalHeader>
//       <Modal
//         keepMounted
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="keep-mounted-modal-title"
//         aria-describedby="keep-mounted-modal-description"
//       >
//         <Box sx={style}>
//           <div style={{ display: "flex", justifyContent: "space-between" }}>
//             <Typography variant="h6">Language</Typography>
//             <FormGroup>
//               <Switch
//                 checked={checked}
//                 onChange={handleSwitch}
//                 inputProps={{ "aria-label": "controlled" }}
//               />
//               <Typography>{checked ? "Active" : "In-active"}</Typography>
//             </FormGroup>
//           </div>
//           <form
//             style={formStyle}
//             action="/addNews"
//             method="post"
//             encType="multipart/form-data"
//           >
//             <FormControl fullWidth mb={4}>
//               <InputLabel htmlFor="title">Name</InputLabel>
//               <Input
//                 id="title"
//                 name="title"
//                 type="text"
//                 placeholder="Enter News Title"
//               />
//             </FormControl>

//             {/* <FormControl fullWidth mt={2}>
//               <InputLabel htmlFor="title">Title</InputLabel>
//               <Input
//                 id="title"
//                 name="title"
//                 type="text"
//                 placeholder="Enter News Title"
//               />
//             </FormControl> */}

//             <Button
//               type="submit"
//               variant="contained"
//               color="primary"
//               style={{ marginTop: "20px" }}
//             >
//              Update
//             </Button>
//           </form>
//         </Box>
//       </Modal>
//     </>
//   );
// };

// export default LanguageFormPage;

//-------------------------------------------------------------------------------------------------
import React, { useEffect, useState } from "react";
import PortalHeader from "./adminHeader.jsx/PortalHeader";
import axios from "axios";
import {
  Box,
  Button,
  FormControl,
  FormGroup,
  Grid,
  IconButton,
  Input,
  InputLabel,
  ListItem,
  ListItemText,
  Modal,
  Switch,
  Typography,
} from "@mui/material";
import { Paper } from "@mui/material";
import Loader from "../../common/loaderComponent.jsx/Loader";
import { Delete } from "@mui/icons-material";
import EditNoteIcon from "@mui/icons-material/EditNote";

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

const LanguageFormPage = () => {
  const [formData, setFormData] = useState({
    name: "",
  });
  const [formDataUpdate, setFormDataUpdate] = useState({
    name: "",
  });

  const [languageOne, setLanguageOne] = useState();
  const [error, setError] = useState();
  const [languageData, setLanguageData] = useState();
  const [loading, setLoading] = useState(false);
  const [getLoading, setGetLoading] = useState(false);
  const [checked, setChecked] = useState();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const handleClose = () => setOpen(false);

  // New state variable to store the selected language for editing
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const handleSwitch = (event) => {
    setChecked(event.target.checked);
  };

  const getLanguageFunc = async () => {
    setGetLoading(true);
    const config = {
      Headers: {
        "Content-type": "application/json",
      },
    };
    try {
      const data = await axios.get("/api/package/language", config);
      setLanguageData(data);
      // setLoading(false);
    } catch (error) {
      console.log("Error fetching data:", error);
      if (error.response) {
        // The request was made, but the server responded with a status code
        // outside the range of 2xx
        setError("Server Error. Please try again later.");
      } else if (error.request) {
        // The request was made, but no response was received
        setError("Network Error. Please check your internet connection.");
      } else {
        // Something happened in setting up the request that triggered an Error
        setError("An unexpected error occurred.");
      }
      // setLoading(false);
    } finally {
      console.log("loading??>>", loading);
      setGetLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const config = {
      Headers: {
        "Content-type": "application/json",
      },
    };
    const { name } = formData;
    try {
      const data = await axios.post(
        "/api/package/language",
        { name: name.toUpperCase() },
        config
      );
      await getLanguageFunc();
    } catch (error) {
      if (error?.response?.data?.error) {
        setError(error?.response?.data?.error);
      } else {
        setError("Something went wrong");
      }
    }

    setFormData({
      name: "",
    });
    setLoading(false);
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
        `/api/package/language/${selectedLanguage._id}`,
        { name: name.toUpperCase() },
        config
      );

      setLoading(false);

      handleClose();
      await getLanguageFunc();
    } catch (error) {
      // await getLanguageFunc();
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name } = e.target;
    console.log("name>>//>", name);
    setFormData((prevData) => ({
      ...prevData,
      [name]: e.target.value,
    }));
    setError(null);
  };

  const handleChangeUpdate = (e) => {
    const { name } = e.target;

    setFormDataUpdate((prevData) => ({
      ...prevData,
      [name]: e.target.value,
    }));
    setError(null);
  };

  const handleSettings = (language) => {
    setSelectedLanguage(language);
    // setFormDataUpdate({
    //   name: language.name,
    // });
    setOpen(true);
  };

  const handleDelete = async () => {
    // Handle delete logic here
    console.log("Deleting language:", selectedLanguage);
    // Close the confirmation modal
    const data = await axios.delete(
      `/api/package/language/${selectedLanguage._id}`
    );
    await getLanguageFunc();
    setDeleteConfirmationOpen(false);
  };

  const handleDeleteConfirmationOpen = (item) => {
    setSelectedLanguage(item);
    setDeleteConfirmationOpen(true);
  };

  const handleDeleteConfirmationClose = () => {
    setDeleteConfirmationOpen(false);
  };

  useEffect(() => {
    if (selectedLanguage) {
      setFormDataUpdate({
        name: selectedLanguage.name,
      });
    }
  }, [selectedLanguage]);

  useEffect(() => {
    getLanguageFunc();
  }, []);

  return (
    <>
      <PortalHeader>
        <h2>Add Languages</h2>
        <form onSubmit={handleSubmit} className="broadcaster-form p-5 m-5">
          <div className="language-div mb-3">
            <label className="language-label form-label">Language</label>
            <input
              className="form-label2"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div style={{ color: "#071e43" }}>{error && error}</div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={formData.name === "" || loading}
          >
            {loading ? <Loader /> : "Submit"}
          </button>
          <div
            style={{
              marginTop: "30px",
              color: "#081e43",
              fontSize: "20px",
            }}
          >
            <div>Language Available</div>

            <div style={{ fontSize: "10px" }}>
              {getLoading ? <Loader /> : ""}
            </div>
          </div>
          <Grid container spacing={2}>
            {languageData?.data?.map((item, index) => (
              <Grid item key={index} xs={12} sm={6} md={8} lg={2} xl={4}>
                <Paper
                  elevation={3}
                  style={{
                    margin: "20px",
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
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
                </Paper>
              </Grid>
            ))}
          </Grid>
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
              Language
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
        </Box>
      </Modal>
    </>
  );
};

export default LanguageFormPage;
