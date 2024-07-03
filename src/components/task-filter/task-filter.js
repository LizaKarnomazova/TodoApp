import React from 'react';

import './task-filter.css';

const TasksFilter = ({ showTasks }) => (
  <ul className="filters">
    <li>
      <button className="selected" autoFocus onClick={() => showTasks('all')}>
        All
      </button>
    </li>
    <li>
      <button className="selected" onClick={() => showTasks('active')}>
        Active
      </button>
    </li>
    <li>
      <button className="selected" onClick={() => showTasks('complete')}>
        Completed
      </button>
    </li>
  </ul>
);

export default TasksFilter;
