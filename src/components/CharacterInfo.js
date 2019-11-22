import React from 'react'
import axios from 'axios'

class CharacterInfo extends React.Component {
    state = {
        info: {}
    }

    fetchCharacter = () => {
        const id = this.props.match.params.id
        axios.get(`https://harrypotterapi20.herokuapp.com/characters/${id}`)
        .then(res => res.data)
        .then(data => this.setState({ info : data[0] }))
    }

    componentDidMount() {
        this.fetchCharacter()
    }

    render() {
        const info = this.state.info
        return(
            <div>
              <h1>
                {info.name}
              </h1>
            </div>
        )
    }
}

export default CharacterInfo