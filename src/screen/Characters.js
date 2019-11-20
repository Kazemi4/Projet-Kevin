import React from 'react'
import axios from 'axios'

import CharacterCard from'../components/CharacterCard'

class Characters extends React.Component{
    state = {
        characters : []
    }
    
    fetchCharacters = () => {
        axios.get('https://harrypotterapi20.herokuapp.com/characters')
        .then(res => res.data)
        .then(data => this.setState({
                characters : data
            })
        )
    }

    componentDidMount(){
        this.fetchCharacters()
    }

    render(){
        console.log(this);
        
        return (
            <div>
                {this.state.characters.map(character=>{
                    console.log('henllo')
                    return <CharacterCard characterData={character}/>
                })}
            </div>
        )
    }
}

export default Characters
