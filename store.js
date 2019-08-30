import { createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import promiseMiddleware from 'redux-promise-middleware'
import thunk from 'redux-thunk'

const exampleInitialState = {
  count: 0,
  valuedeflat:null,
  valuedeflon:null,
  valuelat:null,
  valuelon:null,
}

// reduces เพิ่มลบอายุ

//

// google map lan
export const reducer = (state = exampleInitialState, action) => {
  switch(action.type){
      case 'VALUEGOOGLELAT':
          return Object.assign({}, state, {
            valuelat: action.payload
      })
      case 'VALUEGOOGLELON':
        return Object.assign({}, state, {
          valuelon: action.payload
      })
      case 'VALUEGOOGLEDEFLAT':
        return Object.assign({}, state, {
          valuedeflat: action.payload
      })
      case 'VALUEGOOGLEDEFLON':
        return Object.assign({}, state, {
          valuedeflon: action.payload
      })
      default:
        return state
  }
}
// google map lan

export function initializeStore (initialState = exampleInitialState) {
  return createStore(
    reducer,
    initialState,
    applyMiddleware(thunk,promiseMiddleware()),
  )
}