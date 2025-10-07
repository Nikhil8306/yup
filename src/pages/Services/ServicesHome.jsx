import service from "../../assets/service.png";

import Heading from "../../components/Heading";
import Description from "../../components/Description";
import SearchBar from "../../components/Searchbar/Searchbar";
import Services from "../../components/Services/Services";
import Match from "../../components/Match/Match";
import Testimonials from "../../components/Testimonials/Testimonials";

import i1 from "../../assets/int1.png";
import i2 from "../../assets/int2.png";
import i3 from "../../assets/int3.png";
function ServicesHome () {
    return <>
        <Info/>
        <br />
        <Services heading={"Explore Service Areas"}/>
        <Match/>
        <TrendingServices/>
        <SearchBar/>
        <Testimonials/>
    </>
}   

function Info() {
    return <>
        <div className={styles.infocontainer}>
            <div className={styles.image}>
                <img src={service} alt="" />
            </div>

            <div className={styles.content}>
                <Heading>Painting Services You Can Trust</Heading>
                <br />
                <Description>Looking for the perfect painter for your next project ? <br />
                    Wheather it's refreshing a single room or giving your whole house a brand 
                    new look, Referral Source connects you with trusted local painters who can handle it all - from first quote to final coat.
                </Description>
                <br /><br />
                <SearchBar/>
            </div>
        </div>
    </>
}



const defaultServices = [
  {
    title: "Interior Painting",
    pros: 1319,
    imageSrc: i1,
    imageAlt: "A freshly painted interior room with wooden floors.",
  },
  {
    title: "Cabinet Refinishing",
    pros: 780,
    imageSrc: i2,
    imageAlt: "Modern gray kitchen cabinets and a marble island.",
  },
  {
    title: "Epoxy Garage Floors",
    pros: 395,
    imageSrc: i3,
    imageAlt: "Garage with gray epoxy-coated flooring.",
  },
]

function TrendingServices({
  heading = "Trending Services",
  description = "Find vetted painters — compare apples-to-apples estimates — and get your next paint project started faster with Referral Source.",
  services = defaultServices,
  className = "",
}) {
  return (
    <section className={`${styles.tsSection} ${className}`} aria-labelledby="ts-heading">
      <div className={styles.tsContainer}>
        <header className={styles.tsHeader}>
          <Heading id="ts-heading" >
            {heading}
          </Heading>
          <p className={styles.tsDescription}>{description}</p>
        </header>

        <div className={styles.tsGrid}>
          {services.map((s, i) => {
            const content = (
              <>
                <div key={`media-${i}`} className={styles.tsMedia} aria-hidden="true">
                  <img
                    src={s.imageSrc || "/placeholder.svg"}
                    alt={s.imageAlt}
                    loading="lazy"
                    className={styles.tsImage}
                  />
                </div>
                <div key={`body-${i}`} className={styles.tsCardBody}>
                  <h3 className={styles.tsCardTitle}>{s.title}</h3>
                  <div className={styles.tsMetaRow}>
                    <span className={styles.tsMetaText}>{s.pros.toLocaleString()} pros available</span>
                    <span className={styles.tsArrow} aria-hidden="true">
                      <svg
                        className={styles.tsArrowIcon}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14" />
                        <path d="M13 5l7 7-7 7" />
                      </svg>
                    </span>
                    <span className="sr-only">View {s.title}</span>
                  </div>
                </div>
              </>
            )

            return s.href ? (
              <a key={i} href={s.href} className={styles.tsCard}>
                {content}
              </a>
            ) : (
              <div key={i} className={styles.tsCard} role="group" aria-label={s.title}>
                {content}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


import styles from "./ServicesHome.module.css";

export default ServicesHome;

