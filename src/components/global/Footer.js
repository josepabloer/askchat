import React, { Component } from 'react';
import logo from './images/logo.svg';
import './css/Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="Footer-logo">
          <img src={logo} alt="Footer-logo" />
          <h2>This is the footer</h2>
        </div>
      </div>
    );
  }
}

export default Footer;
