import React, { useState, useEffect } from 'react';

function Raider(props) {
  return (
    <div className="raider-container">
      <img src={props.img} />
      <h1> {props.name} </h1>
    </div>
  );
}

// I'm the really big stupid
// I'm pulling in props when Raider is a page and hasn't been given props
// :)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))

// Fix this later -- Future Dated

export default Raider;
