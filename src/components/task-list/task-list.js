import React from 'react';

import Task from '../task';
import './task-list.css';

const TaskList = ({ todos, onDeleted, onToggleProp, completed, editing }) => {
  const elements = todos.map((item) => {
    const { id, hide, ...itemProps } = item;

    let hideClass = '';
    if (hide) {
      hideClass += ' hide';
    }
    return (
      <li key={id} className={hideClass}>
        <Task
          {...itemProps}
          onDeleted={() => onDeleted(id)}
          onToggleCompleted={() => onToggleProp(id, { completed })}
          onToggleEditing={() => {
            if (!item.completed) {
              onToggleProp(id, { editing });
            }
          }}
        />
      </li>
    );
  });

  return <ul className="todo-list">{elements}</ul>;
};

export default TaskList;
