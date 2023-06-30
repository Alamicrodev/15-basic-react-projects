import React from 'react'
import "./ContentComponent.css"
import Tour from './Tour'

function ContentComponent({tours, setTours, fetchTours}) {
  return (
    <main>
        {tours.length > 0? 
          <div className='content'>
                <h2>Our Tours</h2>
                <div className='headerUnderline' ></div>
                <ul className='toursList'>
                   {
                    tours.map((tour) => <Tour key={tour.id} id={tour.id} price={tour.price} img={tour.image} title={tour.name} desc={tour.info} setTours={setTours} />  )
                   }
                </ul>
          </div>

          : 
          
          <div className='contentEmpty' > 
                <h2>No Tours Left</h2>
                <input onClick={() => {fetchTours()}} type="button" value="Refresh" />
          </div>

         }
    </main>
  )
}

export default ContentComponent