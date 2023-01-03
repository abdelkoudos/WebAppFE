import './App.css';
import { useEffect, useState } from 'react';
import axios, {AxiosResponse} from 'axios';
import React from 'react';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('https://localhost:44375/WebApp').then((res: AxiosResponse<any>) => {
      console.log(res.data)
      setData(res.data)
    })
  },[])

  const arr = data.map((data, index) => {
    return(
      <>

      <tr>
        <td>{data.player_id}</td>
        <td>{data.player_name}</td>
      </tr>
      </>
    )
  })

  return (
    <div className="App">
      <header className="App-header">
        
        <h1> Web Application Front End </h1>
        <h3> Connecting to ASP .Net Core </h3>
        <br/>
        <h3> View player Database </h3>

        <table>
          <tr>
            <th>Player_id</th>
            <th>Player_name</th>
          </tr>
        
        {arr}
      </table>

      </header>
    </div>
  );
}

export default App;
