import React, { useState, useEffect } from 'react';

import IconPlay from './play.svg';
import IconPause from './pause.svg';
import './timer.css';

const Timer = ({ seconds }) => {
  const [min, setMin] = useState(Math.floor(seconds / 60));
  const [sec, setSec] = useState(seconds - min * 60);
  const [toggle, setToggle] = useState(true);
  let trueSec;

  useEffect(() => {
    if (toggle) {
      setTimeout(() => {
        if ((min > 0 && sec > 0) || (min === 0 && sec > 0)) {
          if (trueSec === undefined) {
            setSec(sec - 1);
          } else {
            setSec(trueSec);
          }
        } else if (min === 0 && sec < 0) {
          setSec(0);
        } else if (min > 0 && sec === 0) {
          setMin(min - 1);
          setSec(59);
        }
      }, 1000);
    }
  }, [sec, toggle]);

  if (min === 0 && sec === 0) {
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
      <span>
        {min >= 10 ? min : `0${min}`}:{sec >= 10 ? sec : `0${sec}`}
      </span>
    </div>
  );
};

export default Timer;
