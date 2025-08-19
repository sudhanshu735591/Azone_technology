import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CreativeServices = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  const float = {
    float: {
      y: [0, -20, 0],
      rotate: [0, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-900 to-indigo-950 min-h-screen p-6 sm:p-12 overflow-hidden">
      {/* Floating background elements */}
      <motion.div 
        className="absolute top-20 left-10 w-40 h-40 rounded-full bg-indigo-900 opacity-20 blur-xl"
        variants={float}
        animate="float"
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-purple-900 opacity-15 blur-xl"
        variants={float}
        animate="float"
        style={{ animationDelay: '2s' }}
      />
      <motion.div 
        className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-blue-900 opacity-15 blur-xl"
        variants={float}
        animate="float"
        style={{ animationDelay: '4s' }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Creative</span>
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Services <span className="text-blue-400">.</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mt-6 rounded-full" />
        </motion.div>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          animate={controls}
        >
          {/* Service Card 1 */}
          <motion.div 
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-700 hover:border-cyan-400/30 transition-all duration-500"
            variants={item}
            whileHover={{ y: -10 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Personalized Guidance</h3>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed">
              Tailored mentorship matching your unique strengths and career aspirations. Continuous support to build confidence and overcome challenges in real-world scenarios.
            </p>
            <div className="mt-6">
              <div className="w-full bg-slate-700 rounded-full h-1.5">
                <div className="bg-cyan-400 h-1.5 rounded-full" style={{ width: '85%' }} />
              </div>
            </div>
          </motion.div>

          {/* Service Card 2 */}
          <motion.div 
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-700 hover:border-blue-400/30 transition-all duration-500"
            variants={item}
            whileHover={{ y: -10 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Interview Preparation</h3>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed">
              Comprehensive training with mock interviews, resume optimization, and actionable feedback to help you excel in technical and behavioral interviews.
            </p>
            <div className="mt-6">
              <div className="w-full bg-slate-700 rounded-full h-1.5">
                <div className="bg-blue-400 h-1.5 rounded-full" style={{ width: '90%' }} />
              </div>
            </div>
          </motion.div>

          {/* Service Card 3 */}
          <motion.div 
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-700 hover:border-purple-400/30 transition-all duration-500"
            variants={item}
            whileHover={{ y: -10 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Skill-Based Responsibility</h3>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed">
              Customized task assignments that match your current skill level, promoting effective learning and confidence building at your own pace.
            </p>
            <div className="mt-6">
              <div className="w-full bg-slate-700 rounded-full h-1.5">
                <div className="bg-purple-400 h-1.5 rounded-full" style={{ width: '75%' }} />
              </div>
            </div>
          </motion.div>

          {/* Service Card 4 - Additional for better layout */}
          <motion.div 
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-700 hover:border-cyan-400/30 transition-all duration-500"
            variants={item}
            whileHover={{ y: -10 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Career Roadmapping</h3>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed">
              Strategic planning to help you navigate your career path with clear milestones and achievable goals tailored to your aspirations.
            </p>
            <div className="mt-6">
              <div className="w-full bg-slate-700 rounded-full h-1.5">
                <div className="bg-cyan-400 h-1.5 rounded-full" style={{ width: '80%' }} />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating CTA */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.button 
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Services
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default CreativeServices;