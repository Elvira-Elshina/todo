import React from 'react';
import './Task.css'
import NewTaskForm from '../NewTaskForm/NewTaskForm';


function Task(props) {
    
    const created = 'created 17 seconds ago';
    console.log(props.label);
    
    return(
        <div className='view'>
            <input className="toggle" type="checkbox"></input>
            <label>
                <span className="description">{props.label}</span>
                <span className="created">{created}</span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy"></button>
        </div>
    )
}

export default Task;