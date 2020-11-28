import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../src/views/Home'
import Login from '../src/views/Login'
import SignUp from '../src/views/SignUp'
import UserSignUp from '../src/views/UserSignUp'
import CompanySignUp from '../src/views/CompanySignUp'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/useregister' component={UserSignUp}/>
        <Route exact path='/companyregister' component={CompanySignUp} />
      </Switch>
    </Router>
  );
}

export default App;
