import React, {useState} from 'react'
import "./Tour.css"

function Tour({id, price, img, title, desc, setTours}) {
    
    let [showMore, setShowMore] = useState(false)
    let shortDesc = desc.substring(0,231)+"..."

    function removeTour() {
        setTours((prevTours) => 
             prevTours.filter((tour) => tour.id !== id)
        )
    }
  
    return (
    <li>
    <div className='tourCard'>
         <span className='tour__price'> ${price} </span>
         <img src={img} alt={title} />
         <div className='tourContent'>
              <h3 className='tourContent__title'> {title} </h3>
              <p className='tourContent__desc'> {showMore? desc:shortDesc}
              <a onClick={() => {setShowMore((prev) => !prev)}}>{showMore? 'Show Less':'Read More'}</a>
              </p>
              
              <input onClick={removeTour} type="button" value="Not Interested" />
         </div>
    </div>
    </li>
  )
}

export default Tour