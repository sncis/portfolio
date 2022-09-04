import React, { useEffect, useState } from 'react'
import '../css/Modal.css'


const Modal = ({element, setIsOpen, isOpen, side}) => {

  useEffect(() => {
    let element = document.querySelector('.modal-wrapper')
    console.log('side', side)
    setTimeout(()=>{
      isOpen ? element.classList.add('show') : element.classList.remove('show')
    },0)
  },[isOpen])

  const handleTextChange= () => {
    const el = document.getElementsByClassName('background-text-p')
    el[0].classList.toggle('active')
  }

  useEffect(() => {

    const imageWrapper = document.querySelector("[data-img-section]")
    const wrapperTop = document.querySelector('.img-container-details')
    let top = wrapperTop.getBoundingClientRect().top

    imageWrapper.style.transform = `translateY(-${top}px)`

  },[])

  const setParalaxScroll = (el) => {
    let item = document.querySelector(".content-wrapper")

    // console.log('scrolling')
    // console.log(item.getBoundingClientRect())
    // let yPos = el.parentElement.getBoundingClientRect().top / - el.getAttribute('data-speed')

    let yPos = 0 - window.pageYOffset/ - el.getAttribute('data-speed')
        // console.log(item.getBoundingClientRect().top)

    let coords = 50 + yPos + '%'
    console.log('ypos', yPos)

    console.log('coords', coords)
    el.style.top = coords

  }


  useEffect(() => {
    let items = document.querySelectorAll("[data-type='paralax-scroll']")
    let wrapper = document.querySelector('.modal-wrapper')
    items.forEach((el) => {

      wrapper.addEventListener('scroll', () => {
        setParalaxScroll(wrapper, el)
        // console.log('scrolling')
      })

      return () => wrapper.removeEventListener('scroll',() => {
        setParalaxScroll(wrapper, el)
      })
    })
  })

  


  return(
    <div className='modal-wrapper' id='modal-wrapper'>

      <div className='close-modal' onClick={() => setIsOpen(false)}> X – projects – {element.title}</div>

      <div className={`cover-container ${side}`} data-side={side}>
        <img src={element.thumbnail} />
        <h2 className='cover-title'>{element.title}</h2>
      </div>


      <div className='content-wrapper'>
       
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
       

        <div className='img-container-details' data-theme='dark'>
         
          <div className='background-text'>
            <p onClick={() => handleTextChange()} className='background-text-p'>Some weired content what can decrip the project or idea in one sentence</p>
          </div>


          <div className='img-wrapper' data-img-section>
            <div className='first-imgs-section'>
              {element.images.slice(0,2).map((img, index) => (
                <img src={img} className={`first-details-img`} data-type='paralax-scroll' data-speed={`${index > 0 ? 10 : 5}`} key={index}/>
              ))}
            </div>

            <div className='second-imgs-section'>
              {element.images.slice(2).map((img, index) => (
                <img src={img} className={`second-details-img`} key={index}/>
              ))}

            </div>
           
          </div>

        </div>
      </div>
    </div>
  )
}

export default Modal