import React, { Component } from 'react';

import './task.css';

export default class Task extends Component {
  state = {
    label: this.props.description,
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onToggleEditing();
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  render() {
    const { created, editing, onDeleted, onToggleCompleted, onToggleEditing, completed } = this.props;
    let classDescription = 'description';
    if (completed) {
      classDescription += ' completed';
    }
    if (editing) {
      return (
        <form onSubmit={this.onSubmit}>
          <input type="text" className="edit" onChange={this.onLabelChange} defaultValue={this.state.label} />
        </form>
      );
    }
    return (
      <div className="view">
        <input className="toggle" type="checkbox" onClick={onToggleCompleted} />
        <label>
          <span className={classDescription}>{this.state.label}</span>
          <span className="created">{created}</span>
        </label>
        <button className="icon icon-edit" onClick={onToggleEditing}></button>
        <button className="icon icon-destroy" onClick={onDeleted}></button>
      </div>
    );
  }
}
