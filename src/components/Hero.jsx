import { useState, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Hero.css';
import haiLogo from '../assets/hailogo.png';
import leftLaurel from '../assets/left-gold-laurel.webp';
import rightLaurel from '../assets/right-gold-laurel.webp';
import clutchGold from '../assets/clutch-gold.webp';
import slide1 from '../assets/pro1-tinified.webp';
import slide2 from '../assets/pro2-tinified.webp';
import slide3 from '../assets/pro3-tinified.webp';
import slide4 from '../assets/pro4-tinified.webp';
import slide5 from '../assets/pro5-tinified.webp';

const slides = [
  { src: slide1, alt: 'Professional website example 1' },
  { src: slide2, alt: 'Professional website example 2' },
  { src: slide3, alt: 'Femmepats website example' },
  { src: slide4, alt: 'Optimate website example' },
  { src: slide5, alt: 'Majik of Life website example' },
];

export default function Hero({ onApplyClick }) {
  return (
    <section className="hero" id="hero">
      <div className="hero__inner">
        {/* Logo */}
        <div className="hero__logo">
          <a href="#" className="myhai-logo">
            <img src={haiLogo} alt="MyHAI Logo" className="myhai-logo-img" />
            {/* <span className="myhai-logo__text">MY<span>HAI</span></span> */}
          </a>
        </div>

        {/* Rating Badge */}
        <div className="hero__rating">
          <img
            src={leftLaurel}
            alt=""
            className="hero__laurel"
            width="35"
            fetchpriority="high"
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
                  src={clutchGold}
                  alt="Clutch"
                  width="40"
                  className="hero__clutch-logo"
                  fetchpriority="high"
                />
              </a>
            </div>
          </div>
          <img
            src={rightLaurel}
            alt=""
            className="hero__laurel"
            width="35"
            fetchpriority="high"
          />
        </div>

        {/* Heading */}
        <h1 className="hero__title">
          Get a professional website <span className="hero__highlight">for free</span> and
          <br />
          {" "}jumpstart your Indian business.
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
