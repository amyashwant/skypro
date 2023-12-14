import React, { useEffect, useState } from "react";
import PortalHeader from "./adminHeader.jsx/PortalHeader";
import axios from "axios";

const TypeFormPage = () => {
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
    const data = await axios.get("/api/package/type", config);
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
      const data = await axios.post("/api/package/type", { name }, config);
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
  };

  useEffect(() => {
    getTypeFunc();
  }, [handleSubmit]);

  console.log(typeData?.data[0]?.name, "typeData>>");
  return (
    <PortalHeader>
      <form onSubmit={handleSubmit} className="broadcaster-form p-5 m-5">
        <div className="mb-3">
          <label className="form-label">Channel Type:</label>
          <input
            type="text"
            // className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        {error && error}
        <button
          type="submit"
          className="btn btn-primary"
          disabled={formData.name === ""}
        >
          Submit
        </button>
        <div>type available:</div>
        <div>
          {typeData?.data?.map((item, index) => {
            return (
              <div style={{ margin: "20px", color: "red" }}>{item.name}</div>
            );
          })}
        </div>
      </form>
    </PortalHeader>
  );
};

export default TypeFormPage;
