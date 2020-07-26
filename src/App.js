import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/*Páginas*/
import Login from './view/login/';
import NewUser from './view/user-new/';
import Home from './view/home/';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Home} />
      <Route exact path='/newuser' component={NewUser} />
      <Route exact path='/login' component={Login} />
    </Router>
  );
}

export default App;
