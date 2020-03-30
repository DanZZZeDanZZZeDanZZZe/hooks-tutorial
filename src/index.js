import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <HookSwither/>
  )
}

const HookSwither = () => {

  const [ color, setColor ] = useState('white')
  const [ fontSize, setfontSize ] = useState(14)


  return (
    <div style={{
        padding: '10px', 
        backgroundColor: color,
        fontSize: `${fontSize}px`
      }}>
      Font
      <button onClick={() => {setColor('black')}}>Dark</button>
      <button onClick={() => {setColor('white')}}>Light</button>
      <button 
        onClick={() => {setfontSize((s) => s + 2)}}
      >
        +
      </button>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

