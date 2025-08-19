import Footer from "../Footer";
import Header from "../Header";
import StudentsFeedback from "../StudentsFeedback";
import FAQPage from "./FAQ";
import "./index.css";
import React from "react";

function About() {
  return (
    <div class="bg-white">
      <Header bgColor="rgb(8,24,35)" />
      <div className="relative h-screen min-h-[800px] bg-gradient-to-br from-[rgb(8,24,35)] to-[#0a1a2a] text-white overflow-hidden flex items-center">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-[#1e3a8a] opacity-10 blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-10 right-32 w-60 h-60 rounded-full bg-[#3b82f6] opacity-10 blur-3xl animate-float-medium"></div>
          <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-[#10b981] opacity-10 blur-3xl animate-float-fast"></div>
        </div>

        <div className="max-w-7xl w-full mx-auto py-16 px-4 sm:px-10 relative z-10">
          <div className="grid lg:grid-cols-2 justify-center items-center gap-10">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-16 h-16 border-2 border-[#3b82f6] opacity-30 rounded-lg animate-pulse-slow"></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 border-2 border-[#10b981] opacity-30 rounded-lg animate-pulse-medium"></div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight animate-float-text">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                  Advanced insights
                </span>
                <br />
                <span className="animate-float-text-delay">
                  to accelerate your growth
                </span>
                <span className="inline-block ml-2 animate-bounce">
                  {"-->"}
                </span>
              </h1>

              <p className="text-base md:text-lg leading-relaxed text-gray-300 mb-8 animate-fade-in">
                At{" "}
                <span className="font-semibold text-blue-300">
                  AZONE INSTITUTE OF TECHNOLOGY
                </span>
                , we're revolutionizing education by making quality learning
                accessible to all. We empower students to elevate their mindset
                from the ground to the sky.
              </p>

              <ul className="grid grid-cols-2 gap-4 mb-8 animate-fade-in-delay">
                {[
                  "Analytical Thinking",
                  "Mindfulness Training",
                  "Problem Solving",
                  "Career Growth",
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="flex-shrink-0 mt-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center animate-pulse">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-y-4 gap-x-8 mt-8 animate-fade-in">
                <button className="relative overflow-hidden group bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-500 hover:to-emerald-400 text-white flex items-center transition-all font-semibold rounded-lg px-6 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300">
                  <span className="relative z-10">Get started</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 fill-current ml-2 relative z-10 transform group-hover:translate-x-1 transition-transform"
                    viewBox="0 0 492.004 492.004"
                  >
                    <path d="M484.14 226.886 306.46 49.202c-5.072-5.072-11.832-7.856-19.04-7.856-7.216 0-13.972 2.788-19.044 7.856l-16.132 16.136c-5.068 5.064-7.86 11.828-7.86 19.04 0 7.208 2.792 14.2 7.86 19.264L355.9 207.526H26.58C11.732 207.526 0 219.15 0 234.002v22.812c0 14.852 11.732 27.648 26.58 27.648h330.496L252.248 388.926c-5.068 5.072-7.86 11.652-7.86 18.864 0 7.204 2.792 13.88 7.86 18.948l16.132 16.084c5.072 5.072 11.828 7.836 19.044 7.836 7.208 0 13.968-2.8 19.04-7.872l177.68-177.68c5.084-5.088 7.88-11.88 7.86-19.1.016-7.244-2.776-14.04-7.864-19.12z" />
                  </svg>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </button>
              </div>
            </div>

            <div className="max-lg:mt-12 h-full relative animate-float-image">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-emerald-400 rounded-2xl opacity-20 blur-xl"></div>
              <div className="relative h-full overflow-hidden rounded-xl border border-gray-700/50 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                  alt="Students learning at AZONE"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgb(8,24,35)]/80 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        <style jsx global>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-20px);
            }
          }
          @keyframes float-text {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-8px);
            }
          }
          @keyframes float-image {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-15px);
            }
          }
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes pulse {
            0%,
            100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
          }
          .animate-float-slow {
            animation: float 8s ease-in-out infinite;
          }
          .animate-float-medium {
            animation: float 6s ease-in-out infinite;
          }
          .animate-float-fast {
            animation: float 4s ease-in-out infinite;
          }
          .animate-float-text {
            animation: float-text 5s ease-in-out infinite;
          }
          .animate-float-text-delay {
            animation: float-text 5s ease-in-out infinite 0.5s;
          }
          .animate-float-image {
            animation: float-image 6s ease-in-out infinite;
          }
          .animate-fade-in {
            animation: fade-in 1s ease-out forwards;
          }
          .animate-fade-in-delay {
            animation: fade-in 1s ease-out 0.3s forwards;
            opacity: 0;
          }
          .animate-pulse {
            animation: pulse 2s ease-in-out infinite;
          }
          .animate-pulse-slow {
            animation: pulse 4s ease-in-out infinite;
          }
          .animate-pulse-medium {
            animation: pulse 3s ease-in-out infinite;
          }
          .animate-bounce {
            animation: bounce 2s ease-in-out infinite;
          }
          @keyframes bounce {
            0%,
            100% {
              transform: translateX(0);
            }
            50% {
              transform: translateX(5px);
            }
          }
        `}</style>
      </div>

      <div className="relative px-4 sm:px-10 py-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-blue-100 opacity-10 blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-1/3 right-1/3 w-60 h-60 rounded-full bg-indigo-100 opacity-10 blur-3xl animate-float-medium"></div>
        </div>

        <div className="max-w-7xl w-full mx-auto relative z-10">
          <div className="grid md:grid-cols-2 items-center gap-10">
            {/* Image with floating animation */}
            <div className="w-full h-full animate-float-image">
              <div className="relative overflow-hidden rounded-xl shadow-2xl border-2 border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Interview Communication"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Text content with staggered animations */}
            <div className="space-y-6">
              <h2 className="md:text-4xl text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-800 animate-text-float">
                Communication Flow Between{" "}
                <span className="animate-text-float-delay">
                  Interview Panel and Interviewee
                </span>
              </h2>

              <p className="text-lg leading-relaxed text-gray-700 animate-fade-in">
                At <span className="font-semibold text-blue-600">AZONE</span>,
                we place strong emphasis on preparing our students for effective
                communication during interviews. Our training focuses on
                building confidence, clarity, and professionalism to ensure a
                smooth communication flow between the interview panel and the
                interviewee.
              </p>

              <div className="space-y-4 animate-fade-in-delay">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                  <span className="text-gray-700">
                    Mock interviews with industry experts
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                  <span className="text-gray-700">
                    Personalized feedback sessions
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                  <span className="text-gray-700">
                    Body language and vocal training
                  </span>
                </div>
              </div>

              {/* Testimonial with floating effect */}
              <div className="mt-8 p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 animate-float-slow">
                <div className="flex items-center">
                  <div className="relative">
                    <img
                      src="./myprofileimage.jpg"
                      className="w-14 h-14 rounded-full border-2 border-white shadow-md"
                      alt="S.S.SRIVASTAVA"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-lg text-gray-800">
                      S.S.SRIVASTAVA
                    </h4>
                    <p className="text-sm text-blue-600">
                      Founder And Director
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-gray-600 italic">
                    "In the journey of success, stumbles play a very vital role,
                    and I think we should be ready to learn from stumbles."
                  </p>
                  <div className="mt-3 flex justify-end">
                    <span className="text-sm font-medium text-blue-600">
                      Thanks and Regards
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx global>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-15px);
            }
          }
          @keyframes text-float {
            0%,
            100% {
              transform: translateY(0) rotate(-1deg);
            }
            50% {
              transform: translateY(-5px) rotate(1deg);
            }
          }
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-float-slow {
            animation: float 8s ease-in-out infinite;
          }
          .animate-float-medium {
            animation: float 6s ease-in-out infinite;
          }
          .animate-float-image {
            animation: float 7s ease-in-out infinite;
          }
          .animate-text-float {
            animation: text-float 6s ease-in-out infinite;
          }
          .animate-text-float-delay {
            animation: text-float 6s ease-in-out infinite 0.3s;
          }
          .animate-fade-in {
            animation: fade-in 1s ease-out forwards;
          }
          .animate-fade-in-delay {
            animation: fade-in 1s ease-out 0.4s forwards;
            opacity: 0;
          }
        `}</style>
      </div>

      <div className="px-4 sm:px-10">
        <div className="max-w-7xl w-full mx-auto grid md:grid-cols-2 justify-center items-center gap-10">
          <div className="animate-fade-in-up">
            <h2 className="md:text-5xl text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
              100% Placement Assistance
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              During the course, we offer dedicated sessions on resume building
              and creating professional profiles on platforms like LinkedIn and
              Naukri.com. Students also participate in special events including
              group discussions, personal interviews, and mock HR interactions
              to enhance their communication skills and boost their chances of
              being shortlisted by top recruiters.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white flex items-center transition-all duration-300 font-semibold rounded-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Enroll Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 ml-3 animate-bounce-horizontal"
                viewBox="0 0 492.004 492.004"
                fill="currentColor"
              >
                <path d="M484.14 226.886 306.46 49.202c-5.072-5.072-11.832-7.856-19.04-7.856-7.216 0-13.972 2.788-19.044 7.856l-16.132 16.136c-5.068 5.064-7.86 11.828-7.86 19.04 0 7.208 2.792 14.2 7.86 19.264L355.9 207.526H26.58C11.732 207.526 0 219.15 0 234.002v22.812c0 14.852 11.732 27.648 26.58 27.648h330.496L252.248 388.926c-5.068 5.072-7.86 11.652-7.86 18.864 0 7.204 2.792 13.88 7.86 18.948l16.132 16.084c5.072 5.072 11.828 7.836 19.044 7.836 7.208 0 13.968-2.8 19.04-7.872l177.68-177.68c5.084-5.088 7.88-11.88 7.86-19.1.016-7.244-2.776-14.04-7.864-19.12z"></path>
              </svg>
            </button>
          </div>
          <div className="relative animate-float">
            <div className="absolute -inset-4 bg-blue-200 rounded-2xl opacity-30 blur-lg"></div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
              alt="Students in placement session"
              className="relative w-full h-auto rounded-xl shadow-2xl object-cover z-10"
            />
          </div>
        </div>
      </div>

      {/* <div className="px-4 sm:px-10 mt-28">
        <div className="max-w-7xl mx-auto">
          <div>
            <h2 className="md:text-4xl text-3xl font-bold">
              Check our latest article
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
            <div class="cursor-pointer rounded overflow-hidden group">
              <div>
                <span class="block text-gray-400 mb-2">10 FEB 2023</span>
                <h3 class="text-xl font-semibold group-hover:text-blue-500 transition-all">
                  A Guide to Igniting Your Imagination
                </h3>
                <div class="mt-4">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis accumsan, nunc et tempus blandit, metus mi consectetur
                    felis turpis vitae ligula.
                  </p>
                </div>
              </div>
              <hr class="my-6" />
              <div class="flex flex-wrap items-center gap-3">
                <img
                  src="https://readymadeui.com/team-1.webp"
                  class="w-9 h-9 rounded-full"
                />
                <p class="text-xs">BY JOHN DOE</p>
              </div>
            </div>
            <div class="cursor-pointer rounded overflow-hidden group">
              <div>
                <span class="block text-gray-400 mb-2">7 JUN 2023</span>
                <h3 class="text-xl font-semibold group-hover:text-blue-500 transition-all">
                  Hacks to Supercharge Your Day
                </h3>
                <div class="mt-4">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis accumsan, nunc et tempus blandit, metus mi consectetur
                    felis turpis vitae ligula.
                  </p>
                </div>
              </div>
              <hr class="my-6" />
              <div class="flex flex-wrap items-center gap-3">
                <img
                  src="https://readymadeui.com/team-2.webp"
                  class="w-9 h-9 rounded-full"
                />
                <p class="text-xs">BY MARK ADAIR</p>
              </div>
            </div>
            <div class="cursor-pointer rounded overflow-hidden group">
              <div>
                <span class="block text-gray-400 mb-2">5 OCT 2023</span>
                <h3 class="text-xl font-semibold group-hover:text-blue-500 transition-all">
                  Trends and Predictions
                </h3>
                <div class="mt-4">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis accumsan, nunc et tempus blandit, metus mi consectetur
                    felis turpis vitae ligula.
                  </p>
                </div>
              </div>
              <hr class="my-6" />
              <div class="flex flex-wrap items-center gap-3">
                <img
                  src="https://readymadeui.com/team-3.webp"
                  class="w-9 h-9 rounded-full"
                />
                <p class="text-xs">BY SIMON KONECKI</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div class="px-4 sm:px-10 ">
        <div class="max-w-7xl w-full mx-auto ">
          <div class="grid md:grid-cols-3 gap-4">
            <div class="col-span-2">
              <h2 class="md:text-4xl text-3xl font-semibold mb-6 text-blue-800 uppercase">
                What Our Happy Students Says
              </h2>
              <p>
                Our students are our top priority, and we take pride in
                supporting them at every step toward achieving their dreams. We
                invite you to be a part of their journey—come and experience the
                voices, stories, and successes of our learners as they grow with
                us at AZONE.
              </p>
            </div>
          </div>
          <StudentsFeedback />
        </div>
      </div>
      <FAQPage />
      <Footer />
    </div>
  );
}
export default About;
