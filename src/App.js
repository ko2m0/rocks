import React from 'react';
import './App.css';
import Navbar  from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Experience from './components/pages/Experience/Experience';
import Education from './components/pages/Education/Education';
import Footer from './components/pages/Footer/Footer';

function App() {
  return (
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' component={Home}/>
          <Route path='/experience' component={Experience}/>
          <Route path='/education' component={Education}/>
        </Switch>
        <Footer/>
      </Router>
  );
}

export default App;
