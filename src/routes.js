import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router';
import Home from './containers/Home';

const Routes = ({ location }) => (
  <Switch location={location}>
    <Route exact path="/" component={Home} />
    <Redirect to="/" />
  </Switch>
);

const mapStateToProps = ({ router }) => ({ location: router.location });

export default connect(mapStateToProps)(Routes);