import React, { useState } from 'react';

function RosterCard(props) {
  return (
    <div className="rc-container">
      <h1> {props.user} </h1>
      <img src={props.large} />
      <div className="rc-filter" />
    </div>
  );
}

export default RosterCard;
