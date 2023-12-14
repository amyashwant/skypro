import React, { useEffect, useState } from "react";
import PortalHeader from "./adminHeader.jsx/PortalHeader";
import axios from "axios";
import currImg from "../../assets/images/packagesImages/1702451103822-Default.jpg";
const LanguageFormPage = () => {
  const [formData, setFormData] = useState({
    name: "",
  });

  const [languageOne, setLanguageOne] = useState();
  const [error, setError] = useState();
  const [languageData, setLanguageData] = useState();

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

    try {
      const config = {
        Headers: {
          "Content-type": "application/json",
          // "Content-Type": "multipart/form-data",
        },
      };
      const { name } = formData;
      const data = await axios.post("/api/package/language", { name }, config);
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
    getLanguageFunc();
  }, [handleSubmit]);

  console.log(languageData?.data[0]?.name, "languageData>>");
  return (
    <PortalHeader>
      <form onSubmit={handleSubmit} className="broadcaster-form p-5 m-5">
        <div className="mb-3">
          <label className="form-label">Language:</label>
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
        <div>language available:</div>
        <div>
          {languageData?.data?.map((item, index) => {
            return (
              <div style={{ margin: "20px", color: "red" }}>{item.name}</div>
            );
          })}
        </div>
      </form>
    </PortalHeader>
  );
};

export default LanguageFormPage;
