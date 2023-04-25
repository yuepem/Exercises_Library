import React from 'react';
import './About.css';
// import pic from "../../src/image/about_pic.png"
import pic from "../../src/image/steven-erixon.jpg"

function About() {
  return (
    <div className='about_page'>
        <div className='pic_div'>
            <img src={pic} alt='about_pic' className='about_pic' />
        </div>
        <div className='content_div'>
            <section>
                <h1>This Site</h1>
                <p>The Gym Exercises Library Web App is a single-page web application built with React, React-Router, useState hooks, and Material UI. The application is designed to help fitness enthusiasts discover different exercises and equipment corresponding to different body parts and muscles. This is a ongoing project...</p>
            </section>
            <section>
                <h1>Why do I build this?</h1>
                <p>I built this exercise web app to empower beginners through knowledge and guidance.</p>
            </section>
        </div>
    </div>
  )
}

export default About
