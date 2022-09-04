export const dataReducer =(state, {type, payload}) => {
  switch(type){
    case 'SET_MENU_STATE':
      return{
        ...state,
        menu:payload,
      }
    case 'SET_PROJECT_DETAILS':
      console.log(payload)
      return{
        ...state,
        project:payload
      }
      case 'SET_DETAIL_SIDE':
        return{
          ...state,
          side:payload,
        }
       case 'SET_SECTION':
         return{
           ...state,
           section:payload
         } 
    default:
      return{
        menu:'me',
     }
  }
}