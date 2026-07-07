import './TestimonialsSection.css';

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
                    <img
                      src="https://thefreewebsiteguys.com/wp-content/uploads/2023/01/clutch-icon.png"
                      alt="Clutch"
                      className="testimonials__source-icon"
                    />
                  )}
                  {review.source === 'facebook' && (
                    <img
                      src="https://thefreewebsiteguys.com/wp-content/uploads/2023/01/Facebook_f_logo_2019.svg-1.png"
                      alt="Facebook"
                      className="testimonials__source-icon testimonials__source-icon--fb"
                    />
                  )}
                  {review.source === 'trustpilot' && (
                    <img
                      src="https://thefreewebsiteguys.com/wp-content/uploads/2022/11/logo2-2.png"
                      alt="Trustpilot"
                      className="testimonials__source-icon"
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
