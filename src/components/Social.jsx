import React from 'react';
import smIcons from '../data/smicons';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

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
            <h3 style={{ display: 'flex', alignItems: 'center' }} className={profile.difference > 0 ? "green" : "red"}>{profile.difference > 0 ? <ArrowDropUpIcon  style={{ color: "#46938c" }}></ArrowDropUpIcon> : <ArrowDropDownIcon style={{ color: "#b0455c" }}></ArrowDropDownIcon>}{Math.abs(profile.difference)} Today</h3>
            
          </div>
        ))}
      </>
  )
}

export default Social