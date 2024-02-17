import React from "react";
import ReactDOM from "react-dom/client";
import App from "../../App";
import "./index";
import MainLayout from "./MainLayout";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainLayout>
      <App />
    </MainLayout>
  </React.StrictMode>
);