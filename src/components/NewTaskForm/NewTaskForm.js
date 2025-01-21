import React, { Component } from 'react';

export default class NewTaskForm extends Component {
  state = {
    label: ''
  };

  onLabelChange = (e) => {
    const value = e.target.value;
    this.setState({
      label: value
    })
    
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.label);
    this.setState({
      label: ''
    });
  }

  render() {
        
    return (
      <form onSubmit={this.onSubmit}>
        <input onChange={this.onLabelChange}
        placeholder='What needs to be done?' 
        className='new-todo'
        value={this.state.label}></input>
      </form>
    );
  }
}

