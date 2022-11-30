import React from 'react'

function Character({character}) {
  return (
    <div className='text-center p-5'>
      {character.name} - {character.status} <img className='img-fluid ' src={character.image}></img>
    </div>
  )
}

export default Character