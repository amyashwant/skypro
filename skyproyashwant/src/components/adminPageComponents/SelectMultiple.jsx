import React, { useState } from "react";

const SelectMultiple = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;

    // Toggle the selection status
    setSelectedOptions((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(value)) {
        return prevSelectedOptions.filter((option) => option !== value);
      } else {
        return [...prevSelectedOptions, value];
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission with selectedOptions
    console.log("Selected Options:", selectedOptions);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Select Options:
        <select
          multiple
          value={selectedOptions}
          onChange={handleCheckboxChange}
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
          {/* Add more options as needed */}
        </select>
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default SelectMultiple;
