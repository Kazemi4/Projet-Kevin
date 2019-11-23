import React from 'react'
import axios from 'axios'

import CharacterCard from  '../components/CharacterCard'

import '../screen/Characters.css'

class Characters extends React.Component{
    state = {
        characters : []
    }

fetchCharacters = () => {
        axios.get('https://harrypotterapi20.herokuapp.com/characters')
        .then(res => res.data) //return implicite
        .then(data => this.setState({//modifie la state en écrasant la précédente 
            characters : data
        }))

        //setState : modifie la state. Ici on ajoute la data dans characters. Il ecrase le tableau en ajoutant la data.
}
componentDidMount() { //se lance juste après la création, ne se joue qu'une seule fois
    this.fetchCharacters()
}

render(){

    return (
        <div className='characters-characters'>
            {this.state.characters.map(character => {
                return <CharacterCard characterData={character}/>
            })}
        </div>
    )
}
}

export default Characters

//Récupérer les datas de l'API avec axios
//ComponentDidMount ne se joue qu'une fois
//quand je code du js dans la structure, je mets des accolades
// à l'appel de ntre state premier paramètre, toujours l'élément sur lequel je suis, 2 : index, 3 tableau
//for each modifie le tableau