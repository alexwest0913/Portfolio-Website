import React from 'react'
import Intro from './components/intro/Intro'
import About from './components/about/About'
import ProjectList from './components/ProjectList/ProjectList'
import Contact from './components/contact/Contact'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Intro />
      <About />
      <ProjectList />
      <Contact/>
    </Router>
  );
}

export default App;
