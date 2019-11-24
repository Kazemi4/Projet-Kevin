import React, { Component } from 'react'
import axios from 'axios'

export default class CharacterInfo extends Component {
    state = {
        info : {}
    }

    //axios pour récupérer les données de l'API fetch='va chercher'
    //on créer une const id pour récupérer l'id dans l'axios
fetchCharacter = () => {
    console.log(this.pros)
    const id = this.props.match.params.id
    console.log(id)
axios.get(`https://harrypotterapi20.herokuapp.com/characters/${id}`)
.then(res => res.data)
.then(data => this.setState({ info : data[0]}))
}
//.then gère l'asynchrone exécution différée, retourne le résulat => data
//componentDidMOunt affiche les infos exécute la fonction qu'une seule fois
componentDidMount(){
    this.fetchCharacter()
}

    render() {
        const info = this.state.info
        return (
            <div>

                <img className="characterInfo-img" src={info.image} alt={info.name}/>
                <p className="characterInfo-info">Role : {info.name}</p>
                <p className="characterInfo-info">Actor : {info.actor}</p>

            </div>
        )
    }
}
