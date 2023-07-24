import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import { useGlobalContext } from './context'

function Home() {
   const {openSidebar, openModal} = useGlobalContext()

  return (
    <div className='home'>
    <button className='sidebarToggle' onClick={openSidebar}>
           <GiHamburgerMenu /> 
    </button>
    <button className='modalToggle' onClick={openModal}>
           Show Modal
    </button>

    </div>
  )
}

export default Home