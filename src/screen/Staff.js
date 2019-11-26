import React from 'react'
import axios from 'axios'
import CharacterCard from '../components/CharacterCard'

export default class Staff extends React.Component {

    state = {
        staffCharacters: []
    }

    fetchCharacterByStaff = () => {
        axios.get("https://harrypotterapi20.herokuapp.com/characters/staff")
            .then(res => {
                return res.data
            })
            .then(data => this.setState({ staffCharacters: data }))
    }

    componentDidMount() {
        this.fetchCharacterByStaff()
    }
    render() {
        return (
            <div>
                {this.state.staffCharacters.map(staff => {
                    return <CharacterCard characterData={staff} />
                })}
            </div>
        )
    }
}
