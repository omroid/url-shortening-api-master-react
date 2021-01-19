import { SET_TXT_SEARCH } from './searchLinkType'

export const setTxtSearch = (value) => {
  return {
    type: SET_TXT_SEARCH,
    payload: value
  }
}
