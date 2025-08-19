import { useEffect, useRef } from "react";
import Card from "../AnimatedCard";
import Marquee from "react-fast-marquee";
import React from "react";

function StudentsFeedback() {
  const carouselRef = useRef(null);
  useEffect(() => {
    const carousel = carouselRef.current;
    let scrollAmount = 0;
    const scrollStep = () => {
      if (carousel) {
        carousel.scrollLeft += 20;
        scrollAmount += 20;
        if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
          scrollAmount = 0;
          carousel.scrollLeft = 0;
        }
      }
    };
    const interval = setInterval(scrollStep, 1);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="text-white p-6 md:p-10 text-black">
      <Marquee pauseOnHover={true} className="overflow-hidden mt-10">
        <div className="flex gap-20 ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </Marquee>
    </div>
  );
}
export default StudentsFeedback;