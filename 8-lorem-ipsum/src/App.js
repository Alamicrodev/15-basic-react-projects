import './App.css';
import {useEffect, useState, useRef} from 'react';
import data from './data'


function App() {
   let [paraCount, setParaCount] = useState(1)
   let [paragraphs, setParagraphs] = useState([])


   function changeCountInput(e) { 
    setParaCount(e.target.valueAsNumber)
   }

   function generate() {
      let tempParas = []
      let i = 0; 
      while (true) {
          tempParas.push(data[i])

          if (tempParas.length === paraCount) {
            break; 
          }
        if (i < data.length-1){
          i++; 
        } 
        else {
          i = 0;
        }
    }
    setParagraphs(tempParas)
   }


  return (
    <div className="App">
      <main>
        <header>
          <h2>Tired of Boring Lorem Ipsum?</h2>
        </header>
        <div className="controllers">
          <span>Paragraphs:</span>
          <input className='numberInput' onChange={changeCountInput} type="number" value={paraCount}/>
           <input className='generateButton' onClick={generate} type="button" value="Generate" />
        </div> 
        <div className="content">
            {
              paragraphs.map((para, index) => { 
                   return (<p className='paragraph'> 
                     {para}
                   </p>)
              })
            }
        </div>
      </main>
    </div>
  );
}

export default App;
