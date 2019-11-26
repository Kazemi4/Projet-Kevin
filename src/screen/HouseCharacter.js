import React from 'react'
import axios from 'axios'
import CharacterCard from '../components/CharacterCard'

export default class HouseCharacter extends React.Component {
    state = {
        characters : []
    }

    fetchCharacterByHouse = () => {
        const house = this.props.match.params.house
        axios.get(`https://harrypotterapi20.herokuapp.com/characters/houses/${house}`)
        .then(res => { 
            return res.data
        })
        .then(data => this.setState({characters : data }))
    }

    componentDidMount() {
        this.fetchCharacterByHouse()
    }

    render() {
        return (
            <div>
                {this.state.characters.map(houseCharacter => {
                    return <CharacterCard characterData={houseCharacter}/>
                })}
            </div>
        )
    }
}
