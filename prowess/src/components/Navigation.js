import React, { useState } from 'react';

function Navigation(props) {
  return (
    <div className={props.nav ? 'nav-container' : 'nav-container abs-nav'}>
      <div className="nav-header">
        <h1>Prowess</h1>
      </div>
      <div className="nav-items">
        <p>link</p>
        <p>link</p>
        <p>link</p>
        <p>link</p>
      </div>
    </div>
  );
}

export default Navigation;
