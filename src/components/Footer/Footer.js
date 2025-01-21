import React, { Component } from 'react';
import TasksFilter from '../TasksFilter/TasksFilter';
import './Footer.css';

export default class Footer extends Component {

    render() {
        const item = this.props.todos.filter((el) => !el.completed).length;
        const itemsLeft = `${item} items left`;



    return (
        <footer className='footer'>
            <span className="todo-count">{itemsLeft}</span>
            <TasksFilter 
            filter={this.props.filter}
            onFilterChange={this.props.onFilterChange}/>
            <button className="clear-completed" onClick={this.props.ClearCompleted}>Clear completed</button>
        </footer>
    )
    }
}
