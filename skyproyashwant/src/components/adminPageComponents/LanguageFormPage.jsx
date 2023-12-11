import React, { useEffect, useState } from "react";
import PortalHeader from "./adminHeader.jsx/PortalHeader";
import axios from "axios";

const LanguageFormPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    broadcaster: "Select Broadcaster",
    channel: false,
    image: null,
  });

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

  useEffect(() => {
    getLanguageFunc();
  }, []);

  console.log(languageData?.data[0].name, "languageData>>");
  return (
    <PortalHeader>
      <form className="broadcaster-form p-5 m-5">
        <div className="mb-3">
          <label className="form-label">Language:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <div>language available:</div>
        <div>{languageData?.data.map((item, index) => item.name)}</div>
      </form>
    </PortalHeader>
  );
};

export default LanguageFormPage;
