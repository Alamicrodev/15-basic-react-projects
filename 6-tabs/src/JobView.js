import React from 'react'
import "./JobView.css"

function JobView({data}) {

 
   let {dates, title, company, duties} = data
   
  return (
    <div className='jobView'>
         <h2>{title}</h2>
         <span className='jobView__company'>{company}</span>
         <span className='jobView__dates'>{dates}</span>
         <ul className='jobView__duties'>
             {
                duties.map((duty, i) => <li key={i}> 
                    <svg strokeWidth="0" viewBox="0 0 448 512" className="job-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"></path></svg>
                    <p>{duty}</p>
                </li>)
             }
         </ul>
    </div>
  )
}

export default JobView