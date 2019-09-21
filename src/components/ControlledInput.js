// Code ControlledInput Component Here
import React, {Component} from 'react';

export default class ControlledInput extends Component {
  state = {
    firstName: 'Harry',
    secondName: 'Chopra'
  };

  handleSubmit = () => {};
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="lastName"
            value={this.state.secondName}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
