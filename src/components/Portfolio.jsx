import './Portfolio.css';
import ursulaDesktop from '../assets/ursula-desktop.png';
import decorezDesktop from '../assets/decorez-desktop.png';
import femmepatsLaptop from '../assets/femmepats-laptop.png';
import optimateLaptop from '../assets/optimate-laptop.png';

const examples = [
  {
    src: ursulaDesktop,
    alt: 'Ursula Wastian - Desktop website example',
    name: 'Ursula Wastian',
  },
  {
    src: decorezDesktop,
    alt: 'Decorez - Desktop website example',
    name: 'Decorez',
  },
  {
    src: femmepatsLaptop,
    alt: 'Femmepats - Laptop website example',
    name: 'Femmepats',
  },
  {
    src: optimateLaptop,
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
