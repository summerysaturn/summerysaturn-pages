import React from 'react';
import logo from './logo.svg';

import {
  Button
} from 'react-bootstrap';

import {
  FaInstagram, FaTwitter, FaGithub
} from 'react-icons/fa';

import './App.css';

class SocialButton extends React.Component {
  render() {
    return (
      <a
        href={this.props.url}
        className="m-2 socialButton"
      >
        {this.props.children}
      </a>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          This page is under development!
        </h2>

        <div className="d-flex mb-2">

          <Button
            className="m-2 btn-primary"
            href="https://github.com/summerysaturn"
            target="_blank"
            rel="noopener noreferrer"
          >
            See my other work on GitHub
          </Button>

          <Button
            className="m-2 btn-info"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </Button>

        </div>

        <div className="d-flex">
          <SocialButton url="https://www.instagram.com/summerysaturn/">
            <FaInstagram className="socialButton" />
          </SocialButton>

          <SocialButton url="https://twitter.com/summerysaturn">
            <FaTwitter />
          </SocialButton>

          <SocialButton url="https://github.com/summerysaturn">
            <FaGithub />
          </SocialButton>
        </div>

      </header>
    </div>
  );
}

export default App;
