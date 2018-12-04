import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router';
import Home from './containers/Home';
import Usuarios from './containers/Usuarios';
import Reservas from './containers/Reservas';
import Perfil from './containers/Perfil';

const Routes = ({ location }) => (
  <Switch location={location}>
    <Route exact path="/usuarios" component={Usuarios} />
    <Route exact path="/reservas" component={Reservas} />
    <Route exact path="/perfil" component={Perfil} />
    <Route exact path="/" component={Home} />
    <Redirect to="/" />
  </Switch>
);

const mapStateToProps = ({ router }) => ({ location: router.location });

export default connect(mapStateToProps)(Routes);
