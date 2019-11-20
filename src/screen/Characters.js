import React, { Component } from 'react'
import axios from 'axios'

import CharacterCard from '../components/CharacterCard'

class Characters extends Component {
  state = {
    characters: []
  }

  fetchCharacters = () => {
    axios.get('https://harrypotterapi20.herokuapp.com/characters')
    .then(res => res.data) // return implicite
    .then(data => this.setState({ // modifie la state. Il crée une nouvelle state en écrasant la précédente
            characters: data
          })
    )
  }

  componentDidMount() { //se lance juste après la création, ne se joue qu'une seule fois
    this.fetchCharacters()
  }

  render() {
    return (
    <div>
        {this.state.characters.map(character=>{ //parcourir le tableau par élément
          return <CharacterCard characterData={character}/>
        })}
    </div>
    )
  }
}
export default Characters
