import React, {Component} from 'react';
import './App.css';
import AnimalList from './AnimalList';

export default class App extends Component {
  state = {
    animals: [{
        name: "Bear"
      },
      {
        name: "Tiger"
      },
      {
        name: "Peacock"
      }],
      animal: "",
      isError: false,
  }


  handleChange = event => {
    const names = this.state.animals.map (animal => animal.name)
    names.includes(event.target.value) ?
    this.setState ({
      animal: event.target.value,
      isError: true
    }) :
    this.setState ({
      animal: event.target.value,
      isError: false
    })

  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState ({
      animals: [...this.state.animals, {name: this.state.animal}],
      animal: ""
    })
  }


  render() {
    const { animals, animal } = this.state;
    return (
    <>
    <h1>Animals</h1>
    <AnimalList animals={animals}/>

      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Enter a animal"
          value={animal}
          onChange={this.handleChange}/>
        <input type="submit" value="Add"/>
      </form>
      {this.state.isError ? "There's Already one yaTurkey!" : null}
    </>
    )
  }

}
