import React, { useState } from 'react';
import { RosterCard } from '../shared/shareReduce';

// Temporary User Import
const Users = require('../data/raiders.json');

function Roster() {
  return (
    <div className="roster-container">
      <div className="rh-wrapper">
        <div className="roster-header">
          <h1>Prowess</h1>
          <h2>Core Roster</h2>
        </div>
      </div>

      {/* 20 roster cards !! Temporary !! */}
      <div className="mr-wrapper">
        <div className="role-wrapper">
          <p className="role-header">Tanks</p>
        </div>
        <div className="tank-wrapper">
          <div className="roster-card">
            <RosterCard user={Users.Neon.user} large={Users.Neon.large} />
          </div>
          <div className="roster-card">
            <RosterCard />
          </div>
        </div>

        <div className="role-wrapper">
          <p className="role-header">Healers</p>
        </div>
        <div className="healer-wrapper">
          <div className="roster-card">
            <RosterCard user={Users.Ryanlockwood.user} large={Users.Ryanlockwood.large} />
          </div>
          <div className="roster-card">
            <RosterCard />
          </div>
          <div className="roster-card">
            <RosterCard />
          </div>
          <div className="roster-card">
            <RosterCard />
          </div>
        </div>

        <div className="role-wrapper">
          <p className="role-header">DPS</p>
        </div>
        <div className="dps-wrapper">
          <div className="roster-card">
            <RosterCard user={Users.Santo.user} large={Users.Santo.large} />
          </div>
          <div className="roster-card">
            <RosterCard user={Users.Ethren.user} large={Users.Ethren.large} />
          </div>
          <div className="roster-card">
            <RosterCard user={Users.Serrow.user} large={Users.Serrow.large} />
          </div>
          <div className="roster-card">
            <RosterCard />
          </div>
          <div className="roster-card">
            <RosterCard />
          </div>
          <div className="roster-card">
            <RosterCard />
          </div>
          <div className="roster-card">
            <RosterCard />
          </div>
          <div className="roster-card">
            <RosterCard />
          </div>
          <div className="roster-card">
            <RosterCard />
          </div>
          <div className="roster-card">
            <RosterCard />
          </div>
          <div className="roster-card">
            <RosterCard />
          </div>
          <div className="roster-card">
            <RosterCard />
          </div>
          <div className="roster-card">
            <RosterCard />
          </div>
          <div className="roster-card">
            <RosterCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roster;
