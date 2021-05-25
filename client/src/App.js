import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Main from './pages/main/Main';
import Details from './pages/details/Details';
import Edit from './pages/edit/Edit';

function App() {

  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <Main />
        </Route>

        <Route path="/details/:id/:user">
          <Details />
        </Route>

        <Route path="/edit/:id">
          <Edit />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
