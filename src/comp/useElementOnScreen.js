import {useRef, useState, useEffect} from 'react'


export const useElementOnScreen = (options) =>{
  const containerRef = useRef(null)
  const [ isVisible, setIsVisible] = useState(false)

  const callback = (entries,observer) => {
    const [entry] = entries
    if(entry.isIntersecting){
      setIsVisible(true)
    }
    //then it also fade out when going out of viewport
    // entry.isIntersecting ? setIsVisible(true) : setIsVisible(false)
  }
    useEffect(() => {
      const observer = new IntersectionObserver(callback,options)
      if(containerRef.current) observer.observe((containerRef.current))

      return () => {
        // if(containerRef.current) observer.unobserve(containerRef.current)
        if(containerRef.current) observer.unobserve(containerRef.current)

      }
    }, [containerRef,options])

 
  return [containerRef,isVisible]

}