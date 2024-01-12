// TimeContext.js
import React, { createContext, useState } from 'react';

const TimeContext = createContext();

const TimeProvider = ({ children }) => {
  const [renderedTime, setRenderedTime] = useState(0);

  return (
    <TimeContext.Provider value={{ renderedTime, setRenderedTime }}>
      {children}
    </TimeContext.Provider>
  );
};

export { TimeProvider, TimeContext };
