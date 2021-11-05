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

let state = reducer(undefined, {})

let state = reducer(state, { type: 'INC' })

console.log(state)
