// App.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import RenderCounter from './RenderCounter';
import { TimeProvider } from './TimeContext';

const Home = () => (
  <div>
    <h1>Home</h1>
    <p>Welcome to the render counter app!</p>
  </div>
);

const App = () => {
  return (
    <TimeProvider>
      
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/render">Render Counter</Link>
            </li>
            <li>
              <Link to="/not-render">Not Rendering</Link>
            </li>
          </ul>
        </nav>

      <Routes>
        <Route path="/render" element={<RenderCounter/>} />
        <Route path="/not-render" element={<p>Component not rendered</p>} />
        <Route exact path="/" element={<Home/>} />
      </Routes>
    </TimeProvider>
  );
};

export default App;
