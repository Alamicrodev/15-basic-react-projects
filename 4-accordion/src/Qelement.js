import React, {useState} from 'react'
import './Qelement.css'

function Qelement({question, answer}) {
    let [open, setOpen] = useState(false)

    let showAnswer = () => {
        setOpen((prevOpen) => !prevOpen)
    }

  return (
    <li className='question' >
        <div className="question__title">
            <h2> {question} </h2>
            <button onClick={showAnswer} className='toggleButton'> 
               {
                open? <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg> :
                   <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
               }

             </button>
        </div>
        
        {
             open?  <p className='question__answer'>
                   {answer}
             </p> : ""
        }
       
    </li>
  )
}

export default Qelement