import "./features-section.css";
import Heading from "../Heading";
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
                src="/painter-in-shop-with-supplies.jpg"
                alt="Professional painter in shop"
                className="feature-image-unique"
              />
              <div className="feature-icon-unique">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="lightning-icon-unique"
                >
                  <path
                    d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"
                    fill="currentColor"
                  />
                </svg>
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
                src="/painters-discussing-project.jpg"
                alt="Painters discussing project"
                className="feature-image-unique"
              />
              <div className="feature-icon-unique">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="lightning-icon-unique"
                >
                  <path
                    d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"
                    fill="currentColor"
                  />
                </svg>
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
                src="/hand-with-clipboard-checklist.jpg"
                alt="Hand holding clipboard with checklist"
                className="feature-image-unique"
              />
              <div className="feature-icon-unique">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="lightning-icon-unique"
                >
                  <path
                    d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"
                    fill="currentColor"
                  />
                </svg>
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
                src="/person-working-at-desk-with-phone.jpg"
                alt="Person working at desk"
                className="feature-image-unique"
              />
              <div className="feature-icon-unique">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="lightning-icon-unique"
                >
                  <path
                    d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"
                    fill="currentColor"
                  />
                </svg>
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
          <button className="features-button-unique">Join Now</button>
        </div>
      </div>
    </section>
  );
}
