import MotionCard from "../motioncard";
import React from "react";

function Experience_and_Doubt() {
  return (
    <>
      <div className="text-blue-400 bg-white flex flex-col ">
        <div className="border-l-4 border-#575571 w-[90%] m-auto pl-10 flex flex-col gap-6 md:gap-10">
          <h1 className="text-3xl md:text-5xl text-start uppercase font-montserrat mt-10 text-black">
            Azone Stands for :-
          </h1>
          <div className="text-lg md:text-xl leading-relaxed">
            <p className="mb-4 text-start text-black">
              <span className="text-blue-600">A</span> – Accessible Tech Education <span className="text-blue-600"></span>, affordable for
              all) <br/><span className="text-blue-600">Z</span> – Zero to Hero (From beginner to job-ready, at minimal
              cost) <br/><span className="text-blue-600">O</span> – Outcome-Focused (Theory + hands-on training for
              real-world impact) <br/><span className="text-blue-600">N</span> – Next-Gen Skills (AI, Coding, Cybersecurity,
              Cloud, and more) <br/><span className="text-blue-600">E</span> – Empowerment for All (Breaking barriers
              through education)
            </p>
          </div>
        </div>
        <div className="flex  w-[90%] m-auto gap-6 md:gap-10 p-6 md:p-10 flex-wrap lg:flex-nowrap justify-center">
          <MotionCard
            heading="4+ Years of Experience"
            text="Our approach is deeply rooted in programming in computer science. We believe that success in the same is not about guesswork"
            img="https://www.theaquarious.com/assets/icons/why-chosse-ico1.svg"
          />
          <MotionCard
            text="Get 100% placement assistance with no extra charges ensuring smooth performance and students satisfaction."
            heading="Placement Assistance"
            img="https://www.theaquarious.com/assets/icons/why-chosse-ico2.svg"
          />
          <MotionCard
            text="Missed the concept? Don’t worry, we take responsibility and ensure you get compensated—your satisfaction is our priority!"
            heading="Real-time doubt clearing"
            img="https://www.theaquarious.com/assets/icons/why-chosse-ico6.svg"
          />
        </div>
      </div>
    </>
  );
}
export default Experience_and_Doubt;
