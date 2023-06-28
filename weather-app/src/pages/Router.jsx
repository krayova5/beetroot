import React from "react";
import { Routes, Route } from "react-router-dom";

// pages
import CurrentPage from "./CurrentPage";
import WeeklyPage from "./WeeklyPage";



const Router = () => (
  <Routes>
    <Route path="/" element={<CurrentPage/>} />
    <Route path="/weekly" element={<WeeklyPage/>} />
  </Routes>
);

export default Router;