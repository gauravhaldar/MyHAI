import './LogoStrip.css';

const logos = [
  { src: 'https://thefreewebsiteguys.com/wp-content/uploads/2022/11/logo1.png', alt: 'Partner logo 1', w: 124 },
  { src: 'https://thefreewebsiteguys.com/wp-content/uploads/2022/11/logo2.png', alt: 'Partner logo 2', w: 100 },
  { src: 'https://thefreewebsiteguys.com/wp-content/uploads/2022/11/logo3.png', alt: 'Partner logo 3', w: 112 },
  { src: 'https://thefreewebsiteguys.com/wp-content/uploads/2022/11/logo4.png', alt: 'Partner logo 4', w: 65 },
  { src: 'https://thefreewebsiteguys.com/wp-content/uploads/2022/11/logo5.png', alt: 'Partner logo 5', w: 52 },
  { src: 'https://thefreewebsiteguys.com/wp-content/uploads/2022/11/logo6.png', alt: 'Partner logo 6', w: 166 },
];

export default function LogoStrip() {
  return (
    <section className="logo-strip" id="logo-strip">
      <div className="container">
        <h3 className="logo-strip__title">30,000+ websites built</h3>
        <div className="logo-strip__grid">
          {logos.map((logo, i) => (
            <div className="logo-strip__item" key={i}>
              <img src={logo.src} alt={logo.alt} width={logo.w} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
