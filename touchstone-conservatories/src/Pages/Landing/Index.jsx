import React from 'react'
import Header from "../../Components/Header";
import Home from "./Home";
import Portfolio from "./Portfolio";
import About from "./About";
import FAQ from "./FAQ";
import Footer from "../../Components/Header";

function Landing() {
  return (
    <div>
    <Header />
    <Home />
    <About />
    <Portfolio />
    <FAQ />
    <Footer />
  </div>
  )
}

export default Landing