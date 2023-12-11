import React, { useState } from "react";
import PortalHeader from "./adminHeader.jsx/PortalHeader";

const ChannelFormPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    type: "",
    lang: "",
    image: null, 
  });

  return (
    <PortalHeader>
      <form className="broadcaster-form p-5 m-5">
        <div className="mb-3">
          <label className="form-label">Channel Name:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Channel Price:</label>
          <input
            type="text"
            className="form-control"
            name="price"
            value={formData.price}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Channel Type:</label>
          <input
            type="text"
            className="form-control"
            name="price"
            value={formData.type}
          />
        </div>

        <div className="mb-3">
        <label className="form-label">Language:</label>
        <input
          type="text"
          className="form-control"
          name="lang"
          value={formData.lang}
        />
      </div>

        <div className="mb-3">
          <label className="form-label">Channel Image:</label>
          <input type="file" className="form-control" name="image" />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </PortalHeader>
  );
};

export default ChannelFormPage;
