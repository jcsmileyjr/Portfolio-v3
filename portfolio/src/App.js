import React from 'react';
import './pages/portfolio/portfolio.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from './components/nav/Header';
import Portfolio from './pages/portfolio/Portfolio.js';
import About from './pages/about/About.js';

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Route exact path="/" render={props => <Portfolio />} />
        <Route path="/about" render={props => <About />} />
      </div>
    </Router>
  );
}

export default App;
