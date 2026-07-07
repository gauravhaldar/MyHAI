import './SecretSection.css';

export default function SecretSection({ onApplyClick }) {
  return (
    <section className="secret" id="secret">
      <div className="container">
        <div className="secret__content">
          <h2 className="secret__heading">
            We're going <strong>to let you in on a huge secret...</strong>
          </h2>
          <div className="secret__text">
            <p>
              If you don't have a professional website, your business is more than 80%{' '}
              <u>less</u> likely to succeed.
            </p>
            <p>
              A Facebook or Instagram page just isn't going to cut it. On average,
              businesses without a professional website fail at 8x the normal rate.
            </p>
          </div>
          <button className="btn-primary" onClick={onApplyClick} id="secret-apply-btn">
            Apply to get your website built by professionals — for free!
          </button>
        </div>
      </div>
    </section>
  );
}
