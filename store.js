import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'


function countAge(state = 0, action){
      switch(action.type){
          case 'INCREMENT':
            return state + 1
          case 'DECREMENT':
            return state - 1
          default:
            return state
      }
}


export function initializeStore () {
  return createStore(
    countAge,
    composeWithDevTools(applyMiddleware())
  )
}
