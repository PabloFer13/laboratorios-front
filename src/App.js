import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Body } from './presentational/Box';
import { Input, Label, LogInBox } from './presentational/Form';
import { Avatar } from './presentational/Image';
import { ATag, H1 } from './presentational/Text';

class App extends Component {
  render() {
    return (
      <Body>
        <LogInBox>
        <H1>Log In</H1>
          <form>
            <Label htmlFor='username'>Username</Label>
            <Input type="text" placeholder="Username" />

            <Label htmlFor='username'>Password</Label>
            <Input type="text" placeholder="Password" />

            <Input type="submit" value="Log In" />
            <ATag href='#'>Forgot Password</ATag>
            <br />
            <ATag href='#'>Don't have an account</ATag>
          </form>
        </LogInBox>
      </Body>
    );
  }
}

export default App;
