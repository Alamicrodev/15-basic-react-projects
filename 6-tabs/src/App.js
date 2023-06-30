import './App.css';
import {useState, useEffect, useRef} from 'react';
import LoadingComponent from './LoadingComponent';
import Sidebar from './Sidebar';
import JobView from './JobView';
import axios from 'axios';

let dataUrl = "https://course-api.com/react-tabs-project"

function App() {

  let loading = useRef(true) 
  let [tab, setTab] = useState(0)
  let [data, setData] = useState("")

   
  async function getData() {
    try {
      let resp = await axios.get(dataUrl) 
      loading.current = false
      setData(resp.data)

    }
    catch (err) {
      console.log("faled to get data with err:", err)
    } 
  }

   
  useEffect(() => {
     getData()
  }, [])

  if (loading.current === true) {
    return (
         <div className="App">
          <LoadingComponent />
          </div> 
    )
  }
  else {
    return (
      <div className="App">
        <main>
          <header>
            <h1> My Experience </h1>
            <div className='designLine'></div>
          </header>
          <div className="content">
              <Sidebar data={data.map((job => job.company))} cTab={tab} setTab={setTab} /> 
              <JobView key={data[tab].id} data={data[tab]} /> 
          </div>         
        </main>
      </div>
    );
  }

  
}

export default App;
