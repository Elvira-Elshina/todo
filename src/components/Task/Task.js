import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Task.css'
import { formatDistanceToNow } from 'date-fns';


export default class Task extends Component {
    static defaultProps = {
        label: '',
        key: '',
        idKey: '',
        onDeleted: () => {},
        onToggleCompleted: () => {},
        completed: false,
        date: new Date()
    }
    static propTypes = {
        label: PropTypes.string,
        key: PropTypes.string,
        idKey: PropTypes.string,
        onDeleted: PropTypes.func,
        onToggleCompleted: PropTypes.func,
        completed: PropTypes.bool
    }
 
    render() {
        const { label, idKey, onDeleted, onToggleCompleted, completed, date } = this.props;
                
                let classNames = '';
                if (completed) {
                    classNames += ' completed';
                }
      
                const created = `created `;
        
        return(
            <li className={classNames} >
                <div className='view'>
               
                        <input className="toggle" type="checkbox" onClick={onToggleCompleted} id={idKey}></input>
                    <label htmlFor={idKey}>
                        <span className='description'>{label}</span>
                        <span className="created">{created}{formatDistanceToNow(date, {addSuffix: true, includeSeconds: true})}</span>
                    </label>
                    <button className="icon icon-edit"></button>
                    <button className="icon icon-destroy" onClick={onDeleted}></button>
                </div>
            </li>
        )
    }
}


