import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import { ClassCounter, HookCounter } from './use-effect'

const App = () => {
  const [value, setValue] = useState(0)
  const [visible, setVisible] = useState(true)

  if (visible) {
    return (
      <div>
        <button onClick={() => setValue((v) => v + 1)}>+</button>
        <button onClick={() => setVisible(false)}>hide</button>
        <ClassCounter value={value} />
        <HookCounter value={value} />
      </div>
    )
  } else {
    return <button onClick={() => setVisible(true)}>show</button>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
