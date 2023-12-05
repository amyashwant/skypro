import React from "react";
import AppLayout from "./AppLayout";
import store from "../utils/store";
import { Provider } from "react-redux";

const Layout = () => {
  return (
    <div>
      <Provider store={store}>
        <AppLayout />
      </Provider>
    </div>
  );
};

export default Layout;
