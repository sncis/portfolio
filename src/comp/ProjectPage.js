import React, { useEffect } from 'react'
import ProjectSection from './ProjectSection'
import "../css/ProjectPage.css"
import  TitleComp  from './TitelComp'
import ProjectContainer from './ProjectContainer'

import {projectData} from '../data/projectData'

const ProjectPage = ()=>{

  useEffect(() => {
    let elements = document.querySelectorAll("[data-type='paralax-scroll']")

    elements.forEach((el) => {
      el.style.position = 'absolute'
      window.addEventListener('scroll', () => {
        let yPos = 0 - window.pageYOffset / - el.getAttribute('data-speed')
        let coords = 50 + yPos + '%';
        el.style.top = coords

      })

      return () => window.removeEventListener('scroll', () => {
        let yPos = 0 - window.pageYOffset / - el.getAttribute('data-speed')
        let coords = 50 + yPos + '%';

        el.style.top = coords

      })
    })
  })

  const scrollTime = () => {
    let timeLine = document.querySelectorAll('.timeline')
    timeLine[0].style.height = `${window.scrollY - 700}px`

  }

  useEffect(() => {
    window.addEventListener('scroll',scrollTime )
    return () => window.removeEventListener('scroll', scrollTime)
    
  },[])

  useEffect(() => {
    let el = document.querySelector('.project-page-div')
    el.style.width = window.innerWidth
  })

  return(
    <div className='project-page-div'>
      <TitleComp title={'Scroll trough some of my projects'} />
      <div className='timeline-container'>
       <div className='timeline' id='timeLine'></div>
      </div>
      <div className='project-section'>
      {
        projectData.map((el, i) => (
          <ProjectContainer element={el} key={i} containerIndex={i}/>
        ))
      }
    </div>

      {/* <ProjectSection /> */}
    </div>
  )
}

export default ProjectPage






  // useEffect(() => {
  //   let elements = document.querySelectorAll("[data-type='paralax-scroll']")

  //   elements.forEach((el) => {
  //     // el.style.position = 'absolute'
  //     window.addEventListener('scroll', () => {
  //       let yPos = 0 - el.parentElement.getBoundingClientRect().top / - el.getAttribute('data-speed')
  //       let coords = 50 + yPos + '%';
  //       el.style.top = coords

  //       console.log(el.parentElement.getBoundingClientRect().top)


  //     })

  //     return () => window.removeEventListener('scroll', () => {
  //       let yPos = 0 - el.parentElement.getBoundingClientRect().top / - el.getAttribute('data-speed')
  //       let coords = 50 + yPos + '%';
  //       console.log(el.parentElement.top)
  //       el.style.top = coords

  //     })
  //   })
  // })

  // useEffect(() => {
  //   let items = document.querySelectorAll('.project-container')
  //   console.log(items)

  //   items.forEach((el,index) => {
  //     if(!isEven(index)){
  //       el.classList.add('left')
  //     }
  //     if(isEven(index)){
  //       el.classList.add('right')
  //     }
  //   })
  // })

  // useEffect(()=> {
  //   setSec(section.ref)
  //   console.log(section.ref)
  // },[section])

