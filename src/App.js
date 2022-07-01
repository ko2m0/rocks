import React from 'react';
import './App.css';
import Navbar  from './components/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Experience from './components/pages/Experience/Experience';
import Education from './components/pages/Education/Education';
import Footer from './components/pages/Footer/Footer';
import NoPage from './components/pages/NoPage';


function App() {
  return (
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path='/' exact index><Home/></Route>
          <Route path='/experience'><Experience/></Route>
          <Route path='/education'><Education/></Route>
          <Route path="*"><NoPage/></Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
      
  );
}

export default App;
