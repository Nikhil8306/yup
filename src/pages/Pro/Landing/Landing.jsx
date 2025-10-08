import homepainter from "../../../assets/homepainter.png";
import Heading from "../../../components/Heading";
import Button from "../../../components/UI/Button/Button";
import { PlayCircleIcon } from "lucide-react";
import VideoHolder from "../../../components/VideoHolder/VideoHolder";

import Painters from "../../../components/BuildByPainters/Painters.jsx"
function Landing () {
    return <>
        <RsHero/>
        <VideoHolder/>
        <Painters/>
    </>
}

import "./rs-hero.css"

function RsHero() {
  return (
    <section className="rshero" aria-labelledby="rshero-title">
      <div className="rshero__inner">
        <div className="rshero__left">
          <header className="rshero__header">
            <div id="rshero-title" >
              Grow Your
              <br />
              Painting Business
            </div>
            <p className="rshero__subtitle">
              Get ready-to-paint customers delivered to your calendar at $0 per lead. Paint &amp; get paid with Referral
              Source. Book a demo to learn how it works.
            </p>
          </header>

          <div className="rshero__actions rshero__actions--desktop" aria-label="Primary actions">
            <Button backgroundColor={"var(--c2)"} type="button">
              Get Started
            </Button>
            <Button className="btn" backgroundColor={"var(--c12)"} type="button">
              <span className="rshero-btn__icon" aria-hidden="true">
                {/* Play icon */}
              Learn How It Works <PlayCircleIcon style={{marginLeft: "1rem"}} strokeWidth={"1px"}/>
               
              </span>
            </Button>
          </div>

          <div className="rshero__actions rshero__actions--mobile" aria-label="Primary actions (mobile)">
            <button className="rshero-btn rshero-btn--primary" type="button">
              Book a Demo
            </button>
            <button className="rshero-btn rshero-btn--secondary" type="button">
              <span className="rshero-btn__icon" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
                  <path d="M5 3.5v7l6-3.5-6-3.5z" />
                </svg>
              </span>
              Watch Video
            </button>
          </div>

          <div className="rshero__rating" aria-label="Customer rating">
            <div className="rshero__stars" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className="rshero__star"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 17.27l6.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l4.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <span className="rshero__rating-count">675+</span>
          </div>

          <p className="rshero__supporting">
            Join thousands of pros already winning jobs
            <br className="rshero__br--desktop" />
            with Referral Source.
          </p>

          <p className="rshero__member">
            Referral Source is a proud member of
            <span className="rshero__member-mark"> Sherwin‑Williams Digital Alliance</span>
          </p>
        </div>

        <div className="rshero__right" aria-hidden="true">
          <picture>
            <source  media="(min-width: 900px)" />
            <img
              className="rshero__art"
              src={homepainter}
              alt="painter"
            />
          </picture>
        </div>
      </div>
    </section>
  )
}

import styles from "./Landing.module.css";

export default Landing;