import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppRoutes from "./Routes/AppRoutes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/touchstone-conservatories">
        <Routes>
          {AppRoutes.map((route, index) => {
            const { element, path } = route;
            return <Route key={index} path={path} element={element} />;
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
