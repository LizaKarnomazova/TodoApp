import React, { Component } from 'react';

import './app-header.css';

export default class AppHeader extends Component {
  state = {
    label: '',
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const rule = /[а-яА-Яa-zA-Z0-9]/;
    if (rule.test(this.state.label)) {
      this.props.onAdded(this.state.label);
    }
    this.setState({
      label: '',
    });
  };

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            className="new-todo"
            placeholder="What needs to be done?"
            onChange={this.onLabelChange}
            value={this.state.label}
            autoFocus
            required
          />
        </form>
      </header>
    );
  }
}
