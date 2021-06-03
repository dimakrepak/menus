import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Main from './pages/main/Main';
import { useEffect, useState } from 'react';
import Details from './pages/details/Details';
import Edit from './pages/edit/Edit';

function App() {
  const [user, setUser] = useState('')

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')))
  }, [])
  console.log(user);
  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <Main />
        </Route>

        <Route path="/details/:id/:user">
          <Details />
        </Route>

        <Route path="/edit/:id/">
          {user?.admin ? <Edit /> : <Main customer />}
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
