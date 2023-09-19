import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';


import About from './components/about';
import Nav from './components/navigation';


import './App.css';


class App extends Component {
  render() {
      return (
      <Router>
          <div className="App">
          <Nav></Nav>

          <Routes>
                  <Route exact path='/login' element={< Login />}></Route>
                  <Route exact path='/register' element={< Register />}></Route>

                  <Route exact path='/' element={< Home />}></Route>
                  <Route exact path='/about' element={< About />}></Route>
          </Routes>
          </div>
      </Router>
  );
  }
  }

export default App;
