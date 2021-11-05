import { createStore } from 'redux'

const reducer = (state, action) => {
  if (state === undefined) {
    return 0
  }

  switch (action.type) {
    case 'INC':
      return state + 1

    default:
      return state
  }
}

const store = createStore(reducer)

console.log(store.getState())

store.dispatch({ type: 'INC' })
store.dispatch({ type: 'INC' })

console.log(store.getState())
