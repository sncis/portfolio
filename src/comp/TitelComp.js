import React,{ useEffect, useState } from 'react'
import '../css/TitleComp.css'

const TitleComp = ({title}) => {
  const [isScrolling, setIsScrolling] = useState(false)
  const titles = document.querySelectorAll('.paralax-title')

  const scrollTitle = () => {
    setIsScrolling(true)
    
    if(isScrolling){
      titles.forEach(t => {
        t.style.transform = `translateX(${+ window.scrollY / 40}%)`
      })

      setIsScrolling(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollTitle)

    return () => window.removeEventListener('scroll', scrollTitle)
  },[isScrolling])

  return(
    <div className='outer-container'>
      <div className='background-container'>
        <h2 className='section-title on-background'>
          <span className='paralax-title'>{title}</span>
        </h2>
      </div>
      <h2 className='section-title'>
        <span className='paralax-title'>{title}</span>
      </h2>
    </div>
  )

}

export default TitleComp