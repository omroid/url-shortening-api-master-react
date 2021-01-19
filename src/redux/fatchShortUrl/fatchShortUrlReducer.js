import {
    FETCH_URL_REQUEST, 
     FETCH_URL_SUCCESS,
    FETCH_URL_FAILURE,
    LOAD_LOCAL_STORAGE
 } from './fatchShortUrlTypes'
  
  const initialState = {
    loading: false,
    url: [],
    error: ''
  }
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_URL_REQUEST:
        return {
          ...state,
          loading: true,
          error: ""
        }
      case FETCH_URL_SUCCESS:
        return {
          loading: false,
          url: [...state.url, action.payload],
          error: ''
        }
      case FETCH_URL_FAILURE:
        return {
          loading: false,
          url: [...state.url],
          error: action.payload
        }
        case LOAD_LOCAL_STORAGE:{
            return{
                loading: false,
                url: action.payload,
                error: ''
            }
        }
      default: return state
    }
  }

  

  
  export default reducer
  