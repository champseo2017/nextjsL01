import { createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import promiseMiddleware from 'redux-promise-middleware'
import thunk from 'redux-thunk'



const exampleInitialState = {
  
  count: 0
}

// reduces เพิ่มลบอายุ
function countAge (state = exampleInitialState, action){
      switch(action.type){
          case 'INCREMENT':
              return Object.assign({}, state, {
                count: state.count + 1
              })
          case 'DECREMENT':
              return Object.assign({}, state, {
                count: state.count - 1
              })
          default:
            return state
      }
}
//


export function initializeStore (initialState = exampleInitialState) {
  return createStore(
    countAge,
    initialState,
    applyMiddleware(thunk,promiseMiddleware())
  )
}