import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/*Páginas*/
import Login from './view/login/';
import NewUser from './view/user-new/';


function App() {
  return (
    <Router>
      <Route exact path='/' component={Login} />
      <Route exact path='/newuser' component={NewUser} />
    </Router>
  );
}

export default App;
