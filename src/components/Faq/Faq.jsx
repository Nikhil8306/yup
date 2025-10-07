import React from "react";
import "./Faq.css"; // local css just for this component

const FAQ_DATA = [
  {
    question: "How does Referral Source work?",
    answer:
      "Tell us about your painting project, and we’ll match you with trusted local painters. You’ll get multiple bids, compare them easily, and choose the pro that’s right for you.",
  },
  {
    question: "What does it cost?",
    answer: "It’s completely free to use for homeowners.",
  },
  {
    question: "How does Referral Source compare to LSAs and Lead Engines?",
    answer:
      "Unlike LSAs or lead engines, you’re not competing for low-quality leads — we focus on vetted pros and real matches.",
  },
  {
    question: "Does this make me an employee?",
    answer:
      "No. You remain fully independent — we just help connect you with clients.",
  },
  {
    question: "Do I need to be licensed?",
    answer:
      "Yes, depending on your local regulations, a valid license may be required.",
  },
  {
    question: "Can I try it before I commit?",
    answer:
      "Of course. You can test our referral system before making any commitments.",
  },
];

export default function RsFaq() {
  const [openIndex, setOpenIndex] = React.useState(-1);

  const onToggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <section className="rsFaq" aria-label="Frequently Asked Questions">
      <h2 className="rsFaqTitle">Frequently Asked Questions</h2>

      <div className="rsFaqBox">
        <ul className="rsFaqList">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = idx === openIndex;
            return (
              <li key={idx} className="rsFaqItem">
                <button
                  className="rsFaqQuestion"
                  aria-expanded={isOpen}
                  aria-controls={`rs-faq-panel-${idx}`}
                  onClick={() => onToggle(idx)}
                  type="button"
                >
                  <span>{item.question}</span>
                  <span className="rsFaqIcon" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`rs-faq-panel-${idx}`}
                    role="region"
                    className="rsFaqAnswer"
                  >
                    {item.answer}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
