import React,{useEffect, useState} from 'react'

const ProjectDescription = () => {
  const [isScroll, setIsScroll] = useState(false)

  const translateDescr = () => {
    let elements = document.querySelectorAll('.project-description')

    setIsScroll(true)

    if(isScroll){
      for(const el of elements){
        el.style.transform = `translate(${+ window.scrollY / 10}%, -${+ window.scrollY / 10}%)`
      }
      setIsScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', translateDescr)

    return () => window.removeEventListener('scroll', translateDescr)
  })

  return(
    <div className="project-description">
      <p>Image Description</p>
    </div>
  )
}

export default ProjectDescription