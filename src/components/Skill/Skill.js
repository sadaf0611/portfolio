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
        <h2 className='skill-heading' >
            <a href="#skill">SKILL</a> </h2>
        <hr />
        <br />    


{/* ------------------------------------------------
        Sharpener Admin9:10 PM
const array = [{"title": "Post 1"}, {"title": "Post 2"}, {"title": "Post 3"}];
console.log(array)

array.forEach((item, index) => {
  // console.log(item, index)
  // console.log(item)
})

const result = array.map((item, index) => {
  // console.log(item, index)
  // console.log(item)
  return <ExpenseItem />;
})

console.log(result)
Sharpener Admin9:23 PM
// Simple hook:

function useScrollTo() {
    const handleScroll = useCallback((id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, [id]);

 }
// And usage:

function App() {
    const smoothScrollHandler = useScrollTo();

    return (
        <>
            <button onClick={() => smoothScrollHandler("skills-section")}>Skills</button>
            <button onClick={() => smoothScrollHandler("projects-section")}>Projects</button>

            <div id="skills-section">Skills</div>
            <div id="projects-section">Project 2</div>
        </>
    )
}
------------------------------------------------------------ */}
        <div className="skill-table">
            <div className="skill-row">
                <div className='skill-box'>
                    <img src={rect} alt="React JS" />
                    <p> React JS</p>
                </div>
                <div className='skill-box'>
                    <img src={hml} alt="html" />
                    <p> HTML</p>
                </div>
                <div className='skill-box'>
                    <img src={css} alt="CSS" />
                    <p> CSS</p>
                </div>
                <div className='skill-box'>
                    <img src={js} alt="JS" />
                    <p>JavaScript</p>
                </div>
                <div className='skill-box'>
                    <img src={java} alt="Java" />
                    <p>Java</p>
                </div>
            </div>
            <div className="skill-row">
                <div className='skill-box'>
                    <img src={bs} alt="Bootstrap" />
                    <p>Bootstrap</p>
                </div>
                <div className='skill-box'>
                    <img src={gh} alt="Github" />
                    <p>Github</p>
                </div>
                <div className='skill-box'>
                    <img src={sql} alt="SQL" />
                    <p>SQL</p>
                </div>
                <div className='skill-box'>
                    <img src={rp} alt="Rest APi" />
                    <p>Rest APi</p>
                </div>
                <div className='skill-box'>
                    <img src={pm} alt="postman" />
                    <p>Postman</p>
                </div>

            </div>     
        </div>      
    </div>
  )
}
