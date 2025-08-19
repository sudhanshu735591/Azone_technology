import React, { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CoursePolicy = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [expandedModules, setExpandedModules] = useState({});

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const toggleModule = (moduleId) => {
    setExpandedModules((prev) => ({
      ...prev,
      [moduleId]: !prev[moduleId],
    }));
  };

  const modules = [
    {
      id: 1,
      name: "Basics of Programming",
      duration: 3,
      cumulative: 3,
      topics: [
        "Intro to Computer Science",
        "Programming - Syntax",
        "Input, Output",
        "Variables & Operators",
        "Control Structures",
        "Loops",
        "Functions",
      ],
    },
    {
      id: 2,
      name: "Linear DSA 1",
      duration: 5,
      cumulative: 8,
      topics: [
        "Time and Space Complexity",
        "Arrays",
        "ArrayList",
        "Strings",
        "Recursion",
        "Searching",
        "Sorting",
      ],
    },
    {
      id: 3,
      name: "Linear DSA 2",
      duration: 6,
      cumulative: 14,
      topics: [
        "General Maths",
        "Primes",
        "Modulo Arithmetics",
        "Bit Manipulation",
        "Object Oriented Programming",
        "Linked List",
        "Hashing",
        "Stack",
        "Queue",
        "Prefix Array",
        "Greedy Algo",
      ],
    },
    {
      id: 4,
      name: "Fundamentals of Web Development",
      duration: 8,
      cumulative: 22,
      topics: ["HTML", "CSS", "Javascript (es6) (Besics + Advance)"],
    },
    {
      id: 5,
      name: "Frontend Library",
      duration: 5,
      cumulative: 27,
      topics: ["React", "Redux"],
    },
    {
      id: 6,
      name: "Backend",
      duration: 8,
      cumulative: 35,
      topics: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "Authentication",
        "Database Integration",
        "Web Sockets",
      ],
    },
    {
      id: 7,
      name: "Non Linear DSA 1",
      duration: 6,
      cumulative: 41,
      topics: [
        "Trees - Binary Trees",
        "BST",
        "Tree Traversals",
        "Heaps",
        "Priority Queues",
        "Trie",
      ],
    },
    {
      id: 8,
      name: "Non Linear DSA 2",
      duration: 5,
      cumulative: 46,
      topics: [
        "Graphs - Representation",
        "Graph Traversals",
        "Shortest Path",
        "Minimum Spanning Tree",
        "Topological Sort",
        "Union Find",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const expandVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 p-1 rounded-lg mb-6">
            <div className="bg-slate-900 px-4 py-2 rounded-md">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-bold text-sm uppercase tracking-wider">
                AZONE INSTITUTE OF TECHNOLOGY
              </span>
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Learning Journey
            </span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Indian_flag_animation.gif"
              alt="Indian Flag"
              className="w-12 h-8 ml-2 inline-block"
            />
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            We provide the best resources and support throughout your
            certification program.
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="bg-slate-800 bg-opacity-50 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-slate-700"
        >
          {/* Card Header */}
          <motion.div
            variants={itemVariants}
            className="p-8 bg-gradient-to-r from-blue-900 to-slate-800 border-b border-slate-700"
          >
            <div className="flex items-center">
              <div className="p-3 bg-cyan-500 bg-opacity-20 rounded-lg mr-4">
                <svg
                  className="w-8 h-8 text-cyan-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Course Completion Policy
                </h2>
                <p className="text-blue-200 mt-1">
                  Requirements for certification/degree eligibility
                </p>
              </div>
            </div>
          </motion.div>

          {/* Modules Table */}
          <div className="p-8">
            <motion.h3
              variants={itemVariants}
              className="text-xl font-semibold text-white mb-6 flex items-center"
            >
              <span className="w-4 h-4 bg-cyan-500 rounded-full mr-3"></span>
              Program Modules
            </motion.h3>

            <div className="overflow-x-auto">
              <motion.table
                variants={itemVariants}
                className="min-w-full divide-y divide-slate-700"
              >
                <thead>
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-cyan-400 uppercase tracking-wider">
                      #
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-cyan-400 uppercase tracking-wider">
                      Module Name
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-cyan-400 uppercase tracking-wider">
                      Duration (Weeks)
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-cyan-400 uppercase tracking-wider">
                      Cumulative (Weeks)
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-cyan-400 uppercase tracking-wider">
                      Topics
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  {modules.map((module) => (
                    <React.Fragment key={module.id}>
                      <motion.tr
                        variants={itemVariants}
                        whileHover={{
                          scale: 1.02,
                          backgroundColor: "rgba(8, 51, 68, 0.3)",
                          transition: { duration: 0.2 },
                        }}
                        className="group hover:bg-slate-700 hover:bg-opacity-30 transition-all duration-300 cursor-pointer"
                        onClick={() => toggleModule(module.id)}
                      >
                        <td className="px-6 py-5 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 bg-slate-700 rounded-full flex items-center justify-center group-hover:bg-cyan-500 transition-colors duration-300">
                              <span className="text-white font-medium">
                                {module.id}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-5 whitespace-nowrap">
                          <div className="flex items-center">
                            <motion.div
                              animate={{
                                rotate: expandedModules[module.id] ? 90 : 0,
                              }}
                              transition={{ duration: 0.2 }}
                              className="mr-2"
                            >
                              <svg
                                className="w-5 h-5 text-cyan-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </motion.div>
                            <div className="text-lg font-medium text-white">
                              {module.name}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-5 whitespace-nowrap">
                          <div className="flex items-center">
                            <span className="text-cyan-400 font-medium mr-3">
                              {module.duration}
                            </span>
                            <div className="w-32 bg-slate-700 rounded-full h-2.5">
                              <div
                                className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2.5 rounded-full"
                                style={{
                                  width: `${(module.duration / 8) * 100}%`,
                                }}
                              ></div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-5 whitespace-nowrap text-cyan-400 font-medium">
                          {module.cumulative}
                        </td>
                        <td className="px-6 py-5 whitespace-nowrap">
                          <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                            {expandedModules[module.id] ? "Hide" : "Show"}{" "}
                            Topics
                          </span>
                        </td>
                      </motion.tr>

                      <AnimatePresence>
                        {expandedModules[module.id] && (
                          <motion.tr
                            variants={expandVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="bg-slate-800"
                          >
                            <td colSpan="5" className="px-6 py-4">
                              <div className="ml-12 pl-4 border-l-2 border-cyan-500">
                                <table className="w-full">
                                  <thead>
                                    <tr>
                                      <th className="px-4 py-2 text-left text-sm font-medium text-cyan-400">
                                        Topics Covered
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {module.topics.map((topic, index) => (
                                      <tr
                                        key={index}
                                        className={
                                          index % 2 === 0
                                            ? "bg-slate-700 bg-opacity-30"
                                            : ""
                                        }
                                      >
                                        <td className="px-4 py-3 text-white">
                                          <div className="flex items-center">
                                            <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                                            {topic}
                                          </div>
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </td>
                          </motion.tr>
                        )}
                      </AnimatePresence>
                    </React.Fragment>
                  ))}
                </tbody>
              </motion.table>
            </div>
          </div>

          {/* Footer */}
          <motion.div
            variants={itemVariants}
            className="px-8 py-6 bg-slate-800 bg-opacity-50 border-t border-slate-700 rounded-b-2xl"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="flex items-center mb-4 sm:mb-0">
                <svg
                  className="w-6 h-6 text-cyan-400 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-blue-200 text-sm">
                  * Completion of all modules required for certification
                </span>
              </div>
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center">
                Start Your Journey
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-400 rounded-full filter blur-3xl opacity-30"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{
            duration: 3,
            delay: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl opacity-20"
        />
      </div>
    </div>
  );
};

export default CoursePolicy;
