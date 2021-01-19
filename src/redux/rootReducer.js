import { combineReducers } from 'redux'
import searchLinkReducer from './SearchLink/searchLinkReducer'
import fatchShortUrlReducer from './fatchShortUrl/fatchShortUrlReducer'

const rootReducer = combineReducers({
    SearchLink:searchLinkReducer,
    fatchShortUrl:fatchShortUrlReducer

})

export default rootReducer
