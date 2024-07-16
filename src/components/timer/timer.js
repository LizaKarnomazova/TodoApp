import React, { useState, useEffect } from 'react';

import IconPlay from './play.svg';
import IconPause from './pause.svg';
import './timer.css';

const Timer = ({ seconds }) => {
  const [sec, setSec] = useState(seconds);
  const [toggle, setToggle] = useState(true);
  let trueSec;

  useEffect(() => {
    if (toggle && sec > 0) {
      setTimeout(() => {
        if (trueSec === undefined) {
          setSec(sec - 1);
        } else setSec(trueSec);
        if (sec === 1) setToggle(false);
      }, 1000);
    }
  }, [sec, toggle]);

  function timerLabel(time) {
    let minLabel = Math.floor(time / 60);
    if (minLabel < 10) minLabel = `0${minLabel}`;
    let secLabel = time - minLabel * 60;
    if (secLabel < 10) secLabel = `0${secLabel}`;
    return `${minLabel}:${secLabel}`;
  }

  if (sec === 0) {
    return null;
  }

  return (
    <div className="toggle-button">
      <button
        className="toggle-icon"
        onClick={() => {
          setToggle(!toggle);
          trueSec = sec;
        }}
      >
        <img src={toggle ? IconPause : IconPlay} />
      </button>
      <span>{timerLabel(sec)}</span>
    </div>
  );
};

export default Timer;
