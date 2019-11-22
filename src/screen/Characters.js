import React from 'react'
import axios from 'axios'

import CharacterCard from '../components/CharacterCard'


class Characters extends React.Component {
    state = {
        characters: []
    }

    fetchCharacters = () => {
        axios.get('https://harrypotterapi20.herokuapp.com/characters')
        .then(res => res.data)
        .then(data => this.setState({
            characters : data
        })
        )
    }

    componentDidMount() {
        this.fetchCharacters()
    }

    render() {
    return (
        <div>
           {this.state.characters.map(character => {
               return <CharacterCard characterData={character}/>
           })} 
        </div>
    )
}
}

export default Characters
