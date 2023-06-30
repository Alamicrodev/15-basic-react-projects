import React from 'react';
import "./Sidebar.css";

function Sidebar({data, cTab, setTab}) {
  
    return (
    <div className='sidebar'>
       <ul> 
        {
            data.map((job, i) => 
            <li key={i} onClick={() => setTab(i)} className={i === cTab? "sidebar__item sidebar__item--selected":"sidebar__item"}> <button> {job}</button> </li>
            )
        }        
       </ul>
    </div>
  )
}

export default Sidebar