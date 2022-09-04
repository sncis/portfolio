import React, { createRef, useEffect, useRef } from 'react'
import Description from '../components/Description'
// import ProjectContainer from './ProjectContainer'
import "../css/Homepage.css"
import ProjectSection from './ProjectSection'
import NavComp from './NavComp'
import {Link} from 'react-router-dom'
import ProjectPage from './ProjectPage'
import img from '../img/img.jpg'
import { useDataStateCtx } from '../store/dataContext'
import  TitleComp  from './TitelComp'
import ProjectContainer from './ProjectContainer'

import {projectData} from '../data/projectData'


const HomePage = () => {


  const state = useDataStateCtx()
  const timelineRef = useRef(null)

  const scrollTime = () => {
    let timeLine = document.querySelectorAll('.timeline')
    timeLine[0].style.height = `${window.scrollY - 700}px`

  }

  useEffect(() => {
    window.addEventListener('scroll',scrollTime )
    return () => window.removeEventListener('scroll', scrollTime)
    
  },[])

  useEffect(() => {
    if(state.project){
      let el = document.querySelector(`[data-title="${state.project.metaTitle}"]`)
      console.log(el.getBoundingClientRect())
      window.scrollTo({
        behavior:'smooth',
        top: el.getBoundingClientRect().top - (el.getBoundingClientRect().height / 2)
      })

    }
  },[state.project])


  return(
    <div>
      <NavComp />
        <Description/>

      <div className="arrow-container">
          <i className="down"></i>
      </div>

      <div className='project-page-div'>
        <TitleComp title={'Scroll trough some of my projects'} />
        <div className='timeline-container'>
        <div className='timeline' id='timeLine'></div>
      </div>

      <div className='project-section'>
        {
          projectData.map((el, i) => {
            return <ProjectContainer element={el} key={i} containerIndex={i}/>
          })
        }
      </div>
    </div>
        
    </div>
  )


}

export default HomePage