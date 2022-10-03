import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Home,
  Add,
  Edit
} from "./components";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-token" element={<Add />} />
      <Route path="/edit-token" element={<Edit />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);