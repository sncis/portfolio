import React from 'react'
import ProjectContainer from './ProjectContainer'

import {projectData} from '../data/projectData'
import '../css/ProjectPage.css'

const ProjectSection = () => {

  return(
    <div className='project-section'>
      {
        projectData.map((el, i) => (
          <ProjectContainer element={el} key={i} containerIndex={i}/>
        ))
      }
    </div>
  )
}

export default ProjectSection