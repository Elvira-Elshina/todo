import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './TaskFilter.css'

export default class TasksFilter extends Component {
  static defaultProps = {
    filter: 'all',
    onFilterChange: () => {},
  }

  static propTypes = {
    filter: PropTypes.string,
    onFilterChange: PropTypes.func,
  }

  buttons = [
    { names: 'all', label: 'All' },
    { names: 'active', label: 'Active' },
    { names: 'completed', label: 'Completed' },
  ]

  render() {
    const { filter } = this.props

    const buttonsFilter = this.buttons.map(({ names, label }) => {
      const isActive = filter === names
      const clazz = isActive ? 'selected' : ''

      return (
        <li key={names}>
          <button type="button" className={clazz} onClick={() => this.props.onFilterChange(names)}>
            {label}
          </button>
        </li>
      )
    })
    return <ul className="filters">{buttonsFilter}</ul>
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
