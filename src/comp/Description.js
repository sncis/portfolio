import React, { useEffect, useState } from 'react'
import '../css/Description.css'

const Description = () => {
  const sentences = ['Hi, I am Madmoiselle Cissé','Born In Berlin','Living in Munich', 'At Home in the World', 'Raised by the 90’s',' Creating Experiences', 'Always looking for new Challenges.' ]
  const [sent, setSent] = useState([])
  const [p, setP] = useState([])

  useEffect(() => {
   
    const interval = setInterval(() => {
      let el = sentences.shift()
        setSent(sent => [...sent, el])
    },500)

    

    return () => clearInterval(interval)
  },[])  

  return(
    <div className='intro-section'>
      <div className='intro-container'>
      {sent.map((s,index) => (
        <p key={index} className='description-text fadeIn'>{s}</p>
      ))}
      
      </div>
      

    </div>
   
  )

}


export default Description