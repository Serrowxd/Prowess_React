import React, { useState } from 'react';

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
        <p className="role-header">Tanks</p>
        <div className="tank-wrapper">
          <div className="roster-card">
            <p>Roster Card</p>
          </div>
          <div className="roster-card">
            <p>Roster Card</p>
          </div>
        </div>

        <p className="role-header">Healers</p>
        <div className="healer-wrapper">
          <div className="roster-card">
            <p>Roster Card</p>
          </div>
          <div className="roster-card">
            <p>Roster Card</p>
          </div>
          <div className="roster-card">
            <p>Roster Card</p>
          </div>
          <div className="roster-card">
            <p>Roster Card</p>
          </div>
        </div>

        <p className="role-header">DPS</p>
        <div className="dps-wrapper">
          <div className="roster-card">
            <p>Roster Card</p>
          </div>
          <div className="roster-card">
            <p>Roster Card</p>
          </div>
          <div className="roster-card">
            <p>Roster Card</p>
          </div>
          <div className="roster-card">
            <p>Roster Card</p>
          </div>
          <div className="roster-card">
            <p>Roster Card</p>
          </div>
          <div className="roster-card">
            <p>Roster Card</p>
          </div>
          <div className="roster-card">
            <p>Roster Card</p>
          </div>
          <div className="roster-card">
            <p>Roster Card</p>
          </div>
          <div className="roster-card">
            <p>Roster Card</p>
          </div>
          <div className="roster-card">
            <p>Roster Card</p>
          </div>
          <div className="roster-card">
            <p>Roster Card</p>
          </div>
          <div className="roster-card">
            <p>Roster Card</p>
          </div>
          <div className="roster-card">
            <p>Roster Card</p>
          </div>
          <div className="roster-card">
            <p>Roster Card</p>
          </div>
          <div className="roster-card">
            <p>Roster Card</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roster;
