import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Courses from "./courses";

const Growth = () => {
  // Floating text animation data
  const floatingTexts = [
    { text: "Learn", top: "20%", left: "10%", delay: 0 },
    { text: "Build", top: "30%", left: "80%", delay: 0.5 },
    { text: "Grow", top: "70%", left: "15%", delay: 1 },
    { text: "Code", top: "60%", left: "75%", delay: 1.5 },
  ];

  // Course data

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        {/* Floating text background */}
        <div className="absolute inset-0 overflow-hidden">
          {floatingTexts.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: [0, 0.5, 0],
                y: [20, 0, -20],
                x: [0, Math.random() * 40 - 20, 0],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                delay: item.delay,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute text-6xl font-bold text-indigo-200 pointer-events-none"
              style={{ top: item.top, left: item.left }}
            >
              {item.text}
            </motion.div>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center relative z-10">
            {/* Animated background elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ duration: 1.5 }}
              className="absolute -top-20 -left-20 w-64 h-64 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
            />

            {/* Main heading with gradient text */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6"
            >
              <span className="block text-gray-900">Shape Your</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
                Tech Career
              </span>
            </motion.h1>

            {/* Subheading with beautiful typography */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed"
            >
              Join our{" "}
              <span className="font-semibold text-indigo-600">platform</span> as
              a student to learn cutting-edge technologies or as a mentor to
              share your expertise and{" "}
              <span className="font-semibold text-purple-600">guide</span> the
              next generation.
            </motion.p>

            {/* Enhanced buttons with floating animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row justify-center gap-6"
            >
              <motion.a
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                href="#student"
                className="relative px-10 py-4 border border-transparent text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <span className="relative z-10">Enroll as Student</span>
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </motion.a>

              <motion.a
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                href="#mentor"
                className="relative px-10 py-4 border-2 border-indigo-600 text-lg font-semibold rounded-xl text-indigo-600 bg-white hover:bg-indigo-50 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <span className="relative z-10">Apply as Mentor</span>
                <span className="absolute inset-0 bg-indigo-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </motion.a>
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16 flex justify-center space-x-8"
            >
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className="w-3 h-3 bg-indigo-300 rounded-full opacity-70"
                  style={{ animation: `pulse 2s infinite ${item * 0.2}s` }}
                />
              ))}
            </motion.div>
          </div>

          {/* Add this to your global CSS for the pulse animation */}
          <style jsx>{`
            @keyframes pulse {
              0%,
              100% {
                transform: scale(1);
                opacity: 0.7;
              }
              50% {
                transform: scale(1.3);
                opacity: 1;
              }
            }
          `}</style>
        </div>
      </section>

      {/* Courses Section */}
      <Courses />

      {/* Student Enrollment Section */}
      <section
        id="student"
        className="py-10 relative overflow-hidden"
      >
        {/* Animated bubbles background */}
        <div className="absolute inset-0 overflow-hidden z-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-blue-200 opacity-[0.15]"
              style={{
                width: `${Math.random() * 40 + 10}px`,
                height: `${Math.random() * 40 + 10}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -150 - Math.random() * 150],
                x: [0, (Math.random() - 0.5) * 30],
                opacity: [0.2, 0],
              }}
              transition={{
                duration: Math.random() * 15 + 15,
                repeat: Infinity,
                repeatType: "loop",
                delay: Math.random() * 10,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="mb-2 flex items-center">
                  <div className="w-4 h-4 bg-blue-600 rounded-full mr-2"></div>
                  <span className="text-blue-600 font-semibold">
                    FOR STUDENTS
                  </span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
                  Launch Your <span className="text-blue-600">Tech Career</span>{" "}
                  Today
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Join our immersive programs designed to transform beginners
                  into job-ready professionals in months, not years. Learn from
                  industry experts and build a portfolio that gets you hired.
                </p>

                <div className="flex flex-wrap gap-4">
                  <motion.a
                    href="#"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
                  >
                    Apply Now
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </motion.a>

                  <motion.a
                    href="#"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-3.5 bg-white text-gray-800 border border-gray-200 hover:border-gray-300 font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Explore Programs
                  </motion.a>
                </div>

                <div className="mt-10 flex items-center space-x-6">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((item) => (
                      <img
                        key={item}
                        className="w-10 h-10 rounded-full border-2 border-white"
                        src={`https://randomuser.me/api/portraits/${
                          item % 2 === 0 ? "women" : "men"
                        }/${item + 20}.jpg`}
                        alt="Student"
                      />
                    ))}
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">
                      Join{" "}
                      <span className="font-semibold text-blue-600">
                        5,000+
                      </span>{" "}
                      successful graduates
                    </p>
                    <div className="flex items-center mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-4 h-4 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                      <span className="text-xs text-gray-500 ml-1">
                        4.9/5 (1,200 reviews)
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="mt-16 lg:mt-0 lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-2xl border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    ></path>
                  </svg>
                  What You'll Get
                </h3>

                <ul className="space-y-5">
                  {[
                    {
                      icon: "👨‍💻",
                      text: "Hands-on projects with real-world applications",
                    },
                    {
                      icon: "🧠",
                      text: "Personalized mentorship from industry experts",
                    },
                    {
                      icon: "💼",
                      text: "Career support and job placement assistance",
                    },
                    {
                      icon: "⏱️",
                      text: "Flexible learning options for your schedule",
                    },
                    {
                      icon: "📈",
                      text: "Cutting-edge curriculum updated regularly",
                    },
                    {
                      icon: "🌐",
                      text: "Global community and networking opportunities",
                    },
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start p-3 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-2xl mr-4 mt-0.5">{item.icon}</span>
                      <span className="text-gray-700 font-medium">
                        {item.text}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-blue-600 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span className="text-sm text-gray-600">
                      Next cohort starts:{" "}
                      <span className="font-semibold">June 15, 2024</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentor Application Section */}
      <section id="mentor" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-6 order-last lg:order-first">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-200"
              >
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Mentor Benefits
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-indigo-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-600">
                      Competitive compensation and flexible hours
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-indigo-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-600">
                      Opportunity to shape the next generation of tech talent
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-indigo-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-600">
                      Access to our global network of professionals
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-indigo-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-600">
                      Professional development opportunities
                    </p>
                  </li>
                </ul>
              </motion.div>
            </div>
            <div className="lg:col-span-6 order-first lg:order-last">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Become a Mentor
                </h2>
                <p className="mt-3 text-lg text-gray-500">
                  Share your knowledge and experience with aspiring tech
                  professionals. Help shape the future of technology by guiding
                  the next generation of developers and data scientists.
                </p>
                <div className="mt-8">
                  <div className="inline-flex rounded-md shadow">
                    <a
                      href="#"
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
          >
            <span className="block">Ready to dive in?</span>
            <span className="block text-indigo-200">
              Start your journey today.
            </span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8 flex lg:mt-0 lg:flex-shrink-0"
          >
            <div className="inline-flex rounded-md shadow">
              <a
                href="#student"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
              >
                Enroll as Student
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#mentor"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 bg-opacity-60 hover:bg-opacity-70"
              >
                Apply as Mentor
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Growth;
