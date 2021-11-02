import { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  return (
    <div>
      <HookSwitcher />
    </div>
  )
}

const HookSwitcher = () => {
  const [color, setColor] = useState('white')
  const [fontSize, setFontSize] = useState(24)

  const fontColor = color === 'black' ? 'white' : 'black'

  return (
    <div
      style={{
        padding: '10px',
        color: fontColor,
        backgroundColor: color,
        fontSize: `${fontSize}px`,
      }}
    >
      <p>Hello, World!</p>
      <button onClick={() => setColor('black')}>Dark</button>
      <button onClick={() => setColor('white')}>Light</button>
      <button onClick={() => setFontSize((s) => s + 2)}>+</button>
      <button onClick={() => setFontSize((s) => s - 2)}>-</button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
