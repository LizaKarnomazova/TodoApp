import React, { useState, useContext } from 'react';

import Timer from '../timer/timer';
import ContextData from '../context-task/context-task';
import CreatedTime from '../created-time/created-time';
import './task.css';

const Task = ({ description, id, complete, edit, minutes, seconds, hide }) => {
  const taskFns = useContext(ContextData);
  const [label, setLabel] = useState(description);
  function onSubmit(e) {
    e.preventDefault();
    taskFns.toggleProp(id, { edit });
  }

  function onLabelChange(e) {
    setLabel(e.target.value);
  }
  return (
    <>
      <form onSubmit={onSubmit} className={edit ? '' : 'hide'}>
        <input type="text" className="edit" onChange={onLabelChange} defaultValue={label} />
      </form>
      <div className={edit || hide ? 'view hide' : 'view'}>
        <input className="toggle" type="checkbox" onClick={() => taskFns.toggleProp(id, { complete })} />
        <label className="description">
          <div className={complete ? 'description-label completed' : 'description-label'}>{label}</div>
          <Timer minutes={minutes} seconds={seconds} />
          <CreatedTime />
        </label>
        <button
          className="icon icon-edit"
          onClick={() => {
            if (!complete) {
              taskFns.toggleProp(id, { edit });
            }
          }}
        ></button>
        <button className="icon icon-destroy" onClick={() => taskFns.deleteTask(id)}></button>
      </div>
    </>
  );
};

export default Task;
