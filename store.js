import { createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import promiseMiddleware from 'redux-promise-middleware'
import thunk from 'redux-thunk'

const exampleInitialState = {
  valuelocation:null,
  valuelan:null,
  isRejectedposts:null,
  isLodingposts:null,
  dataPosts:null
}

// reduces เพิ่มลบอายุ

//

export const reducer = (state = exampleInitialState, action) => {
  switch(action.type){
      case 'LOAD_LOCATION_SUCCESS':
          return Object.assign({}, state, {
            valuelocation: action.payload
      })
      case 'LOAD_LOCATION_REJECTED':
        return Object.assign({}, state, {
          valuelocation: action.payload
      })
      case 'LOAD_LANENTH':
        return Object.assign({}, state, {
          valuelan: action.payload
      })
      // load Posts 
      case 'LOAD_POSTS_PENDING':
        return Object.assign({}, state, {
          isRejectedposts: false,
          isLodingposts:true,
          dataPosts: null
      })
      case 'LOAD_POSTS_FULFILLED':
        return Object.assign({}, state, {
          isRejectedposts: false,
          isLodingposts:false,
          dataPosts: action.payload
      })

      case 'LOAD_POSTS_REJECTED':
        return Object.assign({}, state, {
          isRejectedposts: true,
          dataPosts: null
      })
      // load Posts
      default:
        return state
  }
}


export function initializeStore (initialState = exampleInitialState) {
  return createStore(
    reducer,
    initialState,
    applyMiddleware(thunk,promiseMiddleware()),
  )
}