import { useState } from 'react';
import './FaqSection.css';

const faqs = [
  {
    question: 'What platform do you use to build websites?',
    answer: 'We use WordPress, the most popular content management system for websites. In fact, over 40% of the internet runs on WordPress. In our opinion, it’s the best platform to use for the vast majority of websites. It is free to use, highly customizable, and incredibly easy to edit once set up.'
  },
  {
    question: 'What kinds of websites do you build?',
    answer: 'We build clean, professional, and responsive websites as part of our website program. This includes business landing pages, corporate sites, personal portfolios, blogs, and local service sites. We don’t build highly complex web apps or custom e-commerce engines, but we cover the needs of 95% of small businesses.'
  },
  {
    question: 'Do I need to be technically savvy to launch a website?',
    answer: 'Nope, definitely not. We walk you through everything you’ll need to do in a clear, step-by-step way. Plus, once we’re done working on your website, we’ll send you a detailed training video showing how to make updates yourself (so you don’t need to hire a developer).'
  },
  {
    question: 'How does the website design process work?',
    answer: 'To ensure your website looks premium and modern, we start with professional WordPress layouts tailored to your industry. We then customize the templates with your specific branding, colors, high-resolution media, custom layout modules, and copy to make it unique to your business.'
  },
  {
    question: 'How long will it take to build my website?',
    answer: 'Assuming you reply to our emails promptly and send your logo and copy, we aim for a completion time of no more than 2 to 3 weeks.'
  },
  {
    question: 'Will I have full control over my own website?',
    answer: 'Yes, 100%. Once we’re done building, you will receive full administrator ownership. We do not host your website on our servers—it is hosted on your own server, meaning you own all files, domains, and data completely.'
  },
  {
    question: 'Will I be able to make edits to my own website?',
    answer: 'Absolutely. When we hand over the website, we’ll provide you with a video tutorial walking you through how to edit text, replace images, and add new pages or blog posts easily.'
  },
  {
    question: 'Do I need to have my website content all ready?',
    answer: 'No, there’s no rush. We can build your website using temporary placeholder text and stock images. Once launched, you can change and update your content whenever you are ready.'
  },
  {
    question: 'Do you provide long-term support for my website?',
    answer: 'We don’t provide long-term support for free, no. However, WordPress is highly stable and user-friendly, and we will show you how to easily back up your site and perform updates yourself.'
  }
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <h2 className="faq-section__heading">
          Frequently <strong>Asked Questions</strong>
        </h2>
        <p className="faq-section__subtitle">
          Got questions? We've got answers. Here are some of the most common questions we get asked:
        </p>
        
        <div className="faq-section__list">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                className={`faq-section__item ${isOpen ? 'faq-section__item--open' : ''}`} 
                key={index}
              >
                <button 
                  className="faq-section__question"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-section__question-text">{faq.question}</span>
                  <span className="faq-section__icon">{isOpen ? '−' : '+'}</span>
                </button>
                <div className="faq-section__answer-wrapper">
                  <div className="faq-section__answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
