import React, { useState } from 'react';

import img from '../assets/yoink.jpg';

function About() {
  return (
    <div className="about-wrapper">
      <div className="pannel-wrapper">
        <div className="pannel-content main">
          <h1>Prowess</h1>
          <p>
            I'm baby ethical subway tile hell of tousled crucifix. Stumptown authentic thundercats, fingerstache neutra
            schlitz bushwick. VHS messenger bag tousled listicle chicharrones brunch readymade leggings slow-carb
            gastropub fanny pack banh mi taxidermy pork belly. Taxidermy subway tile blog, ugh church-key mlkshk narwhal
            PBR&B.
          </p>
        </div>
      </div>
      <div className="pannel-wrapper dark">
        <div className="pannel-content">
          <div className="img-wrapper">
            <img src={img} alt="uwu" />
          </div>
          <div className="text-wrapper">
            <h2>Henlo (OvO")</h2>
            <p>
              Taiyaki ethical flexitarian, franzen etsy chartreuse swag trust fund succulents actually shaman narwhal
              humblebrag. Flexitarian pickled master cleanse pop-up vexillologist forage mlkshk messenger bag fam. Plaid
              forage artisan vexillologist gluten-free. Migas pork belly celiac, butcher iPhone tousled mixtape hammock
              readymade listicle narwhal ramps.
            </p>
          </div>
        </div>
      </div>
      <div className="pannel-wrapper">
        <div className="pannel-content">
          <div className="text-wrapper">
            <h2>Oh no (O-O")</h2>
            <p>
              Stumptown taiyaki everyday carry health goth prism 8-bit. Glossier hella air plant, intelligentsia taiyaki
              umami celiac hell of craft beer taxidermy disrupt brooklyn. Farm-to-table banh mi air plant, tacos ugh
              hella meh knausgaard fixie pickled palo santo meggings. Blue bottle freegan copper mug gentrify, unicorn
              whatever affogato hexagon hammock.
            </p>
          </div>
          <div className="img-wrapper">
            <img src={img} alt="uwu" />
          </div>
        </div>
      </div>
      <div className="pannel-wrapper dark">
        <div className="pannel-content">
          <div className="img-wrapper">
            <img src={img} alt="uwu" />
          </div>
          <div className="text-wrapper">
            <h2>Text is changing (O^O")</h2>
            <p>
              DIY live-edge hammock selfies godard skateboard gochujang tacos taxidermy jianbing direct trade lomo
              subway tile. Blue bottle beard swag biodiesel, woke vexillologist truffaut cliche gastropub bitters
              mustache. La croix flannel bicycle rights crucifix wayfarers franzen cloud bread you probably haven't
              heard of them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
