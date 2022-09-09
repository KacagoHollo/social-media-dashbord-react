import React from 'react';
import smIcons from '../data/smicons';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

function Overview({event}) {
  console.log(event)
  const platName = event.platform;

  Intl.NumberFormat('en-US', {
    notation: "compact",
    maximumFractionDigits: 1
  }).format(10000);

  return (
    <>
        <div className='over'>
            <h1><span className='icons'>{smIcons[platName]}</span></h1>
            <h2 className='type'>{event.type}</h2>
            <h2 className='amount'>{event.amount >= 1e4 ? (event.amount / 1e3).toFixed(0) + "k" : event.amount}</h2>
            <p style={{ display: 'flex', alignItems: 'center' }} className={event.modifier > 0 ? "green" : "red"}>{event.modifier > 0 ? <ArrowDropUpIcon  style={{ color: "#46938c" }}></ArrowDropUpIcon> : <ArrowDropDownIcon style={{ color: "#b0455c" }}></ArrowDropDownIcon>}{Math.abs(event.modifier) + "%"}</p>
        </div>
    </>
  )
}

export default Overview