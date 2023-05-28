import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import NavBar from './Components/NavBar/NavBar';

function App() {

  return (
    <React.Fragment>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </React.Fragment>
  );
}

export default App;