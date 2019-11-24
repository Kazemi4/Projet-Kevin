import React from 'react'
import {Link} from 'react-router-dom'


const CharacterCard = ({characterData}) => {

return (
    <div className= "characterCard">
        <h1 className = 'characterCard-name'>{characterData.name}</h1>
        <Link to={`character/${characterData.id}`}>
        <img className="characterCard-img" src={characterData.image} alt={characterData.name}/>
        </Link>
        
        <div>{characterData.house}</div>
        <div>
            {characterData.alive ? "En vie, enfin j'imagine" :  "mort ... pour le moment"}
        </div>
        <p className="characterCard-species">{characterData.species}</p>
        
     </div>
)
}

export default CharacterCard

//characterData.alive est il en vie? oui sinon mort