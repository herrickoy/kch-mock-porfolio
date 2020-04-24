import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactPagePicture from "../../../static/assets/images/auth/login.jpg";

export default function() {
  return (
      <div className="content-page-wrapper">
          <div 
          className="left-column" 
          style={{
            background: "url(" + contactPagePicture + ") no-repeat",
            backgroundSize: "fit",
            backgroundPosition: "center",
            
          }} />
           
          <div className="right-column">
            <div className="contact-bullet-points">
              <div className="bullet-piont-group">
                <div className="icon">
                  <FontAwesomeIcon icon="phone" />
                </div>

                <div className="text">555-555-5555</div>
              </div>

              <div className="bullet-piont-group">
                <div className="icon">
                  <FontAwesomeIcon icon="envelope" />
                </div>

                <div className="text">herrickoy@gmail.com</div>
              </div>

              <div className="bullet-piont-group">
                <div className="icon">
                  <FontAwesomeIcon icon="map-marker-alt" />
                </div>

                <div className="text">American Fork, Utah</div>
              </div>
            </div>
          </div>
      </div>
  )
}