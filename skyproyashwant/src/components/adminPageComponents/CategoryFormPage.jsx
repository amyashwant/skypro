import React, { useEffect, useState } from "react";
import PortalHeader from "./adminHeader.jsx/PortalHeader";
import axios from "axios";
import { Grid } from "@mui/material";
import {Paper} from "@mui/material";

const CategoryFormPage = () => {
  const [formData, setFormData] = useState({
    name: "",
  });

  const [languageOne, setLanguageOne] = useState();
  const [error, setError] = useState();
  const [typeData, setTypeData] = useState();

  const getTypeFunc = async () => {
    const config = {
      Headers: {
        "Content-type": "application/json",
        // "Content-Type": "multipart/form-data",
      },
    };
    const data = await axios.get("/api/package/category", config);
    setTypeData(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const config = {
        Headers: {
          "Content-type": "application/json",
          // "Content-Type": "multipart/form-data",
        },
      };
      const { name } = formData;
      const data = await axios.post(
        "/api/package/category",
        { name: name.toUpperCase() },
        config
      );
      console.log("data post>>>", data?.data?.name);
      // setTypeData(data);
    } catch (error) {
      console.log("error.response>>>>", error?.response?.data?.error);
      setError(error?.response?.data?.error);
    }

    setFormData((prevData) => ({
      ...prevData,
      name: "", // Set the 'name' property to an empty string
    }));
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
    getTypeFunc();
  }, [handleSubmit]);

  console.log(typeData?.data[0]?.name, "typeData>>");
  return (
    <PortalHeader>
      <h2>Add Categories</h2>
      <form onSubmit={handleSubmit} className="broadcaster-form p-5 m-5">
        <div className="language-div mb-3">
          <label className="language-label form-label">Category Name</label>
          <input className="form-label2"
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
          disabled={formData.name === ""}
        >
          Submit
        </button>
        <div
          style={{
            marginTop: "30px",
            color: "#071e43",
            fontSize: "20px",
          }}
        >
          Categories
        </div>

        <div style={{ fontSize: "10px" }}>
          {typeData ? "" : "Loading......"}
        </div>
        <Grid container spacing={2}>
          {typeData?.data?.map((item, index) => (
            <Grid item key={index} xs={12} sm={6} md={6} lg={2}>
              <Paper elevation={3} style={{ margin: '20px', padding: '10px', textAlign: 'center' }}>
                <div style={{ color: '#071e43' }}>{item.name}</div>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </form>
    </PortalHeader>
  );
};

export default CategoryFormPage;
