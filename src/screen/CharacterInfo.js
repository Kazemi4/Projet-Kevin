import React, { Component } from 'react'
import axios from 'axios'

class CharacterInfo extends Component {
  state = {
    info: {}
  }

  fetchCharacter = () => {
    const id = this.props.match.params.id
    console.log(id);
    
    axios.get(`https://harrypotterapi20.herokuapp.com/characters/${id}`)
    .then(res => res.data)
    .then(data => this.setState({ info: data[0]})) //.then = asynchrone
  }

  componentDidMount() {
    this.fetchCharacter()
  }

  render() {
    console.log(this.state)
    return (
      <div>

        <h1>{this.state.info.name}</h1>
        
      </div>
    )
  }
}
export default CharacterInfo