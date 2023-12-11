import React, { useEffect, useState } from "react";
import axios from "axios";

const BouquetComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    channelsRef: "",
    price: "",
  });

  const [channelData, setChannelData] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, type, channelsRef, price } = formData;
    const config = {
      Headers: {
        "Content-type": "application/json",
        // "Content-Type": "multipart/form-data",
      },
    };
    // const { name, type, language, image, price } = formData;

    const { data } = await axios.post(
      "/api/package/bouquet",
      // "http://localhost:5000/api/package/channel",
      { name, type, channelsRef, price },
      config
    );
    console.log("data>>", data);
  };

  const getChannelFunc = async () => {
    const config = {
      Headers: {
        "Content-type": "application/json",
        // "Content-Type": "multipart/form-data",
      },
    };

    const data = await axios.get("/api/package/channel", config);
    setChannelData(data.data);
  };

  useEffect(() => {
    getChannelFunc();
  }, []);
  console.log(channelData, "channelData>>>>");
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Type:
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Channel:
          <input
            type="text"
            name="channelsRef"
            value={formData.channelsRef}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Price:
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">submit bouquet</button>
      </form>
    </div>
  );
};

export default BouquetComponent;
