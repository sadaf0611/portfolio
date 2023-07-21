import React from 'react'
import './Section.css'
import girl from './girl.png'
import shape from './shape.png'

export default function Section() {
  return (
    <section className='home'>
      <div className="home-content">
        <h3 className='gap'>Hello, It's Me</h3>
        <h3>Sadaf Shaikh</h3>
        <h3>And I'm a <span className="text">Frontend Developer</span></h3>
        <p>I'm a web designer with extensive experiance of over 2.9 years.
                <br/> Expertie to craete and design website design, frontend development.</p>
            <div className="home-sci">
                <a href="https://www.linkedin.com/in/sadaf-shaikh-73081727b"><i className='fa-brands fa-linkedin-in'></i></a>
                {/* <a href=""><i><FaYoutube className="icons youtube"/></i></a> */}
                <a href="https://github.com/sadaf0611"><i className="fa-brands fa-github"></i></a>
                <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
            </div>  
            <a href="https://drive.google.com/file/d/1En1X0yJUUGw_7rO56vs4NUn8p3Wf09JT/view?usp=drive_link" class="btn-box">Download Resume</a>
      </div>
      <div className="image">
        <img src={girl} alt="girl" className='girl' />
        <img src={shape} alt="shape" className='shape' />
      </div>
    </section>
  )
}
