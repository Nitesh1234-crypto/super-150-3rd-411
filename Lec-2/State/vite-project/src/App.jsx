
import { useState } from 'react';
import './App.css'

function App() {
  //  let count=0;
  let [count,setCount]=useState(0);

   function changeCount(){
    let newcount= count+1;
    setCount(newcount);
    
   }
   
  return (
   <div>
    <h1>counter App</h1>
    <h2>{count}</h2>
    <button onClick={changeCount}>Increase</button>
   </div>
  )
}

export default App
