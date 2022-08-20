import React, {useState} from 'react'

function Social({platform}) {
  return (
      <>
        {Object.values(platform).map((profile, i) => (
          <div className='social' key={i}>
            <h2>{profile.name}</h2>
            <h1>{profile.followers}</h1>
            <h3>{profile.difference}</h3>
          </div>
        ))}
      </>
  )
}

export default Social