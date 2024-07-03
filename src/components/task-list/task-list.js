import React from 'react';

import Task from '../task';
import './task-list.css';

const TaskList = ({ data }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id}>
        <Task {...itemProps} id={id} />
      </li>
    );
  });

  return <ul className="todo-list">{elements}</ul>;
};

export default TaskList;
