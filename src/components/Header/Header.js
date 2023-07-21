import React from 'react'
import './Header.css'
export default function Header() {
  return (
    <header className="header">
        <a href="#" className="logo">Portfolio</a>
        <nav className="navbar">
            <a href="#" className="active">Home</a>
            <a href="#about" >About</a>
            <a href="#skill" >Skill</a>
            <a href="#project" >Projects</a>
            <a href="#contact" >Contact</a>
        </nav>
    </header>
  )
}
