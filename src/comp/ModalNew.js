import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useElementOnScreen } from '../components/useElementOnScreen'
import '../css/Modal.css'
import { SET_DETAIL_SIDE } from '../store/constants'
import { useDataDispatchCtx, useDataStateCtx } from '../store/dataContext'


const ModalNew = () => {

  const state = useDataStateCtx()
  const [element, setElement] = useState(null)
  const [side, setSide] = useState(null)
  const [isScrolling, setIsScrolling] = useState(false)


  const modalRef = useRef(null)
  const currImgRef = useRef(null)
  const coverRef = useRef(null)
  const cursorRef = useRef(null)
  const bkrTextRef = useRef(null)
  const contentWrapperRef = useRef(null)

  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin:'0px',
    threshold: 0.1
  })

  useEffect(() => {
    let item = document.querySelector('.modal-wrapper')
    console.log('side', side)
    setTimeout(()=>{
       item.classList.add('show') 
    },0)
  },[state])

  const handleTextChange= () => {
    const el = document.getElementsByClassName('background-text-p')
    el[0].classList.toggle('active')

    const images = document.querySelectorAll('.first-details-img')
    images.forEach((img) => {
      img.classList.toggle('translate-img')
    })

  }

  const paralaxScroll = (el) => {
    let elements = document.querySelectorAll("[data-type='paralax-scroll']")
    // console.log('elements in croll',elements)
   
    elements.forEach((el, index) => {
      let yPos = 0 - coverRef.current.getBoundingClientRect().top / - el.getAttribute('data-speed')
      // console.log(yPos)
      let tranlateTop = index > 0 ? 30 : 15
      let coords = tranlateTop +  yPos + '%';
      // console.log(`scrollllllll`, coords)
      el.style.top = coords
    })
    
  }

  useEffect(() => {
    let wrapper = modalRef.current
      wrapper.addEventListener('scroll', paralaxScroll)
    
      return () => {wrapper.removeEventListener('scroll', paralaxScroll)}

    })
     
  useEffect(() => {
    // console.log('state', state)
    setElement(state.project)
    setSide(state.side)
  },[state])

  const trackMouse = (e) => {
    let text = bkrTextRef.current
    let cursor = cursorRef.current
    let contWrapper = contentWrapperRef.current

    // console.log(text)
    // let posX = e.pageX - document.scrollLeft() - text.offset().left
    // let posY = e.pageY - document.scrollTop() - text.offset().top
    console.log('client: ', e.clientX - text.getBoundingClientRect().left)
    console.log('pageX: ', e.clientY - text.getBoundingClientRect().top)




    if(text?.matches(':hover')){
      console.log('ccords', window.scrollX, window.scrollY)
      cursor.style.visibility = 'visible'
      text.style.cursor= 'none'

      cursor.style.top = `${e.pageY - contWrapper.getBoundingClientRect().top}px`
      cursor.style.left = `${e.pageX - contWrapper.getBoundingClientRect().left}px`
    }
    else{
      cursor.style.visibility = 'hidden'
    }
  }

  
  useEffect(() => {
    let wrapper = modalRef.current
    // let text = bkrTextRef.current
    // let cursor = cursorRef.current
    // console.log(text)

    wrapper.addEventListener('mousemove', (e) => {
      trackMouse(e)
    })
    return () => wrapper.removeEventListener('mousemove', (e) => {
      trackMouse(e)
    })

  },[bkrTextRef,cursorRef])


  return(
     
    <div className='modal-wrapper' id='modal-wrapper' ref={modalRef} data-theme='white'>
      { element && <>
      
      <Link to='/' className='close-detail-view'><i className='arrow-back'></i> x – projects</Link>

      <div className={`cover-container ${side}`} data-side={side} ref={coverRef} data-theme='white'>
        <img src={element.thumbnail} />
        <h2 className='cover-title'>{element.title}</h2>
      </div>


      <div className='content-wrapper' ref={contentWrapperRef}>
      
        <div className ='description-wrapper'>

          <div className='tag-container'>
            <h3>{element.tagHeader}</h3>
            <div>
              {element?.tags.map((el,index) => (
                  <p className='tag' key={index}>{el}</p>
                ))}
            </div>
          </div>

          <div className='description-container'>
            <p>
            {element.description}
            </p>
          </div>

        </div>
      

        <div className={`img-container-details`} data-theme='dark' ref={containerRef}>
        <div id='cursor' ref={cursorRef}></div>
          <div className='background-text' >
            <p ref={bkrTextRef} onClick={() => handleTextChange()} className='background-text-p'>Some weired content what can decrip the project or idea in one sentence</p>
          </div>


          <div className='img-wrapper' data-img-section>
            <div className='first-imgs-section'>
              {element.images.slice(0,2).map((img, index) => (
                <img src={img} className={`first-details-img`} data-type='paralax-scroll' data-speed={`${index > 0 ? 150 : 90}`} key={index} ref={currImgRef}/>
              ))}
            </div>

            <div className='second-imgs-section' data-theme='white'>
              {element.images.slice(2).map((img, index) => (
                <img src={img} className={`second-details-img number-${index}`} key={index}/>
              ))}

            </div>
          
          </div>

        </div>
      </div>
      </>
      }
    
    </div>
  )
}

export default ModalNew