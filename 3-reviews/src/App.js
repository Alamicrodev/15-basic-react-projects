import './App.css';
import {useState, useRef} from 'react';
import Card from './Card';
import reviews from "./data";


function App() {
  let cardIndex = useRef(0)
  let [cardData, setCardData] = useState(reviews[0])
  
  let changeCardData = (method) => {
      if (method == "prev"){
           if (cardIndex.current == 0) {
             cardIndex.current = reviews.length-1 
           }
           else {
            cardIndex.current = cardIndex.current-1; 
           }
      }
      else if (method == "next") {
        if (cardIndex.current == reviews.length-1) {
          cardIndex.current = 0
        }
        else {
         cardIndex.current = cardIndex.current+1; 
        }
      }
      else if (method == "random") {
         let random = Math.floor(Math.random()*reviews.length)
         cardIndex.current = random
      }

      setCardData(reviews[cardIndex.current])
  }

  return (
    <div className="App">
       <main>
          <Card key={cardData.id} {...cardData} changeCardData={changeCardData} /> 
       </main>
    </div>
  );
}

export default App;
