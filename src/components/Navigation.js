import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Navigation(props) {
  return (
    <div className={props.nav ? 'nav-container' : 'nav-container abs-nav'}>
      <div className="nav-header">
        <Link to="/">
          <h1>Prowess</h1>
        </Link>
      </div>
      <div className="nav-items">
        <Link to="/about">
          <p>About</p>
        </Link>
        <Link to="/roster">
          <p>Roster</p>
        </Link>
        <a href="https://www.warcraftlogs.com/guild/rankings/490376/latest/" target="_blank" rel="noopener noreferrer">
          <p>Logs</p>
        </a>
        <Link to="/">
          <p>Discord</p>
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
