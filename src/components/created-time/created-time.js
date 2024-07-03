import React, { useState, useEffect } from 'react';

import './created-time.css';

const CreatedTime = () => {
  const [timeCount, setTimeCount] = useState(0);
  const [timeLabel, setTimeLabel] = useState('seconds');

  function updateTime(addedCount, unit, nextUnit, seconds) {
    if (timeCount < 60 && timeLabel === unit) {
      setTimeout(() => {
        setTimeCount(timeCount + addedCount);
      }, seconds * 1000);
    } else if (timeCount === 60 && timeLabel === unit && timeLabel !== 'hours') {
      setTimeCount(1);
      setTimeLabel(nextUnit);
    }
  }

  useEffect(() => {
    updateTime(10, 'seconds', 'minutes', 10);
    updateTime(1, 'minutes', 'hours', 60);
    updateTime(1, 'hours', null, 360);
    if (timeCount === 60 && timeLabel === 'hours') {
      setTimeCount(null);
      setTimeLabel('a long time');
    }
  }, [timeCount]);

  return (
    <span className="created">
      created {timeCount} {timeLabel} ago
    </span>
  );
};

export default CreatedTime;
