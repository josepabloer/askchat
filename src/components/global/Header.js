//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';


//Assets
import logo from './images/logo.svg';
import './css/Header.css';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };
  render() {
    const{title, items} = this.props;

    return (
      <div className="Header">
        <div className="Logo">
          <img src={logo} alt="Logo" />
          <h3>{title}</h3>

          <ul className='Menu'>
          {items && items.map((item,i) => <li i={i}>{item.title}</li>)}
          </ul>
        </div>

      </div>
    );
  }
}

export default Header;
