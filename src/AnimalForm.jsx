import React, { Component } from 'react';
import { Input } from '@material-ui/core';
import { Button } from '@material-ui/core';

export default class AnimalForm extends Component {
constructor(props) {
  super(props)
  this.state = {
    name: "",
    image:"",
    description:"",
  }

}




    handleNameChange = event => {
      this.setState ({
        name: event.target.value,

      })

    }
    handleImageChange = event => {
      this.setState ({
        image: event.target.value,

      })

    }
    handleDescriptionChange = event => {
      this.setState ({
      description: event.target.value,

      })

    }

    handleSubmit = event => {
      event.preventDefault()
      this.props.postAnimal(this.state)
      this.setState ({
        name: "",
        image:"",
        description:""

      })
    }


  render() {
    return (
      <>
      <form className='form' onSubmit={this.handleSubmit}>
        <Input
          type="text"
          placeholder="Enter a name"
          value={this.state.name}
          onChange={this.handleNameChange}/>
        <Input
          type="text"
          placeholder="Enter a image"
          value={this.state.image}
          onChange={this.handleImageChange}/>
        <Input
          type="text"
          placeholder="Enter a description"
          value={this.state.description}
          onChange={this.handleDescriptionChange}/>
        <Button color='primary' type="submit" value="Add">Submit</Button>
      </form>
      {this.state.isError ? "There's Already one yaTurkey!" : null}
      </>
    )
  }
}
