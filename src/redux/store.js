import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'
// import {loadLocalStorage} from './fatchShortUrl/fatchShortUrlAction'
import rootReducer from './rootReducer.js'
import {loadFromLocalStorage,saveToLocalStorage} from './loaclStorage/localStorageActions'


  
const store = createStore(
  rootReducer
  ,applyMiddleware(thunk)
)
loadFromLocalStorage(store);
store.subscribe(() => saveToLocalStorage(store.getState().fatchShortUrl.url));

export default store
