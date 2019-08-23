import React, {Component} from 'react';
import './App.css';
import AnimalList from './AnimalList';
import AnimalForm from './AnimalForm';

export default class App extends Component {
  state = {
    animals: ""
  }

  componentDidMount() {
  this.fetchAnimals()
  }

  fetchAnimals = () => {
    const animalsUrl = "http://localhost:3000/animals"
    fetch(animalsUrl)
    .then(response => response.json())
    .then(animals => this.setState ({
      animals: animals
    }))
  }

    addAnimal = (animal) => {
    const newAnimal = {...animal, id: Date.now()}
    const newAnimals = [...this.state.animals, newAnimal]
    this.setState({
      animals: newAnimals
    })
  }

  postAnimal = (newAnimal) => {
    let url = "http://localhost:3000/animals"
  fetch(url, {
    method: "POST",
    body: JSON.stringify(newAnimal),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(response => console.log('Success:', JSON.stringify(response)))
  .catch(error => console.error('Error:', error))
  .then(result => this.fetchAnimals())
  }



  render() {
    const { animals } = this.state;
    return (
    <>
    <h1>Animals</h1>
    {animals
      ? <AnimalList animals={animals}/>
    : <h1>Gathering animals</h1>
    }
    <AnimalForm animals={animals} postAnimal={this.postAnimal} />
    </>
    )
  }

}
