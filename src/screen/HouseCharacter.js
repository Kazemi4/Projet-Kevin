import React, { Component } from 'react'
import axios from 'axios'
import CharacterCard from '../components/CharacterCard'


 class HouseCharacter extends Component {
  state = {
    characters: []
  }

  fetchCharacterByHouse = () => {
    const house = this.props.match.params.house

    axios.get(`https://harrypotterapi20.herokuapp.com/characters/houses/${house}`)
          .then(res => res.data)
          .then(data => this.setState({ characters: data }))
  }                         //setState alimente la donnée, il ne la modifie pas

  componentDidMount() {
    this.fetchCharacterByHouse()
  }

  render() {
    return (
      <div>
        {this.state.characters.map(houseCharacter => {
          return <CharacterCard characterData={houseCharacter} />
        })}
      </div>
    )
  }
}
export default HouseCharacter