import { SET_TXT_SEARCH } from './searchLinkType'
import {CLEAR_TXT_SEARCH} from '../SearchLink/searchLinkType'
export const setTxtSearch = (value) => {
  return {
    type: SET_TXT_SEARCH,
    payload: value
  }
}
  export const clearTxtSearch=()=>{
    return {
        type: CLEAR_TXT_SEARCH,
     
      }
}
