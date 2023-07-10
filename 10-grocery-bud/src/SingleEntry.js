import React from 'react'
import {Notyf} from 'notyf';

function SingleEntry({id, title, completed, items,  setItems}) {

    const setCompleted = (value) => {
        
        let newItems = items.map((item) => {
            if (item.id === id) {
                item.completed = value
                return item
            }
            else return item
        })
        
        
        localStorage.setItem('groceryData', JSON.stringify(newItems))
        setItems(newItems)

    }
    
    const deleteHandler = () => {
        
        let newItems = items.filter((item) => item.id !== id)
        localStorage.setItem('groceryData', JSON.stringify(newItems))

        // Create an instance of Notyf
        const notyf = new Notyf({position: {x: "center", y:"top"}, types: [{type: "success", className: "successToast"}]});

        // Display an error notification 
        notyf.success({message: "Item Deleted", background: "#EC4E20"})

        setItems(newItems)
    }
  return (
    <div className='singleEntry'> 
      <label className={` ${completed === true? "text-overline": ""}`} >
      <input  type="checkbox" checked={completed} onChange={(e) => setCompleted(e.target.checked)} />
        {title}
      </label>
      <input className='btn' type="button" value="Delete" onClick={deleteHandler}  />
    </div>
  )
}

export default SingleEntry