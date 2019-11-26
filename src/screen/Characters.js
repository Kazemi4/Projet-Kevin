//Import Library
import React from 'react'
import axios from 'axios'

//Import Composants
import CharacterCard from '../components/CharacterCard'

class Characters extends React.Component {
    state = {
        //Key   :  //Value
        characters: []
    }

    //Fonction pour récupérer les personnages de l'api -- On a installé Axios et on va l'importer après
    fetchCharacters = () => {
        axios.get('https://harrypotterapi20.herokuapp.com/characters')
            .then(res => res.data)
            //On va changer la state donc nécessite un this.setState({})
            .then(data => this.setState({
                characters : data
            })
        )
    }

    //Interargit avec le cycle de vie du component
    componentDidMount() {
        this.fetchCharacters()
    }


    render() {
        return (
            <div>
                {this.state.characters.map(character => {
                    return <CharacterCard characterData={character} />
                })}
            </div>
        )
    }
}


export default Characters
