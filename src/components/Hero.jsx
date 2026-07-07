import { useState, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Hero.css';

const slides = [
  { src: 'https://thefreewebsiteguys.com/wp-content/uploads/2025/09/pro1-tinified.webp', alt: 'Professional website example 1' },
  { src: 'https://thefreewebsiteguys.com/wp-content/uploads/2025/09/Screenshot-2023-02-12-171703-e1676244150164-tinified.webp', alt: 'Professional website example 2' },
  { src: 'https://thefreewebsiteguys.com/wp-content/uploads/2025/09/Femmepats-e1676071109294-tinified.webp', alt: 'Femmepats website example' },
  { src: 'https://thefreewebsiteguys.com/wp-content/uploads/2025/09/optimate.co_-e1676528979464-tinified.webp', alt: 'Optimate website example' },
  { src: 'https://thefreewebsiteguys.com/wp-content/uploads/2025/09/17-Majik-of-life-e1676071068148-tinified.webp', alt: 'Majik of Life website example' },
];

export default function Hero({ onApplyClick }) {
  return (
    <section className="hero" id="hero">
      <div className="hero__inner">
        {/* Logo */}
        <div className="hero__logo">
          <a href="#" className="myhai-logo">
            <span className="myhai-logo__text">My<span>HAI</span></span>
          </a>
        </div>

        {/* Rating Badge */}
        <div className="hero__rating">
          <img
            src="https://thefreewebsiteguys.com/wp-content/uploads/2025/09/left-gold-laurel-1.webp"
            alt=""
            className="hero__laurel"
            width="35"
          />
          <div className="hero__rating-content">
            <a
              href="https://clutch.co/web-developers?sort_by=NumberOfReviews"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__rating-link"
            >
              Rated #1 out of 48,000+ web agencies
            </a>
            <div className="hero__rating-stars">
              <a
                href="https://clutch.co/web-developers?sort_by=NumberOfReviews"
                target="_blank"
                rel="noopener noreferrer"
                className="hero__rating-link"
              >
                <span className="hero__star-icons">★★★★★</span>
                <span>5.0 out of 5</span>
              </a>
              <span className="hero__rating-divider">|</span>
              <a
                href="https://clutch.co/web-developers?sort_by=NumberOfReviews"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://thefreewebsiteguys.com/wp-content/uploads/2025/09/clutch.webp"
                  alt="Clutch"
                  width="40"
                  className="hero__clutch-logo"
                />
              </a>
            </div>
          </div>
          <img
            src="https://thefreewebsiteguys.com/wp-content/uploads/2025/09/right-gold-laurel-1.webp"
            alt=""
            className="hero__laurel"
            width="35"
          />
        </div>

        {/* Heading */}
        <h1 className="hero__title">
          Get a professional website <span className="hero__highlight">for free</span> and
          <br />
          jumpstart your Indian business.
        </h1>

        {/* CTA Button */}
        <div className="hero__cta">
          <button className="btn-primary" onClick={onApplyClick} id="hero-apply-btn">
            Apply in 2 minutes
          </button>
        </div>

        {/* Image Carousel */}
        <div className="hero__carousel">
          <Swiper
            modules={[Navigation]}
            navigation
            loop
            slidesPerView={1}
            speed={500}
            className="hero__swiper"
          >
            {slides.map((slide, i) => (
              <SwiperSlide key={i}>
                <img src={slide.src} alt={slide.alt} className="hero__slide-img" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
