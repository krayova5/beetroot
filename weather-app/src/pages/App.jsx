import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";

// router
import Router from "../pages/Router";



function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>Weather forecast</title>
      </Helmet>
      <Router />
    </BrowserRouter>
  );
}

export default App;
