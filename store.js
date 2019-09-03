import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import promiseMiddleware from 'redux-promise-middleware'
import thunk from 'redux-thunk'

const exampleInitialState = {
  valuelocation: null,
  valuelan: null,
  isRejectedposts: null,
  isLodingposts: null,
  dataPosts: null,
  load_checkpost: null,
  load_checkposttf: null,
  // datapost id
  datapostid: null,
  isRejectedpostsid: null,
  // posts id
  savepostsid: null,
  titlepostid:null,
  isLodingpostsid:true

}

// reduces เพิ่มลบอายุ

//

export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
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
        isLodingposts: true,
        dataPosts: null
      })
    case 'LOAD_POSTS_FULFILLED':
      return Object.assign({}, state, {
        isRejectedposts: false,
        isLodingposts: false,
        dataPosts: action.payload
      })

    case 'LOAD_POSTS_REJECTED':
      return Object.assign({}, state, {
        isRejectedposts: true,
        dataPosts: null
      })
    // load Posts

    // loadcheck post
    case 'LOAD_CHECKPOST_SUCCESS':
      return Object.assign({}, state, {
        load_checkposttf: true,
        load_checkpost: action.payload.id
      })

    case 'LOAD_CHECKPOST_REJECTED':
      return Object.assign({}, state, {
        load_checkposttf: false,
        load_checkpost: action.payload.id
      })
    // loadcheck post

    // loadpostid
   
    case 'LOAD_POSTID_FULFILLED':
      return Object.assign({}, state, {
        isRejectedposts: false,
        isLodingpostsid:false,
        titlepostid:action.payload.title.rendered,
        dataPosts: action.payload.content.rendered
      })

    case 'LOAD_POSTID_REJECTED':
      return Object.assign({}, state, {
        isRejectedposts: true,
        titlepostid:action.payload,
        dataPosts: action.payload
      })

    // loadpostid

    // save posts id
    case 'SAVE_POSTID_SUCCESS':
      return Object.assign({}, state, {
        savepostsid: action.payload
    })

    default:
      return state
  }
}


export function initializeStore(initialState = exampleInitialState) {
  return createStore(
    reducer,
    initialState,
    applyMiddleware(thunk, promiseMiddleware()),
  )
}