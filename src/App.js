import React from 'react';
import './App.css';
import Navbar  from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Experience from './components/pages/Experience/Experience';
import Education from './components/pages/Education/Education';
import Footer from './components/pages/Footer/Footer';
import NoPage from './components/pages/NoPage';


function App() {
  return (
      <Router basename={'/'}>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/experience" component={Experience}/>
          <Route path="/education" component={Education}/>
          <Route path="*" component={NoPage} />
        </Switch>
        <Footer/>
      </Router>
      
  );
}

export default App;
