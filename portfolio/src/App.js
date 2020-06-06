import React from 'react';
import './pages/portfolio/portfolio.scss';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Portfolio from './pages/portfolio/Portfolio.js';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <Portfolio />
          </Route>
          <Route path="/about">
            
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
