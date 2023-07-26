import React from 'react'
import './Skill.css'
import rect from './react js.png'
import hml from './html.png'
import css from './css.png'
import java from './java-removebg-preview.png'
import sql from './sql.png'
import bs from './Bootstrap.png'
import gh from './github.png'
import js from './js.png'
import pm from './postman.jpg'
import rp from './rest api.png'

export default function Skill() {
  return (
    <div className='skill-container' id='skill'>
        <h2 className='heading'>
            <a href="#skill">SKILL</a> </h2>
        <hr />
        <br />    

        <div className="skill-table">
        <div className="slider">
            <div className="slide-track">
                <div className='slide'>
                    <img src={rect} alt="React JS" />
                    {/* <p> React JS</p> */}
                </div>
                <div className='slide'>
                    <img src={hml} alt="html" />
                    {/* <p> HTML</p> */}
                </div>
                <div className='slide'>
                    <img src={css} alt="CSS" />
                    {/* <p> CSS</p> */}
                </div>
                <div className='slide'>
                    <img src={js} alt="JS" />
                    {/* <p>JavaScript</p> */}
                </div>
                <div className='slide'>
                    <img src={java} alt="Java" />
                    {/* <p>Java</p> */}
                </div>
            
                <div className='slide'>
                    <img src={bs} alt="Bootstrap" />
                    {/* <p>Bootstrap</p> */}
                </div>
                <div className='slide'>
                    <img src={gh} alt="Github" />
                    {/* <p>Github</p> */}
                </div>
                <div className='slide'>
                    <img src={sql} alt="SQL" />
                    {/* <p>SQL</p> */}
                </div>
                <div className='slide'>
                    <img src={rp} alt="Rest APi" />
                    {/* <p>Rest APi</p> */}
                </div>
                <div className='slide'>
                    <img src={pm} alt="postman" />
                    {/* <p>Postman</p> */}
                </div>
            </div>    
        </div>    
        </div>      
    </div>
  )
}
