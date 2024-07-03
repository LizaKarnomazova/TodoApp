import React from 'react';

import TasksFilter from '../task-filter';
import './app-footer.css';

const AppFooter = ({ taskCount, clearCompleted, showTasks }) => (
  <footer className="footer">
    <span className="todo-count">{taskCount} items left</span>
    <TasksFilter showTasks={showTasks} />
    <button className="clear-completed" onClick={clearCompleted}>
      Clear completed
    </button>
  </footer>
);

export default AppFooter;
