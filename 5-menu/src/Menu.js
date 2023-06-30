import React, { useState } from 'react'
import './Menu.css'
import menuData from "./data"
import MenuItem from './MenuItem'

let caTegories = ["all", ...new Set(menuData.map((item) => item.category))]

function Menu() {

    let [categories, setCategories] = useState(caTegories)
    let [menuItems, setMenuItems] = useState(menuData)

    // when the category changes
    let categoryClick = (category) => {
        if (category  == "all") {
           return setMenuItems(menuData)
        }

        let menuItems = menuData.filter((menuItem) => menuItem.category == category ) 
        return setMenuItems(menuItems)
    }

  return (
    <div className='menu'>
       <ul className='menu__categories'>
          {
            categories.map((category) => 
                 <li><a onClick={() => categoryClick(category)}>{category}</a> </li>
            )
          }
       </ul>
       <ul className='menu__items'>
        {
          menuItems.map((menuItem) => {
            return <MenuItem key={menuItem.id} {...menuItem} /> 
          })
        }
       </ul>

    </div>
  )
}

export default Menu