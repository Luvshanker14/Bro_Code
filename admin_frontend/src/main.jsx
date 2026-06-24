import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import './index.css';
import App from "./App";
import { API_URL } from "./config";

axios.defaults.baseURL = API_URL;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);