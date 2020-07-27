import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from '../src/store/';
import { Provider } from 'react-redux';

/*Páginas*/
import Login from './view/login/';
import NewUser from './view/user-new/';
import Home from './view/home/';
import RecoverUserPassword from './view/recover-user-password/';
import EventRegistration from './view/event-registration/';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/newuser' component={NewUser} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/recoveruserpassword' component={RecoverUserPassword} />
        <Route exact path='/eventregistration' component={EventRegistration} />
      </Router>
    </Provider>
  );
}

export default App;
