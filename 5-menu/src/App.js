import './App.css';
import Menu from "./Menu"


function App() {
  return (
    <div className="App">
      <main>
         <div className="body">
          <header>
            <h1> Our Menu </h1>
            <div className="header__underline" >  </div>
          </header>
           
             <Menu/>

         </div>
      </main>
    </div>
  );
}

export default App;
