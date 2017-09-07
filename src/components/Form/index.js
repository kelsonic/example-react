import React, { Component } from 'react';
import Field from '../Field';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  onChangeHandler = (key, value) => {
    console.log('this.state', this.state);
    console.log('key', key);
    console.log('value', value);
    this.setState({ [key]: value });
  }

  render() {
    return (
      <div>
        <Field
          label="Name"
          onChangeHandler={(event) => this.onChangeHandler('name', event.target.value)}
          value={this.state.name}
        />

        <Field
          label="Email"
          onChangeHandler={(event) => this.onChangeHandler('email', event.target.value)}
          value={this.state.email}
        />

        <Field
          label="Message"
          onChangeHandler={(event) => this.onChangeHandler('message', event.target.value)}
          value={this.state.message}
        />
      </div>
    );
  }
}

export default Form;
