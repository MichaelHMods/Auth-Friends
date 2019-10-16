import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './App.css';

import Login from "./component/Login";
import FriendPage from './component/FriendPage';
import PrivateRoute from './component/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/friendspage'>Friend Page</Link></li>
          <li><Link to='/editfriend'>Edit Friend</Link> </li>

        </ul>
        <Switch>
          <PrivateRoute path='/friendspage' component={FriendPage}/>
          <Route path='/login' component={Login} />
          <Route component={Login}/>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
