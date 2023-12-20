import React from "react";
import PortalHeader from "../adminHeader.jsx/PortalHeader";
import BouqetFormPage from "../BouqetFormPage";
import BouqueChannel from "../BouqueChannel";

const ParentBouque = () => {
  return (
    <PortalHeader>
      <BouqetFormPage />
      <BouqueChannel />
    </PortalHeader>
  );
};

export default ParentBouque;
