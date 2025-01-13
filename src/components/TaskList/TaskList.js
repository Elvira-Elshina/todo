import React from 'react';
import Task from '../Task/Task';
import './TaskList.css';

function TaskList({todos}) {  
    const elements = todos.map((i) => {
       return (
       <li className="completed"><Task label={i.description}/></li>
       );
    })
 
    return (
        <ul className="todo-list">
            { elements }
        </ul>
    )
}

export default TaskList;