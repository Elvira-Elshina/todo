import React from 'react';
import TasksFilter from '../TasksFilter/TasksFilter';
import './Footer.css';

function Footer() {
    const item = 1;
    const itemsLeft = `${item} items left`;

    return (
        <footer className='footer'>
            <span className="todo-count">{itemsLeft}</span>
            <TasksFilter />
            <button className="clear-completed">Clear completed</button>
        </footer>
    )
}

export default Footer;