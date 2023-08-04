import React, { useState } from 'react';
import './FAQSection.css';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQSection = () => {
  const [activePanel, setActivePanel] = useState(null);

  const togglePanel = (panelIndex) => {
    setActivePanel((prevPanel) => (prevPanel === panelIndex ? null : panelIndex));
  };

  const faqData = [
    {
      question: 'What is Cloud Hosting?',
      answer:
        "Cloud hosting refers to a type of web hosting service that utilizes multiple interconnected servers to distribute resources and handle website or application hosting. In cloud hosting, your website or application is not tied to a single physical server but is instead hosted on a virtual infrastructure that spans across multiple servers and data centers. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      question: 'Does Shared Web Hosting include Email Hosting as well?',
      answer:
        "Yes, shared web hosting often includes email hosting as part of the package. Email hosting allows you to create and manage email accounts associated with your domain name, enabling you to have professional-looking email addresses (e.g., yourname@yourdomain.com)...",
    },
    {
      question: 'Is an upgrade possible from my current Linux Shared Hosting Plan?',
      answer:
        "Yes, it is usually possible to upgrade your current Linux shared hosting plan. Shared hosting providers often offer different hosting plans with varying resource allocations and features to cater to different needs and budgets. If you find that your current plan no longer meets your requirements, upgrading to a higher-tier plan can provide you with additional resources and capabilities.",
    },
    {
      question: 'Is there any money back guarantee with the Linux Web Hosting services?',
      answer:
        'Many Linux web hosting providers offer a money-back guarantee as part of their service. The specific details and terms of the money-back guarantee can vary among hosting providers so its important to review the hosting providers terms and conditions or contact their customer support for precise information..'
    },
  ];

  return (
    <div className='acc-parent'>
      <div className='home-sec-child '>
        <div className='new-div'>
          <div className="faqcontainer-row">
            <div className="col-md-12 col-sm-12">
              <div className="section-heading"><span>Frequently Asked Questions Hosting</span>
              </div>
              <div className="section-subheading"><span>
                Answers to Your Frequently Asked Questions about Hosting - Empowering Your Online Presence</span>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="accordion faq pt-5">
                {faqData.map((faq, index) => (
                  <div className="panel-wrap" key={index}>
                    <div className="panel-title" onClick={() => togglePanel(index)}>
                      <span>{faq.question}</span>
                      <div className="float-right">
                        {activePanel === index ? <FaMinus className="c-pink" /> : <FaPlus />}
                      </div>
                    </div>
                    {activePanel === index && (
                      <div className="panel-collapse">
                        <div className="wrapper-collapse">
                          <div className="info">
                            <div className="list">
                              <p>{faq.answer}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  );
};

export default FAQSection;



