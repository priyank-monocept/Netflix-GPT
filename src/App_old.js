import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Report from '../src/components/Report';
import Login from '../src/components/Login';
import Browse from '../src/components/Browse';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" exact component={<Login />} />
        <Route path="/report" component={< Report />} />
        <Route path="/browse" component={<Browse />} isAuthenticated={isAuthenticated} />
      </Routes>
    </Router>
  );
};

export default App;