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

const TypeFormPage = () => {
  const [formData, setFormData] = useState({
    name: "",
  });

  const [formDataUpdate, setFormDataUpdate] = useState({
    name: "",
  });

  const [languageOne, setLanguageOne] = useState();
  const [open, setOpen] = useState(false);
  const [error, setError] = useState();
  const [typeData, setTypeData] = useState();
  const [loading, setLoading] = useState(false);
  const [getLoading, setGetLoading] = useState(false);

  const [selectedType, setSelectedType] = useState(null);
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const handleSettings = (type) => {
    setSelectedType(type);
    setOpen(true);
  };
  const getTypeFunc = async () => {
    setGetLoading(true);
    const config = {
      Headers: {
        "Content-type": "application/json",
      },
    };
    try {
      const data = await axios.get("/api/package/type", config);
      setTypeData(data);
    } catch (error) {
      console.log("Error fetching data:", error);
      if (error.response) {
        setError("Server Error. Please try again later.");
      } else if (error.request) {
        setError("Network Error. Please check your internet connection.");
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setGetLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const config = {
        Headers: {
          "Content-type": "application/json",
          // "Content-Type": "multipart/form-data",
        },
      };
      const { name } = formData;
      const data = await axios.post(
        "/api/package/type",
        { name: name.toUpperCase() },
        config
      );
      console.log("data post>>>", data?.data?.name);
      await getTypeFunc();
    } catch (error) {
      console.log("error.response>>>>", error?.response?.data?.error);
      setError(error?.response?.data?.error);
    }

    setFormData((prevData) => ({
      ...prevData,
      name: "",
    }));
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
        `/api/package/type/${selectedType._id}`,
        { name: name.toUpperCase() },
        config
      );

      setLoading(false);
      handleClose();
      await getTypeFunc();
    } catch (error) {
      setError(error?.response?.data?.error);
      console.log(error);
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name } = e.target;

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

  const handleDelete = async (e) => {
    console.log("deleted type", selectedType);

    const data = await axios.delete(`/api/package/type/${selectedType._id}`);
    await getTypeFunc();
    setDeleteConfirmationOpen(false);
  };

  const handleDeleteConfirmationOpen = (item) => {
    setSelectedType(item);
    setDeleteConfirmationOpen(true);
  };

  const handleDeleteConfirmationClose = (item) => {
    setDeleteConfirmationOpen(false);
  };

  useEffect(() => {
    if (selectedType) {
      setFormDataUpdate({
        name: selectedType.name,
      });
    }
  }, [selectedType]);

  useEffect(() => {
    getTypeFunc();
  }, []);

  console.log(typeData?.data[0]?.name, "typeData>>");
  return (
    <>
      <PortalHeader>
        <h2>Add Type</h2>
        <form onSubmit={handleSubmit} className="broadcaster-form p-5 m-5">
          <div className="language-div mb-3">
            <label className="language-label form-label">Channel Type</label>
            <input
              className="form-label2"
              type="text"
              // className="form-control"
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
              color: "#071e43",
              fontSize: "20px",
            }}
          >
            Type Available
          </div>

          <div style={{ fontSize: "10px" }}>{getLoading ? <Loader /> : ""}</div>
          <Grid container spacing={2}>
            {typeData?.data?.map((item, index) => (
              <Grid item key={index} xs={12} sm={6} md={6} lg={4} xl={4}>
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

export default TypeFormPage;

// import React, { useEffect, useState } from "react";
// import PortalHeader from "./adminHeader.jsx/PortalHeader";
// import axios from "axios";
// import { Grid } from "@mui/material";
// import { Paper } from "@mui/material";
// import Loader from "../../common/loaderComponent.jsx/Loader";

// const TypeFormPage = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//   });

//   const [languageOne, setLanguageOne] = useState();
//   const [error, setError] = useState();
//   const [typeData, setTypeData] = useState();
//   const [loading, setLoading] = useState(false);
//   const [getLoading, setGetLoading] = useState(false);
//   const getTypeFunc = async () => {
//     setGetLoading(true);
//     const config = {
//       Headers: {
//         "Content-type": "application/json",
//       },
//     };
//     try {
//       const data = await axios.get("/api/package/type", config);
//       setTypeData(data);
//     } catch (error) {
//       console.log("Error fetching data:", error);
//       if (error.response) {
//         setError("Server Error. Please try again later.");
//       } else if (error.request) {
//         setError("Network Error. Please check your internet connection.");
//       } else {
//         setError("An unexpected error occurred.");
//       }
//     } finally {
//       setGetLoading(false);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
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
//         "/api/package/type",
//         { name: name.toUpperCase() },
//         config
//       );
//       console.log("data post>>>", data?.data?.name);
//       // setTypeData(data);
//       await getTypeFunc();
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
//     getTypeFunc();
//   }, []);

//   console.log(typeData?.data[0]?.name, "typeData>>");
//   return (
//     <PortalHeader>
//       <h2>Add Type</h2>
//       <form onSubmit={handleSubmit} className="broadcaster-form p-5 m-5">
//         <div className="language-div mb-3">
//           <label className="language-label form-label">Channel Type</label>
//           <input
//             className="form-label2"
//             type="text"
//             // className="form-control"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//         </div>
//         <div style={{ color: "#071e43" }}>{error && error}</div>
//         <button
//           type="submit"
//           className="btn btn-primary"
//           disabled={formData.name === "" || loading}
//         >
//           {loading ? <Loader /> : "Submit"}
//         </button>
//         <div
//           style={{
//             marginTop: "30px",
//             color: "#071e43",
//             fontSize: "20px",
//           }}
//         >
//           Type Available
//         </div>

//         <div style={{ fontSize: "10px" }}>{getLoading ? <Loader /> : ""}</div>
//         {/* <div>
//           {typeData?.data?.map((item, index) => {
//             return (
//               <div style={{ margin: "20px", color: "red" }}>{item.name}</div>
//             );
//           })}
//         </div> */}
//         <Grid container spacing={2}>
//           {typeData?.data?.map((item, index) => (
//             <Grid item key={index} xs={12} sm={6} md={6} lg={2}>
//               <Paper
//                 elevation={3}
//                 style={{ margin: "20px", padding: "10px", textAlign: "center" }}
//               >
//                 <div style={{ color: "#071e43" }}>{item.name}</div>
//               </Paper>
//             </Grid>
//           ))}
//         </Grid>
//       </form>
//     </PortalHeader>
//   );
// };

// export default TypeFormPage;
