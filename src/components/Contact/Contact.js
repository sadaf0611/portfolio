import React from 'react'
import './Contact.css'
export default function Contact() {
  return (
    <div className='contact-container'>
      <h2><a href="#contact">CONTACT</a>
        </h2>
        <hr />
        <br />  
        
        <div className='contact-block'>
            <h4>Want to work with me?</h4>
            <p>Reach out to me using the form below.</p><br />
            <div className='contact-input-group'>
              <div className='contact-user-icon'><span><i class="fa-solid fa-user"></i></span></div>
              <input placeholder="Your Name" name="name" type="text"/>
            </div>
            <div className='contact-input-group'>
              <div className='contact-user-icon'><span><i class="fa-solid fa-envelope"></i></span></div>
              <input placeholder="Email address" name="user_email" type="email"/>
            </div>
            
            <div className='contact-input-group'>
            <div className='contact-user-icon'><span><i class="fa-solid fa-message-pen"></i></span></div>
              <textarea placeholder="Type a message..." name="user_message" type='textarea' row='5'/>
            </div>
            <button type='submit' id='submit' className='contact-btn'>SEND MESSAGE</button>
        </div>
      
    </div>
  )
}
