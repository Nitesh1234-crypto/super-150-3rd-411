// import { useState } from "react"
// import "./App.css"
// let arr=["red","black","green","orange","blue","yellow","pink","purple","grey","brown"]
// function App() {
//   let [color,setColor]=useState("black");
//   function changeColor(){
   
//     let index = Math.floor(Math.random()*10)
//     let randomcolor= arr[index];
//     setColor(randomcolor);

//   }
//  return(
//   <div>
//     <h1>Random colour generator</h1>
//     <div style={{height:"100px" ,width:"100px" ,border:" 2px solid black",background:color}}></div>
//     <button onClick={changeColor}>Click</button>
//   </div>
//  )
// }

// export default App





import React from 'react'
import { useState } from 'react'
const App = () => {
  let [num,setNum] =useState("click button to generate random number")
  function random(){
    let value = Math.floor(Math.random()*10)
    setNum(value);
  }
  return (
    <div>
      <button onClick={random}>Click</button>
      <h4>{num}</h4>
       {num==7 && <div><h1>Player win</h1>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-KSSjtFmEmjGATdzXPSFwP6D1TsLfmQcx0caeOEeADzNXrqfr2XTPExg&s" alt="" /></div> }
      
    </div>
  )
}

export default App

