import './Portfolio.css';

const examples = [
  {
    src: 'https://thefreewebsiteguys.com/wp-content/uploads/2023/02/Ursula-desktop-example.png',
    alt: 'Ursula Wastian - Desktop website example',
    name: 'Ursula Wastian',
  },
  {
    src: 'https://thefreewebsiteguys.com/wp-content/uploads/2023/02/Decorez-desktop-example.png',
    alt: 'Decorez - Desktop website example',
    name: 'Decorez',
  },
  {
    src: 'https://thefreewebsiteguys.com/wp-content/uploads/2023/02/Femmepats-laptop-example.png',
    alt: 'Femmepats - Laptop website example',
    name: 'Femmepats',
  },
  {
    src: 'https://thefreewebsiteguys.com/wp-content/uploads/2023/02/Optimate-laptop-example.png',
    alt: 'Optimate - Laptop website example',
    name: 'Optimate',
  },
];

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <h2 className="portfolio__heading">
          See <strong>example websites</strong>
        </h2>
        <p className="portfolio__subtitle">
          Take a look at some of the stunning websites we've built for entrepreneurs just like you.
        </p>
        <div className="portfolio__grid">
          {examples.map((item, i) => (
            <div className="portfolio__item" key={i}>
              <div className="portfolio__image-wrapper">
                <img src={item.src} alt={item.alt} loading="lazy" />
              </div>
              <p className="portfolio__name">{item.name}</p>
              <a href="#" className="portfolio__link">See full-size example →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
