import React from "react";

const Loader = () => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      {/* vh-100 */}
      <div
        className="spinner-border text-primary"
        role="status"
        style={{ width: "25px", height: "25px" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
