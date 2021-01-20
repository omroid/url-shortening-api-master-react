import{REMOVE_SEARCH_RESULT} from './removeSearchTypes'


export const removeSearchResult=(index)=>{
    return {
        type: REMOVE_SEARCH_RESULT,
        payload:index
      }
}