import './App.css';
import {useState} from 'react';
import SingleEntry from './SingleEntry';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; 


function App() {
  let [input, setInput] = useState("")
 
  const getData = () => {
    try {
      let result = JSON.parse(localStorage.getItem('groceryData'))
      if (result === null) return []
      else return result
    }
    catch {
      return []
    }
  }

  let [items, setItems] = useState(getData())   

  const onSubmit = (e) => {
    e.preventDefault()

    const randomId = function(length = 6) {
      return Math.random().toString(36).substring(2, length+2);
    };

    let newItems = [...items, {title: input, completed: false, id:randomId(10)}]
    
    localStorage.setItem('groceryData', JSON.stringify(newItems))
    
    // Create an instance of Notyf
    const notyf = new Notyf({position: {x: "center", y:"top"}, types: [{type: "success", className: "successToast"}]});

    // Display an error notification 
    notyf.success({message: "Item Added To The List",  background: "#EC4E20"})

    setItems(newItems)

  }

  return (
    <div className="App">
      <main>
        <h2>Grocery Bud</h2>
        <form action={onSubmit}>
          <input className='titleInput' type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
          <input className='btn' type="submit" onClick={onSubmit} value="Add Item" />
        </form>
        <div className="entries">
            {
               items.map(item => {
                let {title, completed, id} = item

                return <SingleEntry key={id} title={title} completed={completed} id={id} items={items} setItems={setItems} />
               
              }) 
            }
        </div>
      </main>
    </div>
  );
}

export default App;
