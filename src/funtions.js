export const percentageSeen = (element) => {
  
  const parent = element.parentNode;
  // console.log(element)
  // console.log('element')
  // console.log(element.getBoundingClientRect())
  const viewportHeight = window.innerHeight;
  const scrollY = window.scrollY;
  const elPosY = parent.getBoundingClientRect().top + scrollY
  const borderHeight = parseFloat(getComputedStyle(parent).getPropertyValue('border-bottom-width'))+ parseFloat(getComputedStyle(element).getPropertyValue('border-top-width'));

  const elHeight= parent.offsetHeight + borderHeight;
  

  if(elPosY > scrollY + viewportHeight){
    return 0 
  }else if(elPosY + elHeight < scrollY){
    return 100
  }else{
    const distance = scrollY + viewportHeight - elPosY;
    let percentage = distance /((viewportHeight + elHeight) /100)
    percentage = Math.round(percentage)

    return percentage
  }
}