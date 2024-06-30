import React, { Component } from 'react';

import './task-filter.css';

export default class TasksFilter extends Component {
  render() {
    const { showTasks } = this.props;
    return (
      <ul className="filters">
        <li>
          <button className="selected" autoFocus onClick={() => showTasks(false, true)}>
            All
          </button>
        </li>
        <li>
          <button className="selected" onClick={() => showTasks(true)}>
            Active
          </button>
        </li>
        <li>
          <button className="selected" onClick={() => showTasks(false)}>
            Completed
          </button>
        </li>
      </ul>
    );
  }
}
