import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import React from "react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Are there any special discounts or promotions available during the event?",
      answer: "Yes! We often provide early bird discounts for attendees who register in advance. Additionally, we offer group discounts for parties of 5 or more. Follow us on social media or subscribe to our newsletter to stay updated on the latest promotions and special offers."
    },
    {
      question: "What are the dates and locations for the product launch events?",
      answer: (
        <>
          <p>Our product launch tour includes the following dates and locations:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>New York - June 15-17, 2023</li>
            <li>San Francisco - June 22-24, 2023</li>
            <li>Chicago - July 6-8, 2023</li>
            <li>Miami - July 13-15, 2023</li>
          </ul>
          <p className="mt-3">
            Additional dates may be added based on demand. Check our website regularly for updates.
          </p>
        </>
      )
    },
    {
      question: "Can I bring a guest with me to the product launch event?",
      answer: "Yes, you can bring one guest per registration. When registering, please indicate that you'll be bringing a guest and provide their name. All guests must be registered in advance - we cannot accommodate walk-in guests due to venue capacity and security requirements."
    },
    {
      question: "How can I register for the event?",
      answer: (
        <>
          <p>Registration is simple and can be completed online:</p>
          <ol className="list-decimal pl-5 mt-2 space-y-1">
            <li>Visit our events page and select the event you wish to attend</li>
            <li>Click the 'Register Now' button</li>
            <li>Complete the registration form with your details</li>
            <li>Choose any additional options (guest, workshops, etc.)</li>
            <li>Submit payment if required</li>
            <li>You'll receive a confirmation email with your ticket</li>
          </ol>
        </>
      )
    },
    {
      question: "Is there parking available at the venue?",
      answer: (
        <>
          <p>Parking availability varies by venue:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>New York:</strong> Limited paid parking available nearby (not included in ticket)</li>
            <li><strong>San Francisco:</strong> Complimentary valet parking for attendees</li>
            <li><strong>Chicago:</strong> Discounted parking at adjacent garage with validation</li>
            <li><strong>Miami:</strong> Free on-site parking available</li>
          </ul>
          <p className="mt-3">
            We recommend checking the specific venue details in your confirmation email
            or using rideshare services when possible.
          </p>
        </>
      )
    },
    {
      question: "How can I contact the event organizers?",
      answer: (
        <>
          <p>Our event team is happy to help with any questions or special requests:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Email:</strong> events@yourcompany.com</li>
            <li><strong>Phone:</strong> (555) 123-4567 (9am-5pm EST, Mon-Fri)</li>
            <li><strong>On-site:</strong> Visit the registration desk at any event</li>
          </ul>
          <p className="mt-3">
            For fastest response, please include your registration number in any communications.
          </p>
        </>
      )
    }
  ];

  return (
    <div className="min-h-screen py-28 px-4 sm:px-10">
      <div className="max-w-7xl mx-auto space-y-6">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-10 text-center"
        >
          <motion.h2 
            initial={{ opacity: 0, y: -30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="md:text-5xl text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-800"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl mx-auto text-gray-600 text-lg"
          >
            Explore common questions and find answers to help you make the
            most out of our services. If you don't see your question here,
            feel free to contact us for assistance.
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="divide-y divide-gray-200/70 border border-gray-200/70 rounded-xl shadow-lg bg-white/90 backdrop-blur-sm"
        >
          {faqItems.map((item, index) => (
            <div key={index} className="group">
              <motion.button
                type="button"
                onClick={() => toggleItem(index)}
                className="w-full text-lg text-left font-medium py-6 px-6 flex items-center justify-between hover:bg-blue-50/50 transition-colors duration-200"
                aria-expanded={openIndex === index}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <span className="mr-4 text-blue-900/90">
                  {item.question}
                </span>
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 fill-current text-blue-600 shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </motion.svg>
              </motion.button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-700">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center py-10"
        >
          <h3 className="text-xl font-medium text-gray-800 mb-4">Still have questions?</h3>
          <motion.button 
            className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-medium py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)" }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Our Support Team
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}