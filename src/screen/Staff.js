import React, { Component } from 'react'
import axios from 'axios'
import CharacterCard from '../components/CharacterCard'



export default class Staff extends Component {
    state = {
    charactersStaff: []
    }

    fetchCharacterStaff = () => { //Je veux tout le staff donc je ne mets pas de "by" mais je peux l'appeler comme je veux
        axios.get('https://harrypotterapi20.herokuapp.com/characters/staff/')
            .then(res => {
                return res.data
            })
        
            .then(data =>
                this.setState({ charactersStaff: data }))//ici je veux afficher le staff en dur, donc pas besoin de créer une constante
            }
      componentDidMount() {
        this.fetchCharacterStaff()  
    }
    render() {
        return (
            <div>
                {this.state.charactersStaff.map(staff => {
                    return <CharacterCard characterData={staff} />
                })}
            </div>
        )
    }
}



