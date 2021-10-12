import React from 'react';
import {Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import {Login} from './component/Login';
import {Registration} from './component/Registration';
import {Profile} from './component/Profile';
import {PasswordRecovery} from './component/PasswordRecovery';
import {NewPassword} from './component/NewPassword';
import {Testing} from './component/Testing';
import Error404 from './component/Error404';

export const PATH = {
  LOGIN: '/login',
  REGISTRATION: '/registration',
  PROFILE: '/profile',
  PASSWORD_RECOVERY: '/password_recovery',
  NEW_PASSWORD: '/new_password',
  TESTING: '/testing',
}

function App() {
  return (
    <div className={'App'}>
      <Switch>
        <Route path={'/'} exact render={() => <Redirect to={PATH.TESTING}/>}/>
        <Route path={PATH.LOGIN} render={() => <Login/>}/>
        <Route path={PATH.REGISTRATION} render={() => <Registration/>}/>
        <Route path={PATH.PROFILE} render={() => <Profile/>}/>
        <Route path={PATH.PASSWORD_RECOVERY} render={() => <PasswordRecovery/>}/>
        <Route path={PATH.NEW_PASSWORD} render={() => <NewPassword/>}/>
        <Route path={PATH.TESTING} render={() => <Testing/>}/>
        <Route render={() => <Error404/>}/>
      </Switch>
    </div>
  );
}

export default App;
