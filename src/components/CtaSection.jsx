import './CtaSection.css';

export default function CtaSection({ onApplyClick }) {
  return (
    <section className="cta-section" id="cta-section">
      <div className="cta-section__inner">
        <div className="cta-section__content">
          <h2 className="cta-section__heading">
            Ready to get <strong>your free website?</strong>
          </h2>
          <p className="cta-section__text">
            Join 30,000+ entrepreneurs, including thousands in India, who've received a stunning website for free.
            Apply now — it only takes 2 minutes!
          </p>
          <button className="btn-primary btn-primary--light" onClick={onApplyClick} id="cta-apply-btn">
            Apply in 2 minutes
          </button>
        </div>
      </div>
    </section>
  );
}
