import React, { Component } from 'react';

export default class NewTaskForm extends Component {
  render() {
    return (
      <input placeholder='What needs to be done?' className='new-todo'></input>
    );
  }
}

