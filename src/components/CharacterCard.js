import React from 'react'

const CharacterCard = ({characterData}) => {
  console.log(characterData)
  return (
    <div>
      <h1>{characterData.name}</h1>
      <img src={characterData.image} alt={characterData.name} />
      <div>{characterData.house}</div>
      <div>
        {characterData.alive ? "En vie, enfin j'imagine" : "Mort ... pour le moment"}
      </div>
    </div>
  )
}

export default CharacterCard
