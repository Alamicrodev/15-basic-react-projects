import { useEffect, useState } from 'react';
import './App.css';
import Qelement from './Qelement';
import questions from "./data";

function App() {
   let [data, setData] = useState(questions)
    
   useEffect(() => {
    setData(questions)
   }, {})
 
  return (
    <div className="App">
      <main>
          <div className='content'>
          <h1>Questions</h1>
          <ul>
              
             {data.map((one) => {
               return <Qelement key={one.id} question={one.title.split(" ").map((word) => { let firstChar = word[0].toUpperCase();  word = firstChar + word.substring(1, word.length);  return word}).join(" ")} answer={one.info} />
             })} 
            
            
          </ul>
          </div>
      </main>
    </div>
  );
}

export default App;
