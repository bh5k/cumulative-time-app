// RenderCounter.js
import React, { useContext, useEffect } from 'react';
import { TimeContext } from './TimeContext';

const RenderCounter = () => {
  const { renderedTime, setRenderedTime } = useContext(TimeContext);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRenderedTime(prevTime => prevTime + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [setRenderedTime]);

  return (
    <div>
      <h1>Render Counter</h1>
      <p>Seconds Rendered: {renderedTime}</p>
    </div>
  );
};

export default RenderCounter;
