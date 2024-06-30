import React from 'react';

import TasksFilter from '../task-filter';
import './app-footer.css';

const AppFooter = ({ todo, clearCompleted, showTasks }) => (
  <footer className="footer">
    <span className="todo-count">{todo} items left</span>
    <TasksFilter showTasks={showTasks} />
    <button className="clear-completed" onClick={clearCompleted}>
      Clear completed
    </button>
  </footer>
);

export default AppFooter;
