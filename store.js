import { createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import promiseMiddleware from 'redux-promise-middleware'
import thunk from 'redux-thunk'

const exampleInitialState = {
  valuelocation:null,
  valuelan:null
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