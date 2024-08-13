import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Card = (props) => {
  let review = props.review;
  return (
    <div className="flex flex-col relative ">
      <div className="absolute sm:top-[-5rem] top-[-5rem] z-[10] mx-auto">
        <img
          className="aspect-square rounded-full sm:w-[140px] sm:h-[140px] w-[130px] h-[130px] z-25"
          src={review.image}
          alt="students_image"
        ></img>
        <div className="sm:w-[140px] sm:h-[140px] w-[130px] h-[130px] bg-violet-500 rounded-full absolute top-[-6px] z-[-1] left-[10px]"></div>
      </div>
      <div className="text-center mt-7">
        <p className="tracking-wider capitalize font-bold sm:text-2xl text-xl">
          {review.name}
        </p>
        <p className="text-violet-300 uppercase sm:text-sm text-[13px]">
          {review.job}
        </p>
      </div>
      <div className="text-violet-400 mx-auto mt-5 sm:text-xl text-[17px]">
        <FaQuoteLeft />
      </div>
      <div className="text-center mt-4 text-slate-500 sm:text-[22px] text-[15px]">
        {review.text}
      </div>
      <div className="text-violet-400 mx-auto mt-5 sm:text-xl text-[17px]">
        <FaQuoteRight />
      </div>
    </div>
  );
};

export default Card;
