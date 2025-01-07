
import React from "react";
import './../styles/App.css';

const App = () => {
  let [count, setCount]=useState(0)
  return (
    <div>
        {/* Do not remove the main div */}
    <h1>Button Clicked {count} Times</h1>
    <button onClick={setCount}>Click me</button>
    </div>
  )
}

export default App
