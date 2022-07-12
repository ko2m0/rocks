import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar  from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Experience from './components/pages/Experience/index';
import Education from './components/pages/Education/index';
import Footer from './components/pages/Footer/Footer';
import NoPage from './components/pages/NoPage';


function App() {

  return (
      <>
        <Navbar/>
        <Switch>
          <Route path="/experience" component={Experience}/>
          <Route path="/education" component={Education}/>
          <Route path="/" component={Home}/>
          <Route path="*" component={NoPage} />
        </Switch>
        <Footer/>
        </>
  );
}

export default App;
