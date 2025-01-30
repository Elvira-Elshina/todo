import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Task.css'
import { formatDistanceToNow } from 'date-fns'

export default class Task extends Component {
  static defaultProps = {
    label: '',
    idKey: '',
    onDeleted: () => {},
    onToggleCompleted: () => {},
    completed: false,
    date: new Date(),
  }

  static propTypes = {
    label: PropTypes.string,
    idKey: PropTypes.number,
    onDeleted: PropTypes.func,
    onToggleCompleted: PropTypes.func,
    completed: PropTypes.bool,
    date: PropTypes.instanceOf(Date),
  }

  render() {
    const { label, idKey, onDeleted, onToggleCompleted, completed, date } = this.props

    let classNames = ''
    if (completed) {
      classNames += ' completed'
    }

    const created = 'created '

    return (
      <li className={classNames}>
        <div className="view">
          <input className="toggle" type="checkbox" onClick={onToggleCompleted} id={idKey} />
          <label htmlFor={idKey}>
            <span className="description">{label}</span>
            <span className="created">
              {created}
              {formatDistanceToNow(date, { addSuffix: true, includeSeconds: true })}
            </span>
          </label>
          <button type="button" className="icon icon-edit" />
          <button type="button" className="icon icon-destroy" onClick={onDeleted} />
        </div>
      </li>
    )
  }
}
