import React from "react";
import { Form } from "react-bootstrap";

const LocationInfo = ({ handleChange }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h2>Location Info</h2>
      <Form.Group className="w-75 mt-4">
        <Form.Control
          placeholder="State"
          onChange={handleChange("state")}
          name="state"
        />
      </Form.Group>
      <Form.Group className="w-75 mt-4">
        <Form.Control
          placeholder="City"
          onChange={handleChange("city")}
          name="city"
        />
      </Form.Group>
    </div>
  );
};

export default LocationInfo;
