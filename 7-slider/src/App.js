import { useEffect, useState } from 'react';
import './App.css';
import Slider from "./Slider"


function App() {
  return (
    <div className="App">
       <main>
           <h2> <span>/</span> Reviews </h2>
           <Slider />
       </main>
    </div>
  );
}


export default App;
