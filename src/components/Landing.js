import React, { useState } from 'react';

function Landing() {
  return (
    <div className="landing-container">
      <div className="landing-wrapper">
        <div className="filter" />
        <div className="jumbo-wrapper">
          <div className="jumbo">
            <h1>Henlo (OvO")</h1>
            <h2>Bottom Text</h2>
          </div>
        </div>

        <div className="shard-wrapper">
          <div className="shard">Shard Text</div>
          <div className="shard">Shard Text</div>
          <div className="shard">Shard Text</div>
        </div>

        <div className="mc-wrapper">
          {/* Articles will be mapped from content.json */}
          <div className="news-wrapper">
            <div className="article-card">
              <h1> Henlo (OvO")</h1>
            </div>
            <div className="article-card">
              <h1> Henlo (OvO")</h1>
            </div>
            <div className="article-card">
              <h1> Henlo (OvO")</h1>
            </div>
            <div className="article-card">
              <h1> Henlo (OvO")</h1>
            </div>
          </div>

          {/* Recruitment will be mapped from content.json? */}
          <div className="rec-wrapper">
            <div className="rec-pannel">
              <h1>Recruitment Content</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
