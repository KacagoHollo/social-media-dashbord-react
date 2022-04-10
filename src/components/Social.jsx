import React, {useState} from 'react'

function Social({platform}) {
  return (
      <div>
        {Object.values(platform).map((profile, i) => (
          <div key={i}>
            <h2>{profile.name}</h2>
            <h1>{profile.followers}</h1>
            <h3>{profile.difference}</h3>
          </div>
        ))}
    </div>
  )
}

export default Social