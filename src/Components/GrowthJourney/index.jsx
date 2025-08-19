import { useNavigate } from "react-router-dom";
function GrowthJourney(){
    const text = "Covering Your Growth Journey 💫";
    return(
        <div className="text-blue-800 flex flex-col  gap-10 ">
      <div className="flex flex-col gap-5 w-full md:w-[75vw] mx-auto text-start p-5">
        <h1 className="overflow-hidden text-xl lg:text-5xl font-semibold text-start font-montserrat uppercase">
          {text.match(/./gu)?.map((char, index) => (
            <span
              className="animate-text-reveal inline-block"
              key={`${char}-${index}`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          )) || null}
        </h1>
        <div className="w-full text-black">
          <p className="text-lg md:text-2xl">
            Empowering your growth through structured learning, practical coding, mentorship, and placement support to build a successful tech career.
          </p>
        </div>
      </div>
      <div className="flex relative lg:pl-40 w-auto mx-0 md:flex-row flex-wrap gap-5 md:gap-40 justify-start">
        <div className="text-blue-800 top-10 text-4xl md:text-5xl text-start px-5 md:px-10 uppercase">
          Analytical skills
        </div>
        <div className="flex flex-col text-start gap-5 md:gap-8 px-5 md:px-10 text-black">
          <ul className="space-y-4 md:space-y-6">
            <li className="text-lg md:text-2xl">Programming Logic concept</li>
            <li className="text-lg md:text-2xl">Web devlopement</li>
            <li className="text-lg md:text-2xl">Data Structure and Algorithm</li>
            <li className="text-lg md:text-2xl">Database Management</li>
            <li className="text-lg md:text-2xl">Github Repository</li>
          </ul>
        </div>
      </div>
      <div className="flex relative lg:pl-40 w-auto mx-0 md:flex-row flex-wrap gap-5 md:gap-40 justify-start">
        <div className="text-blue-800 top-10 text-4xl md:text-[46px] text-start px-5 md:px-10 uppercase">
          Strategy Growth
        </div>
        <div className="flex flex-col text-start gap-4 md:gap-8 px-5 md:px-10 text-black">
          <ul className="space-y-4 md:space-y-6">
            <li className="text-lg md:text-2xl">Problem solving abilities</li>
            <li className="text-lg md:text-2xl">Out of the box thinking</li>
            <li className="text-lg md:text-2xl">Ways to search and solve critical problems</li>
            <li className="text-lg md:text-2xl">Portfolio website</li>
            <li className="text-lg md:text-2xl">LinkedIn Outreach & HR Approach</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col lg:pl-40 w-auto mx-0 md:flex-row flex-wrap gap-10 md:gap-40 justify-start">
        <div className="text-blue-800 top-10 text-4xl md:text-[37px] text-start px-5 uppercase">
          Web Hosting concept
        </div>
        <div className="flex flex-col text-start gap-5 md:gap-8 px-5 md:px-20 pb-20 text-black">
          <ul className="space-y-4 md:space-y-6">
            <li className="text-lg md:text-2xl">Server hosting</li>
            <li className="text-lg md:text-2xl">Concept of hostinger</li>
            <li className="text-lg md:text-2xl">Vercel</li>
          </ul>
          <button
            onClick={() => navigate("/form")}
            className="bg-blue-800 pt-2 pb-3 md:p-10 rounded-xl md:rounded-full text-2xl text-white"
          >
            Let's connect
          </button>
        </div>
      </div>
    </div>
    )
}
export default GrowthJourney