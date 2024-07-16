import React, { useEffect, useState } from 'react';

import './created-time.css';

const CreatedTime = ({ createdTime }) => {
  const [seconds, setSeconds] = useState(0);

  function time(delay) {
    setTimeout(() => {
      setSeconds(Math.floor((Date.now() - createdTime) / 1000));
    }, 1000 * delay);
  }

  useEffect(() => {
    if (seconds < 10) {
      time(1);
    }
    if (seconds >= 10 && seconds <= 50) {
      time(10);
    }
    if (seconds >= 60) {
      time(60);
    }
  }, [seconds]);

  return (
    <span className="created">
      created {seconds >= 60 ? seconds / 60 : seconds} {seconds < 60 ? 'seconds' : 'minutes'} ago
    </span>
  );
};

export default CreatedTime;
