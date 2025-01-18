import React, { Component } from 'react';
import './TaskFilter.css';

export default class TasksFilter extends Component {
    render() {
        const butAll = 'All';
    const butActive = 'Active';
    const butCompleted = 'Completed';

    const buttonsFilter = [ 
        <li key='1'><button className='selected'>{butAll}</button></li>,
        <li key='2'><button>{butActive}</button></li>,
        <li key='3'><button>{butCompleted}</button></li>
    ];
    return (
        <ul className='filters'>
            { buttonsFilter }
        </ul>
    )
    }
}

// function TasksFilter() {
//     const butAll = 'All';
//     const butActive = 'Active';
//     const butCompleted = 'Completed';

//     const buttonsFilter = [ 
//         <li key='1'><button className='selected'>{butAll}</button></li>,
//         <li key='2'><button>{butActive}</button></li>,
//         <li key='3'><button>{butCompleted}</button></li>
//     ];
//     return (
//         <ul className='filters'>
//             { buttonsFilter }
//         </ul>
//     )
// }

// export default TasksFilter;