import React, { Component } from 'react';
import KingdomList from './KingdomList'

export default class Kingdom extends Component {
  state = {
    kingdoms: []
  }

  componentDidMount() {
  this.fetchKingdoms()
  }

  fetchKingdoms = () => {
    const kingdomsUrl = "http://localhost:3000/kingdoms"
    fetch(kingdomsUrl)
    .then(res => res.json())
    .then(kingdoms => this.setState({
      kingdoms: kingdoms
    }))
  }



  render() {

    return (
        <>
        <h1>Animal Kingdoms</h1>
        {this.state.kingdoms
          ? <KingdomList kingdoms={this.state.kingdoms} />
        : <h1>Gathering kingdoms</h1>
        }
        </>

    )
  }
}
