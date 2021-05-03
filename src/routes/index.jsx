import React from 'react'
import { Switch,Route } from 'react-router-dom';
import Profile from '../pages/Profile'
import Repo from '../pages/Repo'

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Profile}  />
      <Route exact path="/:username" component={Profile}  />
      <Route exact path="/:username/:reponame" component={Repo} /> 
    </Switch>
  );
}
