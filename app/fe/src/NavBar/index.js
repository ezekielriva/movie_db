import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <nav className="NavBar">
        <div className="nav-wrapper">
          <a className="brand-logo">Movie DB</a>
        </div>
      </nav>
    );
  }
}

export default NavBar;
