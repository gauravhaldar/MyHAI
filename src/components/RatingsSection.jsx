import './RatingsSection.css';

const platforms = [
  { logo: 'https://thefreewebsiteguys.com/wp-content/uploads/2022/11/logo1-1.png', name: 'Clutch', rating: '5.0 out of 5' },
  { logo: 'https://thefreewebsiteguys.com/wp-content/uploads/2022/11/logo2-1.png', name: 'Trustpilot', rating: '4.9 out of 5' },
  { logo: 'https://thefreewebsiteguys.com/wp-content/uploads/2022/11/logo3-1.png', name: 'G2', rating: '5.0 out of 5' },
  { logo: 'https://thefreewebsiteguys.com/wp-content/uploads/2022/11/logo4-1.png', name: 'Capterra', rating: '4.8 out of 5' },
];

export default function RatingsSection() {
  return (
    <section className="ratings" id="ratings">
      <div className="container">
        <h2 className="ratings__heading">
          Rated higher <strong>than Wix and Squarespace.</strong>
        </h2>
        <p className="ratings__subtitle">
          With thousands of five-star reviews from clients on Clutch, G2, Facebook,
          TrustPilot, MyHAI is the highest rated free-website service
          in the world. (Not sure? Just google us.)
        </p>
        <div className="ratings__grid">
          {platforms.map((p, i) => (
            <div className="ratings__item" key={i}>
              <img src={p.logo} alt={p.name} className="ratings__logo" loading="lazy" />
              <div className="stars">
                <i>★</i><i>★</i><i>★</i><i>★</i><i>★</i>
              </div>
              <p className="ratings__score">{p.rating}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
