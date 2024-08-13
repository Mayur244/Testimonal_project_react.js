import React, { useState } from "react";
import Card from "./Card";

import { FiChevronLeft, FiChevronRight} from "react-icons/fi";

const Testimonials = (props) => {
  let reviews = props.reviews; 
  const [index, setIndex] = useState(0);
  
  function leftShiftHandler(){
    if (index-1 < 0) {
        setIndex(reviews.length - 1);
    }
    else{
        setIndex(index - 1);
    }

  }

  function rightShiftHandler(){
    if (index + 1 >= reviews.length) {
        setIndex(0);
    }
    else{
        setIndex(index + 1);
    }

  }

  function surpriseHandler(){
    let randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);

  }

  return (
    <div className="w-[85vw] md:w-[45rem] bg-white flex flex-col justify-center items-center sm:mt-8 mt-12 p-10 transition-all duration-700 hover:shadow-2xl rounded-md">
      <Card review={reviews[index]} />

      <div className="flex justify-center sm:text-3xl text-xl mt-6 gap-3 font-bold ">
        <button onClick={leftShiftHandler} className="cursor-ppointer text-violet-400 hover:text-violet-500">
          {" "}
          <FiChevronLeft />{" "}
        </button>
        <button onClick={rightShiftHandler} className="cursor-pointer text-violet-400 hover:text-violet-500">
          {" "}
          <FiChevronRight />{" "}
        </button>
      </div>
      <div className="mt-4">
        <button onClick={surpriseHandler} className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white sm:text-lg text-[15px]">
          Surprise Me
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
