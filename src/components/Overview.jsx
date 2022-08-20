import React from 'react'

function Overview({event}) {
  return (
    <>
        <div className='over'>
          <h1>{event.platform}</h1>
          <h2>{event.type}</h2>
          <h2>{event.amount}</h2>
          <p>{event.modifier}</p>
        </div>
    </>
  )
}

export default Overview