import { useState, useEffect, useRef } from 'react';
import './ApplicationForm.css';
import haiLogo from '../assets/hailogo.png';
import { countries } from './countries';

const testimonials = [
  {
    stars: '★★★★★',
    date: 'Jan 26, 2021',
    source: 'G2',
    quote: '"Great communication and honest agency"',
    description: 'Describe the project or task the provider helped with: Great agency and would absolutely work with them again. I got my website with everything in the backend done, I asked also for some changes to the template we used and they did it pretty well! Sven has been the guy I\'ve been talking to and so far he has done an amazing job.'
  },
  {
    stars: '★★★★★',
    date: 'Jan 15, 2021',
    source: 'G2',
    quote: '"MYHAI Are The Real Deal"',
    description: 'Basic Divi website but they punched it up with great features. We have such a small budget and they helped us get a site structure up which is amazing. Team was extremely helpful and responsive throughout the entire process.'
  },
  {
    stars: '★★★★★',
    date: 'Jan 5, 2021',
    source: 'G2',
    quote: '"Best thing that ever happened to me in 2020!"',
    description: 'Describe the project or task the provider helped with: If you want a beautiful website done swiftly and with minimal work, MYHAI are the guys! What makes them stand out apart from their incredible work is their customer service.'
  },
  {
    stars: '★★★★★',
    date: 'Dec 02, 2020',
    source: 'G2',
    quote: '"Amazing team who made my website!"',
    description: 'Describe the project or task the provider helped with: I want to tell you guys a HUGE THANK YOU for all your work and help in building my website. You are very precious to me and I am sure to many other people who you helped as well. The day I found you guys just changed my life and now I am very happy to have my website built.'
  },
  {
    stars: '★★★★★',
    date: 'Jan 15, 2021',
    source: 'G2',
    quote: '"I was thrilled with my new website!"',
    description: 'Describe the project or task the provider helped with: MYHAI created an absolutely amazing wordpress site for my new business. I know nothing about coding or building a website, so my goal was exactly what they did-create the back end of my website so I could work on developing content.'
  }
];

