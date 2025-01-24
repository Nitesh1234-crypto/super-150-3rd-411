
import './App.css'
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import { Footer } from './components/Main.jsx';
function App() {
  var data=10;
  return(
    <div>
      <p>{data}</p>
     <h1>Hello world</h1>
     <Header></Header>
     <Main></Main>
     <Footer></Footer>
     </div>
  )
  
}
// function Header(){
//   return(
//     <h1>
//       Header
//     </h1>
//   )
// }
// function Main(){
//   return(
//     <h1>
//       Main
//     </h1>
//   )
// }
// function Footer(){
//   return(
//     <h1>
//       Footer
//     </h1>
//   )
// }

export default App
