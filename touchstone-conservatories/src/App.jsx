import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import About from "./Pages/About";
import FAQ from "./Pages/FAQ";
import Footer from "./Components/footer";
import Youtube from "./Pages/Youtube";

function App() {
  return (
    <div className="bg-white">
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Youtube />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
