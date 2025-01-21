import React, { Component } from 'react';
import Task from '../Task/Task';
import './TaskList.css';

export default class TaskList extends Component {

    render() {
        const elements = this.props.todos.map((el) => {
            return (
            <Task label={el.description} 
            key={el.id}
            idKey={el.id}
            onDeleted={() => this.props.onDeleted(el.id)}
            onToggleCompleted={() => this.props.onToggleCompleted(el.id)}
            completed={el.completed}
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

