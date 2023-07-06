import React, {useEffect, useState} from 'react'
import './Slider.css'
import data from './data';
import {FaQuoteRight} from "react-icons/fa"
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';


function Slider() {
  let [people, setPeople] = useState(data)
  let [index, setIndex] = useState(0)

  useEffect(() => {
    const lastIndex = people.length-1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > people.length-1) {
      setIndex(0)
    }
  })

  useEffect(() => {
    
    let sliderTimer = setTimeout(() => {
      setIndex(index+1)
    }, 5000 )
  
    return () => {
      clearTimeout(sliderTimer)
    }
     
  }, [index, people])

  return (
    <div className='slider'>
        <div className="slider__main">
          {
              people.map((person, personIndex) => {
                const {id, image, name, title, quote} = person
                let slideClass = "nextSlide"
                if (personIndex === index) {
                  slideClass = "currentSlide"
                }
                if (personIndex === index-1 || (index === 0 && personIndex === people.length-1)) {
                  slideClass = "previousSlide"
                }

                return (
                  <article  key={id} className={slideClass}> 
                      <img className='slide__image' src={image} alt={name} />
                      <h2 className='slide__name'>{name}</h2>
                      <span className='slide__title'>{title}</span>
                      <p className='slide__quote' >{quote}</p>
                      <FaQuoteRight className="slide__icon" />
                  </article>
                )


              })
          }
        </div>
        <div className='slider__controls'>
          <button onClick={() => setIndex(index-1)} className='btn__prev' >
          <FiChevronLeft /> 
          </button>
          <button onClick={() => setIndex(index+1)} className='btn__next' >
          <FiChevronRight /> 
          </button>
        </div>
    </div>
  )
}

export default Slider