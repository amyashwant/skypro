import React from "react";
// import "../../pagesCss/bootstrap.min.css";
// import "../../pagesCss/flaticon.css";
// import "../../pagesCss/fontawesome-all.min.css";
// import "../../pagesCss/magnific-ppopup.css";
// import "../../pagesCss/odometer.css";
// import "../../pagesCss/slick.css";
// import "../../pagesCss/style.css";
// import "../../pagesCss/style.css.map";
const ToggleHeader = () => {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <button type="submit">
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
};

export default ToggleHeader;
