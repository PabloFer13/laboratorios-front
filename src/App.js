import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogIn from './containers/LogIn';
import Register from './containers/Register';
import Layout from './presentational/Layout';
import Routes from './routes';

class App extends Component {
  render() {
    const { loggedIn, newUser } = this.props;
    if(loggedIn){
      return (
        <Layout>
          <Routes />
        </Layout>
      )
    }

    return newUser ? <Register /> : <LogIn />
  }
}

const mapStateToProps = ({ app }) => {
  const { status: loggedIn, newUser } = app;
  return { loggedIn, newUser };
}

export default connect(mapStateToProps)(App);
