import React from 'react'
import axios from 'axios'

class Staff extends React.Component {
    state = {
        staffCharacters: []
    }

    fetchStaff = () => {
        const staff = this.props.match.params.hogwartsStaff
        get.axios('https://harrypotterapi20.herokuapp.com/characters/staff')
        .then(res => res.data)
        .then(data => this.setState({ staffCharacters : data }))
    }

    componentDidMount() {
        this.fetchStaff()
    }

    render() {
        return(
            <div>
                {this.state.staffCharacters}
            </div>
        )
    }
}

export default Staff