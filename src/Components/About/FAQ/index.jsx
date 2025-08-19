import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import React from "react";
import { useNavigate } from 'react-router-dom';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate()
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Can senior secondry (10+2) students apply?",
      answer: "No! Because there are already burden of the board exams and subject in all aspects, so we recommend to join just on or before taking admission in graduation."
    },
    {
      question: "What will be the duration of the full stack program?",
      answer: (
        <>
          <p>The duration of the course is 10 months from the starting date of the batch but it may extend as per the requirements</p>
        </>
      )
    },
    {
      question: "Will I get quick placement after completion of the course?",
      answer: "Our institute provides comprehensive placement support, guiding students through every step of the process—from professional resume building and LinkedIn profile optimization to job search strategies. Additionally, we offer referral assistance by forwarding qualified resumes to our industry network for interview opportunities. Please note that while we strive to facilitate placements, securing a job ultimately depends on individual performance and employer requirements."
    },
    {
      question: "How can I register for this program?",
      answer: (
        <>
          <p>For join our program you can simply fill up the form details in <span onClick={()=>navigate("/contact")} className='cursor-pointer text-blue-900 font-bold text-sm'>CONTACT SECTION</span> by your contact number, our team will reach out to you shortly.</p>
        </>
      )
    },
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
            className="cursor-pointer bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-medium py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            onClick={()=>navigate("/contact")}
          >
            Contact Our Support Team
          </motion.button>
        </motion.div>
      </div>
    </div> 
    
  );
}