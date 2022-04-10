import './App.css';
import React, {useState, useEffect} from 'react';
import Social from './components/Social';
import Overview from './components/Overview';

import data from './data/sample-data'

function App() {

  const [detail, setDetail] = useState(data)

  const sumTotal = data.platforms.map((platform) => (
    Object.values(platform).reduce((total, item) => {
     return total + item.followers
    }, 0)
     ))
 
  return (
    <div className="App">
      <header>
        <h1>Social Media Dashboard</h1>
        <h2>Total followers: {sumTotal}</h2>
        
      </header>
      {data.platforms.map((platform, i) => (
        <Social platform={platform} key={i}/>
      ))}
      {data.events.map((event, i) => (
        <Overview event={event} key={i}/>
      ))   
      }
    </div>
  );
}

export default App;
