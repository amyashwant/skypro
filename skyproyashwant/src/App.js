import { useState } from "react";
import "./App.css";
import Layout from "./layout/Layout";
import AboutPage from "./screens/AboutPage";
import Dashboard from "./screens/Dashboard";
import Packages from "./screens/Packages";

import TeamsPage from "./screens/TeamsPage";
import axios from "axios";

function App() {
  return (
    <div>
      {/* <Dashboard /> */}
      {/* <Packages/> */}
      {/* <TeamsP.age /> */}
      <Layout />
    </div>
  );
}

export default App;
