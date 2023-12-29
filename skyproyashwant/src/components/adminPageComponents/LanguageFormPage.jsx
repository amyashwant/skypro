import React, { useEffect, useState } from "react";
import PortalHeader from "./adminHeader.jsx/PortalHeader";
import axios from "axios";
import { Grid } from "@mui/material";
import { Paper } from "@mui/material";
// import currImg from "../../assets/images/packagesImages/1702451103822-Default.jpg";
const LanguageFormPage = () => {
  const [formData, setFormData] = useState({
    name: "",
  });

  const [languageOne, setLanguageOne] = useState();
  const [error, setError] = useState();
  const [languageData, setLanguageData] = useState();
  const [loading, setLoading] = useState(false);

  const getLanguageFunc = async () => {
    const config = {
      Headers: {
        "Content-type": "application/json",
        // "Content-Type": "multipart/form-data",
      },
    };
    const data = await axios.get("/api/package/language", config);
    setLanguageData(data);
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
        "/api/package/language",
        { name: name.toUpperCase() },
        config
      );
      console.log("data post>>>", data?.data?.name);
      // setLanguageData(data);
    } catch (error) {
      console.log("error.response>>>>", error?.response?.data?.error);
      setError(error?.response?.data?.error);
    }

    setFormData((prevData) => ({
      ...prevData,
      name: "", // Set the 'name' property to an empty string
    }));
    setLoading(false);
  };

  const handleChange = (e) => {
    const { name } = e.target;

    // const newValue =
    //   name === "image" && type === "file" ? e.target.files[0] : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: e.target.value,
    }));
    setError(null);
  };

  useEffect(() => {
    getLanguageFunc();
  }, [handleSubmit]);

  console.log(languageData?.data[0]?.name, "languageData>>");
  return (
    <PortalHeader>
      <h2>Add Languages:</h2>
      <form onSubmit={handleSubmit} className="broadcaster-form p-5 m-5">
        <div className="language-div mb-3">
          <label className="language-label form-label">Language</label>
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
          disabled={formData.name === ""}
        >
          {loading ? "submitting..." : "Submit"}
        </button>
        <div
          style={{
            marginTop: "30px",
            color: "#081e43",
            fontSize: "20px",
          }}
        >
          <div>Language Available:</div>

          <div style={{ fontSize: "10px" }}>
            {languageData ? "" : "Loading......"}
          </div>
        </div>
        <Grid container spacing={2}>
          {languageData?.data?.map((item, index) => (
            <Grid item key={index} xs={12} sm={6} md={8} lg={2}>
              <Paper
                elevation={3}
                style={{ margin: "20px", padding: "10px", textAlign: "center" }}
              >
                <div style={{ color: "#071e43" }}>{item.name}</div>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </form>
    </PortalHeader>
  );
};

export default LanguageFormPage;
