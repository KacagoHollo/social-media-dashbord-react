import './App.css';
import React, {useState} from 'react';
import Social from './components/Social';
import Overview from './components/Overview';

import data from './data/sample-data'

function App() {

  const [toggle, setToggle] = useState("dark");
  const [orb, setOrb] = useState("left");

  const toggleFunc = () => {
    setToggle(toggle === "dark" ? "light" : "dark");
    setOrb(orb === "left" ? "right" : "left")
  }

  const sumTotal = data.platforms.reduce((sum, platform) => {

    return sum + Object.values(platform)[0].followers

  }, 0) 
 
  return (
    <div className={toggle}>
      <header>
        <div className='title'>
          <h1>Social Media Dashboard</h1>
          <h2>Total followers: {sumTotal}</h2>
        </div>
        <div className='theme'>
          <p>{toggle === "dark" ? "Dark Mode" : "Light Mode"}</p>
          <button className={toggle} onClick={toggleFunc}>
            <div className={orb}></div>

          </button>
        </div>
      </header>

      <div className='main-one'>
        {data.platforms.map((platform, i) => (
              <Social platform={platform} key={i}/>
            ))}
      </div>
      <div className='overview'>
        <h2>Overview - Today</h2>
        <div className='main-two'>
        {data.events.map((event, i) => (
            <Overview event={event} key={i}/>
        ))   
        }
        </div>
      </div>
    </div>
  );
}

export default App;
