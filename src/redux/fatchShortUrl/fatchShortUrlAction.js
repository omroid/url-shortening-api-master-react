import axios from 'axios'
import {
   FETCH_URL_REQUEST, 
    FETCH_URL_SUCCESS,
   FETCH_URL_FAILURE,

} from './fatchShortUrlTypes'
import {clearTxtSearch} from '../SearchLink/searchLinkAction'


export const fetchURL = (url) => {
  return (dispatch) => {
    dispatch(clearTxtSearch());
    if (is_url(url)===true){
    dispatch(fetchUrlRequest())
    axios
      .get('https://api.shrtco.de/v2/shorten?url='+url)
      .then(response => {
        // response.data is the users
        const data = response.data
        dispatch(fetchUrlSuccess(data))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchUrlFailure(error.message))
      })
    }
    else{
      dispatch(clearTxtSearch());
      dispatch(fetchUrlFailure("please enter valid url"))
    }
  }
}

export const fetchUrlRequest = () => {
  return {
    type: FETCH_URL_REQUEST
  }
}

export const fetchUrlSuccess = requestLink => {
  return {
    type: FETCH_URL_SUCCESS,
    payload: requestLink
  }
}

export const fetchUrlFailure = error => {
  return {
    type: FETCH_URL_FAILURE,
    payload: error
  }

}




function is_url(str)
{
 const regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
        if (regexp.test(str))
        {
          return true;
        }
          return false;
        
}



