import { useState } from 'react';
import './App.css';
import BirthdayComponent from './BirthdayComponent';

let userList = [
  {
    name: "Jack Hoff", 
    img: "https://xsgames.co/randomusers/assets/avatars/male/10.jpg",
    age: 42
  },
  {
    name: "Dusty Shidiz", 
    img: "https://xsgames.co/randomusers/assets/avatars/male/21.jpg",
    age: 30
  },
  {
    name: "Diddy Doodat", 
    img: "https://xsgames.co/randomusers/assets/avatars/female/2.jpg",
    age: 26
  },
  {
    name: "Gregory Poopsicle", 
    img: "https://xsgames.co/randomusers/avatar.php?g=male",
    age: 56
  },
  {
    name: "Colonel Indiana Longnuts", 
    img: "https://xsgames.co/randomusers/assets/avatars/female/14.jpg",
    age: 32
  },
  {
    name: "K'not Jesus", 
    img: "https://xsgames.co/randomusers/assets/avatars/male/14.jpg",
    age: 28
  },
]

function App() {
  let [birthdays, setBirthdays] = useState(userList) 
  let [buttonValue, setButtonValue] = useState("Clear All")

  function toggleButton() {
    if (buttonValue === "Clear All") {
      setBirthdays(() => [])
      setButtonValue(() => "Add All")
    }
    else {
      setBirthdays(() => userList)
      setButtonValue(() => "Clear All")
    }
    
  }

  return (
    <div className="App">
      <main>
       <div className="container">
          <h2> {birthdays.length} Birthdays Today </h2>
          <ul className='birthdayList' >
              { birthdays.map(birthday => {
                 return <BirthdayComponent img={birthday.img} name={birthday.name} age={birthday.age} />
              }) }
              
          </ul>  
          <input onClick={toggleButton} id='btn' type="button" value={buttonValue} />
       </div>  
      </main>
    </div>
  );
}

export default App;
