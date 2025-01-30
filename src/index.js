import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'

import NewTaskForm from './components/NewTaskForm/NewTaskForm'
import TaskList from './components/TaskList/TaskList'
import Footer from './components/Footer/Footer'
import './index.css'

export default class App extends Component {
  state = {
    todoData: [],
    filter: 'all',
  }

  minId = 100

  onToggleCompleted = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id)

      const oldItem = todoData[idx]
      const newItem = { ...oldItem, completed: !oldItem.completed }

      const newArr = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)]

      return {
        todoData: newArr,
      }
    })
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id)
      const begin = todoData.slice(0, idx)
      const end = todoData.slice(idx + 1)

      const newArr = [...begin, ...end]
      return {
        todoData: newArr,
      }
    })
  }

  addItem = (text) => {
    const newItem = this.createTodoItem(text)
    this.setState(({ todoData }) => {
      const newArray = [...todoData, newItem]
      return {
        todoData: newArray,
      }
    })
  }

  clearCompleted = () => {
    this.setState(({ todoData }) => {
      const todosActive = todoData.filter((el) => !el.completed)
      return {
        todoData: todosActive,
      }
    })
  }

  filter = (items, filter) => {
    switch (filter) {
      case 'all':
        return items
      case 'active':
        return items.filter((el) => !el.completed)
      case 'completed':
        return items.filter((el) => el.completed)
      default:
        return items
    }
  }

  onFilterChange = (filter) => {
    this.setState({ filter })
  }

  createTodoItem(label) {
    const labelStr = String(label)
    return {
      description: labelStr,
      completed: false,
      id: this.minId++,
      date: new Date(),
    }
  }

  render() {
    const filt = this.state.filter
    const { todoData } = this.state
    const visibleItems = this.filter(todoData, filt)

    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm addItem={this.addItem} />
        </header>
        <section className="main">
          <TaskList todos={visibleItems} onDeleted={this.deleteItem} onToggleCompleted={this.onToggleCompleted} />
        </section>
        <Footer
          todos={this.state.todoData}
          clearCompleted={this.clearCompleted}
          filter={filt}
          onFilterChange={this.onFilterChange}
        />
      </section>
    )
  }
}

const domNode = document.getElementById('root')
const root = createRoot(domNode)

root.render(<App />)
