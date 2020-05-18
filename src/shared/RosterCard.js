import React, { useState } from 'react';

function RosterCard(props) {
  const [mouseCheck, setMouse] = useState(true);

  function mouseHandler() {
    setMouse(!mouseCheck);
  }

  return (
    <div className="rc-container" onMouseEnter={mouseHandler} onMouseLeave={mouseHandler}>
      <div className="rc-filter" />
      <img src={props.large} />

      {mouseCheck ? (
        <div className="rc-idle">
          <h1> {props.user} </h1>
          <p> {props.class} </p>
        </div>
      ) : (
        <div className="rc-hover">
          <div className="rc-banner">
            <p> {props.user} </p>
            <p> {props.class} </p>
          </div>
          <div className="rc-content">
            {/* Replace these with links */}
            <p> Raider.io</p>
            <p> Logs </p>
            <p> Armory </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default RosterCard;
