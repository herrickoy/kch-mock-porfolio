import React from 'react';
import profilePicture from "../../../static/assets/images/bio/Koy-portfolio.png";

export default function() {
  return (
      <div className="content-page-wrapper">
          <div className="left-column">
            <img src={profilePicture}></img>
          </div>
           
          <div className="right-column">
          Hi my name is Koy Herrick, I am a web developer. I have a passion for success and a creative mind, I love to create and think up new things. Outside the box is a very common place to me. There has to be a more efficient way, there always is. I hope you enjoy taking a look at what skills I have and what I have to offer you and your company.
          </div>
      </div>
  )
}