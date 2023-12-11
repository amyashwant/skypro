import React, { useState } from "react";

const BroadcasterComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
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
        Price:
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
      </label>
      <br />
    </div>
  );
};

export default BroadcasterComponent;
