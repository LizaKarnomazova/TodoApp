import React, { useState, useEffect, useContext } from 'react';

import './app.css';

import ContextTask from '../context-task/context-task';
import TaskList from '../task-list';
import AppHeader from '../app-header';
import AppFooter from '../app-footer';

const App = () => {
  useContext(ContextTask);
  const [data, setData] = useState([]);
  const [taskCount, setTaskCount] = useState(0);

  function createTodoTask(label, totalSec) {
    return {
      description: label,
      seconds: totalSec,
      complete: false,
      edit: false,
      hide: false,
      id: Math.random(),
    };
  }

  function addTask(text, totalSec) {
    const newTask = createTodoTask(text, totalSec);
    const todoDataChange = [...data, newTask];
    setData(todoDataChange);
  }

  function deleteTask(id) {
    const todoDataChange = data.filter((el) => el.id !== id);
    setData(todoDataChange);
  }

  function toggleProp(id, itemProp) {
    const idx = data.findIndex((el) => el.id === id);
    const oldItem = data[idx];
    const itemKey = Object.keys(itemProp)[0];
    const newItem = { ...oldItem, [itemKey]: !oldItem[itemKey] };
    const todoDataChange = [...data.slice(0, idx), newItem, ...data.slice(idx + 1)];
    setData(todoDataChange);
  }

  function clearCompleted() {
    const todoDataChange = data.filter((el) => !el.complete);
    setData(todoDataChange);
  }

  function showTasks(condition) {
    if (condition === 'all') {
      setData(data.map((todo) => (todo.hide === true ? { ...todo, hide: !todo.hide } : { ...todo })));
    } else if (condition === 'active') {
      setData(
        data.map((todo) =>
          todo.complete === false ? { ...todo, hide: todo.complete } : { ...todo, hide: todo.complete }
        )
      );
    } else if (condition === 'complete') {
      setData(
        data.map((todo) =>
          todo.complete === true ? { ...todo, hide: !todo.complete } : { ...todo, hide: !todo.complete }
        )
      );
    }
  }

  useEffect(() => {
    setTaskCount(data.length - data.filter((el) => el.completed).length);
  }, [data]);

  const taskFns = { deleteTask, toggleProp };

  return (
    <ContextTask.Provider value={taskFns}>
      <section className="todoapp">
        <AppHeader onAdded={addTask} />
        <section className="main">
          <TaskList data={data} />
          <AppFooter taskCount={taskCount} clearCompleted={clearCompleted} showTasks={showTasks} />
        </section>
      </section>
    </ContextTask.Provider>
  );
};

export default App;
