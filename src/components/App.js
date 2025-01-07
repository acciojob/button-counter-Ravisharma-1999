
import React from "react";

import { useState } from "react"
import './../styles/App.css';

const App = () => {
  const [count, setCount]=useState(0)
  return (
    <div>
    
    <p>Button Clicked {count} Times</p>
    <button onClick={()=>setCount(count+1)}>click me</button>
    </div>
  )
}

export default App
