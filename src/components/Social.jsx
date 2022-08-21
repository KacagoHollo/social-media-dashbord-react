import React, {useState} from 'react'

function Social({platform}) {
  const platName = (Object.keys(platform)[0]);
  console.log(platName)
  return (
      <>
        {Object.values(platform).map((profile, i) => (
          <div className='social' key={i}>
            <h2>{platName === "youtube" ? profile.name : "@" + profile.name}</h2>
            <h1>{profile.followers}</h1>
            <h1>FOLLOWERS</h1>
            <h3>{profile.difference} Today</h3>
          </div>
        ))}
      </>
  )
}

export default Social