import React from 'react'
import { CircularProgress } from '@mui/material';
import './LoadingComponent.css'

function LoadingComponent() {
  return (
    <div className='loadingDiv'>
       <CircularProgress  className='circularProgress'/>
    </div>
  )
}

export default LoadingComponent