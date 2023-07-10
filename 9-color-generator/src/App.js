import './App.css';
import {useState, useEffect} from 'react';
import SingleColor from './SingleColor';
import Values from 'values.js'
import {Notyf} from 'notyf';
import 'notyf/notyf.min.css';
import { all } from 'axios';



function App() {

  let [value, setValue] = useState('')
  let [list, setList] = useState([])


   function onSubmit(e) {
       e.preventDefault()
       
       try {
         let colors = new Values(value).all(10)
         setList(colors)
         console.log(colors)
       }
       catch(err) {
        // Create an instance of Notyf
         const notyf = new Notyf({position: {'x': 'center', 'y': 'top'}, types: [{type: "error", className: "toasty"}]});

        // Display an error notification 
        notyf.error(err.message);

       }
   }

   useEffect(() => {
    let colors = new Values('#f15025').all(10)
    setList(colors)
   }, [])

  return (
    <div className="App">
      <div className="controllers">
            <h2>Color Generator</h2>
            <form action={onSubmit}>
                <input className='colorPicker' type="color" value={value} onChange={(e) => setValue(e.target.value)} />
                <input className='form__textInput' type="text" placeholder='#0A3200' value={value} onChange={(e) => setValue(e.target.value)} />
                <input style={{background: `${value}`}} className='form__submit' type="submit" onClick={onSubmit}/>
            </form>
      </div>
      <div className="colors">
          {
            list.map((color, index) => {
              return <SingleColor key={index} {...color} index={index} /> 
            })
          }
      </div>
    </div>
  );
}

export default App;
