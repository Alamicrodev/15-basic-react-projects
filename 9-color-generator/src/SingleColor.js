import React from 'react'
import rgbToHexf from './utils'
import rgbToHex from './utils'
import {Notyf} from 'notyf';
import 'notyf/notyf.min.css';

function SingleColor({index, weight, rgb, type}) {

    let hexCode = rgbToHex(rgb[0],rgb[1], rgb[2])
   
  const colorClick = () => {
      navigator.clipboard.writeText(hexCode)

      // Create an instance of Notyf
      const notyf = new Notyf({position: {'x': 'center', 'y': 'top'}, types: [{type: "success", className: "toasty"}]});

      // Display an error notification 
      notyf.success(`Copied ${hexCode} to clipboard!`);
  }

  return (
    <div style={{backgroundColor: `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`, color: `${type === "shade"? "#fff": "#000"}`}} onClick={colorClick} className='singleColor'>
        <span className='weight'>{weight}%</span>
        <span className='hexCode'>{hexCode}</span>
    </div>
  )
}

export default SingleColor