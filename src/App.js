import React, {Component} from 'react';
import './App.css';
import AnimalList from './AnimalList';
import AnimalForm from './AnimalForm';
// import SearchBox from './SearchBox';
import Nav from './Nav'

export default class App extends Component {
  state = {
    animals: [],
    searchField: "",
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

  deleteAnimal = (id) => {
  let url = `http://localhost:3000/animals/${id}`
  fetch(url, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  .then(result => this.fetchAnimals())
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

  handleSearchChange = e => {
    this.setState({
      searchField: e.target.value
    })
  }



  render() {
    const { animals, searchField } = this.state;
    const filteredAnimals = animals.filter(animal =>
    animal.name.toLowerCase().includes(searchField.toLowerCase())
  )
    return (
    <>
    <Nav  handleSearchChange={this.handleSearchChange} />
    <h1 className='heading'>Animals</h1>
    <AnimalForm animals={animals} postAnimal={this.postAnimal} />
    {animals
      ? <AnimalList deleteAnimal={this.deleteAnimal} animals={filteredAnimals}/>
    : <h1>Gathering animals</h1>
    }
    </>
    )
  }

}
