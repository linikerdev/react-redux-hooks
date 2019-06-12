import { createStore } from 'redux'

const INITIAL_STATE = {
  data: [
    'React Native',
    'VueJs',
    'ReactJs'
  ]
}


function courses (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_COURSE':
      return {
        ...state,
        
        data: [
          ...state.data,
          action.title
        ]
      }
    default:
      return state
  }
}


const store = createStore(
  courses, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store