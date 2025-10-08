import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";
import p4 from "../../assets/p4.png";
import logo  from "../../assets/logo.png";
import "./features-section.css";
import Heading from "../Heading";

import Button from "../UI/Button/Button";

export default function FeaturesSection() {
  return (
    <section className="features-section-unique">
      <div className="features-container-unique">
        {/* Header */}
        <div className="features-header-unique">
          <Heading>
            Built by Painters. For Painters.
          </Heading>
          <p className="features-subtitle-unique">
            Referral Source was built by painters, not marketers.
          </p>
          <p className="features-subtitle-unique">
            No cold calls. No junk leads. Just real jobs from people who
            actually need a painter.
          </p>
        </div>

        {/* Features Grid */}
        <div className="features-grid-unique">
          {/* Feature 1 */}
          <div className="feature-card-unique">
            <div className="feature-image-wrapper-unique">
              <img
                src={p2}
                alt="Professional painter in shop"
                className="feature-image-unique"
              />
              <div className="feature-icon-unique">
                <img style={{width:"240%", height:"240%", objectFit: "cover", paddingTop: "26px"}} src={logo} alt="" />
              </div>
            </div>
            <h3 className="feature-heading-unique">
              Built for Working Painters
            </h3>
            <p className="feature-description-unique">
              No chasing jobs. We match you with ready-to-paint customers.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="feature-card-unique">
            <div className="feature-image-wrapper-unique">
              <img
                src={p1}
                alt="Painters discussing project"
                className="feature-image-unique"
              />
              <div className="feature-icon-unique">
                <img style={{width:"240%", height:"240%", objectFit: "cover", paddingTop: "26px"}} src={logo} alt="" />

              </div>
            </div>
            <h3 className="feature-heading-unique">Estimate Ready Projects</h3>
            <p className="feature-description-unique">
              Homeowners who are ready to paint. No cold calls.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="feature-card-unique">
            <div className="feature-image-wrapper-unique">
              <img
                src={p4}
                alt="Hand holding clipboard with checklist"
                className="feature-image-unique"
              />
              <div className="feature-icon-unique">
                <img style={{width:"240%", height:"240%", objectFit: "cover", paddingTop: "26px"}} src={logo} alt="" />
               
              </div>
            </div>
            <h3 className="feature-heading-unique">No Upfront Costs</h3>
            <p className="feature-description-unique">
              You only pay when you book the job.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="feature-card-unique">
            <div className="feature-image-wrapper-unique">
              <img
                src={p3}
                alt="Person working at desk"
                className="feature-image-unique"
              />
              <div className="feature-icon-unique">
                <img style={{width:"240%", height:"240%", objectFit: "cover", paddingTop: "26px"}} src={logo} alt="" />
                
              </div>
            </div>
            <h3 className="feature-heading-unique">Simplify Your Day</h3>
            <p className="feature-description-unique">
              Estimate, schedule, invoice and get paid – all in one place.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="features-cta-unique">
          <Button backgroundColor={"var(--c2)"}>Join Now</Button>
        </div>
      </div>
    </section>
  );
}
