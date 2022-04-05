import React, {useState} from 'react'

function Social({platform}) {
  return (
      <div>
        {Object.values(platform).map(profile => (
          <h1>{profile.name}</h1>
        ))}
    </div>
  )
}

export default Social