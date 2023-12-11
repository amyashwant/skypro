import axios from "axios";
import React, { useState } from "react";

const ChannelComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    language: "",
    image: null,
    price: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    const newValue =
      name === "image" && type === "file" ? e.target.files[0] : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };
  const data = formData;
  console.log(data);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("type", formData.type);
    formDataToSend.append("language", formData.language);
    formDataToSend.append("image", formData.image);
    formDataToSend.append("price", formData.price);

    const config = {
      Headers: {
        // "Content-type": "application/json",
        "Content-Type": "multipart/form-data",
      },
    };
    // const { name, type, language, image, price } = formData;

    const { data } = await axios.post(
      "/api/package/channel",
      // "http://localhost:5000/api/package/channel",
      formDataToSend,
      config
    );
    console.log("data>>", data);

    // const [selectedFile, setSelectedFile] = useState(null);

    // const handleFileChange = (e) => {
    //   setSelectedFile(e.target.files[0]);
    // };

    // console.log("selectedFile>>", selectedFile);
    // const handleFormSubmit = async (e) => {
    //   e.preventDefault();

    //   const formData = new FormData();
    //   formData.append("image", selectedFile);

    //   const data = await axios.post(
    //     "http://localhost:5000/upload-image",
    //     formData,
    //     {
    //       headers: { "Content-Type": "multipart/form-data" },
    //     }
    //   );
    //   console.log("data>>", data);
    // }; const [selectedFile, setSelectedFile] = useState(null);

    // const handleFileChange = (e) => {
    //   setSelectedFile(e.target.files[0]);
    // };

    // console.log("selectedFile>>", selectedFile);
    // const handleFormSubmit = async (e) => {
    //   e.preventDefault();

    //   const formData = new FormData();
    //   formData.append("image", selectedFile);

    //   const data = await axios.post(
    //     "http://localhost:5000/upload-image",
    //     formData,
    //     {
    //       headers: { "Content-Type": "multipart/form-data" },
    //     }
    //   );
    //   console.log("data>>", data);
    // };
  };

  return (
    <div>
      {/* <h2>Image Upload</h2>
      <form onSubmit={handleFormSubmit}>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button type="submit">Upload Image</button>
      </form> */}

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
          Language:
          <input
            type="text"
            name="language"
            value={formData.language}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Image:
          {/* <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
          /> */}
          <input
            name="image"
            type="file"
            accept="image/*"
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
        <button
          style={{ backgroundColor: "red", color: "black", marginTop: "8px" }}
          type="submit"
        >
          Submit channel Form
        </button>
      </form>
    </div>
  );
};

export default ChannelComponent;
