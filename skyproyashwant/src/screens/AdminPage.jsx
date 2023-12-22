import React, { useContext, useEffect } from "react";
import PortalHeader from "../components/adminPageComponents/adminHeader.jsx/PortalHeader";
import BroadcasterFormPage from "../components/adminPageComponents/BroadcasterFormPage";
import { Portal } from "@mui/material";
import BouqetFormPage from "../components/adminPageComponents/BouqetFormPage";
import AccountContext from "../utils/AccountContext";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AccountContext);
  console.log(login,"kkkk")
  useEffect(() => {
    if (login) {
      navigate("/admin");
    }
    else{
      navigate("/login")
    }
  }, [login]);
  return <PortalHeader />;
};

export default AdminPage;
