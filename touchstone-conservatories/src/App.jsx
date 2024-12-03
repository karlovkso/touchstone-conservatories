import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Pages/Main";
import Welcome from "./Pages/Welcome";
import About from "./Pages/About";
import Feedback from "./Pages/Feedback";
import Footer from "./Components/footer";

function App() {
  return (
    <div className="bg-white">
      <Header />
      <Main />
      <Welcome />
      <About />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;
