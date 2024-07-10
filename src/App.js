import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from "./component/Navbar"
import Works from './component/Works';
import Hero from './component/Hero';
import About from './component/About';
import ScrollToTopButton from './component/ScrollToTopButton';
import Skills from './component/Skills';
import Contact from './component/Contact';

function App() {
  return (
    <>
      <NavbarComponent/>
      <Hero/>
      <About/>
      <Skills/>
      <Works/>
      <Contact/>
      <ScrollToTopButton/>
    </>
  );
}

export default App;
