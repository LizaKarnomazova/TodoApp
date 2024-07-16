import React, { useState, useContext, useRef, useEffect } from 'react';

import Timer from '../timer/timer';
import ContextData from '../context-task/context-task';
import CreatedTime from '../created-time/created-time';
import './task.css';

const Task = ({ description, id, complete, edit, seconds, hide, createdTime }) => {
  const taskFns = useContext(ContextData);
  const [label, setLabel] = useState(description);
  const currentLabel = useRef(description);
  const inputRef = useRef(null);
  const buttonRef = useRef(null);
  function onSubmit(e, key) {
    e.preventDefault();
    if (key === undefined) {
      currentLabel.current = label;
    }
    taskFns.toggleProp(id, { edit });
  }

  function onLabelChange(e) {
    setLabel(e.target.value);
  }

  function onKeyDown(e) {
    if (e.key === 'Escape' || e.type === 'click') {
      setLabel(currentLabel.current);
      onSubmit(e, e.keyCode);
    }
  }
  useEffect(() => {
    const handleClick = (e) => {
      if (!buttonRef.current.contains(e.target) && !inputRef.current.contains(e.target)) {
        onKeyDown(e);
      }
    };
    if (edit) {
      document.addEventListener('click', handleClick);
    }
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [edit]);

  return (
    <>
      <form onSubmit={onSubmit} onKeyDown={onKeyDown} className={edit ? '' : 'hide'}>
        <input
          ref={inputRef}
          type="text"
          className="edit"
          onChange={onLabelChange}
          value={label}
          autoFocus={edit}
        />
      </form>
      <div className={edit || hide ? 'view hide' : 'view'}>
        <input className="toggle" type="checkbox" onClick={() => taskFns.toggleProp(id, { complete })} />
        <label className="description">
          <div className={complete ? 'description-label completed' : 'description-label'}>{label}</div>
          <Timer seconds={seconds} />
          <CreatedTime createdTime={createdTime} />
        </label>
        <button
          className="icon icon-edit"
          onClick={() => {
            if (!complete) {
              taskFns.toggleProp(id, { edit });
            }
          }}
          ref={buttonRef}
        ></button>
        <button className="icon icon-destroy" onClick={() => taskFns.deleteTask(id)}></button>
      </div>
    </>
  );
};

export default Task;
