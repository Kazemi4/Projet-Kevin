import React from 'react'
import { Link } from 'react-router-dom'

const CharacterCard = ({characterData}) => {
  console.log(characterData)
  return (
    <div>
      <h1>{characterData.name}</h1>
      <Link to={`character/${characterData.id}`}>
        <img src={characterData.image} alt={characterData.name} />
      </Link>
      <div>{characterData.house}</div>
      <div>
        {characterData.alive ? "En vie, enfin j'imagine" : "Mort ... pour le moment"}
      </div>
    </div>
  )
}

export default CharacterCard
