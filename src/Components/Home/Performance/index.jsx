import { WrenchScrewdriverIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

function Performance() {
  const services = [
    {
      step: "GRADUATE SCHOLARS",
      imageUrl:
        "https://images.unsplash.com/photo-1632733711679-529326f6db12?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Our 100% practical program emphasizes logic-building abilities, covering front-end and back-end development, along with in-depth training in database management, ensuring students gain real-world coding experience and a strong foundation in software development.",
      backtext:
        "As the IT industry continues to grow rapidly, we are offering specialized courses for graduates, including B.Tech, M.Tech, BCA, and MCA students, who are eager to enhance their technical skills. This program is especially designed for passionate learners who face financial constraints. In support of inclusive education, we are proud to offer this course specially for all the minorities",
    },
    {
      step: "10+2 / POLYTECHNIC (CS/IT)",
      imageUrl:
        "https://images.unsplash.com/photo-1687462970787-61d953508926?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "We offer courses in Java, Python, C++, and C, aligned with CBSE/ICSE curriculum or ideal for anyone seeking to build strong programming fundamentals and gain practical knowledge in specific languages or concepts.",
      backtext:
        "We aim to empower senior secondary (10+2) students or diploma from underprivileged backgrounds by providing essential skill development before they pursue professional courses, whether under the CBSE or ICSE board. This specially designed program is completely free for students from minority communities with a family income below ₹2 LPA, ensuring that financial constraints do not hinder their educational growth and future opportunities.",
    },
  ];

  // State to track flipped cards
  const [flippedCards, setFlippedCards] = useState([]);

  // Toggle flip state
  const toggleFlip = (index) => {
    if (flippedCards.includes(index)) {
      setFlippedCards(flippedCards.filter(i => i !== index));
    } else {
      setFlippedCards([...flippedCards, index]);
    }
  };

  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { rotateY: 0 },
    visible: { rotateY: 0 },
    flipped: { rotateY: 180 },
  };

  // Floating text animation variants
  const floatingVariants = {
    float: {
      y: ["0%", "-10%", "0%"],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
    floatFast: {
      y: ["0%", "-15%", "0%"],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
    floatSlow: {
      y: ["0%", "-5%", "0%"],
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="font-[sans-serif] text-blue-600   relative overflow-hidden">
      {/* Floating decorative elements */}
      <motion.div 
        className="absolute top-20 left-10 text-6xl opacity-10 text-blue-400"
        variants={floatingVariants}
        animate="floatSlow"
      >
        &lt;/&gt;
      </motion.div>
      <motion.div 
        className="absolute bottom-20 right-10 text-5xl opacity-10 text-yellow-500"
        variants={floatingVariants}
        animate="float"
      >
        { }
      </motion.div>
      <motion.div 
        className="absolute top-1/3 right-1/4 text-4xl opacity-10 text-blue-300"
        variants={floatingVariants}
        animate="floatFast"
      >
        { }
      </motion.div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="max-w-7xl mx-auto relative z-10"
      >
        <motion.div variants={itemVariants} className="max-w-4xl mx-auto text-center mb-12">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase mb-4 text-blue-900"
            variants={floatingVariants}
            animate="floatSlow"
          >
            Our <span className="text-yellow-600">Curriculum</span> Pathways
          </motion.h2>
          <div className="w-24 h-1.5 bg-yellow-500 mx-auto mb-6 rounded-full"></div>
          <motion.p 
            className="text-lg sm:text-xl md:text-xl text-gray-700 leading-relaxed"
            variants={floatingVariants}
            animate="float"
          >
            Experience a symphony of knowledge as we curate tech-learning
            masterpieces designed to ignite your curiosity. Our courses,
            meticulously crafted with passion and precision, promise to transform
            your educational journey into a dynamic and empowering adventure at
            AZONE.
          </motion.p>
        </motion.div>

        <motion.section variants={itemVariants} className="mx-auto pb-12 sm:pb-16 md:pb-20">
          <div className="mx-auto px-2 sm:px-4 lg:px-6 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
              {services.map((service, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="group min-h-[20rem] sm:min-h-[24rem] md:min-h-[26rem] w-full perspective-1000"
                >
                  <motion.div 
                    className="relative h-full w-full rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 [transform-style:preserve-3d] cursor-pointer"
                    variants={cardVariants}
                    initial="hidden"
                    animate={flippedCards.includes(index) ? "flipped" : "visible"}
                    onHoverStart={() => toggleFlip(index)}
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Front Side */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-blue-100 to-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center text-center [backface-visibility:hidden] border-2 border-blue-100"
                      style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)),`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundBlendMode: 'overlay'
                      }}
                    >
                      <div className="absolute top-4 right-4 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        {index === 0 ? "For Graduates" : "For 10+2 Students"}
                      </div>
                      <motion.h3 
                        className="text-2xl sm:text-3xl md:text-3xl font-bold text-blue-900 mb-4 sm:mb-6"
                        variants={floatingVariants}
                        animate="floatSlow"
                      >
                        {service.step}
                      </motion.h3>
                      <motion.p 
                        className="text-base sm:text-lg md:text-2xl text-gray-700 leading-relaxed mb-6"
                        variants={floatingVariants}
                        animate="float"
                      >
                        {service.description}
                      </motion.p>
                      <motion.div 
                        className="absolute bottom-6 text-sm text-blue-600 font-medium flex items-center"
                        variants={floatingVariants}
                        animate="floatFast"
                      >
                        <span>Learn more</span>
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.div>
                    </motion.div>

                    {/* Back Side */}
                    <motion.div className="absolute inset-0 h-full w-full rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-800 to-blue-600 p-6 sm:p-8 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center border-2 border-blue-700">
                      <div className="overflow-y-auto max-h-full">
                        <motion.h3 
                          className="text-xl sm:text-2xl md:text-2xl font-bold mb-4 sm:mb-6"
                          variants={floatingVariants}
                          animate="floatSlow"
                        >
                          {service.step}
                        </motion.h3>
                        <motion.p 
                          className="text-sm sm:text-base md:text-base text-blue-100 text-left mb-6 leading-relaxed"
                          variants={floatingVariants}
                          animate="float"
                        >
                          {service.backtext}
                        </motion.p>
                        <motion.a 
                          href="/contact" 
                          className="inline-block mt-2 sm:mt-4"
                          variants={floatingVariants}
                          animate="floatFast"
                        >
                          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-3 px-6 sm:py-3 sm:px-8 rounded-full inline-flex items-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/30">
                            <span className="text-sm sm:text-base font-semibold cursor-pointer">Enroll Now</span>
                            <WrenchScrewdriverIcon className="h-5 w-5 ml-2" />
                          </button>
                        </motion.a>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}

export default Performance;