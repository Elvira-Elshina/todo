import React, { Component } from 'react';
import './Task.css'
import NewTaskForm from '../NewTaskForm/NewTaskForm';

export default class Task extends Component {
        state = {
            completed: false
        }
        
        onLabelClick = () => {
            this.setState(({completed}) => {
                return {
                    completed: !completed
                };
            });
        }
 
    render() {
        const created = 'created 17 seconds ago';
        const { label, onDeleted } = this.props;
                const { completed } = this.state;
                let classNames = '';
                if (completed) {
                    classNames += ' completed';
                }
        
        return(
            
            <li className={classNames} >
                <div className='view'>
                    <input className="toggle" type="checkbox"></input>
                    <label>
                        <span className='description' onClick={ this.onLabelClick }>{label}</span>
                        <span className="created">{created}</span>
                    </label>
                    <button className="icon icon-edit" onClick={() => console.log('helo')
                    }></button>
                    <button className="icon icon-destroy" onClick={onDeleted}></button>
                </div>
            </li>
        )
    }
}


// function Task(props) {
    
//     const created = 'created 17 seconds ago';
//     console.log(props.label);
    
//     return(
//         <div className='view'>
//             <input className="toggle" type="checkbox"></input>
//             <label>
//                 <span className="description">{props.label}</span>
//                 <span className="created">{created}</span>
//             </label>
//             <button className="icon icon-edit"></button>
//             <button className="icon icon-destroy"></button>
//         </div>
//     )
// }

// export default Task;