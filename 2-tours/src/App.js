import {useState, useEffect} from 'react'
import axios from 'axios';
import './App.css';
import LoadingComponent from './LoadingComponent';
import ContentComponent from './ContentComponent';


let data_url = "https://course-api.com/react-tours-project"


function App() {

  let [loading, setLoading] = useState(true)
  let [tours, setTours] = useState([])
  
  let fetchTours = async () => {
      try {
        console.log("try me")
        setLoading(true)
        let resp = await axios(data_url)
        setTours(resp.data)
        setLoading(false)
      }
      catch (error) {
        console.log(error.response)
      }
  }
   
  useEffect(() => {

    console.log("inside useeffect")

    fetchTours()

  }, [])


  return (
    <div className="App">
      {loading? <LoadingComponent/>: 
           <ContentComponent tours={tours} setTours={setTours} fetchTours={fetchTours} setLoading={setLoading} /> 
      }
      
    </div>
  );
}

export default App;
