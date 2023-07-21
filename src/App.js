import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import About from './components/About/About';
import Skill from './components/Skill/Skill';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div>
      <Header/>
      <Section/>
      <About/>
      <Skill/>  
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
