import React, { useRef } from "react";
import "./index.css";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

const MotionCard = (props) => {
  const {heading , img , text} = props;
  return (
    <div className="grid w-full place-content-center  text-slate-900">
      <TiltCard heading={heading} img= {img} text={text}/>
    </div>
  );
};
const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;
const TiltCard = (props) => {
  const {heading, img, text} = props;
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x);
  const ySpring = useSpring(y);
  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;
  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;
    x.set(rX);
    y.set(rY);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="h-96 rounded-xl bg-[#5386FF] flex items-center justify-center"
    >
      <div
        style={{
          transform: "translateZ(200px)",
          transformStyle: "preserve-3d",
          padding: "20px", 
        }}
        className="bg-white rounded-xl p-5 shadow-lg max-w-md"
      >
        <img
          className="bg-blue-700 m-auto rounded-full"
          src={img}
          alt=""
        />
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center lg:text-2xl font-bold mt-5 m-auto"
        >
          {heading}
        </p>
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="lg:text-2xl mt-5 text-center"
        >
          {text}
        </p>
      </div>
    </motion.div>
  );
};
export default MotionCard;