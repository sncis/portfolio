import React, { useState, useEffect} from 'react'
import {useLocation, Link} from 'react-router-dom'
import '../css/NavComp.css'


const NavComp = () => {
  const location = useLocation()
  const [isHome, setIsHome] = useState('')
  const [isCV, setIsCV] = useState('')
  const [isAbout, setIsAbout] = useState('')
  const [isProject, setIsProject] = useState('')

  useEffect(() => {
    if(location.pathname === '/'){
      setIsHome(true)
    }
    if(location.pathname === '/cv'){
      setIsCV(true)
    }
    if(location.pathname === '/project'){
      setIsProject(true)
    }
    if(location.pathname === '/about'){
      setIsAbout(true)
    }
  },[location.pathname])
 

  return(
    <div className={`nav-container`}>
      {!isCV && <Link to='/cv' className='nav-to cv'>click for a guid thorugh my life</Link>}
      {/* {!isProject && <Link to='/projects' className='nav-to projects'>click to scroll trough some projects</Link>} */}
      {!isAbout && <Link to='/about' className='nav-to about'>click to get in touch</Link>}
      {/* {!isHome && <Link to='/' className='nav-to home'>Home</Link>} */}
    </div>
  )


}

export default NavComp