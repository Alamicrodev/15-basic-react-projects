import React, {useState, useRef, useEffect} from 'react';
import {links, social} from './data';
import { GiHamburgerMenu } from "react-icons/gi";
import './Navbar.css'


function Navbar() {
    const [toggle, setToggle] = useState(false)
    const navigation = useRef(null)
    const socialBar = useRef(null)
    const navLinks = useRef(null)

    useEffect(() => {
        if (toggle) {
            let navHeight = navigation.current.offsetHeight; 
            let socialBarHeight = socialBar.current.offsetHeight;
            console.log(navHeight+socialBarHeight+"px") 
            navLinks.current.style.height = navHeight+socialBarHeight+"px"

        }
        else {
            navLinks.current.style.height = "0px"
        }
    },[toggle])

  return (
    <nav> 
        <div className="nav__main">
          <div className="logo">
             Some 
             <span> Logo</span>
          </div>
          <button className={`nav__toggle ${ toggle? "toggle--active": "" }`} onClick={() => setToggle((prevToggle) => {return !prevToggle})} >
            <GiHamburgerMenu />
          </button>
        </div>
        <div ref={navLinks} className={`nav__links ${ toggle? "nav__links--show": "" }`}>
            <ul ref={navigation} className='navigation'>
               {
                links.map((link, index) =>  {
                   const {id, url, text} = link  
                   return <li key={id}> <a href="#">{text}</a> </li>
                   }
                ) 
               }
            </ul>
            <ul ref={socialBar} className='social'>
                {
                    social.map((link, index) =>  {
                         const {id,url, icon} = link

                         return <li key={id}>
                              <a href={url}> {icon} </a>
                         </li>

                    } )
                }
            </ul>
        </div>
       
        
    </nav>
  )
}

export default Navbar