import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const FAQ = () => {
  const faqs = [
    {
      question: "How quickly can I get staff?",
      answer: "We maintain a robust database of qualified professionals ready for fast placement. Typically, we can respond to urgent requests within hours."
    },
    {
      question: "What credentials do your professionals have?",
      answer: "Every professional undergoes a rigorous vetting process, including license verification, background checks, and skills assessments to ensure the highest standards."
    },
    {
      question: "Is the mobile app free to use?",
      answer: "Yes, our mobile app is free for healthcare professionals to download and use for finding shifts and managing their schedules."
    },
    {
      question: "What areas do you serve?",
      answer: "We currently provide staffing solutions across Pennsylvania and are rapidly expanding to serve adjacent regions."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <div className="faq-header container">
        <div className="badge blue-badge">Support</div>
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-subtitle">Find answers to common questions about our staffing services.</p>
      </div>

      <div className="faq-container container">
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <span>{faq.question}</span>
                <ChevronDown size={20} className="faq-icon" />
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
