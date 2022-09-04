import React, { forwardRef, useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useElementOnScreen } from '../components/useElementOnScreen'
import ProjectDescription from './ProjectDescription'
import { percentageSeen } from '../funtions'
import img from '../img/img.jpg'
import '../css/ProjectPage.css'
import { useDataDispatchCtx, useDataStateCtx } from '../store/dataContext'
import { SET_PROJECT_DETAILS, SET_DETAIL_SIDE, SET_SECTION } from '../store/constants'
import Modal from './Modal'
import { setSelectionRange } from '@testing-library/user-event/dist/utils'



let scaleAmount = 0.5

const ProjectContainer = ({element,containerIndex}) => {
 
  let [ containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin:'0px',
    threshold: 0.3
  })

  const [isScrolling, setIsScrolling] = useState(false)
  const [elements, setElements] = useState([])
  const [imgs, setImgs] = useState([])
  const [theme, setTheme] = useState(null)

  const [isRightCont, setIsRightCont]= useState()

  const navigate= useNavigate()
  const dispatch = useDataDispatchCtx()

 
  const descriptionRef = useRef(null)
  const marginRef = useRef(null)

  scaleAmount = scaleAmount / 100

  const isEven = (index)=> {
    // console.log('index', index ,index % 2 === 0)
    if(index === 0) {
      return true;}
    else{return index % 2 === 0}

  }


  const translateDescription = () => {
    setElements(document.querySelectorAll('.project-description'))
    let descHeight = descriptionRef.current.getBoundingClientRect().height
    let descTop = descriptionRef.current.getBoundingClientRect().top

    const margin = marginRef.current
    margin.style.height = `${descHeight}px`
    margin.style.backgroundColor='yellow'
    margin.style.top = `${descTop}px`
 
    setIsScrolling(true)

    let isShown = containerRef.current.classList.contains('is-visible')

    if(isScrolling && isShown){
  
      elements.forEach((el,index) => {
        let descTop = descriptionRef.current.getBoundingClientRect().top
        margin.style.top = `${descTop}px`


        if(!isEven(index)){
          el.style.transform = `translate(-${+ window.scrollY / 50}%, -${+ window.scrollY / 30}%)`
        }else{
          el.style.transform = `translate(${+ window.scrollY / 50}%, -${+ window.scrollY / 30}%)`
        }
      })
      setIsScrolling(false)
    } 
  }

  useEffect(() => {
    window.addEventListener('scroll', translateDescription)

    return () => window.removeEventListener('scroll', translateDescription)
  }, [isScrolling])

  useEffect(() => {
    setImgs(document.querySelectorAll('[data-scroll-zoom]'))
  },[])

  useEffect(() => {
   setIsRightCont(isEven(containerIndex))
  },[])


  const navigatePage = (element) => {
   
    dispatch({type: SET_PROJECT_DETAILS, payload:element})
    dispatch({type:SET_DETAIL_SIDE, payload: isRightCont ? 'left': 'right'})
    
    navigate('/projectDetails')
  }


  useEffect(() => {
    imgs.forEach((img) => {
      
      img.style.transform = `scale(1.${scaleAmount * percentageSeen(img)})`

      window.addEventListener('scroll', () => {
        let percentage = percentageSeen(img)
        img.style.transform = `scale(1.${percentageSeen(img)})`

      })

      return () => window.removeEventListener('scroll', () => {
        img.style.transform = `scale(1.${percentageSeen(img)})`

      })
    })
  },[imgs])

  useEffect(() => {
    if(element.category == 'digital' || element.category == 'fashion'){
      setTheme('dark')
    }
    else{
      setTheme('white')
    }
  },[element])

  
  return(
    <div className='project-wrapper'>
      <div ref={containerRef} className={`project-container-${isEven(containerIndex) ? 'even' : 'odd'} ${isVisible ? "is-visible": ''}` } onClick={() => navigatePage(element)} data-title={element.metaTitle} >
            <div className="image-container" >
              <img src={img} data-scroll-zoom className='project-img'  onClick={() => navigatePage(element)}/>
            </div>

            <div className='outer-decription-container'>
            <div className='margin' ref={marginRef}></div>
              <div className='project-description' ref={descriptionRef}>
              <div className='margin' ref={marginRef}></div>

                <p className='project-title'> {element.title}</p>
                <p className='project-text'> {element.description}</p>
              </div>
            </div>

  </div>

    </div>
      
      
  )

}

export default ProjectContainer