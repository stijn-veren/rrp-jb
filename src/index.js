import { createStore } from 'redux'

const reducer = (state, action) => {
  if (state === undefined) {
    return 0
  }

  switch (action.type) {
    case 'INC':
      return state + 1

    case 'DEC':
      return state - 1

    case 'RND':
      return state + action.payload

    default:
      return state
  }
}

const store = createStore(reducer)

document.getElementById('inc').addEventListener('click', () => {
  store.dispatch({ type: 'INC' })
})

document.getElementById('dec').addEventListener('click', () => {
  store.dispatch({ type: 'DEC' })
})

document.getElementById('rnd').addEventListener('click', () => {
  const payload = Math.floor(Math.random() * 9)
  store.dispatch({ type: 'RND', payload })
})

const update = () => {
  document.getElementById('counter').innerHTML = store.getState()
}

store.subscribe(update)
