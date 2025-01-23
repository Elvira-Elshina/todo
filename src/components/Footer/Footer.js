import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TasksFilter from '../TasksFilter/TasksFilter';
import './Footer.css';

export default class Footer extends Component {
    static defaultProps = {
        filter: 'all',
        todos: [],
        onFilterChange: () => {},
        clearCompleted: () => {}
    }

    static propTypes = {
        filter: PropTypes.string,
        todos: PropTypes.array,
        onFilterChange: PropTypes.func,
        clearCompleted: PropTypes.func
    }

    render() {
        const item = this.props.todos.filter((el) => !el.completed).length;
        const itemsLeft = `${item} items left`;



    return (
        <footer className='footer'>
            <span className="todo-count">{itemsLeft}</span>
            <TasksFilter 
            filter={this.props.filter}
            onFilterChange={this.props.onFilterChange}/>
            <button className="clear-completed" onClick={this.props.clearCompleted}>Clear completed</button>
        </footer>
    )
    }
}
