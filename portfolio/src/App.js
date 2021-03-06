import React from 'react';
import './pages/portfolio/portfolio.scss';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/nav/Header';
import Portfolio from './pages/portfolio/Portfolio.js';
import About from './pages/about/About.js';
import Blog from './pages/blog/Blog.js';
import Talks from './pages/talks/Talks.js'

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Route exact path="/" render={props => <Portfolio />} />
        <Route path="/about" render={props => <About />} />
        <Route path="/blog" render={props => <Blog />} />
        <Route path="/talks" render={props => <Talks />} />
      </div>
    </Router>
  );
}

export default App;
