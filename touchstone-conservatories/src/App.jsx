import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import Main from './Pages/Main';
import Welcome from './Pages/Welcome'
import About from './Pages/About';
import Feedback from './Pages/Feedback'
import Footer from './components/footer';

function App() {

  return (
    <div>
      <Header/>
      <Main/>
      <Welcome/>
      <About/>
      <Feedback/>
      <Footer/>
    </div>
  );
}

export default App;
