import React from "react";
import ReactDOM from "react-dom/client";
import Home from "../pages/Home";
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// Toast
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
//Global css
import "../assets/style.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Home />
    <ToastContainer />
  </React.StrictMode>
);
