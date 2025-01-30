import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TasksFilter from '../TasksFilter/TasksFilter'
import './Footer.css'

export default class Footer extends Component {
  render() {
    const item = this.props.todos.filter((el) => !el.completed).length
    const itemsLeft = `${item} items left`

    return (
      <footer className="footer">
        <span className="todo-count">{itemsLeft}</span>
        <TasksFilter filter={this.props.filter} onFilterChange={this.props.onFilterChange} />
        <button type="button" className="clear-completed" onClick={this.props.clearCompleted}>
          Clear completed
        </button>
      </footer>
    )
  }
}

Footer.defaultProps = {
  filter: 'all',
  todos: [],
  onFilterChange: () => {},
  clearCompleted: () => {},
}

Footer.propTypes = {
  filter: PropTypes.string,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      completed: PropTypes.bool,
      id: PropTypes.number,
      date: PropTypes.instanceOf(Date),
    })
  ),
  onFilterChange: PropTypes.func,
  clearCompleted: PropTypes.func,
}
