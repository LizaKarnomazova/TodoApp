import React, { Component } from 'react';

import './app.css';

import TaskList from '../task-list';
import AppHeader from '../app-header';
import AppFooter from '../app-footer';

export default class App extends Component {
  state = {
    todoData: [],
  };

  // eslint-disable-next-line class-methods-use-this
  createTodoTask = (label) => ({
    description: label,
    created: 'created 3 minutes ago',
    completed: false,
    hide: false,
    editing: false,
    id: Math.random(),
  });

  deleteTask = (id) => {
    this.setState(({ todoData }) => {
      const todoDataChange = todoData.filter((el) => el.id !== id);
      return { todoData: todoDataChange };
    });
  };

  addTask = (text) => {
    const newTask = this.createTodoTask(text);
    this.setState(({ todoData }) => {
      const todoDataChange = [...todoData, newTask];
      return { todoData: todoDataChange };
    });
  };

  onToggleProp = (id, itemProp) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[idx];
      const itemKey = Object.keys(itemProp)[0];
      const newItem = { ...oldItem, [itemKey]: !oldItem[itemKey] };

      const newArray = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)];

      return { todoData: newArray };
    });
  };

  clearCompleted = () => {
    this.setState(({ todoData }) => {
      const todoDataChange = todoData.filter((el) => !el.completed);
      return { todoData: todoDataChange };
    });
  };

  showTasks = (flag, showAll = false) => {
    this.setState(({ todoData }) => {
      todoData.forEach((el) => {
        if (el.completed === flag && !showAll) {
          el.hide = true;
        } else el.hide = false;
      });
      return todoData;
    });
  };

  render() {
    const { todoData } = this.state;

    const todoCount = todoData.length - todoData.filter((el) => el.completed).length;

    return (
      <section className="todoapp">
        <AppHeader onAdded={this.addTask} />
        <section className="main">
          <TaskList
            todos={todoData}
            onDeleted={this.deleteTask}
            onToggleProp={this.onToggleProp}
            onAdded={this.addTask}
          />
          <AppFooter todo={todoCount} clearCompleted={this.clearCompleted} showTasks={this.showTasks} />
        </section>
      </section>
    );
  }
}
