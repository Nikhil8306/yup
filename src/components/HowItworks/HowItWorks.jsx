import React from "react";
import "./HowItWorks.css"; // local css just for this component

import Image1 from "./Img1.jpeg";
import Image2 from "./Img2.jpeg";
import Image3 from "./Img3.jpeg";
import Image4 from "./Img4.jpeg";

const StepsComponent = () => {
  return (
    <div className="steps-wrapper-unique">
      {/* Step 1 */}
      <div className="step-item-unique step-layout-text-left">
        <div className="step-content-unique">
          <h2 className="step-title-unique">Step 1. Create Your Account</h2>
          <p className="step-text-unique">
            Sign up as a vetted Pro on Referral Source.com. You'll need:
          </p>
          <p className="step-text-unique">Proof of licensing (as required)</p>
          <p className="step-text-unique">Proof of insurance</p>
          <p className="step-text-unique">
            An active monthly subscription to the PM Pros field service
            management platform you used for all Pros
          </p>
          <p className="step-text-unique">
            This includes homeowners show they're working with a professional
            they can trust.
          </p>
        </div>
        <div className="step-image-unique">
          <img
            src={Image3}
            alt="Person creating account on phone"
            width="400"
            height="300"
            className="step-img-unique"
          />
        </div>
      </div>

      {/* Step 2 */}
      <div className="step-item-unique step-layout-text-right">
        <div className="step-image-unique">
          <img
            src={Image4}
            alt="Contractors discussing project"
            width="400"
            height="300"
            className="step-img-unique"
          />
        </div>
        <div className="step-content-unique">
          <h2 className="step-title-unique">Step 2. Get Matched</h2>
          <p className="step-text-unique">
            Referral Source uses a proprietary algorithm to match platform
            members with up to three qualified Pros in their area. That means:
          </p>
          <p className="step-text-unique">
            You're not competing against dozens of contractors.
          </p>
          <p className="step-text-unique">
            Every lead is warm and project-specific.
          </p>
          <p className="step-text-unique">
            Homeowners see you alongside just two other vetted options.
          </p>
        </div>
      </div>

      {/* Step 3 */}
      <div className="step-item-unique step-layout-text-left step-highlighted-unique">
        <div className="step-content-unique">
          <h2 className="step-title-unique">Step 3. Submit Your Bid</h2>
          <p className="step-text-unique">
            Once matched, you'll receive the homeowner's project details via the
            dashboard. You can respond with a clear estimate and connect
            directly with the homeowner. The PM Pros platform makes it simple
            to:
          </p>
          <ul className="step-list-unique">
            <li>Provide estimates and proposals</li>
            <li>Schedule site visits or virtual walk-throughs</li>
            <li>Track communication in one place</li>
          </ul>
        </div>
        <div className="step-image-unique">
          <img
            src={Image1}
            alt="Reviewing project materials"
            width="400"
            height="300"
            className="step-img-unique"
          />
        </div>
      </div>

      {/* Step 4 */}
      <div className="step-item-unique step-layout-text-right">
        <div className="step-image-unique">
          <img
            src={Image2}
            alt="Contractors celebrating win"
            width="400"
            height="300"
            className="step-img-unique"
          />
        </div>
        <div className="step-content-unique">
          <h2 className="step-title-unique">Step 4. Win Jobs</h2>
          <p className="step-text-unique">
            Homeowners choose the Pro that best fits their needs - based on your
            proposal, timeline, reviews, and budget. Once you win, positive
            ratings and your profile will stand out even more on future matches.
          </p>
          <p className="step-text-unique">
            Once you win a job, Referral Source takes a small matching fee—but
            only when you're fully booked or get there, so your calendar, track
            progress, and client get paid.
          </p>
          <p className="step-text-unique">
            The PM Pros platform keeps everything organized smoothly— from the
            first quote to the final nail.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StepsComponent;
