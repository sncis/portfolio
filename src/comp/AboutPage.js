import React from 'react'
import img from '../img/img.jpg'
import '../css/AboutPage.css'
import NavComp from './NavComp'

const AboutPage = ()=>{
  return(

    <div>
      <NavComp />

      <div className='title-about'>
        <h2>That's Me!</h2>
      </div>

      <div className='content-container'>
      <div className ='img-container'>
        <img src={img} />
      </div>

      {/* <div className='about-section'>
        <h2 className='about-title'>Live is an Adventure  that you have to get involved in!</h2>
        <div className='about-text'>
          <p>Hi, I'm Madmoiselle Cissé, aka Sitan Cissé.</p>
          <p>Interessed in many different things at the intersection of Desing, Art and Technology.</p>
          <p>As an Experience Creator, I work at the intersection of design and technology. Working in different fields, I can draw on a diverse wealth of experience, which enriches my creativity and flexibility and enables me to combine different disciplines to develop innovative solutions for the products and services of tomorrow. </p>
        </div>
        <p className='contact'>Want to get in touch? Then drop me a line to <span mailto={'sitannancy.cisse@gmail.com'}>sitannancy.cisse@gmail.com</span></p>

        
      </div> */}

    </div>

    </div>

    
  )
}

export default AboutPage