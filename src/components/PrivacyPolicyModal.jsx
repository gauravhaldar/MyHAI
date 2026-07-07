import { useEffect, useCallback } from 'react';
import './PrivacyPolicyModal.css';

export default function PrivacyPolicyModal({ isOpen, onClose }) {
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div className="policy-modal-overlay" onClick={onClose}>
      <div className="policy-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="policy-modal-close" onClick={onClose} aria-label="Close modal">
          ×
        </button>
        
        <div className="policy-modal-body">
          <h1>Privacy Policy</h1>
          <p className="policy-modal-meta">Last updated: January 2026</p>
          
          <p>
            At <strong>Haldar AI</strong> (operating as <strong>MYHAI</strong>), accessible from{' '}
            <a href="https://www.myhai.in/">https://www.myhai.in/</a>, we take your privacy seriously. This Privacy
            Policy document outlines the types of personal information collected, how we use it, and your rights
            related to that data.
          </p>
          
          <p>
            By using our website or interacting with our services, you consent to the practices described in this
            Privacy Policy.
          </p>

          <h2>1. Scope</h2>
          <p>
            This Privacy Policy applies to all personal data collected through our website, contact forms,
            application forms, and associated online tools. It does not apply to any offline data collection or
            third-party platforms not directly controlled by Haldar AI.
          </p>

          <h2>2. Information We Collect</h2>
          <p>We may collect and process the following types of personal information:</p>
          <ul>
            <li>
              <strong>Contact Details:</strong> First name, email address, phone number, and mailing address.
            </li>
            <li>
              <strong>Application Information:</strong> Descriptions of the website you want to build, business names,
              target audience parameters, and web hosting status.
            </li>
            <li>
              <strong>Technical Logs:</strong> IP address, device specifications, browser configurations, session
              timestamps, pages visited, and referring URLs.
            </li>
            <li>
              <strong>Credentials:</strong> If provided by you, login credentials for hosting platforms, registrar panels,
              or WordPress dashboard accounts, to perform design and launch services. These credentials are saved
              securely in encrypted managers and are deleted post-completion.
            </li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use the collected information for purposes including:</p>
          <ul>
            <li>Reviewing and processing your free website application.</li>
            <li>Designing, customizing, building, and launching your WordPress website.</li>
            <li>Communicating updates, support status, and project milestones.</li>
            <li>Improving website experience, server security, and optimizing site speed.</li>
            <li>Preventing spam, bot submissions, and unauthorized server loads.</li>
            <li>Complying with regulatory obligations and legal frameworks.</li>
          </ul>

          <h2>4. Cookies and Analytical Tracking</h2>
          <p>
            We use cookies to save settings, preferences, and count page views. We integrate analytics dashboards (such
            as Google Analytics) to study demographic aggregates and site navigation paths. You can modify your
            browser controls to block or clear cookies at any time.
          </p>

          <h2>5. Third-Party Integrations</h2>
          <p>
            Some integrations embedded in our site may log request details under their respective privacy terms.
            Examples include flag icons, host systems, and database submission scripts.
          </p>

          <h2>6. Data Security & Storage</h2>
          <p>
            We employ modern encryption protocols (SSL/HTTPS) across all pages. Our data access is highly restricted
            to authorized engineers only, ensuring security against data loss or leaks.
          </p>

          <h2>7. Contact Us</h2>
          <p>
            If you have questions, complaints, or request deletion of your stored records, please reach out:
          </p>
          <div className="policy-modal-contact-card">
            <p><strong>Haldar AI (MYHAI)</strong></p>
            <p>Address: Vyalikaval HBCS Layout, Nagavara, Bengaluru, Karnataka 560045</p>
            <p>Email: <a href="mailto:info@myhai.in">info@myhai.in</a> / <a href="mailto:haldarainait@gmail.com">haldarainait@gmail.com</a></p>
            <p>Phone: +91 81053 20657</p>
          </div>
        </div>
      </div>
    </div>
  );
}
