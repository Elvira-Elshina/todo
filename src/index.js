import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import NewTaskForm from './components/NewTaskForm/NewTaskForm';
import TaskList from './components/TaskList/TaskList';
import Footer from './components/Footer/Footer';
import '../src/index.css'

export default class App extends Component {
  minId = 4;

  state = {
    todoData:  [
      {description: 'Drink', completed: false, id: 1}, 
      {description: 'Sleep', completed: true, id: 2}, 
      {description: 'Wake up', completed: false, id: 3}
    ]
  
  }

 

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const begin = todoData.slice(0, idx);
      const end = todoData.slice(idx + 1);

      const newArr = [...begin, ...end];

      return {
        todoData: newArr
      }
    })
    
  }

  addItem = (text) => {
    const newItem = {
      description: text,
      completed: false,
      id: this.minId++
    }
    this.setState(({todoData}) => {
      const newArray = [...todoData, newItem];
      return {
        todoData: newArray
      }
    })

  }
  render() {
 
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm />
        </header>
        <section className="main">
          <TaskList todos={this.state.todoData} onDeleted={this.deleteItem}/>
        </section>
        <Footer />
      </section>
    )
  }
}

// function App() {
//   const todoData = [
//     {description: 'Drink', completed: false}, 
//     {description: 'Sleep', completed: true}, 
//     {description: 'Wake up', completed: false}
//   ]

//   return (
//     <section className="todoapp">
//       <header className="header">
//         <h1>todos!</h1>
//         <NewTaskForm />
//       </header>
//       <section className="main">
//         <TaskList todos={todoData}/>
//       </section>
//       <Footer />
//     </section>
//   )
// }


const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<App />);