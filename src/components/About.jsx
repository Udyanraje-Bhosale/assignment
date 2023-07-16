import React from 'react'
import '../styles/about.css'
const About = () => {
  return (
    <div className='d-flex align-items-center justify-content-center' style={{backgroundColor:'black', height:'100vh', width:'100vw'}}>
     <div className="container">
      <h1 className="text-center about" style={{marginTop:'auto', textDecoration:'underline'}}>ABOUT</h1>
     <p className='about'>
        Hello the Current website is a Project wherein the users can make Todo List, Get to know the Weather of different cities by entering the city Name also Make shopping carts for them.
        HOPE YOU ENJOY your time here!!
      </p>
      </div>
    </div>
  )
}

export default About