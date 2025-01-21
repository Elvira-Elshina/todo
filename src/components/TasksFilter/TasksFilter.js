import React, { Component } from 'react';
import './TaskFilter.css';

export default class TasksFilter extends Component {
    state = {
        selectedAll: true,
        selectedActive: false,
        selectedCompleted: false
    }

    // onSelected = () => {

    // }

    // onClickAll = () => {
    //     this.setState(() => {
    //         return {
    //             selectedAll: !this.state.selectedAll,
    //         }
    //     })
    //   }
    
    //   onClickActive = () => {
    //     this.setState(() => {
    //         return {
    //             selectedActive: !this.state.selectedActive
    //         }
    //     })
    //   }
    
      
    //   onClickCompleted = () => {
    //     this.setState(() => {
    //         return {
    //             selectedCompleted: !this.state.selectedCompleted
    //         }
    //     })
    //   }

    buttons = [
        {names: 'all', label: 'All'},
        {names: 'active', label: 'Active'},
        {names: 'completed', label: 'Completed'}
    ];

    render() {
    const { filter } = this.props;

    const buttonsFilter = this.buttons.map(({names, label}) => {
        const isActive = filter === names;
        const clazz = isActive ? 'selected' : '';

        return (
            <li key={names}>
                <button className={clazz} onClick={() => this.props.onFilterChange(names)}>{label}</button>
            </li>
        )
    })
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