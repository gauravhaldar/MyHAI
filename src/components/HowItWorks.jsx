import './HowItWorks.css';

const steps = [
  {
    number: '01',
    title: 'Apply',
    description: 'Fill out our quick 2-minute application form. Tell us about your business, your goals, and the type of website you need.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
        <path d="M9 12h6"></path>
        <path d="M9 16h6"></path>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Get Matched',
    description: 'Our team will review your application and match you with a professional web designer who specializes in your industry.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m18 8 2 2c.4.4.4 1 0 1.4L13.8 17.6a3 3 0 0 1-4.2 0L8.2 16.2a3 3 0 0 1 0-4.2L14.4 5.8a1 1 0 0 1 1.4 0L18 8Z"></path>
        <path d="M13 11l-3.5-3.5a1 1 0 0 0-1.4 0L5 10.6a3 3 0 0 0 0 4.2L6.4 16.2a3 3 0 0 0 4.2 0L13 13.8a1 1 0 0 0 0-1.4Z"></path>
        <path d="m2 18 3-3"></path>
        <path d="m22 6-3 3"></path>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Design & Build',
    description: 'Your designer will create a custom website tailored to your brand. You\'ll have the opportunity to provide feedback along the way.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.7255 3.09032 17.1962 4.85857 19C5.03345 19.1749 5.0999 19.4357 5.0255 19.6678C4.78347 20.4223 4.88729 21.237 5.34015 21.8408C5.55288 22.1245 5.89278 22 6.24647 22H12Z"></path>
        <circle cx="7.5" cy="10.5" r="1.5" fill="currentColor"></circle>
        <circle cx="11.5" cy="7.5" r="1.5" fill="currentColor"></circle>
        <circle cx="16.5" cy="9.5" r="1.5" fill="currentColor"></circle>
        <circle cx="15.5" cy="14.5" r="1.5" fill="currentColor"></circle>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Launch!',
    description: 'Once you\'re happy with your new website, we\'ll launch it for the world to see. Start attracting new customers immediately!',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5"></path>
        <path d="M12 18h-3l-4-4v-3c0-4 3-7 8-8s8 4 8 8-3 8-8 8Z"></path>
        <path d="m12 12-4 4"></path>
        <path d="m16 8-4 4"></path>
      </svg>
    ),
  },
];

export default function HowItWorks({ onApplyClick }) {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <h2 className="how-it-works__heading">
          How it <strong>works</strong>
        </h2>
        <p className="how-it-works__subtitle">
          Getting your free professional website is simple. Here's how our process works:
        </p>
        <div className="how-it-works__grid">
          {steps.map((step, i) => (
            <div className="how-it-works__step" key={i}>
              <div className="how-it-works__icon">{step.icon}</div>
              <div className="how-it-works__number">{step.number}</div>
              <h3 className="how-it-works__step-title">{step.title}</h3>
              <p className="how-it-works__description">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="how-it-works__cta">
          <button className="btn-primary" onClick={onApplyClick} id="how-apply-btn">
            Apply in 2 minutes
          </button>
        </div>
      </div>
    </section>
  );
}
