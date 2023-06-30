import React from 'react'
import "./MenuItem.css"



function MenuItem({img, title, price, desc}) {
  return (
    <li className='menuItem'>
         <img src={img} alt={title}/>
         <div className='menuItem__info'>
           <div> 
           <h2>{title}</h2>
           <span>${price}</span>
           </div>
           <p>{desc}</p>   
         </div>
    </li>
  )
}

export default MenuItem