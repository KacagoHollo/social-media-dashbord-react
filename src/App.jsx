import './App.css';
import React, {useState, useEffect} from 'react';
import Social from './components/Social';
import Overview from './components/Overview';

import data from './data/sample-data'

function App() {

  const [toggle, setToggle] = useState(false)

  const toggleFunc = () => {
    setToggle(true)
  }

  const sumTotal = data.platforms.map((platform) => (
    Object.values(platform).reduce((total, item) => {
     return total + item.followers
    }, 0)
     ))
 
  return (
    <div className="App">
      <header>
        <div className='title'>
          <h1>Social Media Dashboard</h1>
          <h2>Total followers: {sumTotal}</h2>
        </div>
        <div className='theme'>
          <p>Dark Mode</p>
          <button className={"circle"} onClick={toggleFunc}></button>
        </div>
      </header>

      <div className='main-one'>
        {data.platforms.map((platform, i) => (
            <Social platform={platform} key={i}/>
            ))}
      </div>
      <div className='main-two'>
      {data.events.map((event, i) => (
        <Overview event={event} key={i}/>
      ))   
      }
      </div>
    </div>
  );
}

export default App;
