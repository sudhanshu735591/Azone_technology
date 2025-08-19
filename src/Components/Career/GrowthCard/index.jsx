import React from "react";

const GrowthCard = (props) => {
  const { heading, description, img, textColor, backGroundColor } = props;
  return (
    <div
      style={{ backgroundColor: backGroundColor, color: textColor }}
      className="p-8 h-auto cursor-pointer rounded-md w-full shadow-2xl mx-auto"
    >
      <h2 className="text-2xl font-bold mb-4">{heading}</h2>
      <div className="flex  flex-col items-center gap-6">
        <p className="text-lg flex-1">{description}</p>
        <div className=" w-full flex justify-center items-center flex-shrink-0">
          <img
            src={img}
            alt="Customer Illustration"
            className="w-full  h-40 object-fit"
          />
        </div>
      </div>
    </div>
  );
};

export default GrowthCard;
