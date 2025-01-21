import React, { Component } from 'react';
import './Task.css'
import NewTaskForm from '../NewTaskForm/NewTaskForm';

export default class Task extends Component {
 
    render() {

        const created = 'created 17 seconds ago';
        const { label, idKey, onDeleted, onToggleCompleted, completed } = this.props;
                
                let classNames = '';
                if (completed) {
                    classNames += ' completed';
                }
      
        
        return(
            <li className={classNames} >
                <div className='view'>
               
                        <input className="toggle" type="checkbox" onClick={onToggleCompleted} id={idKey}></input>
                    <label htmlFor={idKey}>
                        <span className='description'>{label}</span>
                        <span className="created">{created}</span>
                    </label>
                    <button className="icon icon-edit"></button>
                    <button className="icon icon-destroy" onClick={onDeleted}></button>
                </div>
            </li>
        )
    }
}


