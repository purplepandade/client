import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

import Nav from './components/navigation';
import Sidebar from './components/sidebar';


import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import About from './pages/about';


import './App.css';


class App extends Component {
  render() {
      return (
      <Router>
          <div className="App">
          <Nav></Nav>
          <div className="main">
          <Sidebar></Sidebar>
          <div className='Content'>
          <Routes>
                  <Route exact path='/login' element={< Login />}></Route>
                  <Route exact path='/register' element={< Register />}></Route>

                  <Route exact path='/' element={< Home />}></Route>
                  <Route exact path='/about' element={< About />}></Route>
          </Routes>
          </div>
          </div>
          </div>
      </Router>
  );
  }
  }

export default App;
