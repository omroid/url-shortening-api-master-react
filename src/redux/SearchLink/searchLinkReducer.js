import { SET_TXT_SEARCH } from './searchLinkType'

const initialState = {
  txtSearch:""
}

const SearchLinkReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TXT_SEARCH: return {
      ...state,
      txtSearch: action.payload
    }

    default: return state
  }
}

export default SearchLinkReducer
