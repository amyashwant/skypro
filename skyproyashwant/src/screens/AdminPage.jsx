import React from "react";

import ChannelComponent from "../components/adminPageComponents/ChannelComponent";
import BouquetComponent from "../components/adminPageComponents/BouquetComponent";
import BroadcasterComponent from "../components/adminPageComponents/BroadcasterComponent";
import SelectMultiple from "../components/adminPageComponents/SelectMultiple";

const AdminPage = () => {
  return (
    <div>
      <div style={{ color: "red", marginBottom: "10px" }}>formPage</div>
      <ChannelComponent />
      <div style={{ color: "red", marginBottom: "10px", marginTop: "40px" }}>
        BouquetPage
      </div>
      {/* <BouquetComponent /> */}
      <div style={{ color: "red", marginBottom: "10px", marginTop: "40px" }}>
        BroadcasterPage
      </div>
      <BroadcasterComponent />
      <SelectMultiple/>
    </div>
  );
};

export default AdminPage;
