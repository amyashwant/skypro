import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppLayout from "./AppLayout";
import store from "../utils/store";
import { Provider } from "react-redux";

const Layout = () => {
  return (
    <div>
      <Provider store={store}>
        <AppLayout />
      </Provider>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Layout;
