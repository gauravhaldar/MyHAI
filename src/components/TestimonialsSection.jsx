import './TestimonialsSection.css';
import trustpilotIcon from '../assets/third-testimonial-icon.png';

const reviews = [
  {
    text: "MyHAI built an amazing website for my business. They were professional, responsive, and really listened to what I wanted. I couldn't believe it was free!",
    name: 'Sarah M.',
    source: 'clutch',
    offset: 0,
  },
  {
    text: "I was skeptical at first but these guys delivered beyond my expectations. My website looks like I paid thousands for it. Highly recommend!",
    name: 'James R.',
    source: 'clutch',
    offset: 60,
  },
  {
    text: "Outstanding service from start to finish. They took my vision and turned it into a beautiful, functional website. The best part? It was completely free!",
    name: 'Maria L.',
    source: 'facebook',
    offset: 100,
  },
  {
    text: "I've worked with paid agencies before and MyHAI did a better job. Their attention to detail and design skills are top-notch.",
    name: 'David K.',
    source: 'trustpilot',
    offset: 60,
  },
  {
    text: "From the initial consultation to the final delivery, everything was smooth and professional. My new website has already brought in new customers!",
    name: 'Emily W.',
    source: 'clutch',
    offset: 0,
  },
  {
    text: "These guys are the real deal. They built me a stunning website that perfectly represents my brand. I can't thank them enough for their generosity.",
    name: 'Michael T.',
    source: 'facebook',
    offset: 45,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="testimonials__grid">
          {reviews.map((review, i) => (
            <div
              className="testimonials__card"
              key={i}
              style={{ '--offset': `${review.offset}px` }}
            >
              <div className="stars" style={{ fontSize: '30px' }}>
                <i>★</i><i>★</i><i>★</i><i>★</i><i>★</i>
              </div>
              <p className="testimonials__text">{review.text}</p>
              <div className="testimonials__author">
                <div className="testimonials__info">
                  <span className="testimonials__name">{review.name}</span>
                  {review.source === 'clutch' && (
                    <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#ff4900', letterSpacing: '0.05em' }}>clutch</span>
                  )}
                  {review.source === 'facebook' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#1877F2" className="testimonials__source-icon">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  )}
                  {review.source === 'trustpilot' && (
                    <img
                      src={trustpilotIcon}
                      alt="Trustpilot"
                      className="testimonials__source-icon"
                      loading="lazy"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
