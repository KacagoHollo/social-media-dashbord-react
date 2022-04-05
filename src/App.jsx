import './App.css';
import React, {useState, useEffect} from 'react';
import Social from './components/Social';
import Overview from './components/Overview';

import data from './data/sample-data'

function App() {

  const [detail, setDetail] = useState(data)
 
  return (
    <div className="App">
      {/* {!detail ? "shit" : detail.map((platforms, events, i) => (
        <Social platforms={platforms} key={i}/>
      ))} */}

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