export default function ApplicationForm({ onClose }) {
  const [step, setStep] = useState(1);
  const [projectDescription, setProjectDescription] = useState('');
  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [webHosting, setWebHosting] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Country selector state - Default to India (in)
  const defaultCountry = countries.find(c => c.flagClassCode === 'in') || countries[0];
  const [selectedCountry, setSelectedCountry] = useState(defaultCountry);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const textareaRef = useRef(null);
  const inputRef = useRef(null);
  const searchInputRef = useRef(null);

  // Auto-focus input fields on step changes
  useEffect(() => {
    if (step === 1 && textareaRef.current) {
      textareaRef.current.focus();
    } else if (step === 4 && isDropdownOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    } else if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [step, isDropdownOpen]);

  const handleNext = () => {
    setError('');
    
    if (step === 1) {
      if (!projectDescription.trim()) {
        setError('Please describe your website.');
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!firstName.trim()) {
        setError('Please enter your first name.');
        return;
      }
      setStep(3);
    } else if (step === 3) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailAddress.trim() || !emailPattern.test(emailAddress)) {
        setError('Please enter a valid email address.');
        return;
      }
      setStep(4);
    } else if (step === 4) {
      setStep(5);
    }
  };

  const handlePrev = () => {
    setError('');
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async (hostingVal) => {
    setWebHosting(hostingVal);
    setIsSubmitting(true);
    setError('');

    // Generate random UUID for sessionInstanceUUID
    const sessionInstanceUUID = 'D-' + Math.random().toString(36).substring(2, 15).toUpperCase() + '-' + new Date().getTime();

    const payload = {
      utm_source: '',
      utm_medium: '',
      utm_campaign: '',
      utm_term: '',
      utm_content: '',
      fbclid: '',
      gclid: '',
      affiliate_id: '',
      page_url: window.location.href,
      language: 'en',
      sessionInstanceUUID,
      project_description: projectDescription,
      first_name: firstName,
      email_address: emailAddress,
      phone_number: phoneNumber,
      country_code: selectedCountry.phoneCode,
      web_hosting: hostingVal,
      completed: true
    };

    try {
      const response = await fetch('https://fwg-apply-form-api.vercel.app/api/applyform/paste', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ application: payload })
      });

      if (response.ok) {
        setStep(6); // Thank You step
      } else {
        setError('Something went wrong during submission. Please try again.');
      }
    } catch (err) {
      setError('Connection error. Please check your internet connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && step < 5) {
      if (step === 1 && e.shiftKey) {
        return;
      }
      e.preventDefault();
      handleNext();
    }
  };

  const filteredCountries = countries.filter(c =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.phoneCode.includes(searchQuery)
  );

  const currentTestimonial = testimonials[Math.min(step - 1, 4)];

  if (step === 6) {
    return (
      <div className="app-form__success">
        <div className="app-form__success-logo">
          <img src={haiLogo} alt="MyHAI Logo" className="myhai-logo-img" style={{ height: '60px', width: 'auto' }} />
          <span className="myhai-logo__text" style={{ fontSize: '36px', color: 'var(--color-dark)' }}>MY<span>HAI</span></span>
        </div>
        <div className="app-form__success-icon">✓</div>
        <h2>Thank you, {firstName}!</h2>
        <p>Your website application has been submitted successfully.</p>
        <p>Our team will review it and reach out to you within 24 hours.</p>
        <button className="btn-primary" onClick={onClose} style={{ marginTop: '24px' }}>Close</button>
      </div>
    );
  }

  return (
    <div className="app-form">
      {/* Left Column: Form Section */}
      <div className="app-form__left">
        <div className="app-form__content">
          
          {step === 1 && (
            <div className="app-form__step-container">
              <div className="app-form__question-header">
                <span className="app-form__step-number">1 →</span>
                <span className="app-form__question-text">Describe the website you want to build. <span className="app-form__required">*</span></span>
              </div>
              <textarea
                ref={textareaRef}
                className="app-form__textarea"
                placeholder="Type your answer here..."
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                onKeyDown={handleKeyDown}
                rows={2}
              />
              <span className="app-form__hint">Press <strong>Enter</strong> or click OK. Use <strong>Shift + Enter</strong> for line break.</span>
            </div>
          )}

          {step === 2 && (
            <div className="app-form__step-container">
              <div className="app-form__question-header">
                <span className="app-form__step-number">2 →</span>
                <span className="app-form__question-text">What is your first name? <span className="app-form__required">*</span></span>
              </div>
              <input
                ref={inputRef}
                type="text"
                className="app-form__input"
                placeholder="Type your first name..."
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <span className="app-form__hint">Press <strong>Enter</strong> or click OK.</span>
            </div>
          )}

          {step === 3 && (
            <div className="app-form__step-container">
              <div className="app-form__question-header">
                <span className="app-form__step-number">3 →</span>
                <span className="app-form__question-text">What is your email? <span className="app-form__required">*</span></span>
              </div>
              <p className="app-form__question-sub">
                We protect your privacy and will never spam you. 🔒
              </p>
              <input
                ref={inputRef}
                type="email"
                className="app-form__input"
                placeholder="Type your email address..."
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <span className="app-form__hint">Press <strong>Enter</strong> or click OK.</span>
            </div>
          )}

          {step === 4 && (
            <div className="app-form__step-container">
              <div className="app-form__question-header">
                <span className="app-form__step-number">4 →</span>
                <span className="app-form__question-text">(Optional but can greatly improve your chances) - Phone number</span>
              </div>
              <p className="app-form__question-sub">
                If we're on the fence about your application, we may reach out via Whatsapp to talk through various aspects of your website proposal and to see if you're a fit for us.
              </p>
              
              <div className="app-form__phone-wrapper">
                <button
                  type="button"
                  className="app-form__flag-trigger"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <img
                    src={`https://flagcdn.com/w40/${selectedCountry.flagClassCode}.png`}
                    alt={selectedCountry.name}
                    className="app-form__selected-flag"
                  />
                  <span className="app-form__arrow">▼</span>
                </button>
                
                <div className="app-form__phone-separator" />
                
                <input
                  ref={inputRef}
                  type="text"
                  className="app-form__phone-input"
                  placeholder={selectedCountry.format || 'e.g. 89879 87878'}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  onKeyDown={handleKeyDown}
                />

                {isDropdownOpen && (
                  <>
                    <div className="app-form__dropdown-backdrop" onClick={() => setIsDropdownOpen(false)} />
                    <div className="app-form__dropdown-menu">
                      <input
                        ref={searchInputRef}
                        type="text"
                        className="app-form__country-search"
                        placeholder="Search Country..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                      />
                      <div className="app-form__country-list">
                        {filteredCountries.map((c) => (
                          <button
                            type="button"
                            key={c.name}
                            className={`app-form__country-option ${selectedCountry.flagClassCode === c.flagClassCode ? 'app-form__country-option--selected' : ''}`}
                            onClick={() => {
                              setSelectedCountry(c);
                              setIsDropdownOpen(false);
                              setSearchQuery('');
                            }}
                          >
                            <img
                              src={`https://flagcdn.com/w20/${c.flagClassCode}.png`}
                              alt={c.name}
                              className="app-form__dropdown-flag"
                            />
                            <span className="app-form__dropdown-country-name">{c.name}</span>
                            <span className="app-form__dropdown-country-code">(+{c.phoneCode})</span>
                          </button>
                        ))}
                        {filteredCountries.length === 0 && (
                          <div className="app-form__no-countries">No countries found</div>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
              
              <span className="app-form__hint">Press <strong>Enter</strong> or click OK.</span>
            </div>
          )}

          {step === 5 && (
            <div className="app-form__step-container">
              <div className="app-form__question-header">
                <span className="app-form__step-number">5 →</span>
                <span className="app-form__question-text">Do you have web hosting already? <span className="app-form__required">*</span></span>
              </div>
              <div className="app-form__hosting-options">
                <button
                  className="app-form__option-btn"
                  onClick={() => handleSubmit('no')}
                  disabled={isSubmitting}
                >
                  <span className="app-form__option-letter">A</span>
                  <span className="app-form__option-text">No, I don't</span>
                </button>
                <button
                  className="app-form__option-btn"
                  onClick={() => handleSubmit('yes')}
                  disabled={isSubmitting}
                >
                  <span className="app-form__option-letter">B</span>
                  <span className="app-form__option-text">Yes, I have web hosting</span>
                </button>
              </div>
              {isSubmitting && <div className="app-form__loading">Submitting your application...</div>}
            </div>
          )}

          {error && <div className="app-form__error-message">⚠️ {error}</div>}

          {step < 5 && (
            <div className="app-form__actions">
              <button className="btn-primary app-form__ok-btn" onClick={handleNext}>
                OK ✓
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Middle Vertical Separator */}
      <div className="app-form__middle-separator" />

      {/* Right Column: Testimonials Section */}
      <div className="app-form__right">
        {/* Floating MYHAI Branding inside right section */}
        <div className="app-form__right-branding">
          <img src={haiLogo} alt="MyHAI Logo" className="app-form__right-logo" />
          <span className="myhai-logo__text">MY<span>HAI</span></span>
        </div>

        {/* Testimonial Content */}
        <div className="app-form__testimonial-wrapper">
          <div className="app-form__testimonial-stars">{currentTestimonial.stars}</div>
          <div className="app-form__testimonial-meta">
            <span className="app-form__testimonial-date">{currentTestimonial.date}</span>
            <span className="app-form__testimonial-badge">
              <span className="g2-icon-text">G</span>
              <span className="g2-number-text">2</span>
            </span>
          </div>
          <h3 className="app-form__testimonial-quote">{currentTestimonial.quote}</h3>
          <p className="app-form__testimonial-description">{currentTestimonial.description}</p>
        </div>
      </div>

      {/* Yellow Navigation Buttons (Bottom Right) */}
      <div className="app-form__yellow-nav">
        <button
          className="app-form__yellow-nav-btn"
          onClick={handlePrev}
          disabled={step === 1 || isSubmitting}
          aria-label="Previous Step"
        >
          ▲
        </button>
        <button
          className="app-form__yellow-nav-btn"
          onClick={handleNext}
          disabled={step === 5 || isSubmitting}
          aria-label="Next Step"
        >
          ▼
        </button>
      </div>
    </div>
  );
}
