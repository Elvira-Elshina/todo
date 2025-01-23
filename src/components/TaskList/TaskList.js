import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Task from '../Task/Task';
import './TaskList.css';

export default class TaskList extends Component {
    static defaultProps = {
        todos: [],
        onDeleted: () => {},
        onToggleCompleted: () => {}
    }

    static propTypes = {
        todos: PropTypes.array,
        onDeleted: PropTypes.func,
        onToggleCompleted: PropTypes.func,
        date: PropTypes.object
    }

    render() {
        const elements = this.props.todos.map((el) => {
            return (
            <Task label={el.description} 
            key={el.id}
            idKey={el.id}
            onDeleted={() => this.props.onDeleted(el.id)}
            onToggleCompleted={() => this.props.onToggleCompleted(el.id)}
            completed={el.completed}
            date={el.date}
             />
            );
         })
 
      
         return (
             <ul className="todo-list">
                 { elements }
             </ul>
         )
    }
}

