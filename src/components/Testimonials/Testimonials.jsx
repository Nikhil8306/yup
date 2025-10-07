import { useState, useRef, useEffect } from "react";
import Heading from "../Heading.jsx";

import c1 from "../../assets/cust1.png";
import c2 from "../../assets/cust2.png";
import c3 from "../../assets/cust3.png";

const testimonials = [
  {
    id: 1,
    quote:
      '"FM Flow had three solid leads on my calendar before the week was over."',
    name: "Olivia",
    location: "Austin, Texas",
    avatar:c1,
    rating: 5,
  },
  {
    id: 2,
    quote:
      '"We tried everything - local ads, coaching, marketers - none of it worked. Referral Source actually delivers qualified paint jobs to my business."',
    name: "Tyler",
    location: "Portland, Oregon",
    avatar:c2,
    rating: 5,
  },
  {
    id: 3,
    quote:
      '"I\'ve been able to automate my business, schedule my crews, and invoice all from inside the FM Flow app, freeing up more time to hike and fish with my kids."',
    name: "Cara",
    location: "Lynchburg, Idaho",
    avatar:c3,
    rating: 5,
  },
];

function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const handleScroll = () => {
        const scrollLeft = container.scrollLeft;
        const cardWidth = container.offsetWidth;
        const index = Math.round(scrollLeft / cardWidth);
        setActiveIndex(index);
        };

        container.addEventListener("scroll", handleScroll);
        return () => container.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToIndex = (index) => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const cardWidth = container.offsetWidth;
        container.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
        });
    };

    return (
        <section className={`${styles['testimonials-section-wrapper']}`}>
        <div className={`${styles['testimonials-section-container']}`}>
            <div className={`${styles['testimonials-section-header']}`}>
                <Heading>
                    Real Customers. Real Results. <br /> What Homeowners are Saying.
                </Heading>

                <Button backgroundColor={"var(--c2)"}>
                    Get Started
                </Button>
            </div>

            <div
            className={`${styles['testimonials-section-cards-container']}`}
            ref={scrollContainerRef}
            >
            {testimonials.map((testimonial) => (
                <div key={testimonial.id} className={`${styles['testimonials-section-card']}`}>
                <p className={`${styles['testimonials-section-quote']}`}>{testimonial.quote}</p>

                <div className={`${styles['testimonials-section-card-footer']}`}>
                    <div className={`${styles['testimonials-section-author']}`}>
                    <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className={`${styles['testimonials-section-avatar']}`}
                    />
                    <div className={`${styles['testimonials-section-author-info']}`}>
                        <p className={`${styles['testimonials-section-author-name']}`}>
                        {testimonial.name}
                        </p>
                        <p className={`${styles['testimonials-section-author-location']}`}>
                        {testimonial.location}
                        </p>
                    </div>
                    </div>

                    <div className={`${styles['testimonials-section-rating']}`}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className={`${styles['testimonials-section-star']}`}>
                        ★
                        </span>
                    ))}
                    </div>
                </div>
                </div>
            ))}
            </div>

            <div className={`${styles['testimonials-section-dots']}`}>
            {testimonials.map((_, index) => (
                <button
                key={index}
                className={`${styles['testimonials-section-dot']} ${
                    index === activeIndex ? styles['testimonials-section-dot-active'] : ""
                }`}
                onClick={() => scrollToIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                />
            ))}
            </div>
        </div>
        </section>
    );
}

import styles from "./Testimonials.module.css";
import Button from "../UI/Button/Button";

export default Testimonials;