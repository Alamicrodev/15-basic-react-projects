import React from 'react'
import {FaTimes} from 'react-icons/fa'
import {links, social} from './data';
import { useGlobalContext } from './context';


function Sidebar() {
   const {isSidebarActive, closeSidebar} = useGlobalContext()


  return (
    <div className={isSidebarActive? "sidebar sidebar--show": "sidebar"} >
        <div className="sidebar__header">
            <img className='logo' src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/e4c02d32431337.5605bf79cdb42.jpg" alt="logo" />
             <button className='sidebar__close' onClick={closeSidebar}>
                    <FaTimes /> 
             </button>
        </div>
        <ul className='sidebar__links'>
            {links.map((link) => {
               let {id, url, text, icon } = link
               return <li key={id} >
                <a href={url}> {icon} {text} </a>  
               </li>
            })}
        </ul>
        <ul className='sidebar__social'>
             {social.map((media) => {
                let {id, url, icon} = media
                
                return <li key={id}> 
                     <a href={url}> {icon} </a>
                </li>

             })}
        </ul>
    </div>  
  )
}

export default Sidebar