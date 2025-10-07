import React from "react";

import "./ExploreServices.css";
import ExploreServicesImage from "./exploreServices.png";

function ExploreServices() {
  return (
    <div className="explore-services-container">
      <div className="explore-services-image-container">
        <img
          className="explore-services-image"
          alt="Explore Services"
          src={ExploreServicesImage}
        />
      </div>

      <div className="explore-services-content-container">
        <div className="explore-services-kicker">
          Why Choose Referral Source?
        </div>

        <div className="explore-services-description">
          We only work with licensed, insured, and experienced painters who have
          been thoroughly vetted. That means you can skip the guesswork and
          trust that your project will be completed professionally—on time, on
          budget, and with results you’ll love.
        </div>

        <button className="explore-services-button">Explore Services</button>
      </div>
    </div>
  );
}

export default ExploreServices;
