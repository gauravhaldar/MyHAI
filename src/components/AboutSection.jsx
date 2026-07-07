import './AboutSection.css';
import optimateDesktop from '../assets/optimate-desktop.png';
import topRatedBadge from '../assets/top-rated-badge.png';

export default function AboutSection({ onApplyClick }) {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__grid">
          {/* Image Column */}
          <div className="about__image-col">
            <div className="about__image-wrapper">
              <img
                src={optimateDesktop}
                alt="Professional website example"
                className="about__screenshot"
                loading="lazy"
              />
              <div className="about__badge">
                <img
                  src={topRatedBadge}
                  alt="Award badge - 5.0 out of 5"
                  className="about__badge-img"
                  loading="lazy"
                />
                <p className="about__badge-text">5.0 out of 5</p>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="about__text-col">
            <h4 className="about__eyebrow">Join 30,000+ entrepreneurs</h4>
            <h2 className="about__heading">
              who've <strong>received a stunning <br />website for free.</strong>
            </h2>
            <div className="about__description">
              <p>
                With a professional website for your business, potential clients are
                76% more likely to buy from you.
              </p>
              <p>
                That's right. Having a website is absolutely critical to getting people
                to trust you.
              </p>
              <p>
                But hiring a web agency to build your website can run you anywhere from
                ₹15,000 to ₹50,000.
              </p>
              <p>
                That's why we're here. As part of our free-website program, we've
                helped thousands of entrepreneurs since 2019 to get a professional
                website for their business—for free.
              </p>
            </div>
            <button className="btn-primary" onClick={onApplyClick} id="about-apply-btn">
              Apply in 2 minutes
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
