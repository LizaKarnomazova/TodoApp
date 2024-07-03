import React, { useState } from 'react';

import './app-header.css';

const AppHeader = ({ onAdded }) => {
  const [taskLabel, setTaskLabel] = useState('');
  const [minLabel, setMinLabel] = useState('');
  const [secLabel, setSecLabel] = useState('');

  function onSubmitTask(e) {
    e.preventDefault();
    const submitRule = /[а-яА-Яa-zA-Z0-9]/;
    if (submitRule.test(taskLabel)) {
      onAdded(taskLabel, minLabel, secLabel);
    }
    setTaskLabel('');
    setMinLabel('');
    setSecLabel('');
  }
  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={onSubmitTask} className="new-todo-form">
        <input
          type="text"
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={(e) => setTaskLabel(e.target.value)}
          value={taskLabel}
          autoFocus
          required
        />
        <input
          className="new-todo new-todo-form__timer"
          placeholder="Min"
          type="number"
          min="0"
          onChange={(e) => setMinLabel(e.target.value)}
          value={minLabel}
          autoFocus
          required
        />
        <input
          className="new-todo new-todo-form__timer"
          placeholder="Sec"
          type="number"
          min="0"
          onChange={(e) => setSecLabel(e.target.value)}
          value={secLabel}
          autoFocus
          required
        />
        <button type="submit"></button>
      </form>
    </header>
  );
};

export default AppHeader;
