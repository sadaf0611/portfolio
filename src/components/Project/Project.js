import React from 'react'
import './Project.css'
import anam from './image/AnamTour.png'
import web from './image/web-temp.png'
import todo from './image/To-do.png'


export default function Project() {
  return (
    <div className='pro-container'>
        <h2 className='heading' id='project'>
            <a href="#project">PROJECTS</a></h2>
        <hr />
        <br />
        <div className="pro-row">
            <div className="pro-block">
                <div><img src={anam} alt="Anam Tour" /></div>
                <div className='pro-block-details'>
                    <h2>Anam Tours</h2><hr />
                    <h4>JS, HTML, CSS</h4><hr />
                    <p>Anam tour website is basically for travel agency. Website provide services like customers ticket booking, hotail booking, whole trip can custer schedule via our website. and cutomer can give feedback to website and also drop mail for enquiry. I have used HTML, css and Java Script technologies for user Interface.</p>
                </div>
            </div>
            <div className="pro-block">
                <div><img src={web} alt="Demo website" /></div>
                <div className='pro-block-details'>
                    <h2>Website Demo</h2><hr />
                    <h4>JS, HTML, CSS</h4><hr />
                    <p>This project is a website template. which has a menubar with css design and also it has login and register form with good style using Java Script. Website is built by using  HTML, css and Java script technologies.</p>
                </div>
            </div>
            <div className="pro-block">
                <div><img src={todo} alt="Anam Tour" /></div>
                <div className='pro-block-details'>
                    <h2>To Do Task</h2><hr />
                    <h4>JS, HTML, CSS, Rest APi, Axios, postman, crud</h4><hr />
                    <p>Todo task is collection of daily task schedule to perform. User can add task details which will be reflect in remaining table. If task is done, user can click on checkbox so task will be move to done table. In this project I have used crud crud, axios and rest APi via postman technologies.</p>
                </div>
            </div>
        </div>
    </div>
  )
}