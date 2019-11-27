import React, { Component } from 'react'
import axios from 'axios'
import CharacterCard from '../components/CharacterCard'

export default class Students extends Component {
    state = {
        charactersStudents : []
    }

    fetchCharacterStudents = () => {
    axios.get('https://harrypotterapi20.herokuapp.com/characters/students')
    .then(res => res.data)
    .then(data=> this.setState({charactersStudents: data}))
}

componentDidMount() {
    this.fetchCharacterStudents()
}

    render() {
        return (
            <div>
                {this.state.charactersStudents.map(student => {
                    return <CharacterCard characterData = {student}/> //l'élément de ma state que j'ai mappé
                })}
            </div>
        )
    }
}
