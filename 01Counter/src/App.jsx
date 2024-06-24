import { useState } from 'react'

import './App.css'

function App() {
  const [counter,setCounter] = useState(0)
  const addValue =()=>{
    setCounter(counter+1)
  }

  const removeValue =()=>{
    setCounter(counter-1)
  }

  const resetValue =()=>{
    setCounter(0)
  }


  return (
    <>
      <h1>React course with Hitesh</h1>
      <h2>counter value: {counter}</h2>
      <button
      onClick={addValue}
      >Add value</button>{" "}
      <button
      onClick={removeValue}
      >Remove Value</button>
      <button onClick={resetValue} >Reset Value</button>
      <p>footer: {counter} </p>
      
     
    </>
  )
}

export default App
