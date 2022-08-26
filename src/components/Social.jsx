import React, {useState} from 'react'

function Social({platform}) {
  const platName = (Object.keys(platform)[0]);
  console.log(platName)
  return (
      <>
        {Object.values(platform).map((profile, i) => (
          <div className='social' key={i}>
            <div className={platName}></div>
            <h2>{platName === "youtube" ? profile.name : "@" + profile.name}</h2>
            <h1>{profile.followers}</h1>
            <h1>{platName === "youtube" ? "SUBSCRIBERS" : "FOLLOWERS"}</h1>
            <h3 className={profile.difference > 0 ? "green" : "red"}>{profile.difference} Today</h3>
          </div>
        ))}
      </>
  )
}

export default Social