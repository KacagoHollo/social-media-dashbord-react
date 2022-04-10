import React from 'react'

function Overview({event}) {
  return (
    <div className='over'>
        <div>
          <h1>{event.platform}</h1>
          <h2>{event.type}</h2>
          <h2>{event.amount}</h2>
          <p>{event.modifier}</p>
        </div>
    </div>
  )
}

export default Overview