import React from 'react'
import {Link} from 'react-router-dom'

const CharacterCard = ({characterData}) => {

    return(
        <div>
            <h1>{characterData.name}</h1>
            <Link to={`character/${characterData.id}`}>
            <img src={characterData.image} alt={characterData.name} />
            </Link>
            <div>{characterData.house}</div>
            <div>
                {characterData.alive ? "En vie, enfin j'imagine !" : "Mort ... Pour le moment !"}
            </div>
        </div>
    )
}

export default CharacterCard