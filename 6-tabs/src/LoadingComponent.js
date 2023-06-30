import React from 'react';
import './LoadingComponent.css';

import { CircularProgress } from '@mui/material';



function LoadingComponent() {
  return (
    <div className='loaderContainer'>
          <CircularProgress className='loader' />
    </div>
  ) 
}

export default LoadingComponent