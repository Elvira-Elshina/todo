import React from 'react';
import { createRoot } from 'react-dom/client';
import NewTaskForm from './components/NewTaskForm/NewTaskForm';
import TaskList from './components/TaskList/TaskList';
import Footer from './components/Footer/Footer';
import '../src/index.css'

function App() {
  const todoData = [
    {description: 'Drink', completed: false}, 
    {description: 'Sleep', completed: true}, 
    {description: 'Wake up', completed: false}
  ]

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos!</h1>
        <NewTaskForm />
      </header>
      <section className="main">
        <TaskList todos={todoData}/>
      </section>
      <Footer />
    </section>
  )
}


const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(App());