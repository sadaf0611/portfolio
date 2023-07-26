import React from 'react'
import './About.css'
import computer from './computer.png'
export default function About() {
  return (
    <div className='about-cotainer'>
        <h2 className='heading' id='about'><a href="#about" >About</a></h2>
        <hr />
        <br />
        <div className="about-block">
            <div className="about-details">
              <p><span><i class="fa-solid fa-leaf"></i></span>  I am Sadaf Shaikh</p>
              <p><span><i class="fa-solid fa-leaf"></i></span>  My education is B.E. in Computer Science and Engineering</p>
              <p><span><i class="fa-solid fa-leaf"></i></span>  I have work experiance with a company S.G.I. Solutions</p>
              <p><span><i class="fa-solid fa-leaf"></i></span>  I can built responsive static websites using React.js</p>
            </div>
            <div className="about-image">
              <img src={computer} alt="computer-code"  className='computer'/>

            </div>
        </div>
      
    </div>
  )
}
