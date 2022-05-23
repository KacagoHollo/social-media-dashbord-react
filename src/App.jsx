import './App.css';
import React, {useState} from 'react';
import Social from './components/Social';
import Overview from './components/Overview';

import data from './data/sample-data'

function App() {

  const [toggle, setToggle] = useState("dark")

  const toggleFunc = () => {
    setToggle(toggle === "dark" ? "light" : "dark")
  }

  // Old solution, numbers get after each other without adding

  // const sumTotal = data.platforms.map((platform) => (
  //   Object.values(platform).reduce((total, item) => {
  //    return total + parseInt(item.followers) 
  //   }, 0)
  //    ))

  const sumTotal = data.platforms.reduce((sum, platform) => {
    // console.log(Object.values(platform)[0].followers);
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
          <button className={toggle} onClick={toggleFunc}></button>
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
