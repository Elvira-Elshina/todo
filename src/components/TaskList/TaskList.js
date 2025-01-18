import React, { Component } from 'react';
import Task from '../Task/Task';
import './TaskList.css';

export default class TaskList extends Component {

    render() {
        const elements = this.props.todos.map((el) => {
            return (
            <Task label={el.description} 
            key={el.id}
            onDeleted={() => this.props.onDeleted(el.id)
            } />
            );
         })
      
         return (
             <ul className="todo-list">
                 { elements }
             </ul>
         )
    }
}

// function TaskList({todos}) {  
//     const elements = todos.map((i) => {
//        return (
//        <li className="completed"><Task label={i.description}/></li>
//        );
//     })
 
//     return (
//         <ul className="todo-list">
//             { elements }
//         </ul>
//     )
// }

//  TaskList;