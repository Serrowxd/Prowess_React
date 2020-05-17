import React, { useState, useEffect, useReducer } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Navigation, Footer, Landing, About, Roster, Raider } from './components/compReduce';

const Users = require('./data/raiders.json');

// Data imports
const Raiders = require('./data/raiders.json');
const Content = require('./data/content.json');

function App() {
  const [navCheck, setNav] = useState(false);

  function windowChecker() {
    setTimeout(() => {
      if (window.location.pathname !== '/') {
        setNav(true);
      } else {
        setNav(false);
      }
    }, 0);
  }

  useEffect(() => {
    windowChecker();
  });

  return (
    <div className="global-container">
      <Navigation nav={navCheck} />

      {/* Pages */}
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/roster">
          <Roster />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
