import './Footer.css';
import haiLogo from '../assets/hailogo.png';

const quickLinks = [
  { label: 'Apply', href: '#hero' },
  { label: 'Example Sites', href: '#portfolio' },
  { label: 'FAQ', href: '#faq' },
];

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/web3.hai',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gaurav-haldar-5a912022b/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    ),
  },
];

export default function Footer({ onPrivacyClick }) {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand Column */}
          <div className="footer__brand">
            <a href="#" className="myhai-logo" style={{ marginBottom: '20px' }}>
              <img src={haiLogo} alt="MyHAI Logo" className="myhai-logo-img" />
              {/* <span className="myhai-logo__text">MY<span>HAI</span></span> */}
            </a>
            <p className="footer__tagline">
              We build professional websites. The highest rated website-building service in India.
            </p>
            <div className="footer__social">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__links">
            <h4 className="footer__links-title">Quick Links</h4>
            <ul>
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
              <li>
                <button 
                  onClick={onPrivacyClick}
                  className="footer__privacy-btn"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer__contact">
            <h4 className="footer__links-title">Contact Us</h4>
            <ul>
              <li>
                <span className="footer__contact-label" style={{ display: 'block', fontWeight: '600', color: 'var(--color-white)', fontSize: '14px', marginBottom: '4px' }}>Address:</span>
                <span style={{ display: 'block', lineHeight: '1.4', color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px' }}>
                  Vyalikaval HBCS Layout,<br />
                  Nagavara, Bengaluru,<br />
                  Karnataka 560045
                </span>
              </li>
              <li style={{ marginTop: '10px' }}>
                <span className="footer__contact-label" style={{ display: 'block', fontWeight: '600', color: 'var(--color-white)', fontSize: '14px', marginBottom: '4px' }}>Phone:</span>
                <a href="tel:+918105320657">+91 81053 20657</a>
              </li>
              <li style={{ marginTop: '10px' }}>
                <span className="footer__contact-label" style={{ display: 'block', fontWeight: '600', color: 'var(--color-white)', fontSize: '14px', marginBottom: '4px' }}>Email:</span>
                <a href="mailto:info@myhai.in" style={{ display: 'block' }}>info@myhai.in</a>
                <a href="mailto:haldarainait@gmail.com" style={{ display: 'block', marginTop: '2px' }}>haldarainait@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
          <p>© 2026 Haldar AI and IT Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
