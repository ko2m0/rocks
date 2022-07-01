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
          <Route exact path='/'><Home/></Route>
          <Route path='/experience' component={Experience}/>
          <Route path='/education' component={Education}/>
          <Route path="*" component={NoPage} />
        </Switch>
        <Footer/>
      </BrowserRouter>
      
  );
}

export default App;
