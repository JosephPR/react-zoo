import React, { Component } from 'react';

export default class AnimalForm extends Component {
constructor(props) {
  super(props)
  this.state = {
    name: ""
  }

}




    handleChange = event => {
      this.setState ({
        name: event.target.value
      })

    }

    handleSubmit = event => {
      event.preventDefault()
      this.props.postAnimal(this.state)
      this.setState ({
        name: ""

      })
    }


  render() {
    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Enter a name"
          value={this.props.name}
          onChange={this.handleChange}/>
        <input type="submit" value="Add"/>
      </form>
      {this.state.isError ? "There's Already one yaTurkey!" : null}
      </>
    )
  }
}
