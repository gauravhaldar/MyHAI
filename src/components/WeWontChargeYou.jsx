import './WeWontChargeYou.css';

export default function WeWontChargeYou({ onApplyClick }) {
  return (
    <section className="wewontcharge" id="wewontcharge">
      <div className="container">
        <div className="wewontcharge__grid">
          {/* Left Column: Text & CTA */}
          <div className="wewontcharge__text-col">
            <h2 className="wewontcharge__heading">
              WE <span className="wewontcharge__highlight">WON'T</span> CHARGE YOU
            </h2>
            <div className="wewontcharge__description">
              <p>
                We build people professional websites <span className="wewontcharge__underline">for free</span> that other agencies charge thousands of rupees for.
              </p>
              <p>
                The reason we do this is simple: it's a great way for us to build connections with business owners who might hire us for larger paid projects as their companies grow.
              </p>
              <p>
                More than 95% of the people we've built websites for have been happy with the results, and about 18% go on to hire us for additional paid projects or recommend friends who do.
              </p>
            </div>
            <div className="wewontcharge__cta-wrapper">
              <button
                className="btn-primary"
                onClick={onApplyClick}
                id="wewontcharge-apply-btn"
              >
                Apply in 2 minutes
              </button>
            </div>
          </div>

          {/* Right Column: Order Slip Visual */}
          <div className="wewontcharge__visual-col">
            <div className="wewontcharge__circles-wrapper">
              {/* Concentric Dashed Background Circles */}
              <div className="wewontcharge__circle wewontcharge__circle--outer"></div>
              <div className="wewontcharge__circle wewontcharge__circle--inner"></div>

              {/* Top Left Badge: Happy Clients */}
              <div className="wewontcharge__badge wewontcharge__badge--clients">
                <div className="wewontcharge__badge-num">97.4%</div>
                <div className="wewontcharge__badge-label">
                  Percent of clients happy with results
                </div>
              </div>

              {/* Main Order Slip Card */}
              <div className="wewontcharge__order-slip">
                <div className="wewontcharge__order-header">
                  <span className="wewontcharge__order-title">YOUR ORDER</span>
                  <span className="wewontcharge__order-price-label">PRICE</span>
                </div>
                
                <div className="wewontcharge__order-row">
                  <span className="wewontcharge__item-name">Website Development:</span>
                  <span className="wewontcharge__item-price">₹15,000</span>
                </div>
                
                <div className="wewontcharge__order-row">
                  <span className="wewontcharge__item-name">Website Optimization:</span>
                  <span className="wewontcharge__item-price">₹5,000</span>
                </div>
                
                <div className="wewontcharge__order-row wewontcharge__order-row--subtotal">
                  <span className="wewontcharge__item-name">Subtotal:</span>
                  <span className="wewontcharge__item-price">₹20,000</span>
                </div>
                
                <div className="wewontcharge__order-row wewontcharge__order-row--offer">
                  <span className="wewontcharge__item-name">Free site offer:</span>
                  <span className="wewontcharge__item-price">-₹20,000</span>
                </div>
                
                <div className="wewontcharge__order-row wewontcharge__order-row--total">
                  <span className="wewontcharge__total-label">Total</span>
                  <span className="wewontcharge__total-price">₹0</span>
                </div>
              </div>

              {/* Bottom Right Badge: Clutch Rating */}
              <div className="wewontcharge__badge wewontcharge__badge--clutch">
                <span className="wewontcharge__clutch-logo-text">Clutch</span>
                <div className="wewontcharge__clutch-stars">
                  ★★★★★
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
