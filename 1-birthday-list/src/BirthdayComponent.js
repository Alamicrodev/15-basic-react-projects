import React from 'react'
import './BirthdayComponent.css'

function BirthdayComponent({img, name, age}) {
  return (
    <li>   
       <div className='birthday'>
          <img src={img} alt={img}/>
          <div className='userData'>
             <h2 className='userData__name'>{name}</h2>
             <h4 className='userData__age'>{age} years</h4>
          </div>
      </div>
    </li>

  )
}

export default BirthdayComponent