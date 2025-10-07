import { useState, useRef, useEffect } from "react";
import "./Testimonials-section.css";

const testimonials = [
  {
    id: 1,
    quote:
      '"FM Flow had three solid leads on my calendar before the week was over."',
    name: "Marcus",
    location: "Phoenix, Arizona",
    avatar: "/professional-man.jpg",
    rating: 5,
  },
  {
    id: 2,
    quote:
      '"We tried everything - local ads, coaching, marketers - none of it worked. Referral Source actually delivers qualified paint jobs to my business."',
    name: "Robert",
    location: "Kissimmee, Florida",
    avatar: "/confident-businessman.png",
    rating: 5,
  },
  {
    id: 3,
    quote:
      '"I\'ve been able to automate my business, schedule my crews, and invoice all from inside the FM Flow app, freeing up more time to hike and fish with my kids."',
    name: "Corey",
    location: "Boise, Idaho",
    avatar: "/smiling-man.png",
    rating: 5,
  },
];

export default function TestimonialsSection() {
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
    <section className="testimonials-section-wrapper">
      <div className="testimonials-section-container">
        <div className="testimonials-section-header">
          <div className="testimonials-section-title-wrapper">
            <h2 className="testimonials-section-title">
              Real Painters. Real Results.
            </h2>
            <p className="testimonials-section-subtitle">
              What Members are Saying.
            </p>
          </div>
          <button className="testimonials-section-cta-button">
            Get Started
          </button>
        </div>

        <div
          className="testimonials-section-cards-container"
          ref={scrollContainerRef}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonials-section-card">
              <p className="testimonials-section-quote">{testimonial.quote}</p>

              <div className="testimonials-section-card-footer">
                <div className="testimonials-section-author">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="testimonials-section-avatar"
                  />
                  <div className="testimonials-section-author-info">
                    <p className="testimonials-section-author-name">
                      {testimonial.name}
                    </p>
                    <p className="testimonials-section-author-location">
                      {testimonial.location}
                    </p>
                  </div>
                </div>

                <div className="testimonials-section-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="testimonials-section-star">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-section-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`testimonials-section-dot ${
                index === activeIndex ? "testimonials-section-dot-active" : ""
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
