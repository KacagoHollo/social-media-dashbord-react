import React, {useState} from 'react';
import smIcons from '../data/smicons';

function Social({platform}) {
  const platName = (Object.keys(platform)[0]);
  console.log(platName)

  Intl.NumberFormat('en-US', {
    notation: "compact",
    maximumFractionDigits: 1
  }).format(10000);

  return (
      <>
        {Object.values(platform).map((profile, i) => (
          <div className='social' key={i}>
            <div className={platName}></div>
           
            <h2> <span className='icons'>{smIcons[platName]}</span>{platName === "youtube" ? profile.name : "@" + profile.name}</h2>
            <h1>{profile.followers >= 1e4 ? (profile.followers / 1e3).toFixed(0) + "k" : profile.followers}</h1>
            <h1>{platName === "youtube" ? "SUBSCRIBERS" : "FOLLOWERS"}</h1>
            <h3 className={profile.difference > 0 ? "green" : "red"}>{profile.difference} Today</h3>
          </div>
        ))}
      </>
  )
}

export default Social