import React from 'react'
import './Card.css'

function Card({image, name, job, text, changeCardData}) {
  return (
    <div className="card">
    <div className='imgContainer'>
         <img src={image} alt={name} />
         <span className='quoteIcon'> 
         <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"/></svg>
         </span>
    </div>
    <div className="data">
      <h2 className='data__name'>{name.split(" ").map((word) => { let firstChar = word[0].toUpperCase();  word = firstChar + word.substring(1, word.length);  return word}).join(" ") }</h2>
      <span className='data__job'>{job.toUpperCase()}</span>
      <p className='data__text'>{text}</p>
    </div>
    <div className="controllers">
        <div className="controllers__navigation">
            <a onClick={() => changeCardData("prev")} className='navigation__prev'><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg></a>
            <a onClick={() => changeCardData("next")} className='navigation__next'><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></a>
        </div>
        <input onClick={() => changeCardData("random")}  type="button" value="Surprise Me" />
    </div>
    </div>
  )
}

export default Card