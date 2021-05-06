import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AgendaRegister from './pages/AgendaRegisterPage';
import AgendaIDPage from './pages/AgendaIDPage';
import AgendaPage from './pages/AgendaPage';
import ProfilePage from './pages/ProfilePage';
import Provider from './context/Provider';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider>
        <Switch>
          <Route path="/login" component={ LoginPage } />
          <Route path="/register" component={ RegisterPage } />
          <Route path="/agenda/register" component={ AgendaRegister } />
          <Route path="/agenda/:id" component={ AgendaIDPage } />
          <Route exact path="/agenda" component={ AgendaPage } />
          <Route path="/profile" component={ ProfilePage } />
          <Route exact path="/" component={ () => <Redirect to="/login" /> } />
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
