import { useState, useEffect } from "react";
import React from "react";

function Footer() {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    // Trigger animation when component mounts
    setVisible(true);
  }, []);

  const socialLinks = [
    {
      name: "Facebook",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7v-7h-2v-3h2V8.5A3.5 3.5 0 0 1 15.5 5H18v3h-2a1 1 0 0 0-1 1v2h3v3h-3v7h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"/>
        </svg>
      )
    },
    {
      name: "LinkedIn",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="currentColor" d="M21 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5zm-2.5 8.2v5.3h-2.79v-4.93a1.4 1.4 0 0 0-1.4-1.4c-.77 0-1.39.63-1.39 1.4v4.93h-2.79v-8.37h2.79v1.11c.48-.78 1.47-1.3 2.32-1.3 1.8 0 3.26 1.46 3.26 3.26zM6.88 8.56a1.686 1.686 0 0 0 0-3.37 1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 1.57v8.37H5.5v-8.37h2.77z"/>
        </svg>
      )
    },
    {
      name: "Twitter",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="currentColor" d="M22.92 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.83 4.5 17.72 4 16.46 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.9 20.29 6.16 21 8.58 21c7.88 0 12.21-6.54 12.21-12.21 0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
        </svg>
      )
    },
    {
      name: "Instagram",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 2.16c3.2 0 3.58 0 4.85.07a6.3 6.3 0 0 1 2.12.4 3.8 3.8 0 0 1 1.4.92 3.8 3.8 0 0 1 .92 1.4 6.3 6.3 0 0 1 .4 2.12c.06 1.27.07 1.64.07 4.85s0 3.58-.07 4.85a6.3 6.3 0 0 1-.4 2.12 3.8 3.8 0 0 1-.92 1.4 3.8 3.8 0 0 1-1.4.92 6.3 6.3 0 0 1-2.12.4c-1.27.06-1.64.07-4.85.07s-3.58 0-4.85-.07a6.3 6.3 0 0 1-2.12-.4 3.8 3.8 0 0 1-1.4-.92 3.8 3.8 0 0 1-.92-1.4 6.3 6.3 0 0 1-.4-2.12c-.06-1.27-.07-1.64-.07-4.85s0-3.58.07-4.85a6.3 6.3 0 0 1 .4-2.12 3.8 3.8 0 0 1 .92-1.4 3.8 3.8 0 0 1 1.4-.92 6.3 6.3 0 0 1 2.12-.4c1.27-.06 1.64-.07 4.85-.07zm0-2.16c-3.27 0-3.68.01-4.96.07a8.4 8.4 0 0 0-2.81.6 6 6 0 0 0-2.17 1.45 6 6 0 0 0-1.45 2.17 8.4 8.4 0 0 0-.6 2.81C.01 8.32 0 8.73 0 12s.01 3.68.07 4.96a8.4 8.4 0 0 0 .6 2.81 6 6 0 0 0 1.45 2.17 6 6 0 0 0 2.17 1.45 8.4 8.4 0 0 0 2.81.6c1.28.06 1.69.07 4.96.07s3.68-.01 4.96-.07a8.4 8.4 0 0 0 2.81-.6 6 6 0 0 0 2.17-1.45 6 6 0 0 0 1.45-2.17 8.4 8.4 0 0 0 .6-2.81c.06-1.28.07-1.69.07-4.96s-.01-3.68-.07-4.96a8.4 8.4 0 0 0-.6-2.81 6 6 0 0 0-1.45-2.17 6 6 0 0 0-2.17-1.45 8.4 8.4 0 0 0-2.81-.6C15.68.01 15.27 0 12 0zm0 5.83a6.17 6.17 0 1 0 0 12.34 6.17 6.17 0 0 0 0-12.34zm0 10.18a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-11.5a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/>
        </svg>
      )
    }
  ];

  const usefulLinks = [
    { name: "Featured", url: "#" },
    { name: "New Arrivals", url: "#" },
    { name: "Best Sellers", url: "#" },
    { name: "Special Offers", url: "#" }
  ];

  const informationLinks = [
    { name: "About Us", url: "#" },
    { name: "Terms & Conditions", url: "#" },
    { name: "Privacy Policy", url: "#" },
    { name: "Contact Us", url: "#" },
    { name: "FAQ", url: "#" }
  ];

  return (
    <footer className={`bg-gradient-to-b from-gray-900 to-gray-800 pt-16 pb-8 px-4 sm:px-6 lg:px-8 font-sans transition-all duration-1000 ease-in-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
      <div className="max-w-7xl mx-auto">
        {/* Floating elements decoration */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-10 animate-float-slow"></div>
          <div className="absolute -bottom-40 right-10 w-48 h-48 bg-purple-500 rounded-full filter blur-3xl opacity-10 animate-float-slower"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
          {/* Logo and description */}
          <div className="space-y-6">
            
            <p className="text-gray-400 text-sm leading-relaxed">
              Creating beautiful, functional interfaces that users love. Join us on our journey to design excellence.
            </p>
            
            {/* Social links with animation */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={social.name}
                  href="#" 
                  className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg delay-${index * 100}`}
                  aria-label={social.name}
                >
                  <span className="w-6 h-6">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 relative inline-block group">
              Useful Links
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </h4>
            <ul className="space-y-3">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.url} 
                    className="text-gray-400 hover:text-white text-sm flex items-center transition-all duration-300 group"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 relative inline-block group">
              Information
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </h4>
            <ul className="space-y-3">
              {informationLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.url} 
                    className="text-gray-400 hover:text-white text-sm flex items-center transition-all duration-300 group"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 relative inline-block group">
              Newsletter
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="space-y-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none text-white transition-all duration-300"
                required
              />
              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow hover:shadow-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} ReadymadeUI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-slower {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-5deg); }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: float-slower 10s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}

export default Footer;