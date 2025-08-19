import React, { useEffect, useState } from "react";

const WebDevelopmentServices = () => {
  const [showContent, setShowContent] = useState(false);

  // Reset animation state whenever the component mounts
  useEffect(() => {
    setShowContent(false);
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const data = [
    {
      heading: "Personalized Guidance",
      img: "https://i.gifer.com/origin/71/711557abfeed55bc0ebc5185168147c6.gif",
      description: "Tailored learning paths designed for your unique skills and career goals with one-on-one mentorship."
    },
    {
      heading: "Interview Preparation",
      img: "https://digitalscholar.in/wp-content/uploads/2022/06/Inbound-Marketing-Manager.gif",
      description: "Comprehensive mock interviews, technical drills, and resume building to land your dream job."
    },
    {
      heading: "Skill-Based Responsibility",
      img: "https://cdn.dribbble.com/users/1519660/screenshots/9809330/media/6cac76b4cb5fdd9085989daecdfa1318.gif",
      description: "Real-world projects matched to your current abilities to ensure progressive learning."
    },
  ];

  // Floating text data
  const floatingTexts = [
    { text: "Success", top: "10%", left: "15%", delay: 0 },
    { text: "Growth", top: "20%", left: "80%", delay: 0.5 },
    { text: "Learn", top: "70%", left: "10%", delay: 1 },
    { text: "Achieve", top: "80%", left: "85%", delay: 1.5 },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background video with overlay */}
      <div className="absolute inset-0 z-0">
        <video
          src="https://www.netguru.com/hubfs/_N19%20Modules/Homepage/Videos/ng-com-header-background.mp4"
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-opacity-60"></div>
      </div>

      {/* Floating text elements */}
      {floatingTexts.map((item, index) => (
        <div
          key={index}
          className={`absolute z-5 text-white text-opacity-20 font-bold text-2xl md:text-4xl lg:text-5xl 
            ${showContent ? 'animate-float' : 'opacity-0'}`}
          style={{
            top: item.top,
            left: item.left,
            animationDelay: `${item.delay}s`,
            animationDuration: '15s',
            animationIterationCount: 'infinite',
            animationTimingFunction: 'ease-in-out'
          }}
        >
          {item.text}
        </div>
      ))}

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-24">
        {/* Animated header */}
        <div className={`transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white uppercase mb-4">
            Why <span className="text-yellow-400 animate-pulse">Choose Us</span>
          </h1>
          <div className="w-32 h-1 bg-yellow-400 mx-auto mb-8 rounded-full"></div>
        </div>

        {/* Floating description text */}
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '300ms' }}>
          <div className="relative">
            <p className="text-white text-lg md:text-xl text-center leading-relaxed animate-float-slow">
              Our primary objective is not merely to ensure course completion, but to empower each individual with responsibilities aligned with their skill level. We assess every student thoroughly before enrollment and provide personalized guidance throughout their learning journey.
            </p>
          </div>
        </div>

        {/* Services grid with staggered animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {data.map((val, index) => (
            <div 
              key={val.heading}
              className={`transition-all duration-1000 transform ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${500 + (index * 200)}ms` }}
            >
              <div className="bg-opacity-10 backdrop-blur-md rounded-xl p-6 h-full flex flex-col hover:bg-opacity-20 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20 hover:-translate-y-2 border border-white border-opacity-20">
                <h2 className="text-xl md:text-2xl font-bold text-yellow-300 mb-4">
                  {val.heading}
                </h2>
                <div className="relative overflow-hidden rounded-lg mb-4 aspect-video">
                  <img 
                    src={val.img} 
                    alt={val.heading} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <p className="text-white text-base md:text-lg flex-grow">
                  {val.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Animated CTA */}
        <div className={`mt-16 text-center transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '1100ms' }}>
          <button className="px-8 py-3 bg-yellow-400 text-gray-900 font-bold rounded-full hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-yellow-400/50 transform hover:scale-105 animate-bounce">
            Start Your Journey Today
          </button>
        </div>
      </div>

      {/* Add the floating animations to your CSS (or in a global CSS file) */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-20px) translateX(10px) rotate(5deg);
            opacity: 0.3;
          }
          100% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0.2;
          }
        }
        
        @keyframes float-slow {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-5px) translateX(2px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
        
        .animate-float {
          animation-name: float;
          animation-duration: 15s;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }
        
        .animate-float-slow {
          animation-name: float-slow;
          animation-duration: 8s;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default WebDevelopmentServices;