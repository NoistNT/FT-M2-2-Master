import React from 'react'

export default function Species({ species, handleAllSpecies, handleSpecies }) {
  return (
    <div>
      <h2>Species</h2>
      {species.map((specie, index) => (
        <button key={index} value={specie} onClick={handleSpecies}>
          {specie}
        </button>
      ))}
      <button onClick={handleAllSpecies}>All Animals</button>
    </div>
  )
}
