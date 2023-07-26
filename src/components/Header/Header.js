import React from 'react'
import './Header.css'
import { Link } from 'react-scroll'

export default function Header() {
  
  return (
    <header className="header" id='topNav'>
        <Link to="topNav" spy={true} smooth={true} offset={50} duration={500} className="active logo">Portfolio</Link>
        <nav className="navbar">
            <Link to="topNav" spy={true} smooth={true} offset={50} duration={500}  className="active">Home</Link>
            <Link to="about" spy={true} smooth={true} offset={-90} duration={500}  className="active">About</Link>
            <Link to="skill" spy={true} smooth={true} offset={-100} duration={500}  className="active">Skills</Link>
            <Link to="project" spy={true} smooth={true} offset={-100} duration={500}  className="active">Projects</Link>
            <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}  className="active">Contact</Link>
            
            {/* <a href="#about">About</a>
            <a href="#skill">Skill</a>
            <a href="#project">Projects</a>
            <a href="#contact">Contact</a> */}
            {/* <a href="#about" onClick={()=>{handleScroll('about')}}>About</a>
            <a href="#skill" onClick={()=>{handleScroll('skill')}} >Skill</a>
            <a href="#project" onClick={()=>{handleScroll('project')}} >Projects</a>
            <a href="#contact" onClick={()=>{handleScroll('contact')}} >Contact</a> */}
        </nav>
    </header>
  )
}
