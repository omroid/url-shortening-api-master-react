import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'
import {loadLocalStorage} from './fatchShortUrl/fatchShortUrlAction'
import rootReducer from './rootReducer.js'


function saveToLocalStorage(state) {
    try {
      const serialisedState = JSON.stringify(state);
      localStorage.setItem("persistantState", serialisedState);
    } catch (e) {
      console.log(e);
    }
  }
  
  
  function loadFromLocalStorage(store) {
      const serialisedState = localStorage.getItem("persistantState");
      if (serialisedState !== null){ 
          console.log(JSON.parse(serialisedState))
      store.dispatch(loadLocalStorage(JSON.parse(serialisedState)))
      }

  }
  
const store = createStore(
  rootReducer
  ,applyMiddleware(thunk)
)
loadFromLocalStorage(store);
store.subscribe(() => saveToLocalStorage(store.getState().fatchShortUrl.url));

export default store
